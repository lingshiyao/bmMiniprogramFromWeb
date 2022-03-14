
export class MyOrderListEntity {

    public orderNumber = "";

    public orderName = "";

    public orderStore = "";

    public orderCreateTime = "";

    public orderState = "";

    public tradeState = "";

    public orderMoney = "";

    public orderOption = "";

    public state = "";

    public static init( state: string, orderNumber: string, orderName: string, orderStore: string, orderCreateTime: string, orderState: string, orderMoney: string, orderOption: string): MyOrderListEntity {
        const self = new MyOrderListEntity();
        self.orderNumber = orderNumber;
        self.state = state;
        self.orderName = orderName;
        self.orderStore = orderStore;
        self.orderCreateTime = orderCreateTime;
        self.orderState = orderState;
        self.orderMoney = orderMoney;
        self.orderOption = orderOption;
        return self;
    }
}
