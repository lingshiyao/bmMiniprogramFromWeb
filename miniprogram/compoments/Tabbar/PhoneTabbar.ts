import {PhoneTabbarEntity} from "./PhoneTabbarEntity";

Component({
    properties: {
        tabbarData: {
            type: Array, value: new Array<PhoneTabbarEntity>()
        }
    }, data: {
        data: new Array<PhoneTabbarEntity>()
    }, methods: {
        tabberAction(event: any) {
            const index = event.currentTarget.dataset.index;
            this.triggerEvent('taBarIndex', index);
            const temp = this.data.data;
            for (let i = 0; i < temp.length; i++) {
                if (i === index) {
                    temp[i].isSelect = true;
                } else {
                    temp[i].isSelect = false;
                }
            }
            this.setData({
                'data': temp
            })
        }
    }, observers: {
        'tabbarData': function (val) {
            this.setData({
                'data': val
            })
        }
    }, ready: function () {
        // FIXME
        // data.value = props.tabbarData;
    },
});