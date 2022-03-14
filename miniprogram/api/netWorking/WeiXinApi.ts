import {Router} from "vue-router";
import CryptoJS from 'crypto-js';
import {Public} from "../Public/Public";
import {PhoneLog} from "../phone/components/Global/PhoneLog";

export enum SignType {
    MD5 = "MD5", HMAC_SHA256 = "HMAC-SHA256",
}

export class KV {
    public key: string = "";
    public value: string = "";
}

export enum Status {
    PAY_SUCCESS, PAY_FAIL, CANCEL_PAY, REQUEST_FAIL, WEIXIN_PAY_NOT_READY,
}

export const SERCET = "a77809d5bfad4f1e8c9d82170d80a1d8";

/**
 * 商户平台秘钥key
 */
// export const MERCHANT_PLATFORM_KEY = "mvjahx9osnpun3b58tl5tkkvio8cke17";
export const MERCHANT_PLATFORM_KEY = "fdtc7twbqnjj5eqkdfr5dce0vimjnx9x";

/**
 * 商户ID
 */
export const MCHID = "1523377501";

/**
 * AppID
 */
export const APPID = "wx5e3a862a25bf5d41";

/**
 * 商户证书序列号
 */
export const SERIALNO = "1484E814F921763A30C1380DC67CB159FFC6B6B2";

/**
 * 重定向的链接
 */
export const REDIRECT_URI = "http://kicouas.cn/#/phone/info";

/**
 * redirect的state
 */
export const STATE = "0P9o8I7u"

export interface WeiXinApiInterface {
    callBack(status: Status, res: any): void;
}

/**
 *  微信的Api列表
 */
export const weiXinApiList = ["addCard", "checkJsApi", "chooseCard", "chooseImage", "chooseWXPay", "closeWindow", "config", "consumeAndShareCard", "downloadImage", "downloadVoice", "error", "getLocalImgData", "getLocation", "getNetworkType", "hideAllNonBaseMenuItem", "hideMenuItems", "hideOptionMenu", "launchMiniProgram", "onMenuShareQQ", "onMenuShareQZone", "onMenuShareTimeline", "onMenuShareWeibo", "onSearchBeacons", "onVoicePlayEnd", "onVoiceRecordEnd", "openAddress", "openBusinessView", "openCard", "openEnterpriseChat", "openEnterpriseRedPacket", "openLocation", "openProductSpecificView", "pauseVoice", "playVoice", "previewImage", "ready", "scanQRCode", "showAllNonBaseMenuItem", "showMenuItems", "showOptionMenu", "startRecord", "startSearchBeacons", "stopRecord", "stopSearchBeacons", "stopVoice", "translateVoice", "updateAppMessageShareData", "updateTimelineShareData", "uploadImage", "uploadVoice"];

//miniProgram: {navigateBack: ƒ, navigateTo: ƒ, redirectTo: ƒ, switchTab: ƒ, reLaunch: ƒ, …}
// onMenuShareAppMessage: ƒ (n)

export type AccessToken = {
    access_token: string, expires_in: number, refresh_token: string, openid: string, scope: string
}


export class WeiXinApi {

    public static hasAppId: boolean = true;
    /**
     *  当前是否是测试状态
     */
    public static readonly IS_DEBUG: boolean = true;

    public static async getOpenId(): Promise<string | null> {
        let code = WeiXinApi.getCodeWithPath(WeiXinApi.getHref());
        // code  = "asd";
        if (code) {
            const accessToken: AccessToken | null = await WeiXinApi.requestAccessToken({code: code});
            if (accessToken) return accessToken.openid;
        }
        return null;
    }

    public static requestAccessToken({
                                         appid = APPID, secret = SERCET, code
                                     }: { appid?: string, secret?: string, code: string, }): Promise<AccessToken | null> {
        return new Promise<AccessToken | null>(async (resolve) => {
            const url = `/sns/oauth2/access_token?appid=${appid}&secret=${secret}&code=${code}&grant_type=authorization_code`
            const response = await fetch(url, {
                method: 'GET',
            })
            const res = await response.json();
            PhoneLog.log(res)
            if (res.errcode != "") {
                resolve(null);
                return;
            }

            resolve({
                access_token: res.access_token,
                expires_in: res.expires_in,
                refresh_token: res.refresh_token,
                openid: res.openid,
                scope: res.scope
            });
        })
    }
    
