import {MyOrderListEntity} from './MyOrderListEntity'

export class OrderSelector {

    public title = "";

    public isSelector: boolean = false;

    public static init(title: string, isSelector: boolean = false): OrderSelector {
        const self = new OrderSelector();
        self.title = title;
        self.isSelector = isSelector;
        return self
    }
}

export class MyOrderEntity {

    public selectTitles: Array<OrderSelector> = [];

    public orderListTitle: MyOrderListEntity = new MyOrderListEntity();

    constructor() {
        this.selectTitles.push(OrderSelector.init("全部", true), OrderSelector.init("待确认", false), OrderSelector.init("成功", false), OrderSelector.init("失败", false));
        this.orderListTitle = MyOrderListEntity.init("", "订单号", "作品名称", "所属店铺", "创建时间", "状态", "订单金额", "操作");
    }
}