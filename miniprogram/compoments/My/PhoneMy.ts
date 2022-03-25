import {SelectBoxEntity} from "../../api/entity/Tools/SelectBoxEntity";
import {PicCDNUtils} from "../../api/net/PicCDNUtils";
import {ImgPathUtils} from "../../api/utils/ImgPathUtils";
import {UserSet} from "../../api/storage/UserSet";
import {PublicUtils} from "../../api/utils/PublicUtils";

const NULL: any = null;

Component({
    data: {
        settingUrl: PicCDNUtils.getPicUrl("btn_set.png"),
        userBGUrl: PicCDNUtils.getPicUrl("pic_user_bgn.png"),
        headerUrl: "",
        user: NULL,
        selected1: [true, false, false, false],
        filter: "",
        userName: "",
        selectBoxData: new SelectBoxEntity()
    }, methods: {
        gotoSetting() {
            wx.navigateTo({
                url: '../pages/PhoneSetting',
            })
        }, onSelect1(event: any) {
            const index = parseInt(event.currentTarget.dataset.index.toString());
            let selectedTmp = [false, false, false, false];
            selectedTmp[index] = true;
            let selected1_99dab54e: any = this.data.selected1;
            selected1_99dab54e = selectedTmp;
            this.setData({
                'selected1': selected1_99dab54e
            });
        }, onSelect2(index: number) {
            let selectedTmp = [false, false, false, false, false];
            selectedTmp[index] = true;
        }, clickCallBack(event: any) {
            const detail: any = event.detail;
            const index: number = parseInt(detail.index.toString());
            switch (index) {
                case 0:
                    let filter_ec2e808a: any = this.data.filter;
                    filter_ec2e808a = "";
                    this.setData({
                        'filter': filter_ec2e808a
                    });
                    break;
                case 1:
                    let filter_7ae6ca40: any = this.data.filter;
                    filter_7ae6ca40 = "WAIT_FOR_PAYMENT";
                    this.setData({
                        'filter': filter_7ae6ca40
                    });
                    break;
                case 2:
                    let filter_4c9a1ea9: any = this.data.filter;
                    filter_4c9a1ea9 = "WAIT_FOR_TRANSACTION";
                    this.setData({
                        'filter': filter_4c9a1ea9
                    });
                    break;
                case 3:
                    let filter_e1e8214e: any = this.data.filter;
                    filter_e1e8214e = "SUCCESS";
                    this.setData({
                        'filter': filter_e1e8214e
                    });
                    break;
                case 4:
                    let filter_8dd62ae4: any = this.data.filter;
                    filter_8dd62ae4 = "CLOSED";
                    this.setData({
                        'filter': filter_8dd62ae4
                    });
                    break;
                case 5:
                    let filter_e6bf428b: any = this.data.filter;
                    filter_e6bf428b = "REFUND";
                    this.setData({
                        'filter': filter_e6bf428b
                    });
                    break;
                default:
                    break;
            }
        }, checkImg() {
            let headerUrl_96da8c3d: any = this.data.headerUrl;
            headerUrl_96da8c3d = "";
            this.setData({
                'headerUrl': headerUrl_96da8c3d
            });
        }, async init() {
            const userInfo = await UserSet.getUserInfoIfFailedGoLogin();
            let selectBoxData_0a20b37c: any = this.data.selectBoxData;
            selectBoxData_0a20b37c.menu = ["全部", "待付款", "待确认", "已成功", "已关闭", "退款订单"];
            this.setData({
                'selectBoxData': selectBoxData_0a20b37c
            });
            if (userInfo) {
                let headerUrl_70e5435a: any = this.data.headerUrl;
                headerUrl_70e5435a = ImgPathUtils.getUserFace(userInfo.id) + "&" + PublicUtils.generateUUID();
                this.setData({
                    'headerUrl': headerUrl_70e5435a
                });
                let userName_69cadb77: any = this.data.userName;
                userName_69cadb77 = userInfo.user.username;
                this.setData({
                    'userName': userName_69cadb77
                });
            }
        }, headerLoadFail() {
            this.setData({
                headerUrl: PicCDNUtils.getPicUrl("pic_user.png")
            })
        }
    }, properties: {},

    ready() {
        this.init();
    }, observers: {}
});