    public static async init(signature: string) {
        const _window: any = window;
        const wx: any = _window.wx;
        wx.config({
            debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: APPID, // 必填，公众号的唯一标识
            timestamp: WeiXinApi.getTimeStampSecond(), // 必填，生成签名的时间戳
            nonceStr: WeiXinApi.getNonceStr(), // 必填，生成签名的随机串
            signature: signature, // 必填，签名
            jsApiList: ["checkJsApi", "chooseWXPay", "updateAppMessageShareData", "updateTimelineShareData"], // 必填，需要使用的JS接口列表
            success: function (res: any) {

                // 以键值对的形式返回，可用的api值true，不可用为false
                // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}

            }, fail: function (res: any) {

           
            }, complete: function (res: any) {
              

            }
        });
    }

    public static getHref(): string {
        return window.location.href;
    }

    // public static

    // public static initWeixinJSBridge() {
    //     if (typeof WeixinJSBridge == "undefined"){
    //         if( document.addEventListener ){
    //             document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
    //         }else if (document.attachEvent){
    //             document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
    //             document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
    //         }
    //     }else{
    //         onBridgeReady();
    //     }
    // }

    public static checkJsApi(names: Array<string>): Promise<boolean> {
        return new Promise<boolean>(resolve => {
            const _window: any = window;
            const wx: any = _window.wx;
            if (!wx) resolve(false);
            wx.checkJsApi({
                jsApiList: names, success: function (res: any) {
                    PhoneLog.log("success:", res);
                    // 以键值对的形式返回，可用的api值true，不可用为false
                    // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
                    resolve(true);
                }, fail: function (res: any) {
                    PhoneLog.log("fail:", res);
                    resolve(true);
                }, complete: function (res: any) {
                    PhoneLog.log("complete:", res);
                    resolve(true);
                }
            });
        });
    }

