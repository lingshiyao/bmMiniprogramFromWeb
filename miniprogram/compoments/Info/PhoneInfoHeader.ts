import {InfoHeaderEntity} from "../../api/entity/Info/InfoHeaderEntity";
import {ImgPath} from "../../api/ImgPath";

Component({
    properties: {
        nft: {
            type: Object,
            value: new InfoHeaderEntity()
        }
    },
    data: {
        src: ImgPath.getImgPath('icon_fire_normal'),
        src1: ImgPath.getImgPath('icon_flower')
    },
    methods: {
        goToStore() {
            this.triggerEvent('goToStore');
        }
    },
    ready() {
    },
    observers: {
        'nft': function (nft) {
        }
    }
});

// TODO 未验证
// const emits = defineEmits<{
//     (el: "goToStore"): void
// }>();
//
// const goToStore = () => emits('goToStore');
//