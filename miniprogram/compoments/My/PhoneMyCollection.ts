import {request} from "../../api/Api";
import {CollectCardDataEntity} from "../../api/entity/Collect/CollectItemsListItemEntity";
import {Nft, UserDetail} from "../../api/gql/graphql";
import {ImgPath} from "../../api/ImgPath";
import {UserSet} from "../../api/UserSet";

Component({
    properties: {},
    data: {
        favList: []
    },
    methods: {
        async init() {
            const userDetail: UserDetail | null = await UserSet.getUserInfoIfFailedGoLogin();
            const nfts = await request.nfts({userId: userDetail.user.id});
            if (nfts != null) {
                nfts.forEach((nft: Nft) => {
                    const collectCardDataEntity: CollectCardDataEntity = new CollectCardDataEntity();
                    collectCardDataEntity.author = nft.art.stores[0].name;
                    collectCardDataEntity.id = nft.art.id;
                    collectCardDataEntity.name = nft.art.name;
                    collectCardDataEntity.headerImg = ImgPath.getMedia(nft.art.id);
                    collectCardDataEntity.isShowNumber = true;
                    collectCardDataEntity.index = nft.index + 1;
                    collectCardDataEntity.price = nft.art.mintPrice;
                    collectCardDataEntity.like = nft.art.favCount.toString();
                    collectCardDataEntity.maxSupply = nft.art.maxSupply.toString();
                    collectCardDataEntity.sId = nft.art.stores[0].id.toString();
                    const favListT = this.data.favList;
                    favListT.push(collectCardDataEntity);
                    this.setData({
                        'favList': favListT
                    })
                });
            }
        },
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
        }
    },
    ready() {
        this.init();
    }
});