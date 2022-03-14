import {CollectCardDataEntity} from "../../api/entity/Collect/CollectItemsListItemEntity";

Component({
    properties: {
        data: {
            type: Array,
            value: new Array<CollectCardDataEntity>()
        }
    },
    data: {},
    methods: {

    }
});

// TODO
// /// 确认选择回调
// const emit = defineEmits<{
//     (e: 'clickCallBack', key: string, id: string, index: number): void,
// }>();

