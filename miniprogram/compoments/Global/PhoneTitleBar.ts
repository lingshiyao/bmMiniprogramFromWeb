import {PicCDNUtils} from "../../api/netWorking/PicCDNUtils";

Component({
    properties: {
        title: {
            type: String, value: "Title"
        }
    }, data: {
        backArrowUrl: PicCDNUtils.getPicUrl("btn_back.png"),
    }, methods: {
        back() {
            // TODO 不使用TITLEBAR了
            // if (window.history.length <= 1) {    /// 进入首页
            //     router.push({
            //         path: '/phone/home'
            //     })
            // } else {
            //     router.back();
            // }
            wx.navigateBack({});
        }
    }
});