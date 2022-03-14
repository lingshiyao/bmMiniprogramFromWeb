import {request} from "../../api/Api";
import {MyCollectionsItemEntity} from "../../api/entity/My/MyCollectionsItemEntity";
import {Store, UserDetail} from "../../api/gql/graphql";
import {ImgPath} from "../../api/ImgPath";
import {UserSet} from "../../api/UserSet";

Component({
    properties: {}, data: {
        lst: []
    }, methods: {
        goToStore(index: number) {
            // TODO 未验证
            // router.push({
            //   path: "/phone/store",
            //   query: {
            //     id: lst.value[index].id
            //   }
            // })
            wx.navigateTo({
                url: `/pages/PhoneStorePage?id=${this.data.lst[index].id}`,
            })
        }, async init() {
            let userDetail: UserDetail = UserSet.getUserInfoIfFailedGoLogin();
            if (!userDetail) return;
            const stores = await request.stores({
                pageIndex: 0, owner: userDetail.userExt.address
            });
            if (stores == null) return;
            const store: Array<Store> = stores.list;
            store.forEach((item: Store) => {
                const item_: MyCollectionsItemEntity = new MyCollectionsItemEntity();
                item_.banner = ImgPath.getSBanner(item.id);
                item_.headerImg = ImgPath.getSIcon(item.id);
                item_.name = item.name;
                item_.id = item.id;
                item_.description = item.description;
                item_.artCount = item.artCount.toString();
                const lstT = this.data.lst;
                lstT.push(item_);
                this.setData({
                    'lst': lstT
                })
            });
        }
    }, ready() {
        this.init();
    }
});