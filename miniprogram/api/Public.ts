export class Public {

    /// 保存 nav
    public static navigationBar: any = null;

    /// 保存 alertView
    public static alertView: any = null;

    /// 是否显示加载框
    public static loading: any = null;

    /**
     * 废弃-判断是否是 mac
     */
    public static isMac(): boolean {
        return false;
    }

    /**
     * 获取地址 进行切换
     * 如果 当前就 phone 就显示 phone 的对应页面
     * 反之亦然
     */
    public static getWebPath(pathString: string): string {

        var path = "";

        //// 判断是否是手机
        if (Public.isPhone()) {
            if (pathString.indexOf("/home") != -1) {
                return "phone/home";
            }
        }
        return path;
    }

    /**
     * 废弃-判断是否是手机
     */
    public static isPhone(): boolean {
        return true;
    }

    /**
     * 二进制数组转化成图片
     * @param intArray 二进制数组
     */
    public static getImgeWithIntArray(intArray: any): string {
        // var binary: string = '';
        //
        // const bytes = new Uint8Array(intArray);
        // const len = bytes.byteLength;
        //
        // for (var i = 0; i < len; i++) {
        //     binary += String.fromCharCode(bytes[i]);
        // }
        // return "data:image/png;base64," + window.btoa(binary);
        // TODO 现在不用
        return "";
    }

    /**
     * 废弃-宽带那个小，就以那个为 最大高度
     * @param imgSrc 图片地址
     * @param id id
     */
    public static getImgInfo(imgSrc: string, id: string) {
        return;
    }

    /**
     * 废弃-宽带那个小，就以那个为 最大高度
     * @param imgSrc 图片地址
     * @param id id
     */
    public static getImgInfon(imgSrc: string, id: string) {
        return;
    }

    /**
     * 手机跳转到login页面
     */
    public static ifPhoneAppGotoLogin() {
        // TODO 此处路径需要验证
        wx.navigateTo({
            url: '/pages/PhoneApp',
        })
    }

    /**
     * 获取uuid
     */
    public static generateUUID() { // Public Domain/MIT
        var d = new Date().getTime();//Timestamp
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16;//random number between 0 and 16
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }
}