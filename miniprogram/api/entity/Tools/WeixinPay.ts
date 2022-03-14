export class weixinPay {

    public static getHref(): string {
        return window.location.href;
    }

    public static async wxNativePay(userId: string, storeName: string, artId: string, mintPrice: string) {

        const appId = "wx5e3a862a25bf5d41";  /// AppId

        const mchid = "1523377501";          /// 商户号

        const description = "数字火星-" + storeName + "-" + artId;  /// 商品描述             

        // 时间戳_userid_商品id
        const out_trade_no = "1_" + "1" + "2";             /// 订单号

        const orderString = {
            "mchid": mchid,
            "out_trade_no": out_trade_no,
            "appid": appId,
            "description": description,
            "notify_url": "https://www.weixin.qq.com/wxpay/pay.php",
            "amount": {
                "total": 1,
                "currency": "CNY"
            }
        }

        const url = 'https://api.mch.weixin.qq.com/v3/pay/transactions/native';
        // const url = 'https://www.baidu.com';
        // 'https://api.mch.weixin.qq.com/v3/pay/transactions/native',


        // TsAjax.ajax({
        //     type: 'POST',
        //     url: 'https://api.mch.weixin.qq.com/v3/pay/transactions/native',
        //     data: JSON.stringify(dataString),
        //     dataType: 'json',
        // })

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



