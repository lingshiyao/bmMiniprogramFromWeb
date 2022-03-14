export class WeixinPayJSAPI {

    public static mchid: string = "1523377501";

    public static appid: string = "wx5e3a862a25bf5d41";

    public static serialno: string = "1484E814F921763A30C1380DC67CB159FFC6B6B2";

    public static description: string = "这是一个非常棒的NFT";

    public static async jsapi() {

        const orderString = {
            "mchid": WeixinPayJSAPI.mchid,
            "out_trade_no": "1217752501201407033233368318",
            "appid": WeixinPayJSAPI.appid,
            "description": WeixinPayJSAPI.description,
            "notify_url": "https://weixin.qq.com/",
            "amount": {
                "total": 1,
                "currency": "CNY"
            },
            "payer": {
                "openid": "o4GgauInH_RCEdvrrNGrntXDuXXX"
            }
        }
        const url = 'https://api.mch.weixin.qq.com/v3/pay/transactions/native';
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Credentials', 'true');

        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(orderString),
        }).then(header => {
        }).then(response => {
        }).catch(err => {
        });
    }
}



