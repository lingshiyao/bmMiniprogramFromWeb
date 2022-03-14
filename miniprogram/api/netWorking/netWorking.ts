import fragment from './fragment';
import {getQueryData, mutationData, upload} from './gqlRequest'
import {gql} from 'graphql-request'

// 注册
/**
 * 
 * @param userName 用户名
 * @param password 密码
 * @returns 
 */
export async function signup(userName: string, password: string) {

    let val = {
        'username': `${userName}`,
        'password': `${password}`
    };

    let res = await mutationData(fragment.signup, val);

    return res;
}

// 登陆
/**
 * 
 * @param userName 用户名
 * @param password 密码
 * @returns 
 */
export async function login(userName: string, password: string) {

    let val = {
        'username': `${userName}`,
        'userpass': `${password}`
    };

    let res = await mutationData(fragment.login, val);

    return res
}

/**
 * 购买
**/
export async function buy(tokenId: string) {

    let val = {
        'tokenId': `${tokenId}`
    };

    let res = await mutationData(fragment.buy, val, true);

    return res
}

/**
 * 购买
**/
export async function sell(tokenId: string, price: number) {

    let val = {
        'tokenId': `${tokenId}`,
        'price': price
    };

    let res = await mutationData(fragment.sell, val, true);

    return res
}

/**
 * 出售取消
 **/
export async function sellCancel(tokenId: string) {

    let val = {
        'tokenId': `${tokenId}`,
    };

    let res = await mutationData(fragment.sellCancel, val, true);

    return res
}

/**
 * 设置是否启用交易
 **/
export async function setDealEnable(enable: boolean) {

    let val = {
        'enable': enable,
    };

    let res = await mutationData(fragment.setDealEnable, val, true);

    return res
}

/**
 * 设置是否启用交易
 **/
export async function dealEnable() {

    let res = await getQueryData(fragment.dealEnable, null);

    return res
}

/**
 * 铸造
 */
export async function mint(artId: string, storeId: string, tradeType: string, openId: string) {

    let val = {
        'artId': artId,
        'storeId': storeId,
        'tradeType': tradeType,
        'openId': openId
    };

    let res = await mutationData(fragment.mint, val, true);

    return res
}

// 获取首页 推荐信息
/**
 * 获取首页 推荐信息
 */
export async function top() {

    let res = await getQueryData(fragment.top);

    return res
}

// 获取店铺信息
/**
 * 
 * @param storeId 店铺id
 * @returns 
 */
export async function store(storeId: string) {

    let val = {
        'storeId': `${storeId}`
    };

    let res = await getQueryData(fragment.store, val);

    return res
}

/**
 * 获取 nft 列表
 * @param storeId    店铺ID
 * @param key        搜索关键字    
 * @param pageIndex  分页
 * @param pageSize   一页多少数据
 */
export async function arts(storeId: string | null, key: string | null, pageIndex: number, pageSize: number = 30, ascByPrice: boolean = false) {

    let val = {
        'storeId': storeId,
        'key': key,
        'pageIndex': pageIndex,
        'pageSize': pageSize,
        'ascByPrice': ascByPrice
    };

    let res = await getQueryData(fragment.arts, val);

    return res
}

/**
 * 获取 nft
 * @param artId   艺术品 id
 */
export async function art(artId: string) {

    let val = {
        'artId': artId,
    };

    let res = await getQueryData(fragment.art, val);

    return res
}

/**
 * 收藏或取消收藏作品
 * @param artId   艺术品 id
 */
export async function favoriteToggle(artId: string) {

    let val = {
        'artId': artId,
    };

    let res = await mutationData(fragment.favoriteToggle, val, true);

    return res
}

/**
 * 获取 店铺 列表
 * @param owner    所属者
 */
export async function stores(pageIndex: number, owner: string | null = null, cateId: string | null = null) {

    var val = {
        'owner': owner,
        'cateId': cateId,
        'pageIndex': pageIndex,
        'pageSize': 10000
    };

    let res = await getQueryData(fragment.stores, val);

    return res
}

/**
 * 获取收藏
 * @param pageIndex 
 * @param pageSize 
 */
export async function favorites(pageIndex: number, pageSize: number) {
    let val = {
        'pageIndex': pageIndex,
        'pageSize': pageSize
    };

    let res = await getQueryData(fragment.favorites, val, true);

    return res
}

