import {Apollo} from '../apolloConfig/Apollo'
import {DocumentNode} from 'graphql';
import {Config} from '../Public/Config'
import {request} from 'graphql-request'
import {Public} from "../Public/Public";

// ********** 获取信息 **********//

type ResponseObj = {
    code: string,
    data: any,
    error: any,
}

/**
 * 
 * query = gql语句
 * val = 变量
 * isToken = 是否需要token
 * detectionToken = 是否需要检测token
 * 
 **/
export async function getQueryData(query: DocumentNode, val?: any, isToken = false, detectionToken = true): Promise<{ [key: string]: any }> {

    const apollo = Apollo.init();
    var res: ResponseObj = {
        code: "200",
        data: null,
        error: null,
    };

    await apollo.client(isToken).query({
        query: query,
        fetchPolicy: "no-cache",
        variables: val,
    }).then((response: any) => {
        res.code = "0";
        res.data = response.data;
    }).catch((error: any) => {
        //// token 过期
        if (error.networkError?.statusCode === 901 || error.networkError?.statusCode === 900) {
            localStorage.removeItem(Config.TOKEN);
            localStorage.removeItem(Config.USER);
            error.networkError = "请重新登录！";
            res.code = "1"
            if (detectionToken) {
                res.code = "3";
                Public.ifPhoneAppGotoLogin();
            }
        } else {
            res.code = "1";
        }
        res.error = error;
    });

    return res
}

export async function mutationData(mutation: DocumentNode, val: any, isToken = false, detectionToken = true): Promise<{ [key: string]: any }> {

    const apollo = Apollo.init();

    var res: ResponseObj = {
        code: "200",
        data: null,
        error: null,
    };

    await apollo.client(isToken).mutate({
        mutation: mutation,

        variables: val,
    }).then((response: any) => {
        res.code = "0";
        res.data = response.data;
    }).catch((error: any) => {
        //// token 过期
        if (error.networkError?.statusCode === 901 || error.networkError?.statusCode === 900) {
            localStorage.removeItem(Config.TOKEN);
            localStorage.removeItem(Config.USER);
            error.networkError = "请重新登录！";
            if (detectionToken) {
                Public.ifPhoneAppGotoLogin();
            }
        } else {
            // alert(error);
        }
        res.code = "1";
        res.error = error;
    });
    return res
}

////// 上传图片
export async function upload(mutation: string, val: any): Promise<{ [key: string]: any }> {

    var res: ResponseObj = {
        code: "200",
        data: null,
        error: null,
    };

    var header = { "Authorization": "Bearer " + localStorage.getItem(Config.TOKEN)! };

    const r = await request("/api", mutation, val, header)
        .then((response: any) => {
            res = {
                code: "0",
                data: response,
                error: null
            }
        })
        .catch((error: any) => {
            //// token 过期
            if (error.response.status === 901 || error.response.status === 900) {
                localStorage.removeItem(Config.TOKEN);
                localStorage.removeItem(Config.USER);
                error.networkError = "请重新登录！";
                Public.ifPhoneAppGotoLogin();
            } else {
                error.networkError = error.response.errors[0].message;
            }

            res = {
                code: "1",
                data: null,
                error: error.networkError,
            }
        });
    return res
}

////// 上传图片
export async function uploadFromData(formData: FormData): Promise<{ [key: string]: any }> {

    var res: { [key: string]: string } = {};

    const request = await fetch("/api", {
        method: "POST",
        headers: {
            "Content-Type": "multipart/form-data;",
            // "Authorization": "Bearer " + localStorage.getItem(Config.TOKEN)!
        },
        body: formData
    })
        .then(response => {
            if (!response.ok) {
                res = {
                    'code': '1',
                    'error': response.statusText + " " + response.status,
                }
            }
            return res;
        })
        .then(result => {
        })
        .catch(error => {
        });
    return res
}
