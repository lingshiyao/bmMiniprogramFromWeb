import {HomeBannerRightEntity} from '../../api/entity/Home/HomeBannerRightEntity';
import {PicCDNUtils} from '../../api/netWorking/PicCDNUtils';

Component({
    properties: {
        bannerData: {
            type: Object, value: new HomeBannerRightEntity(),
        }
    }, data: {
        src: PicCDNUtils.getPicUrl('pic_user.png')
    }, methods: {
        goToPage(event: any) {
            const index = event.currentTarget.dataset.index;
            this.triggerEvent('goToPage', index);
        },
        imageOnLoad(ev:any) {
            console.log("----------", ev)
        }
    }, observers: {
        'bannerData': function (bannerData) {
        }
    }
});
// TODO 未验证
// const emits = defineEmits<{
//     (el: "goToPage", index: number): void
// }>();
//
// const goToPage = (index: number) => emits('goToPage', index);

