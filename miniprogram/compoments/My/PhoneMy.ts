import {OrderState} from "../../api/gql/graphql";
import {PicCDNUtils} from "../../api/netWorking/PicCDNUtils";
import {UserSet} from "../../api/UserSet";
import {ImgPath} from "../../api/ImgPath";

Component({
    properties: {}, data: {
        settingUrl: PicCDNUtils.getPicUrl("btn_set.png"),
        userBGUrl: PicCDNUtils.getPicUrl("pic_user_bgn.png"),
        headerUrl: "",
        user: null,
        selected1: [true, false, false, false],
        selected2: [true, false, false, false, false],
        userName: "",
        orderFilter: OrderState.All
    }, methods: {
        gotoSetting() {
            wx.navigateTo({
                url: '../pages/PhoneSetting',
            })
        }, onSelect1(event: any) {
            const index = event.currentTarget.dataset.index;
            const selectedTmp = [false, false, false, false];
            selectedTmp[index] = true;
            this.setData({
                'selected1': selectedTmp,
                'orderFilter': this.orderFilter()
            })
        }, onSelect2(event: any) {
            const index = event.currentTarget.dataset.index;
            let selectedTmp = [false, false, false, false, false];
            selectedTmp[index] = true;
            this.setData({
                'selected2': selectedTmp,
            })
            this.setData({
                'orderFilter': this.orderFilter()
            });
        }, orderFilter(): string {
            if (this.data.selected2[0]) return OrderState.All;
            if (this.data.selected2[1]) return OrderState.WaitForConfirm;
            if (this.data.selected2[2]) return OrderState.Success;
            if (this.data.selected2[3]) return OrderState.Failed;
            return OrderState.All
        }, async init() {
            const userInfo = await UserSet.getUserInfoIfFailedGoLogin();
            if (userInfo) {
                this.setData({
                    'headerUrl': ImgPath.getUserFace(userInfo.id),
                    'userName': userInfo.user.username
                })
            }
        }
    },
    ready() {
        this.init();
    }
});