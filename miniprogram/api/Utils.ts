export class Utils {
    public static getScreenRpxHeight(): number {
        return 750 / wx.getSystemInfoSync().windowWidth * wx.getSystemInfoSync().windowHeight;
    }

    public static getBottomSafeAreaRpxHeight(): number {
        return (wx.getSystemInfoSync().safeArea.bottom - wx.getSystemInfoSync().safeArea.height) / wx.getSystemInfoSync().windowWidth * wx.getSystemInfoSync().windowHeight;
    }

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