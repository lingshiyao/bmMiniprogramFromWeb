import {request} from "../api/Api";

const NULL: any = null;

Page({
    data: {
        text: "", title: "", options: NULL
    }, onLoad(options) {
        this.setData({
            'options': options
        })
        this.getContent();
    }, /**
     * 获取 content
     */
    async getContent() {
        const content = await request.content({key: this.data.options.key})
        if (content) {
            const e = content;
            this.setData({
                'text': e.body, 'title': e.title
            })
            wx.setNavigationBarTitle({
                title: e.title//页面标题为路由参数
            })
        }
    }, goToVHtml(event: any) {
        const index = parseInt(event.detail);
        switch (index) {
            case 1: {
                wx.navigateTo({
                    url: `/pages/PhoneVHTML?key=nft_intro`
                })
                break;
            }
            case 2: {
                wx.navigateTo({
                    url: `/pages/PhoneVHTML?key=nft_how_get`
                })
                break;
            }
            case 3: {
                wx.navigateTo({
                    url: `/pages/PhoneVHTML?key=nft_how_buy`
                })
                break;
            }
            default: {
                break;
            }
        }
    }
});