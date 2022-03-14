// import {PhoneLog} from "../phone/components/Global/PhoneLog";
import {WeiXinApi} from "./WeiXinApi";

export function weiXinPayInit() {
    if(!WeiXinApi.isInWeixin()) return;
    if (typeof WeixinJSBridge == "undefined") {
        // alert(`WeixinJSBridge == "undefined"`);
        // PhoneLog.log(`WeixinJSBridge == "undefined"`);
        if (document.addEventListener) {
            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
        } else if (document.attachEvent) {
            document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
        }
    } else {
        // alert(`WeixinJSBridge != "undefined"`);
        // PhoneLog.log(`WeixinJSBridge != "undefined"`);
        // alert("onBridgeReady")

        const pay = (appId, timeStamp, nonceStr, _package, signType, paySign, resFunction) => {
            WeixinJSBridge.invoke('getBrandWCPayRequest', {
                "appId": appId,     //公众号ID，由商户传入
                "timeStamp": timeStamp,         //时间戳，自1970年以来的秒数
                "nonceStr": nonceStr, //随机串
                "package": _package,
                "signType": signType,         //微信签名方式：
                "paySign": paySign //微信签名
            }, function (res) {
                resFunction(res)
                // alert(JSON.stringify(res));
                // PhoneLog.log(res);
                // if (res.err_msg == "get_brand_wcpay_request:ok") {
                    // alert(`get_brand_wcpay_request:ok`);
                    // 使用以上方式判断前端返回,微信团队郑重提示：
                    //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
                // }
            });
        }
        window.___weixinPay = pay;
    }
}