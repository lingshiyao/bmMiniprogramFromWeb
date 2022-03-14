/**
 * 通过fetch拼接表单提交的请求
 * 可以在chrome的header里面查看
 * 例子：
 *
 * ------WebKitFormBoundarydjPryJzl0SFrOlVT
 * Content-Disposition: form-data; name="operations"
 *
 * {"variables":{"storeId":"1","name":"lingshiyao","description":"111","media":null,"mintPrice":"111","externalLink":"111","attrs":"{}","maxSupply":111},"query":"mutation ($storeId: String!, $mintPrice: String!,$name: String!, $description: String!, $media: [Int!]!, $externalLink: String!, $attrs: String!, $maxSupply: Int!) {\n      artAdd(input: \n            {\n              storeId: $storeId,\n              name: $name,\n              description: $description, \n              media: $media, \n              externalLink: $externalLink,\n              attrs: $attrs,\n              maxSupply: $maxSupply,\n              mintPrice: $mintPrice,\n            })\n  }"}
 * ------WebKitFormBoundarydjPryJzl0SFrOlVT
 * Content-Disposition: form-data; name="map"
 *
 * {"0":["variables.media"]}
 * ------WebKitFormBoundarydjPryJzl0SFrOlVT
 * Content-Disposition: form-data; name="0"; filename="98F7AC75-53D9-42de-A234-3DAA3E9736E4.png"
 * Content-Type: image/png
 *
 *
 * ------WebKitFormBoundarydjPryJzl0SFrOlVT--
 *
 * 和https://github.com/jaydenseric/graphql-multipart-request-spec的一致，但是response报错
 *
 * parse: invalid number at line 1 column 2
 *
 * @param file
 */
export async function uploadFileWithFormSubmit(file: any, val: any) {
    const query = `mutation ($storeId: String!, $mintPrice: String!,$name: String!, $description: String!, $media: [Int!]!, $externalLink: String!, $attrs: String!, $maxSupply: Int!) {
      artAdd(input: 
            {
              storeId: $storeId,
              name: $name,
              description: $description, 
              media: $media, 
              externalLink: $externalLink,
              attrs: $attrs,
              maxSupply: $maxSupply,
              mintPrice: $mintPrice,
            })
    }`

    const variables = val

    let formData = new FormData();

    const operations = {
        variables: variables, query: query
    };

    const map = {
        "0": ["variables.media"]
    }

    formData.append('operations', JSON.stringify(operations));
    formData.append("map", JSON.stringify(map));
    formData.append("0", file);

    await fetch("/api", {
        method: "POST", headers: {
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Miwicm9sZSI6IlVzZXIiLCJwZXJtaXNzaW9ucyI6W10sImV4cGlyZWRfYXQiOjE2NDkwNzI2NTN9.hgNC5hRxnPKgF3sxdkQrzUCQ6ItD2KerEcxHC0nDBBM`,
            "Content-Type": "form-data"
        }, body: formData
    });
}


export async function uploadFileWithData(file: any, val: any) {
    const query = "mutation($name: String!, $file: Upload!) {testUpload(name: $name, file: $file)}"
    const variables = {
      "name": '11111',
      "file": null
    }
    const operations = {
        variables: variables, query: query
    };

    const map = {
        "0": ['variables.file']
    }

    let data = {
        "operations": operations,
        "map":map,
        "0": file
    }

    await fetch("/api", {
        method: "POST",
        // headers: {
        //     Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Miwicm9sZSI6IlVzZXIiLCJwZXJtaXNzaW9ucyI6W10sImV4cGlyZWRfYXQiOjE2NDkwNzI2NTN9.hgNC5hRxnPKgF3sxdkQrzUCQ6ItD2KerEcxHC0nDBBM`,
        // },
        headers: {
          "Content-Type": "multipart",
        },
        body: JSON.stringify(data)
    });
}

/**
 * 非表单提交的stores接口测试，能通过
 */
export async function gqlTestWithData() {
    const variables = {
        owner: "cfxtest:aaj80c7gd81w3k737n38wc53znjvxr7nwerhwpa7yc", cateId: null, pageIndex: 0, pageSize: 200
    }

    const query = `query ($owner: String, $cateId: String, $pageIndex: Int!, $pageSize: Int!) {
      stores(owner: $owner, cateId: $cateId, pageIndex: $pageIndex, pageSize: $pageSize) {
        list {
          id
          name
          description
          externalLink
          createdAt
          updatedAt
          icon
          banner
          artCount
          user {
            id
            user {
              id
              username
            }
            userExt {
              address
            }
          }
        }
      }
    }`

    const bodyData = {
        operationName: null, variables: variables, query: query
    }

    await fetch("/api", {
        method: "POST", body: JSON.stringify(bodyData)
    });
}

/**
 * 通过表单提交的stores接口测试，不能通过
 */
export async function gqlTestWithFormSubmit() {
    const variables = {
        owner: "cfxtest:aaj80c7gd81w3k737n38wc53znjvxr7nwerhwpa7yc", cateId: null, pageIndex: 0, pageSize: 200
    }

    const query = `query ($owner: String, $cateId: String, $pageIndex: Int!, $pageSize: Int!) {
      stores(owner: $owner, cateId: $cateId, pageIndex: $pageIndex, pageSize: $pageSize) {
        list {
          id
          name
          description
          externalLink
          createdAt
          updatedAt
          icon
          banner
          artCount
          user {
            id
            user {
              id
              username
            }
            userExt {
              address
            }
          }
        }
      }
    }`

    let formData = new FormData();
    const operations = {
        variables: variables, query: query
    }
    formData.append('operations', JSON.stringify(operations));
    await fetch("/api", {
        method: "POST",
        headers: {
            "Content-Type": "form-data"
        },
        body: formData
    });
}