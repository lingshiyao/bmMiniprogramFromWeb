import {HomeShufflingListEntity} from '../../api/entity/Home/HomeShufflingListEntity';

Component({
    properties: {
        data: {
            type: Object,
            value: new HomeShufflingListEntity(),
        }
    },
    data: {},
    methods: {
        goToStore(event: any) {
            const index = event.currentTarget.dataset.index;
            this.triggerEvent('goToStore', index);
        }
    }
});

// TODO 未验证
// const emits = defineEmits<{
//     (el: "goToStore", index: number): void
// }>();
//
// const goToStore = (index: number) => emits('goToStore', index);


