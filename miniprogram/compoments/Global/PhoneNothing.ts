import {PicCDNUtils} from "../../api/net/PicCDNUtils";

Component({
    properties: {
        text: {
            type: String, value: "亲，您还没有相关订单哦~"
        }
    }, data: {
        src: PicCDNUtils.getPicUrl("pic_nothing.png")
    }, methods: {}
});