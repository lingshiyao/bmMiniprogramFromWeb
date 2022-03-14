
export class WXUtils {
    public static async chooseImage():Promise<any> {
        return new Promise((resolve) => {
            wx.chooseImage({
                count: 1,
                sizeType: ['original', 'compressed'],
                sourceType: ['album', 'camera'],
                success (res) {
                    resolve(res);
                    // // tempFilePath可以作为img标签的src属性显示图片
                    // const tempFilePaths = res.tempFilePaths
                },
                fail() {
                    resolve(null);
                }
            })
        });
    }
}