// 获取 user 信息
/**
 * 获取 user 信息
 * @param userId 查询用户的 id
 * @returns 
 */
export async function user(userId: string) {

    let val = { 'userId': userId };

    let res = await getQueryData(fragment.user, val);

    return res;
}

// 获取 users 信息
/**
 * 获取 user 信息
 * @param pageIndex 当前页数
 * @returns 
 */
export async function users(pageIndex: number) {

    let val = {
        'pageIndex': pageIndex,
        'pageSize': 100
    };

    let res = await getQueryData(fragment.users, val, true);

    return res;
}

/**
 * 获取 user 信息
 * @param pageIndex 当前页数
 * @returns 
 */
export async function favExists(userId: string, artId: string) {

    let val = {
        'userId': Number(userId),
        'artId': artId
    };

    let res = await getQueryData(fragment.favExists, val, true, false);

    return res;
}

/**
 * 获取 nft 信息
 * @param userId 用户id
 * @returns 
 */
export async function nfts(userId: string) {

    let val = {
        'userId': userId
    };

    let res = await getQueryData(fragment.nfts, val, false);

    return res;
}

/**
 * 获取 订单 信息
 * @param pageIndex 当前页数
 * @returns 
 */
export async function orders(userId: string, filter: string, pageIndex: number, pageSize: number) {

    let val = {
        'userId': Number(userId),
        'filter': filter,
        'pageIndex': pageIndex,
        'pageSize': pageSize
    };

    let res = await getQueryData(fragment.orders, val, false);

    return res;
}

/**
 * 获取 订单 信息
 * @param pageIndex 当前页数
 * @returns 
 */
export async function artStat(storeId: string) {

    let val = {
        'storeId': storeId
    };

    let res = await getQueryData(fragment.artStat, val, false);

    return res;
}


/**
 * 获取 订单 信息
 * @param pageIndex 当前页数
 * @returns 
 */
export async function storeStat(storeId: string) {

    let val = {
        'storeId': storeId
    };

    let res = await getQueryData(fragment.storeStat, val, false);

    return res;
}

/**
 * 获取 codeUrl
 * @param pageIndex 当前页数
 * @returns 
 */
export async function wxNativeCodeUrl(orderId: string) {

    let val = {
        'orderId': orderId,
    };

    let res = await getQueryData(fragment.wxNativeCodeUrl, val, true);

    return res;
}


/**
 * 设置首页
 * @param pageIndex 当前页数
 * @returns 
 */
export async function configUpdate(topArtId: string | null, topStoreIds: Array<string>) {

    let val = {
        'topArtId': topArtId,
        'topStoreIds': topStoreIds
    };

    let res = await mutationData(fragment.configUpdate, val, true);

    return res;
}


// 账户升级为商户
/**
 * 账户升级为商户
 * @param userId 用户 id
 * @returns 
 */
export async function userUpgradeToTenant(userId: string) {

    let val = {
        'userId': userId,
    };

    let res = await mutationData(fragment.userUpgradeToTenant, val, true);

    return res;
}

/**
 * 禁用商户
 * @param userId 用户 id
 * @param banned 是否禁用
 * @returns 
 */
export async function userUpdateBanned(userId: string, banned: boolean) {

    let val = {
        'userId': userId,
        'banned': banned
    };

    let res = await mutationData(fragment.userUpdateBanned, val, true);

    return res;
}

/**
 * 赠送
 * @param userId 用户 id
 * @param nftId id
 * @returns 
 */
export async function transfer(toUsername: string, nftId: string) {

    let val = {
        'toUsername': toUsername,
        'nftId': nftId
    };

    let res = await mutationData(fragment.transfer, val, true);

    return res;
}

/**
 * 更新用户类型
 * @param newRole 是否禁用
 * @returns
 */
export async function userUpdateRole(userId: string, newRole: string) {

    let val = {
        'userId': userId,
        'newRole': newRole
    };

    let res = await mutationData(fragment.userUpdateRole, val, true);

    return res;
}

// 获取 分类 信息
export async function categories() {

    let res = await getQueryData(fragment.categories);

    return res;
}

// 获取 项目列表
/**
 * 获取 项目列表        ///// 已废弃
 * @param key       
 * @param pageIndex 
 * @returns 
 */
