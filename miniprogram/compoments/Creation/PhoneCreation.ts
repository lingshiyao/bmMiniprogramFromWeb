import {PicCDNUtils} from "../../api/netWorking/PicCDNUtils";

Component({
    properties: {},
    data: {
        storeUrl: PicCDNUtils.getPicUrl("pic_store.png"),
        itemUrl: PicCDNUtils.getPicUrl("pic_item.png"),
    },
    methods: {
        showTip() {
            wx.showModal({
                title: '提示',
                content: '功能建设中，敬请期待',
                showCancel: false,
                success(res) {
                    if (res.confirm) {
                    } else if (res.cancel) {
                    }
                }
            })
        }
    }
});