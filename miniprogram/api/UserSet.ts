import {Config} from "./Config";
import {StorageUtils} from "./utils/StorageUtils";
import {Public} from "./Public";
import {UserDetail} from "./gql/graphql";

export class UserSet {

    /**
     * 设置USER
     *
     * @param userDetail
     */
    public static setUserInfo = (userDetail: UserDetail) => {
        StorageUtils.setStorage(Config.USER, userDetail);
    }

    ///
    /**
     * 获取USER 信息
     */
    public static getUserInfo = async (): Promise<UserDetail | null> => {
        return await StorageUtils.getStorage(Config.USER)
    }

    /**
     * 如果 获取 用户信息失败 就跳转登陆
     */
    public static getUserInfoIfFailedGoLogin = async (): Promise<UserDetail | null> => {
        const result = await UserSet.getUserInfo();
        if (result) {
            return result;
        }
        this.cleanUserSet();
        Public.ifPhoneAppGotoLogin();
        return null;
    }

    /**
     * 设置Token
     *
     * @param token
     */
    public static setToken = (token: string) => {
        StorageUtils.setStorage(Config.TOKEN, token);
    }

    /**
     * 获取 TOKEN 信息
     */
    public static getToken = async () => {
        return await StorageUtils.getStorage(Config.TOKEN);
    }

    /**
     * 清空 token 和 user
     */
    public static cleanUserSet = () => {
        StorageUtils.removeStorage(Config.TOKEN);
        StorageUtils.removeStorage(Config.USER);
    }
}