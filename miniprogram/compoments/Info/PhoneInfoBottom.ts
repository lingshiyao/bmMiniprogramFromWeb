import {InfoHeaderEntity} from "../../api/entity/Info/InfoHeaderEntity";
import {ImgPath} from "../../api/ImgPath";

Component({
    properties: {
        nft: {
            type: Object, value: new InfoHeaderEntity()
        }
    }, data: {
        src: "",
        src1: ImgPath.getImgPath('btn_revise'),
    }, methods: {
        action(event: any) {
            const index = event.currentTarget.dataset.index;
            this.triggerEvent('action', index);
        }
    }, observers: {
        'nft': function (nft) {
            this.setData({
                'src': nft.isLike ? ImgPath.getImgPath('btn_collect_selected') : ImgPath.getImgPath('btn_collect_normal')
            })
        }
    }
});

// TODO 未验证
// const emits = defineEmits<{
//     (el: "action", index: number): void
// }>();
//
// const action = (index: number) => emits('action', index);