    public static getNonceStr(): string {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < 32; i++) {
            const index = Math.floor(Math.random() * charactersLength);
            result += characters.charAt(index);
        }
        return result;
    }

    public static getNonceStrDeprecated2(): string {
        return CryptoJS.MD5(Public.generateUUID()).toString();
    }

    public static getNonceStrDeprecated(): string {
        var d = new Date().getTime();
        return 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[x]/g, function (c) {
            /**
             * random number between 0 and 16
             */
            var r = Math.random() * 16;
            PhoneLog.log("step1-r:", r);
            PhoneLog.log("step1-1 d", d);
            PhoneLog.log("step1-2 d + r:", d + r);
            r = (d + r) % 16 | 0;
            PhoneLog.log("step2-r:", r);
            d = Math.floor(d / 16);
            PhoneLog.log("step3-d:", d);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }

    public static getTimeStampSecond(): string {
        return (Math.floor(Date.now() / 1000)).toString();
    }

    public static MD5(msg: string): string {
        return CryptoJS.MD5(msg).toString();
    }

    public static getCodeWithPath(url: string): string | null {
        const anchorPart = url.split("#");
        if (anchorPart.length === 0) return null;
        const redirectUrl = anchorPart[0];
        const part = redirectUrl.split("?");
        if (part.length === 2) {
            const urlParams = new URLSearchParams(`?${part[1]}`);
            if (urlParams.get("state") != STATE) return null
            const openId = urlParams.get("code");
            if (openId == "") return null;
            return openId
        }
        return null;
    }

    /**
     * 获取openID，只有授权后的页面才能获取到openId
     * @param router
     */
    public static getOpenIdWithRouter(router: Router): string | null {
        if (WeiXinApi.IS_DEBUG) return null;
        const fullPath = router.currentRoute.value.fullPath;
        const part = fullPath.split("?");
        if (part.length === 2) {
            const urlParams = new URLSearchParams(`?${part[1]}`);
            if (urlParams.get("state") != STATE) return null
            const openId = urlParams.get("code");
            if (openId == "") return null;
            return openId
        }
        return null
    }

    /**
     * 判断WX是否加载进入了window
     */
    public static isWxInWindow(): boolean {
        const _window: any = window;
        const wx: any = _window.wx;
        if (!wx) return false;
        return true;
    }

    /**
     * 获取浏览器的UA
     */
    public static getUA(): string {
        return window.navigator.userAgent.toLowerCase();
    }

    /**
     * 是否在微信内部
     */
    public static isInWeixin(): boolean {
        const ua: string = WeiXinApi.getUA();
        return ua.includes("micromessenger")
    }

    /**
     * 获取auth授权地址
     * @param appid
     * @param redirect_uri
     * @param response_type
     * @param scope
     * @param state
     */
    public static getAuthorizePath({
                                       appid = APPID,
                                       redirect_uri = REDIRECT_URI,
                                       response_type = "code",
                                       scope = "snsapi_base",
                                       state = STATE,
                                       artId = "",
                                       storeId = ""
                                   }: {
        appid?: string, redirect_uri?: string, response_type?: string, scope?: string, state?: string, artId?: string, storeId?: string,
    }) {
        const infoUrl = `${redirect_uri}?id=${artId}&sid=${storeId}`;
        const url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&response_type=${response_type}&scope=${scope}&state=${state}&redirect_uri=${encodeURIComponent(infoUrl)}#wechat_redirect`;
        // PhoneLog.log("getAuthorizePath:", url);
        // alert(encodeURI(infoUrl));
        // alert(url);
        return url;
    }


    public static getPaySign({
                                 appId = APPID,
                                 timeStamp = WeiXinApi.getTimeStampSecond(),
                                 nonceStr = WeiXinApi.getNonceStr(),
                                 _package,
                                 signType = SignType.HMAC_SHA256,
                             }: { appId?: string | null, timeStamp?: string, nonceStr?: string, _package: string, signType?: SignType, paySign?: string | null }) {
        let paySign = "";
        const paySignMap = new Map<string, string>();

        if (appId != null) {
            paySignMap.set("appId", appId);
            PhoneLog.log("appId", appId);
        }

        paySignMap.set("timeStamp", timeStamp);
        PhoneLog.log("timeStamp", timeStamp);
        paySignMap.set("nonceStr", nonceStr);
        PhoneLog.log("nonceStr", nonceStr);
        paySignMap.set("package", _package);
        PhoneLog.log("package", _package);
        paySignMap.set("signType", signType.toString());
        PhoneLog.log("signType", signType.toString());
        const paySignString = WeiXinApi.getPaySignString(paySignMap);
        PhoneLog.log("paySignString", paySignString);
        PhoneLog.log("signType", signType.toString());
        const stringSignTemp =  `${paySignString}&key=${MERCHANT_PLATFORM_KEY}`;
        PhoneLog.log("stringSignTemp", stringSignTemp);
        switch (signType) {
            case SignType.MD5: {
                PhoneLog.log("login md5")
                paySign = WeiXinApi.MD5(stringSignTemp).toUpperCase();
                break;
            }
            default:
                PhoneLog.log("login HMAC_SHA256")
                paySign = WeiXinApi.hmacSha256(MERCHANT_PLATFORM_KEY, stringSignTemp).toUpperCase();
                break;
        }
        PhoneLog.log("paySign", paySign);
        return paySign;
    }

    public static async weixinPayV3({
                                      appId = APPID,
                                      timeStamp = WeiXinApi.getTimeStampSecond(),
                                      nonceStr = WeiXinApi.getNonceStr(),
                                      _package,
                                      signType = SignType.HMAC_SHA256,
                                      paySign = null
                                  }: {
        appId?: string, timeStamp?: string, nonceStr?: string, _package: string, signType?: SignType, paySign?: string | null
    }) {
        const _window:any = window;
        // paySign = WeiXinApi.getPaySign({
        //     appId, timeStamp, nonceStr, _package, signType,
        // })
        _window.___weixinPay(appId, timeStamp, nonceStr, _package, signType, paySign);
    }

    /**
     * 微信支付接口，未测试
     * @param wx
     * @param timestamp
     * @param nonceStr
     * @param _package
     * @param signType
     * @param paySign
     * @param weiXinApiInterface
     */
    public static async weixinPay({
                                appId = APPID,
                                timeStamp = WeiXinApi.getTimeStampSecond(),
                                nonceStr = WeiXinApi.getNonceStr(),
                                _package,
                                signType = SignType.HMAC_SHA256,
                                paySign = null
                            }: {
        appId?: string, timeStamp?: string, nonceStr?: string, _package: string, signType?: SignType, paySign?: string | null
    }, weiXinApiInterface: WeiXinApiInterface) {

        if (!WeiXinApi.isWxInWindow() || !WeiXinApi.isInWeixin()) weiXinApiInterface.callBack(Status.WEIXIN_PAY_NOT_READY, null);
        const _window: any = window;
        const wx: any = _window.wx;
        PhoneLog.log("param timeStamp in weixinPay:", timeStamp);
        if (paySign == null) {
            if (WeiXinApi.hasAppId) {
                paySign = WeiXinApi.getPaySign({
                    appId, timeStamp, nonceStr, _package, signType,
                })
            } else {
                paySign = WeiXinApi.getPaySign({
                    appId: null, timeStamp, nonceStr, _package, signType,
                })
            }
        }
        // return;
        // wx.getBrandWCPayRequest({
        let chooseWXPayParam: any = {};
        if (WeiXinApi.hasAppId) {
            chooseWXPayParam["appId"] = appId;
        }
        chooseWXPayParam["timeStamp"] = timeStamp;
        chooseWXPayParam["nonceStr"] = nonceStr;
        chooseWXPayParam["package"] = _package;
        chooseWXPayParam["signType"] = signType;
        chooseWXPayParam["paySign"] = paySign;
        chooseWXPayParam["success"] = (res: any) => {
            if (res.errMsg == "chooseWXPay:ok") {
                PhoneLog.log('weixinPay:支付成功')
                weiXinApiInterface.callBack(Status.PAY_SUCCESS, res);
            } else {
                PhoneLog.log('weixinPay:支付失败')
                weiXinApiInterface.callBack(Status.PAY_FAIL, res);
            }
        };
        chooseWXPayParam["cancel"] = (res: any) => {
            PhoneLog.log('weixinPay:取消支付')
            weiXinApiInterface.callBack(Status.CANCEL_PAY, res);
        };
        chooseWXPayParam["fail"] = (res: any) => {
            PhoneLog.log('weixinPay:接口请求失败')
            weiXinApiInterface.callBack(Status.REQUEST_FAIL, res);
        };

        /*
        let chooseWXPayParam:any = {
            // appId: appId,
            timeStamp: timeStamp,
            nonceStr: nonceStr,
            package: _package,
            signType: signType,
            paySign: paySign,
            success: function (res: any) {
                if (res.errMsg == "chooseWXPay:ok") {
                    PhoneLog.log('weixinPay:支付成功')
                    weiXinApiInterface.callBack(Status.PAY_SUCCESS, res);
                } else {
                    PhoneLog.log('weixinPay:支付失败')
                    weiXinApiInterface.callBack(Status.PAY_FAIL, res);
                }
            },
            cancel: function (res: any) {
                PhoneLog.log('weixinPay:取消支付')
                weiXinApiInterface.callBack(Status.CANCEL_PAY, res);
            },
            fail: function (res: any) {
                PhoneLog.log('weixinPay:接口请求失败')
                weiXinApiInterface.callBack(Status.REQUEST_FAIL, res);
            }
        }
         */
        wx.chooseWXPay(chooseWXPayParam);
    }

    public static hmacSha256(clientKey: string, message: string): string {
        return CryptoJS.HmacSHA256(message, clientKey).toString()
    }

    // private static escapeBase64Url(key: string): string {
    //     return key.replace(/\+/g, '-').replace(/\//g, '_');
    // }
    //
    // private static unescapeBase64Url(key: string): string {
    //     return key.replace(/-/g, '+').replace(/_/g, '/');
    // }

    private static getPaySignString(map: Map<string, string>): string {
        let result = "";
        const keys: Array<string> = Array.from(map.keys());
        PhoneLog.log("before sort:", keys);
        keys.sort();
        PhoneLog.log("after sort:", keys);
        for (let i = 0; i < keys.length; i++) {
            result += `${keys[i]}=${map.get(keys[i])}`
            if (i < keys.length - 1) {
                result += "&";
            }
        }
        return result;
    }
}