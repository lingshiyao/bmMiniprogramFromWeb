import {CollectCardDataEntity} from "../../api/entity/Collect/CollectItemsListItemEntity";
import {ImgPath} from "../../api/ImgPath";

Component({
    properties: {
        data: {
            type: Object,
            value: new CollectCardDataEntity()
        }
    },
    data: {
        id: "phone_store_item_img",
        src: ImgPath.getImgPath('icon_flower'),
        src1: ImgPath.getImgPath('ic_favorited_selected')
    },
    methods: {},
    ready() {
    }
});

