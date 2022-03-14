// import {SelectToolBarEntity} from "../Explore/PhoneSelectToolBar.vue";

import {ImgPath} from "../../api/ImgPath";
import {request} from "../../api/Api";

Component({
    properties: {
        // TODO order类型需要确认
        order: Object
    }, data: {
        id: "phone_order_item_img",
        src: ""
    }, methods: {
        async goToPay() {
            const res = await request.wxNativeCodeUrl({orderId: this.properties.order.id})
            if (res) {
                wx.navigateTo({
                    url: `/pages/PhonePayPage?id=${this.properties.order.art.id}&m=${this.properties.order.art.mintPrice}&order=${this.properties.order.id}`,
                })
            } else {
                wx.showToast({
                    title: '获取支付 codeUrl 失败！', icon: 'error', duration: 1500
                })
            }
        }
    }, ready() {
        this.setData({
            'src': ImgPath.getMedia(this.properties.order.art.id)
        })
    }
});