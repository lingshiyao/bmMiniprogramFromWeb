import {SelectToolBarEntity} from "./SelectToolBarEntity";

Component({
    properties: {
        data: {
            type: Array,
            value: new Array<SelectToolBarEntity>(),
        }
    },
    data: {
        dataEntity: new Array<SelectToolBarEntity>(),
    },
    methods: {
        tabberToolAction(event: any) {
            const index = event.currentTarget.dataset.index;
            this.selectToolIndex(index);

            const dataEntityT = this.data.dataEntity;
            for (let i = 0; i < dataEntityT.length; i++) {
                if (i === index) {
                    dataEntityT[i].isSelect = true;
                } else {
                    dataEntityT[i].isSelect = false;
                }
            }
            this.setData({
                'dataEntity': dataEntityT
            })
        },
        selectToolIndex(index: number) {
            this.triggerEvent('selectToolIndex', index);
        }
    },
    ready() {
        this.setData({
            'dataEntity': this.properties.data
        })
    },
    observers: {
        'data': function (data) {
            this.setData({
                'dataEntity': data
            })
        }
    }
});

// TODO 未验证
// const emits = defineEmits<{
//     (el: "selectToolIndex", index: number): void
// }>();
//
// const selectToolIndex = (index: number) => emits('selectToolIndex', index);