export async function projects(key: string, pageIndex: string) {

    let val = {
        'key': `${key}`,
        'pageIndex': pageIndex,
        'pageSize': 20
    };

    let res = await getQueryData(fragment.projects, val);

    return res;
}

// 创建店铺
/**
 * 创建店铺
 * @param cateId 分类ID
 * @param name 店铺名称
 * @param description 店铺描述
 * @param icon 店铺头像
 * @param externalLink 店铺链接
 * @returns 
 */
export async function storeAdd(cateId: string, name: string, description: string, icon: any, banner: any, externalLink: string, holdLimit: string, isBlind: boolean) {

    let val = {
        'id': '-1',
        'cateId': cateId,
        'name': name,
        'description': description,
        'icon': icon,
        'banner': banner,
        'externalLink': externalLink,
        'holdLimit': Number(holdLimit),
        'isBlind': isBlind
    };

    //  创建店铺
    const storeAdd = gql`mutation ($id: ID!, $cateId: ID!, $name: String!, $description: String!, $icon: Upload!, $banner: Upload!, $externalLink: String!, $holdLimit: Int!, $isBlind: Boolean!) {
        storeAdd(input: 
                {
                  id: $id, 
                  cateId: $cateId, 
                  name: $name, 
                  description: $description, 
                  icon: $icon, 
                  banner: $banner, 
                  externalLink: $externalLink,
                  holdLimit: $holdLimit,
                  isBlind: $isBlind
                })
    }`;
    let res = await upload(storeAdd, val);
    return res;
}

// 修改店铺
/**
 * 修改店铺
 * @param cateId 分类ID
 * @param name 店铺名称
 * @param description 店铺描述
 * @param externalLink 店铺链接
 * @returns 
 */
export async function storeUpdate(id: string, cateId: string, name: string, description: string, externalLink: string, holdLimit: string) {

    let val = {
        'id': id,
        'cateId': cateId,
        'name': name,
        'description': description,
        'externalLink': externalLink,
        'holdLimit': Number(holdLimit),
    };

    let res = await mutationData(fragment.storeUpdate, val, true);

    return res;
}

/**
 * 更新用户密码
 * @param newPassword 新密码
 * @returns 
 */
export async function userUpdatePassword(newPassword: string) {

    let val = {
        'newPassword': newPassword,
    };

    let res = await mutationData(fragment.userUpdatePassword, val, true);

    return res;
}

/**
 * 修改店铺
 * @param cateId 分类ID
 * @param icon 店铺头像
 * @returns 
 */
export async function storeUpdateIcon(id: string, icon: any) {

    let val = {
        'id': id,
        'icon': icon
    };

    let query = gql`
        mutation ($id: ID! $icon: Upload!) {
            storeUpdateIcon(input: {
              id: $id,
              icon: $icon, 
            })
    }
    `;

    let res = await upload(query, val);

    return res;
}

/**
 * 修改店铺
 * @param cateId 分类ID
 * @param banner 店铺banner
 * @returns 
 */
export async function storeUpdateBanner(id: string, banner: any) {

    let val = {
        'id': id,
        'banner': banner
    };

    let query = gql`
        mutation ($id: ID! $banner: Upload!) {
            storeUpdateBanner(input: {
              id: $id,
              banner: $banner, 
            })
    }
    `;

    let res = await upload(query, val);

    return res;
}


/**
 * 创建 单个 nft    必须要有店铺 才能创建 
 * 属性传 -1 ，这些属性不是客户端需要传递的数据
 * @param storeId 店铺 ID
 * @param name nft 名称
 * @param description nft 描述
 * @param media 资源数据
 * @param externalLink 外部链接
 * @param attrs 属性
 * @param maxSupply 最大售卖量
 * @returns 
 */
