import {PicCDNUtils} from "../api/netWorking/PicCDNUtils";
import {UserSet} from "../api/UserSet";
import {UserDetail} from "../api/gql/graphql";
import {ImgPath} from "../api/ImgPath";
import {request} from "../api/Api";

const NULL: any = null;
const UserDetailNULL: UserDetail | null = null;

Page({
    data: {
        defaultUrl: PicCDNUtils.getPicUrl("pic_user.png"),
        rightArrowUrl: PicCDNUtils.getPicUrl("pic_arrow.png"),
        phoneModalInput: NULL,
        phoneModalLoading: NULL,
        phoneModalTips: NULL,
        userDetail: UserDetailNULL,
    }, // onLoad: function (options) {
    //
    // }

    async getImage(image: any) {
        // FIXME
        // let url: any = null;
        // let img: any = document.getElementById("input_img");
        // let fileObj: any = img.files[0];
        // if (window.URL != undefined) {
        //     url = window.URL.createObjectURL(fileObj);
        // } else if (window.webkitURL != undefined) {
        //     url = window.webkitURL.createObjectURL(fileObj);
        // }
        //
        // let file = await fetch(url)
        //     .then(response => response.blob())
        //     .then(res => {
        //         return new File([res], url);
        //     });
        //
        // const nickname: string = userDetail.value.userExt.nickname == undefined ? "" : userDetail.value.userExt.nickname;
        // const intro: string = userDetail.value.userExt.intro == undefined ? "" : userDetail.value.userExt.intro;
        // const email: string = userDetail.value.userExt.email == undefined ? "" : userDetail.value.userExt.email;
        // await phoneModalLoading.value.show();
        // const userUpdateResult = await userUpdate(file, nickname, intro, email);
        // await phoneModalLoading.value.hide();
        // if (userUpdateResult.code === "0") {
        // wx.showModal({
        //     title: '提示',
        //     content: '已修改成功',
        //     showCancel: false,
        //     success (res) {
        //         if (res.confirm) {
        //         } else if (res.cancel) {
        //         }
        //     }
        // })
        //     defaultUrl.value = ImgPath.getUserFace(userDetail.value.id) + "&" + Public.generateUUID();
        // }
    },

    back() {
        wx.navigateBack({});
    },

    logout() {
        UserSet.cleanUserSet();
        wx.reLaunch({
            url: '/pages/PhoneApp',
        })
    },

    async changUserInfo() {
        if (!this.data.userDetail) return;
        const userInfos: Array<string> | null = await this.data.phoneModalInput.show({
            inputPlaceholder: ["用户名", "个性签名", "Email"],
            submitContent: "确定",
            title: "修改用户信息",
            defaultValue: [this.data.userDetail.userExt.nickname, this.data.userDetail.userExt.intro, this.data.userDetail.userExt.email]
        });
        if (userInfos === null) return;
        wx.showLoading({title: ""})
        let nickname: string = userInfos[0] == null ? "" : userInfos[0];
        let intro: string = userInfos[1] == null ? "" : userInfos[1];
        let email: string = userInfos[2] == null ? "" : userInfos[2];
        const userUpdateResult = await request.userUpdate({email: email, intro: intro, nickname: nickname}, true)
        if (userUpdateResult == null) {
            wx.hideLoading({});
            wx.showModal({
                title: '错误',
                content: 'userUpdate fail',
                showCancel: false,
                success (res) {
                    if (res.confirm) {
                    } else if (res.cancel) {
                    }
                }
            })
        } else {
            const userDetail = await request.user({userId: userUpdateResult})
            UserSet.setUserInfo(userDetail);
            this.setData({
                'userDetail': userDetail
            })
            wx.hideLoading({});
            wx.showToast({
                title: '已修改成功',
                icon: 'success',
                duration: 1500
            })
        }
    },

    async changePwd() {
        const passwords: Array<string> | null = await this.data.phoneModalInput.show({
            inputPlaceholder: ["设置登录密码", "确认登录密码"], submitContent: "确定", title: "修改登录密码", defaultValue: ["", ""]
        });
        if (passwords === null) return;
        wx.showLoading({title: ""})
        const canSubmit = (passwords: Array<string>) => {
            return passwords[0] != "" && passwords[1] != "" && passwords[0] == passwords[1];
        }
        if (canSubmit(passwords)) {
            const userUpdatePasswordResult = await request.userUpdatePassword({newPassword: passwords[0]}, true);
            if (userUpdatePasswordResult == null) {
                wx.hideLoading({});
                wx.showModal({
                    title: '错误',
                    content: 'userUpdatePassword fail',
                    showCancel: false,
                    success (res) {
                        if (res.confirm) {
                        } else if (res.cancel) {
                        }
                    }
                })
            } else {
                wx.hideLoading({});
                wx.showToast({
                    title: '已修改成功',
                    icon: 'success',
                    duration: 1500
                })
            }
        } else {
            wx.hideLoading({});
            wx.showToast({
                title: '密码设置错误',
                icon: 'error',
                duration: 1500
            })
        }
    },

    async onLoad() {
        this.setData({
            'phoneModalInput': this.selectComponent("#phoneModalInput"),
            'phoneModalLoading': this.selectComponent("#phoneModalLoading")
        })
        const userDetail = await UserSet.getUserInfoIfFailedGoLogin();
        this.setData({
            'userDetail': userDetail
        })
        this.setData({
            'defaultUrl': ImgPath.getUserFace(userDetail.id)
        })
    }
});