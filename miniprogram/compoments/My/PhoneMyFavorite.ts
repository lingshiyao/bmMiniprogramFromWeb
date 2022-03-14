import {Favorite} from "../../api/gql/graphql";
import {CollectCardDataEntity} from "../../api/entity/Collect/CollectItemsListItemEntity";
import {ImgPath} from "../../api/ImgPath";
import {request} from "../../api/Api";

Component({
    properties: {},
    data: {
        favList: []
    },
    methods: {
        goToInfo(index: number) {
            // TODO 未验证
            // router.push({
            //   path: "/phone/info",
            //   query: {
            //     id: favList.value[index].id,
            //     sid: favList.value[index].sId,
            //   }
            // })
            wx.navigateTo({
                url: `/pages/PhoneInfoPage?id=${this.data.favList[index].id}&sid=${this.data.favList[index].sId}`
            })
        },
        async init() {
            const pagedFavorites = await request.favorites({
                pageIndex: 0,
                pageSize: 1000
            }, true);
            if (pagedFavorites != null) {
                pagedFavorites.list.forEach((favorite: Favorite) => {
                    const collectCardDataEntity: CollectCardDataEntity = new CollectCardDataEntity();
                    collectCardDataEntity.headerImg = ImgPath.getMedia(favorite.art.id);
                    collectCardDataEntity.name = favorite.art.name;
                    collectCardDataEntity.author = favorite.art.stores[0].name;
                    collectCardDataEntity.id = favorite.art.id;
                    collectCardDataEntity.supple = favorite.art.supplied;
                    collectCardDataEntity.price = favorite.art.mintPrice;
                    collectCardDataEntity.sId = favorite.art.stores[0].id;
                    collectCardDataEntity.like = favorite.art.favCount.toString();
                    const favListT = this.data.favList;
                    favListT.push(collectCardDataEntity);
                    this.setData({
                        'favList': favListT
                    })
                })
            }
        }
    },
    ready() {
        this.init();
    }
});

