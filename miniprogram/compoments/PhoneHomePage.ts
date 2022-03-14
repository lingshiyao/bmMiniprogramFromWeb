import {request} from "../api/Api";
import {HomeBannerRightEntity} from "../api/entity/Home/HomeBannerRightEntity";
import {HomeBrowseEntity, HomeBrowseItemEntity} from "../api/entity/Home/HomeBrowseEntity";
import {HomeShufflingItemEntity} from "../api/entity/Home/HomeShufflingItemEntity";
import {HomeShufflingListEntity} from "../api/entity/Home/HomeShufflingListEntity";
import {ImgPath} from "../api/ImgPath";

Component({
    properties: {}, data: {
        /** banner数据 **/
        bannerData: new HomeBannerRightEntity(), /** 轮播图数据 **/
        shufflingData: new HomeShufflingListEntity(), /** 轮播图数据 **/
        categoryData: new HomeBrowseEntity(),
    }, methods: {
        /**
         * 获取数据
         */
        async getTopData() {
            const top = await request.top();
            if (top) {
                this.getBannerData(top.topArt);
                this.getShufflingData(top.topStores);
            } else {
                // Public.alertView.showAlertView("网络异常！");
            }
        },

        /**
         * 获取banner 数据
         */
        getBannerData(top: any) {
            if (top === null) return;
            const homeBannerRightEntity = new HomeBannerRightEntity()
            homeBannerRightEntity.userName = top.stores[0].name;
            homeBannerRightEntity.itemName = top.name;
            homeBannerRightEntity.bannerImgUrl = ImgPath.getMedia(top.id);
            homeBannerRightEntity.url = top.id;
            homeBannerRightEntity.storeId = top.stores[0].id;
            homeBannerRightEntity.userImg = ImgPath.getSIcon(top.stores[0].id);
            this.setData({
                'bannerData': homeBannerRightEntity
            })
        },

        /**
         * 获取轮播图数据
         * @param topStores
         */
        async getShufflingData(topStores: any) {
            const shufflingDataT = this.data.shufflingData;
            shufflingDataT.dataArray = [];
            for (const key in topStores) {
                if (Object.prototype.hasOwnProperty.call(topStores, key)) {
                    const element = topStores[key];
                    const temp = HomeShufflingItemEntity.init(ImgPath.getSIcon(element.id), element.name, element.description, element.id);
                    shufflingDataT.dataArray.push(temp);
                }
            }
            this.setData({
                'shufflingData': shufflingDataT
            })
        },

        goToStore(event: any) {
            const index = event.detail;
            // FIXME
            // goToPage("phone/store", shufflingData.value.dataArray[index].id);
        },

        bannerGoToPage(event: any) {
            const index:number = parseInt(event.detail);
            switch (index) {
                case 0:
                    // 进入 nft 详情
                    wx.navigateTo({
                        url: `/pages/PhoneInfoPage?id=${this.data.bannerData.url}&sid=${this.data.bannerData.storeId}`,
                    })
                    // TODO 未验证
                    // router.push({
                    //     path: '/phone/info',
                    //     query: {
                    //         id: bannerData.value.url,
                    //         sid: bannerData.value.storeId
                    //     }
                    // })
                    wx.navigateTo({
                        url: `/pages/PhoneInfoPage?id=${this.data.bannerData.url}&sid=${this.data.bannerData.storeId}`
                    })
                    break;
                case 1:                 ////// 进入探索
                    this.triggerEvent('goToExplore', 0);
                    // TODO 未验证
                    // this.goToExplore(0);
                    break;
                case 2:                 ////// 进入创建
                    // TODO 未验证
                    this.triggerEvent('goToExplore', 100);
                    // this.goToExplore(100);
                    break;
                default:
                    break;
            }
        },

        /**
         * 页面跳转
         * @param path 跳转地址
         * @param id 跳转id
         */
        goToPage(path: string, id?: string) {
            // FIXME
            // const l_path = `/${path.toLocaleLowerCase()}`
            // if (id) {
            //     router.push({
            //         path: l_path,
            //         query: {
            //             id: id!
            //         }
            //     })
            // } else {
            //     router.push({
            //         path: l_path,
            //     })
            // }
        },

        /**
         * 获取 分类图片
         * @param name 图片名称
         */
        getCategoriesImg(name: string) {
            switch (name) {
                case "艺术品":
                    return ImgPath.getImgPath('pic_art');
                case "音乐":
                    return ImgPath.getImgPath('pic_music');
                case "体育":
                    return ImgPath.getImgPath('pic_sports');
                case "元宇宙":
                    return ImgPath.getImgPath('pic_virtualworlds');
                case "交易卡":
                    return ImgPath.getImgPath('pic_tradingcards');
                case "头像":
                    return ImgPath.getImgPath('pic_collectibles');
                default:
                    break;
            }
            return ImgPath.getImgPath('pic_art');
        },

        /**
         * 获取分类
         */
        async getCategories() {
            const categoryDataT = this.data.categoryData;
            const categories = await request.categories();
            if (categories) {
                for (const key in categories) {
                    if (Object.prototype.hasOwnProperty.call(categories, key)) {
                        const element = categories[key];
                        const data = HomeBrowseItemEntity.init("", element.name, element.id);
                        data.imgSrc = this.getCategoriesImg(element.name);
                        categoryDataT.items.push(data);
                    }
                }
            }
            this.setData({
                'categoryData': categoryDataT
            })
        },
        goToExplore(index: number) {
            this.triggerEvent('goToExplore', index);
        }
    },
    ready() {
        this.getTopData();
        this.getCategories();
    }
});

// TODO 未验证
// const emits = defineEmits<{
//     (el: "goToExplore", index: number): void
// }>();
//
// const goToExplore = (index: number) => emits('goToExplore', index);
//
