import {request} from "../api/Api";
import {CollectBannerEntity} from "../api/entity/Collect/CollectBannerEntity";
import {CollectCardDataEntity} from "../api/entity/Collect/CollectItemsListItemEntity";
import {ImgPath} from "../api/ImgPath";

const NULL: any = null;

Page({
    data: {
        /**
         * 店铺 艺术品 模型
         */
        pageIndex: 0,

        /**
         * banner 数据模型
         */
        bannerData: new CollectBannerEntity(),

        /**
         * 店铺 艺术品 模型
         */
        collectData: new Array<CollectCardDataEntity>(),

        total: 0, options: NULL
    }, onLoad(options) {
        this.setData({
            'options': options
        })
        this.getStoreInfo();
        this.getStoreStat();
        this.getStoreArts("", this.data.pageIndex);
    },

    /**
     * 页面跳转
     * @param path  跳转地址
     * @param id    跳转id
     * @param storeId
     */
    goToPage(path: string, id?: string, storeId?: string) {
        // FIXME
        // const l_path = `/${path.toLocaleLowerCase()}`
        // if (id) {
        //     router.push({
        //         path: l_path,
        //         query: {
        //             id: id!,
        //         }
        //     })
        //     if (storeId) {
        //         router.push({
        //             path: l_path,
        //             query: {
        //                 id: id!,
        //                 sid: storeId!
        //             }
        //         })
        //     }
        // } else {
        //     router.push({
        //         path: l_path,
        //     })
        // }
    }, getPage(index: string) {
        this.getStoreArts("", Number(index) - 1);
    },

    /**
     * 获取店铺 艺术品
     * @param key
     * @param pageIndex
     */
    async getStoreArts(key: string, pageIndex: number) {
        const storeId = this.data.options.id;
        var ascByPrice = false;
        if (key === "false" || key === "true") {
            if (key === "true") {
                ascByPrice = true;
            } else {
                ascByPrice = false;
            }
            key = "";
        }

        const arts = await request.arts({
            storeId: <string>storeId,
            key: key,
            pageIndex: pageIndex,
            pageSize: 1000,
            ascByPrice: ascByPrice,
            includeHidden: false
        }, true)
        //  清空数据数组
        const collectDataT = [];
        if (arts) {
            for (let index = 0; index < arts.list.length; index++) {
                const val = new CollectCardDataEntity();

                // maxSupply 最大售卖量

                // supplied 已经买了多少

                /// 作者 暂时 改为 项目名称
                val.name = arts.list[index].name;
                if (val.name.length > 8) {
                    val.name = val.name.substring(0, 8) + "...";
                }

                val.author = arts.list[index].stores[0].name;

                if (arts.list[index].supplied >= arts.list[index].maxSupply) val.isShowSupple = true;

                val.supple = arts.list[index].maxSupply;

                /// chainNo 链 id
                val.id = arts.list[index].id;

                /// 价格
                val.price = arts.list[index].mintPrice;

                /// 喜欢
                val.like = arts.list[index].favCount.toString();

                /// 头像
                // val.headerImg = Public.getImgeWithIntArray(arts.list[index].media);
                val.headerImg = ImgPath.getMedia(arts.list[index].id);

                /// lastPrice 暂时 改为时间
                // val.lastPrice = dateFormat(arts.list[index].createdAt, "yyyy-mm-dd HH:MM:ss");
                collectDataT.push(val);
            }
            this.setData({
                'total': arts.total, 'collectData': collectDataT
            })
        } else {
            // Public.alertView.showAlertView(res.error);
        }
    },

    /**
     * 获取店铺信息
     */
    async getStoreInfo() {
        const storeId = this.data.options.id;
        const store = await request.store({storeId: <string>storeId});
        if (store) {
            const bannerDataT = this.data.bannerData;
            // 简介
            bannerDataT.introduction = store.description;
            // 项目名称
            bannerDataT.projectName = store.name;
            // 作者
            bannerDataT.projectAuthor = store.user.user.username;

            // FIXME
            // 最后更新时间
            // bannerDataT.projectTime = dateFormat(store.updatedAt, "yyyy-mm-dd HH:MM:ss");
            bannerDataT.projectTime = "";

            // uid
            bannerDataT.uid = store.user.user.id;
            bannerDataT.url = store.externalLink;
            // isBlind
            bannerDataT.isBlind = store.isBlind;
            // 头像
            // bannerDataT.headerImg = Public.getImgeWithIntArray(store.icon);
            bannerDataT.headerImg = ImgPath.getSIcon(store.id);
            // bannerDataT.banner = Public.getImgeWithIntArray(store.banner);
            bannerDataT.banner = ImgPath.getSBanner(store.id);
            this.setData({
                'bannerData': bannerDataT
            })
        } else {
            wx.showToast({
                title: 'store error', icon: 'error', duration: 1500
            })
        }
    },

    /**
     * 获取店铺统计
     */
    getStoreStat: async function () {
        const storeId = this.data.options.id;
        const storeStat = await request.storeStat({storeId: <string>storeId})
        if (storeStat) {
            const bannerDataT = this.data.bannerData;
            bannerDataT.contents[0].num = storeStat.items;
            bannerDataT.contents[1].num = storeStat.owners;
            bannerDataT.contents[2].num = storeStat.soldVolume;
            bannerDataT.contents[3].num = storeStat.soldAmount;
        }
    },

    /**
     * 搜索
     * @param key 搜索关键字
     */
    searchAction(searchKey: string) {
        this.getStoreArts(searchKey, this.data.pageIndex);
    },

    /**
     * 跳转详情
     * @param index
     */
    goToInfo(index: number) {
        // FIXME
        // goToPage("phone/info", collectData.value[index].id, <string>router.currentRoute.value.query.id);
    }, dismiss() {
    },

});

// FIXME
// ////// 时间格式化
// import dateFormat from 'dateformat';

/**
 * 工具栏点击
 */
// const headerToolsAction = (index: number) => {
//     switch (index) {
//         case 0:                 /// 外部网站
//             if (bannerData.value.url) {
//                 window.open(bannerData.value.url);
//             }
//             break;

//         case 1:                 /// 进入 店铺修改页面
//             const user = UserSet.getUserInfo();
//             if (user) {
//                 const uid = user.id
//                 if (bannerData.value.uid === uid) {
//                     goToPage("create", "collection", <string>router.currentRoute.value.query.id);
//                     return;
//                 }
//             }
//             Public.alertView.showAlertView("只有店铺所有者才能修改该店铺!");
//             break;

//         default:
//             break;
//     }
// }