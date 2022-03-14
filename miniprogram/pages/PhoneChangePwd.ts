import {request} from "../api/Api";

const NULL:any = null;

Page({
  data: {
    pwd: "",
    pwdConf: "",
    submitBtnStyle: "",
    modalTips: NULL,
  },
  canSubmit():boolean {
    return this.data.pwd != "" && this.data.pwdConf != "" && this.data.pwd == this.data.pwdConf;
  },
  async changePwd() {
    if (this.canSubmit()) {
      const userUpdatePasswordResult = await request.userUpdatePassword({newPassword: this.data.pwd});
      // FIXME
      //if (userUpdatePasswordResult.code == '1') {
        // const param: ModalTipParam = {btnContent: "确认", content: userUpdatePasswordResult.error.toString(), title: "错误"};
        // modalTips.value.show(param);
        // return;
      //}
      // const param: ModalTipParam = {btnContent: "确认", content: "已修改成功", title: "提示"};
      // modalTips.value.show(param);
    }
  },
  whenInput(): void {
    if (this.canSubmit()) {
      this.setData({
        'submitBtnStyle': "background: #F99D1A; color: #111111; opacity: 1;"
      })
    } else {
      this.setData({
        'submitBtnStyle': ""
      })
    }
  }
});