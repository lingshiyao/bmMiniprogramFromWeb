import {ImgPath} from "../api/ImgPath";
import {PhoneTabbarEntity} from "../compoments/Tabbar/PhoneTabbarEntity";
import {UserSet} from "../api/UserSet";

const NULL: any = null;

Page({
    data: {
        showViews: new Array<Boolean>(),
        tabbarData: new Array<PhoneTabbarEntity>(),
        toolsIndex: 0,
        options: NULL
    },

    onLoad(options) {
        this.setData({
            'options': options
        })
        // 设置默认点击 tabbar
        this.createdTabbarData();
        this.setSelectTabbarItem();
//         FIXME
//   weiXinPayInit();
    },

    setSelectTabbarItem() {
        const index = this.data.options.id;
        if (index) {
            const showViewsT = [false, false, false, false, false];
            showViewsT[Number(index)] = true;
            this.setData({
                'showViews': showViewsT
            })
            const tabbarDataT = this.data.tabbarData;
            tabbarDataT[Number(index)].isSelect = true;
            this.setData({
                'tabbarData': tabbarDataT
            })
        } else {
            this.setData({
                'showViews': [true, false, false, false, false]
            })
            const tabbarDataT = this.data.tabbarData;
            tabbarDataT[0].isSelect = true;
            this.setData({
                'tabbarData': tabbarDataT
            })
        }
    },

    /**
     * 初始化 tabbar
     */
    createdTabbarData() {
        const lst: Array<PhoneTabbarEntity> = new Array<PhoneTabbarEntity>();
        lst.push(PhoneTabbarEntity.init(ImgPath.getImgPath('icon_work_normal'), ImgPath.getImgPath('icon_work_selected'), "首页"));
        lst.push(PhoneTabbarEntity.init(ImgPath.getImgPath('ic_sort_normal'), ImgPath.getImgPath('ic_sort_selected'), "分类"));
        lst.push(PhoneTabbarEntity.init(ImgPath.getImgPath('ic_creation_normal1'), ImgPath.getImgPath('ic_creation_selected1'), "创作"));
        lst.push(PhoneTabbarEntity.init(ImgPath.getImgPath('ic_mine_normal'), ImgPath.getImgPath('ic_mine_selected'), "我的"));
        this.setData({
            tabbarData: lst
        })
    },

    async _taBarIndex(index: number) {
        // FIXME
        // //// 记录当前 index
        // router.replace({
        //   query: {
        //     id: index.toString()
        //   }
        // });
        if (index === 3) {
            //我的页面
            if (await UserSet.getToken() == null) {
                wx.navigateTo({
                    url: '/pages/PhoneLogin',
                })
            }
        }
        const showViewsT = [false, false, false, false, false];
        showViewsT[index] = true;
        this.setData({
            'showViews': showViewsT
        })
    },

    async taBarIndex(event: any) {
        const index = parseInt(event.detail);
        this._taBarIndex(index)
    },

    goToExplore(event: any) {
        const index = parseInt(event.detail);
        if (index === 100) {    /// 进入创作
            this._taBarIndex(2);
            const tabbarDataT = this.data.tabbarData;
            tabbarDataT[0].isSelect = false;
            tabbarDataT[1].isSelect = false;
            tabbarDataT[2].isSelect = true;
            this.setData({
                'tabbarData': tabbarDataT
            })
            return;
        }
        this._taBarIndex(1);
        const tabbarDataT = this.data.tabbarData;
        tabbarDataT[0].isSelect = false;
        tabbarDataT[1].isSelect = true;
        this.setData({
            'tabbarData': tabbarDataT, 'toolsIndex': index
        })
    },

    goToVHtml(event: any) {
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