const NULL: any = null;
Page({
    data: {
        ///// 获取 艺术品 id
        qrCodeIDString: "",

        orderString: "",

        moneyString: "",

        artId: "",

        time: NULL,

        options: NULL
    }, onLoad(options) {
        this.setData({
            'options': options
        })
        this.setData({
            'qrCodeIDString': options.id, 'orderString': options.order, 'moneyString': options.m
        })
        let fn = () => {
            this.mintArts();
            setTimeout(fn, 60000);
        }
        fn();

    }, sureAction() {
        // FIXME
        // /// 显示二维码
        // const url = Config.LOCATION + "/#/phone/home?id=3";
        // window.open(url, '_self');
    }, /**
     *  铸造
     *  @param 类型
     */
    async mintArts() {
        // FIXME
        // const res = await wxNativeCodeUrl(orderString.value);
        // if (res.code === "0") {
        //     qrCodeIDString.value = res.data.wxNativeCodeUrl.tradeReturn.code_url;
        // } else {
        //     if (UserSet.getToken() === null) {
        //         Public.navigationBar.showLoginAction();
        //     }
        // }
    }
});