import gql from "graphql-tag";

export default {

  // 注册
  signup: gql`
    mutation ($username: String!, $password: String!) {
      signup(input: { username: $username, password: $password })
    }
  `,

  // 登陆
  login: gql`
    mutation ($username: String!, $userpass: String!) {
      login(username: $username, userpass: $userpass) {
        id
        token
      }
    }
  `,

  // 设置用户禁用状态
  userUpdateBanned: gql`
    mutation ($userId: String!, $banned: Boolean!) {
      userUpdateBanned(userId: $userId, banned: $banned)
    }
  `,

  // 更新用户类型
  userUpdateRole: gql`
    mutation ($userId: String!, $newRole: String!) {
      userUpdateRole(userId: $userId, newRole: $newRole)
    }
  `,

  // 排行榜
  artLadder: gql`
    query ($limit: Int!) {
      artLadder (limit: $limit) {
        id
        name
        
      }
    }
  `,

  // 首页推荐信息
  top: gql`
    query {
      top {
        topArt {
          id
          name
          description
          stores {
            id
            name
          }
        }
        topStores {
        	id
        	name
        	description
        }
      }
    }
  `,

  // 用户信息
  user: gql`
    query($userId: String!) {
      user(userId: $userId) {
        id
        user {
          id
          role
          username
          signupAt
          lastLoginAt
          banned
          signupAt
          createdOnChain
        }
        userExt {
          address
          nickname
          intro
          email
        }
      }
    }
  `,

  // 获取 codeUrl
  wxNativeCodeUrl: gql`
    query ($orderId: ID!) {
      wxNativeCodeUrl(orderId: $orderId) {
        status
        tradeReturn
      }
    }
  `,

  // 用户列表
  users: gql`
    query ($pageIndex: Int!, $pageSize: Int!) {
      users(pageIndex: $pageIndex, pageSize: $pageSize) {
        list {
          id
          role
          username
          signupAt
          lastLoginAt
          banned
          signupAt
          createdOnChain

        }
        total
        totalPages
      }
    }
  `,

  // 账户升级为商户
  userUpgradeToTenant: gql`
    mutation ($userId: String!) {
      userUpgradeToTenant(userId: $userId)
  }
  `,

  // 获取项目类别
  categories: gql`
    query {
      categories {
        id
        name
        order
      }
    }
  `,

  // 作品属性相关统计
  artStat: gql`
    query ($storeId: ID!){
      artStat(storeId: $storeId)
    }
  `,

  // 店铺统计
  storeStat: gql`
    query($storeId: ID!) {
      storeStat(storeId: $storeId) {
        items
        owners
        soldTotal
        soldAmount
      }
    }
  `,

  // 铸造
  mint: gql` 
    mutation ($artId: String!, $storeId: ID!, $tradeType: String!, $openId: ID!) {
      mint(artId: $artId, storeId: $storeId, tradeType: $tradeType, openId: $openId) {
        orderId
        price
        needPay
        tradeReturn
        tradeType
      }
    }
  `,

  // 用户是否收藏了作品
  favExists: gql`
    query ($userId: Int!, $artId: String!) {
      favExists (userId: $userId, artId: $artId)
    }
  `,

  // 初始化首页设置
  configUpdate: gql`
    mutation ($topArtId: String, $topStoreIds: [String!]!) {
      configUpdate(topArtId: $topArtId, topStoreIds: $topStoreIds)
    }
  `,

  // 收藏或取消收藏作品
  favoriteToggle: gql`
    mutation ($artId: String!) {
      favoriteToggle(artId: $artId)
    }
  `,

  // 获取项目列表
  projects: gql`
    query ($key: String!, $pageIndex: Int!, $pageSize: Int!) {
      projects(key: $key, pageIndex: $pageIndex, pageSize: $pageSize) {
        list {
          id
          name
          description
          status
          createdAt
          user {
            id
            role
            username
            signupAt
            lastLoginAt
            banned
          }
        }
        total
        totalPages
      }
    }
  `,

  // 获取订单
  orders: gql`
    query ($userId: ID!, $filter: String!, $pageIndex: Int!, $pageSize: Int!) {
      orders(userId: $userId, filter: $filter, pageIndex: $pageIndex, pageSize: $pageSize) {
        list {
          id
          tradeWxId
          tradeType
          tradeAction 
          tradeReturn
          createdAt
          updatedAt
          refundWxId
          state
          store {
            name
            id
          }
          art {
            id
            name
            mintPrice
            stores {
              name
            }
          }
        }
        total
        totalPages
      }
    }
  `,

  // 获取Nft列表
  nfts: gql`
    query ($userId: ID!) {
      nfts(userId: $userId) {
        id
        index
        owner
        selling
        price
        art {
          id
          name
          favCount
          mintPrice
          maxSupply
          stores {
            id
            name
          }
        }
      }
    }
  `,

  // 获取Nft
  Nft: gql`
    query ($nftId: ID!) {
      nft(nftId: $nftId) {
        id
        name
        nftNumber
        imageUrl
        meta
        project {
          id
          name
          description
          status
          createdAt
          user {
            id
            role
            username
            signupAt
            lastLoginAt
            banned
          }
          category {
            id
            name
            order
          }
        }
      }
    }
  `,

  // 获取Favorite列表
  favorites: gql`
    query($pageIndex: Int!, $pageSize: Int!) {
      favorites(pageIndex: $pageIndex, pageSize: $pageSize){
    	  list {
      	  addedAt
      	  user {
        	  id
        	  userExt {
          	  nickname
              address
              intro
              email
        	  }
      	  }
        art {
          id
          name
          mintPrice
          maxSupply
          favCount
          supplied
          stores {
            name
            id
          }
        }
      }
      total
      totalPages
    }
  }
  `,

  // 获取 store 列表信息 ----- 获取店铺信息
  stores: gql`
    query ($owner: String, $cateId: String, $pageIndex: Int!, $pageSize: Int!) {
      stores(owner: $owner, cateId: $cateId, pageIndex: $pageIndex, pageSize: $pageSize) {
        list {
          id
          name
          description
          externalLink
          createdAt
          updatedAt
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
    }
  `,

  // 获取 store 信息 ----- 获取店铺信息
  store: gql`
    query($storeId: String!) {
        store(storeId: $storeId){
            id
            name
            description
            externalLink
            updatedAt
            isBlind
            user {
                id
                user {
                  id 
                  username
                  role
                  
                }
            }
            category {
                id
                name
                order
            }
        }
    }
  `,

  // 艺术品列表
  arts: gql`
  query($storeId: String!, $key: String!, $ascByPrice: Boolean! $pageIndex: Int!, $pageSize: Int!) {
    arts(storeId: $storeId, ascByPrice: $ascByPrice, key:$key, pageIndex: $pageIndex, pageSize: $pageSize){
      list{
        id
        name
        description
        mediaIpfs
        externalLink
        attrs
        mintPrice
        maxSupply
        supplied
        createdAt
        favCount
        stores {
          name
          user {
            user {
              username
            }
            userExt {
              address
            }
          }
        }
      }
      total
      totalPages
    }
  }`,

  // 获取单个艺术品
  art: gql`
  query ($artId: String!) {
    art(artId: $artId) {
      id
      name
      description
      mintPrice
      attrs
      maxSupply
      supplied
      favCount
      externalLink
      holdLimit
      stores {
        id
        name
        user {
          id
        }
      }
    }
  }
  `,

  // 创建店铺
  storeAdd: gql`
    mutation ($id: ID!, $cateId: ID!, $name: String!, $description: String!, $icon: Upload!, $banner: Upload!, $externalLink: String!, $holdLimit: Int!) {
      storeAdd(input: 
              {
                id: $id, 
                cateId: $cateId, 
                name: $name, 
                description: $description, 
                icon: $icon, 
                banner: $banner, 
                externalLink: $externalLink,
                holdLimit: $holdLimit
              })
  }`,

  // 赠送
  transfer: gql`
    mutation ($toUsername: String!, $nftId: String!) {
      transfer(toUsername: $toUsername, nftId: $nftId)
    }
  `,

  // 修改店铺
  storeUpdate: gql`
    mutation ($id: ID!, $cateId: ID!, $name: String!, $description: String!, $externalLink: String!, $holdLimit: Int!) {
      storeUpdate(input: 
              {
                id: $id,
                cateId: $cateId, 
                name: $name, 
                description: $description, 
                externalLink: $externalLink,
                holdLimit: $holdLimit
              })
    }
  `,

  // 创建单个 nft
  artAdd: gql`
  mutation ($storeId: ID!, $mintPrice: String!, $name: String!, $description: String!, $media: Upload!, $externalLink: String!, $attrs: String!, $maxSupply: Int!, $holdLimit: String!) {
      artAdd(input: {
              holdLimit: $holdLimit,
              storeId: $storeId,
              name: $name,
              description: $description, 
              media: $media, 
              externalLink: $externalLink,
              attrs: $attrs,
              maxSupply: $maxSupply,
              mintPrice: $mintPrice,
            })
  }`,

  // 创建单个 nft
  artUpdate: gql`
    mutation ($id: String!, $name: String!, $description: String!, $externalLink: String!, $attrs: String!) {
      artUpdate(input: 
            {
              id: $id,
              name: $name,
              description: $description, 
              externalLink: $externalLink,
              attrs: $attrs,
            })
  }`,

  // 新增分类
  categoryAdd: gql`
    mutation ($id: String!, $name: String!, $order: String!) {
      categoryAdd(input: 
            {
              id: $id,
              name: $name,
              order: $order, 
            })
  }`,

  // 更新项目类别
  categoryUpdate: gql`
    mutation ($id: String!, $name: String!, $order: String!) {
      categoryUpdate(input: 
            {
              id: $id,
              name: $name,
              order: $order, 
            })
  }`,

  // 删除项目类别 nft
  categoryRemove: gql`
    mutation ($id: String!) {
      categoryRemove(id: $id)
  }`,


  //// 更新用户密码
  userUpdatePassword: gql`
    mutation ($newPassword: String!) {
      userUpdatePassword(newPassword: $newPassword)
    }
  `,

  //// 买
  buy: gql`
    mutation ($tokenId: ID!) {
      buy(tokenId: $tokenId)
    }
  `,

  //// 买
  sellCancel: gql`
    mutation ($tokenId: ID!) {
      sellCancel(tokenId: $tokenId)
    }
  `,

  //// 卖
  sell: gql`
    mutation ($tokenId: ID!, $price: Decimal!) {
      sell(tokenId: $tokenId, price: $price)
    }
  `,

  //// setDealEnable
  setDealEnable: gql`
    mutation ($enable: Boolean!) {
      setDealEnable(enable: $enable)
    }
  `,

  //// 查询是否启用交易
  dealEnable: gql`
    query {
      dealEnable
    }
  `,

  //// 获取 contents
  contents: gql`
    query {
      contents {
        list {
          id
          key
          title
          body
        }
      }
    }
  `,

  //// 获取 content
  content: gql`
    query ($key: String!){
      content(key: $key) {
        id
        key
        title
        body
      }
    }
  `,

  //// 添加 content
  contentAdd: gql`
    mutation ($id: ID!, $key: String!, $title: String!, $body: String!) {
      contentAdd (content: {
        id: $id,
        key: $key,
        title: $title,
        body: $body
      })
    }
  `,

  //// 更新 content
  contentUpdate: gql`
    mutation ($id: ID!, $key: String!, $title: String!, $body: String!) {
      contentUpdate (content: {
        id: $id,
        key: $key,
        title: $title,
        body: $body
      })
    }
  `,

  //// 删除 content
  contentRemove: gql`
    mutation ($id: ID!) {
      contentRemove(id: $id)
    }
  `,

  //// 获取 wxOpenId
  wxJsapiOpenId: gql`
    query ($code: String!) {
      wxJsapiOpenId(code: $code)
    }
  `,

  //// 获取 微信支付 v3 参数
  wxJsapiPayParams: gql`
    query ($prepayId: String!) {
      wxJsapiPayParams(prepayId: $prepayId)
    }
  `
};
