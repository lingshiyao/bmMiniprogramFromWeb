import {HomeShufflingItemEntity} from '../../api/entity/Home/HomeShufflingItemEntity';

Component({
    properties: {
        data: {
            type: Object,
            value: new HomeShufflingItemEntity(),
        }
    },
    data: {},
    methods: {},

    ready() {
        // TODO 未验证
//     Public.getImgInfo(props.data.img, "phone_home_recommend_img" + props.data.id);
    },
    observers: {
        'data': function (data) {
            // TODO 未验证
            //     Public.getImgInfo(data.img, "phone_home_recommend_img" + data.id);
        }
    }
});