export async function artAdd(storeId: string, mintPrice: string, name: string, description: string, media: any, externalLink: string, attrs: object, maxSupply: string, holdLimit: string) {

    let val = {
        'storeId': storeId,
        'name': name,
        'description': description,
        'media': media,
        'mintPrice': mintPrice,
        'externalLink': externalLink,
        'attrs': attrs,
        'maxSupply': Number(maxSupply),
        'holdLimit': Number(holdLimit)
    };

    // 创建单个 nft
    const artAdd = gql`
        mutation ($storeId: ID!, $mintPrice: String!, $name: String!, $description: String!, $media: Upload!, $externalLink: String!, $attrs: JSON!, $maxSupply: Int!, $holdLimit: Int!) {
        artAdd(input: {
              storeId: $storeId,
              name: $name,
              description: $description, 
              media: $media, 
              externalLink: $externalLink,
              attrs: $attrs,
              maxSupply: $maxSupply,
              mintPrice: $mintPrice,
              holdLimit: $holdLimit
            })
    }`;

    let res = await upload(artAdd, val);

    return res;
}

/**
 * 修改 单个 nft  店铺 不可修改
 * @param id 店铺 nft id
 * @param name nft 名称
 * @param description nft 描述
 * @param externalLink 外部链接
 * @param attrs 属性
 * @returns 
 */
export async function artUpdate(id: string, name: string, description: string, externalLink: string, attrs: string) {
    let val = {
        'id': id,
        'name': name,
        'description': description,
        'externalLink': externalLink,
        'attrs': attrs,
    };

    let res = await mutationData(fragment.artUpdate, val, true);

    return res;
}

/**
 * 新增项目类别
 * @param id 分类 ID
 * @param name 分类名称
 * @param order 排序
 * @returns 
 */
export async function categoryAdd(id: string, name: string, order: string) {
    let val = {
        'id': id,
        'name': name,
        'order': Number(order),
    };

    let res = await mutationData(fragment.categoryAdd, val, true);

    return res;
}

/**
 * 修改项目类别
 * @param id 分类 ID
 * @param name 分类名称
 * @param order 排序
 * @returns 
 */
export async function categoryUpdate(id: string, name: string, order: string) {
    let val = {
        'id': id,
        'name': name,
        'order': Number(order),
    };

    let res = await mutationData(fragment.categoryUpdate, val, true);

    return res;
}

/**
 *  删除项目类别
 * @param id 分类 ID
 * @param name 分类名称
 * @param order 排序
 * @returns 
 */
export async function categoryRemove(id: string) {
    let val = {
        'id': id,
    };
    let res = await mutationData(fragment.categoryRemove, val, true);
    return res;
}

/**
 *  删除项目类别
 * @param id 分类 ID
 * @param name 分类名称
 * @param order 排序
 * @returns 
 */
export async function userUpdate(face: any, nickname: string, intro: string, email: string) {
    let val: any = {
        'nickname': nickname,
        'intro': intro,
        'email': email
    };

    if (face != null)
        val['face'] = face;

    // 创建单个 nft
    const userUpdate = gql`
        mutation ($face: Upload, $nickname: String!, $intro: String!, $email: String!) {
            userUpdate(face: $face, nickname: $nickname, intro: $intro, email: $email)
    }`;

    let res = await upload(userUpdate, val);

    return res;
}


//// 获取 contents
export async function contents() {
    let res = await getQueryData(fragment.contents, null, true);
    return res;
}

//// 获取 content
export async function content(key: string) {
    let val: any = {
        'key': key,
    };
    let res = await getQueryData(fragment.content, val, true);
    return res;
}


//// 添加 content
export async function contentAdd(id: string, key: string, title: string, body: string) {
    let val: any = {
        'id': id,
        'key': key,
        'title': title,
        'body': body
    };
    let res = await mutationData(fragment.contentAdd, val, true);
    return res;
}

//// 更新 content
export async function contentUpdate(id: string, key: string, title: string, body: string) {
    let val: any = {
        'id': id,
        'key': key,
        'title': title,
        'body': body
    };
    let res = await mutationData(fragment.contentUpdate, val, true);
    return res;
}

//// 删除 content
export async function contentRemove(id: string) {
    let val: any = {
        'id': id,
    };
    let res = await mutationData(fragment.contentRemove, val, true);
    return res;
}

//// 获取 wxOpenId
export async function wxJsapiOpenId(code: string) {
    let val: any = {
        'code': code,
    }
    let res = await getQueryData(fragment.wxJsapiOpenId, val, false);
    return res;
}


///// 获取 微信支付 v3 参数
export async function wxJsapiPayParams(prepayId: string) {
    let val: any = {
        'prepayId': prepayId,
    }
    let res = await getQueryData(fragment.wxJsapiPayParams, val, false);
    return res;
}


