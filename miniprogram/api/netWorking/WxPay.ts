

export class WxPay {

    ////  微信支付 uri
    public static uri: string = "https://open.weixin.qq.com/connect/oauth2/authorize";

    //// appid 
    public static appid: string = "wx5e3a862a25bf5d41";

    //// redirect_uri
    public static redirect_uri: string = "http://kicouas.cn/#/phone/info";

    //// response_type
    public static response_type: string = "code";

    //// scope
    public static scope: string = "snsapi_base";

    //// state
    public static state: string = "STATE";

    //// get 获取 微信 跳转 url
    public static wxAuthorization(
        artId: string,
        storeId: string,
        uri: string = this.uri,
        appid: string = this.appid,
        redirect_uri: string = this.redirect_uri,
        response_type: string = this.response_type,
        scope: string = this.scope,
        state: string = this.state,
    ) {

        const infoId = `${redirect_uri}?id=${artId}&sid=${storeId}`;
        const url = `${uri}?appid=${appid}&redirect_uri=${encodeURIComponent(infoId)}&response_type=${response_type}&scope=${scope}&state=${state}#wechat_redirect`;
        return url;
    }

    //// 获取 wx code
    public static getWxCode(wxUrl: string) {

        if (wxUrl.indexOf('code=') != -1) {
            ////// 解析code
            return this.parsingWxUrl(wxUrl);
        } else {
            ///// 不包含code
            return null;
        }
    }

    //// 解析 wxUrl 
    public static parsingWxUrl(url: string) {
        ////// 起始坐标
        const startIndex = url.indexOf('code=') + 5;
        ////// 结尾坐标
        const endIndex = url.indexOf('&state');
        return url.substring(startIndex, endIndex);
    }

    //// 唤起微信

    // public static wxConfig() {
    //     const wx =  window.wx;
    //     wx.config({
    //         debug: true,
    //         appId: this.appid,
    //         timeStamp: "",
    //         nonceStr: "",
    //         signature: "",
    //         jsApiList: ["chooseWXPay"],
    //     });
    // }
} 
