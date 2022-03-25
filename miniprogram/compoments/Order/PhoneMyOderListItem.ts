import {PublicUtils} from "../../api/utils/PublicUtils";
import {request} from "../../api/Api";
import {ImgPathUtils} from "../../api/utils/ImgPathUtils";
import {Order} from "../../api/net/gql/graphql";
import {Utils} from "../../api/utils/Utils";
import {WXUtils} from "../../api/utils/WXUtils";

Component({
    data: {
        getColor: "width: 15.6vw;",
        id: "phone_order_item_img",
        orderStatus: "",
        name: "",
        src: "",
        date: ""
    },
    methods: {
        async goToPay() {
            if (this.properties.order.tradeType === "WX_NATIVE") {
                const wxNativeCodeUrl = await request.wxNativeCodeUrl({orderId: this.properties.order.id.toString()})
                if (wxNativeCodeUrl) {
                    wx.navigateTo({
                        url: `/pages/PhonePayPage?id=${this.properties.order.art.id}&m=${this.properties.order.art.mintPrice}&order=${this.properties.order.id}&type="WX_NATIVE"`
                    })
                } else {
                }
            } else {
                if (PublicUtils.isWeChat()) {
                    await wx.showLoading({title: ""})
                    const wxJsapiPayParams = await request.wxJsapiPayParams2({prepayId: this.properties.order.tradeReturn.prepay_id.toString()})
                    const pay = await WXUtils.pay(wxJsapiPayParams);
                    await wx.hideLoading()
                    if (pay.success) {
                        wx.showToast({
                            title: '支付完成！',
                            icon: 'error',
                            duration: 2000
                        })
                    } else {
                        await wx.showModal({
                            title: '提示', content: `支付失败：${JSON.stringify(pay.res)}`, showCancel: false
                        })
                    }
                } else {
                    wx.showToast({
                        title: '该订单支持微信支付！',
                        icon: 'error',
                        duration: 2000
                    })
                }
            }
        }, goToInfo() {
            wx.navigateTo({
                url: `/pages/PhoneInfoPage?id=${this.properties.order.arts[0].id}&sid=${this.properties.order.store.id}`
            })
        }, getOrderStatus(tradeState: string) {
            switch (tradeState) {
                case "WAIT_FOR_PAYMENT_NOT_PAY":
                    let getColor_2996075e: any = this.data.getColor;
                    getColor_2996075e = "width: 15.6vw; color: #F99D1A";
                    this.setData({
                        'getColor': getColor_2996075e
                    });
                    return "未支付";
                case "WAIT_FOR_PAYMENT_USER_PAYING":
                    let getColor_fb249e71: any = this.data.getColor;
                    getColor_fb249e71 = "width: 15.6vw; color: #F99D1A";
                    this.setData({
                        'getColor': getColor_fb249e71
                    });
                    return "支付中";
                case "WAIT_FOR_PAYMENT_PAY_ERROR":
                    let getColor_88f6d49c: any = this.data.getColor;
                    getColor_88f6d49c = "width: 15.6vw; color: #FF4B36";
                    this.setData({
                        'getColor': getColor_88f6d49c
                    });
                    return "支付失败";
                case "WAIT_FOR_TRANSACTION_NONE":
                    let getColor_b9335954: any = this.data.getColor;
                    getColor_b9335954 = "width: 15.6vw; color: #2081E2";
                    this.setData({
                        'getColor': getColor_b9335954
                    });
                    return "等待上链";
                case "WAIT_FOR_TRANSACTION_PENDING":
                    let getColor_c57888e8: any = this.data.getColor;
                    getColor_c57888e8 = "width: 15.6vw; color: #2081E2";
                    this.setData({
                        'getColor': getColor_c57888e8
                    });
                    return "上链中";
                case "WAIT_FOR_TRANSACTION_FAILED":
                    let getColor_58fc78ec: any = this.data.getColor;
                    getColor_58fc78ec = "width: 15.6vw; color: #FF4B36";
                    this.setData({
                        'getColor': getColor_58fc78ec
                    });
                    return "上链失败";
                case "SUCCESS":
                    let getColor_9b26cfd6: any = this.data.getColor;
                    getColor_9b26cfd6 = "width: 15.6vw; color: #11CD69";
                    this.setData({
                        'getColor': getColor_9b26cfd6
                    });
                    return "成功";
                case "CLOSED":
                    let getColor_b93202f5: any = this.data.getColor;
                    getColor_b93202f5 = "width: 133px; color: #646464;";
                    this.setData({
                        'getColor': getColor_b93202f5
                    });
                    return "关闭";
                case "REFUND_PROCESSING":
                    let getColor_2f617461: any = this.data.getColor;
                    getColor_2f617461 = "width: 15.6vw; color: #00A3FB";
                    this.setData({
                        'getColor': getColor_2f617461
                    });
                    return "退款处理中";
                case "REFUND_SUCCESS":
                    let getColor_23564f4f: any = this.data.getColor;
                    getColor_23564f4f = "width: 15.6vw; color: #00A3FB";
                    this.setData({
                        'getColor': getColor_23564f4f
                    });
                    return "退款成功";
                case "REFUND_CLOSED":
                    let getColor_0a690e5c: any = this.data.getColor;
                    getColor_0a690e5c = "width: 15.6vw; color: #646464;";
                    this.setData({
                        'getColor': getColor_0a690e5c
                    });
                    return "退款关闭";
                case "REFUND_ABNORMAL":
                    let getColor_ad01aacc: any = this.data.getColor;
                    getColor_ad01aacc = "width: 15.6vw; color: #FF4B36";
                    this.setData({
                        'getColor': getColor_ad01aacc
                    });
                    return "退款异常";
                case "UNKNOWN":
                    let getColor_0400ee74: any = this.data.getColor;
                    getColor_0400ee74 = "width: 15.6vw; color: #FF4B36";
                    this.setData({
                        'getColor': getColor_0400ee74
                    });
                    return "未知错误";
                default:
                    let getColor_15cab551: any = this.data.getColor;
                    getColor_15cab551 = "width: 15.6vw; color: #646464";
                    this.setData({
                        'getColor': getColor_15cab551
                    });
                    return "状态";
            }
        }
    }, properties: {order: Object}, ready() {
        let id_a4f5b896: any = this.data.id;
        id_a4f5b896 = `phone_order_item_img${PublicUtils.generateUUID()}`;
        this.setData({
            'id': id_a4f5b896
        });
    }, observers: {
        'order': function (data: Order) {
            this.setData({
                orderStatus: this.getOrderStatus(data.state)
            })
            if (!data.store.isBlind) {
                this.setData({
                    name: data.arts[0].name
                })
            } else {
                this.setData({
                    name: data.arts[0].stores[0].name + " 盲盒"
                })
            }
            this.setData({
                'src': ImgPathUtils.getMedia(data.arts[0].id)
            })
            this.setData({
                'date': Utils.formatDate(new Date(data.createdAt), "yyyy-MM-dd HH:mm:ss")
            })
        }
    }
});