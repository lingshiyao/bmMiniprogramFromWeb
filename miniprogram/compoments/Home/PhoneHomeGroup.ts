import {HomeBrowseEntity} from "../../api/entity/Home/HomeBrowseEntity";

Component({
    properties: {
        data: {
            type: Object,
            value: new HomeBrowseEntity(),
        }
    },
    data: {},
    methods: {
        gotoExplore(event: any) {
            const index = event.currentTarget.dataset.index;
            this.triggerEvent('gotoExplore', index);
        }
    }
});

// TODO 未验证
// /// 跳转到 店铺 分类 页面
// const emits = defineEmits<{
//     (el: "gotoExplore", index: number): void
// }>();
//
// /// 跳转到 店铺 分类 页面
// const gotoExplore = (index: number) => emits("gotoExplore", index);

