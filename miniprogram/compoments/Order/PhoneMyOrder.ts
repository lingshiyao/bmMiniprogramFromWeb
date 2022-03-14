import {request} from "../../api/Api";
import {OrderState, UserDetail} from "../../api/gql/graphql";
import {UserSet} from "../../api/UserSet";

Component({
    properties: {
        orderFilter: {
            type: String, value: OrderState.All
        }
    }, data: {
        order: []
    }, methods: {
        ///// 进入info
        goToInfo(event: any) {
            const index = event.currentTarget.dataset.index;
            wx.navigateTo({
                url: `/pages/PhoneInfoPage?id=${this.data.order[index].art.id}&sid=${this.data.order[index].store.id}`
            });
        }, async init() {
            const userDetail: UserDetail | null = await UserSet.getUserInfoIfFailedGoLogin();
            if (!userDetail) return;
            let filter = OrderState.All;
            if (this.properties.orderFilter == OrderState.All) {
                filter = OrderState.All;
            } else if (this.properties.orderFilter == OrderState.WaitForConfirm) {
                filter = OrderState.WaitForConfirm;
            } else if (this.properties.orderFilter == OrderState.Success) {
                filter = OrderState.Success;
            } else if (this.properties.orderFilter == OrderState.Failed) {
                filter = OrderState.Failed;
            }
            const ordersResult = await request.orders({
                filter: filter, pageIndex: 0, pageSize: 1000, userId: userDetail.user.id
            }, true);
            if (ordersResult == null) return;
            this.setData({
                'order': ordersResult.list
            })
        },
    }, ready() {
        this.init()
    }, observers: {
        'orderFilter': function (val) {
            this.init();
        }
    }
});