import {CollectCardDataEntity} from "../../api/entity/Collect/CollectItemsListItemEntity";

Component({
    properties: {
        data: {
            type: Array, value: new Array<CollectCardDataEntity>()
        }
    }, data: {
        index: 0, timeOut: 0, // img 地址
        imgSrc: ""
    }, methods: {}, ready() {
        let fn = () => {
            // const index = Math.floor(Math.random() * (props.data.length));
            if (this.properties.data.length > 0) {
                if (this.data.index >= this.properties.data.length) this.setData({
                    'index': 0
                })
                this.setData({
                    'imgSrc': this.properties.data[this.data.index].headerImg
                })
                this.setData({
                    'index': this.data.index + 1
                })
            }
            clearTimeout(this.data.timeOut);
            this.setData({
                'timeOut': setTimeout(fn, 1000)
            })
        }
        fn();
    }
});

// FIXME
// onUnmounted(() => {
//     clearTimeout(timeOut.value);
// });