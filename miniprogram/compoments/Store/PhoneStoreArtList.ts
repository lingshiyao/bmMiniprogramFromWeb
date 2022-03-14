import {CollectCardDataEntity} from "../../api/entity/Collect/CollectItemsListItemEntity";
import {SelectBoxEntity} from "../../api/entity/Tools/SelectBoxEntity";

Component({
    properties: {
        data: {
            type: Array, value: new Array<CollectCardDataEntity>()
        }
    }, data: {
        selectBoxData: new SelectBoxEntity()
    }, methods: {
        //// 点击 菜单 回调
        clickCallBack(key: string, id: string) {
            // FIXME
            // //// 搜索
            // if (key.length > 0) {
            //     if (key === selectBoxData.value.menu[0]) {
            //         search("false");//// false 大 到 小
            //     } else {
            //         search("true");
            //     }
            // }
        }, secrchAction() {
            // FIXME
            // search((<HTMLInputElement>document.getElementById("phone_search_input")!).value)
        }, search(key: string) {
            this.triggerEvent('search', key);
        }, goToInfo(event: any) {
            const index = event.currentTarget.dataset.index;
            this.triggerEvent('goToInfo', index);
        }
    }, ready() {
        const selectBoxDataT = this.data.selectBoxData;
        selectBoxDataT.menu = ["价格: 从高到低", "价格: 从低到高",]
        this.setData({
            'selectBoxData': selectBoxDataT
        })
    }, observers: {
        'data': function (data) {
        }
    }
});

// TODO 未验证
// /// 搜索
// const emit = defineEmits<{
//     (e: 'search', key: string): void,
//     (e: 'goToInfo', index: number): void,
// }>();
//
// /// 搜索
// const search = (key: string) => emit('search', key);
//
// /// 进入info
// const goToInfo = (index: number) => emit('goToInfo', index);
//
