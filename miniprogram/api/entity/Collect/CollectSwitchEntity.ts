import {ImgPath} from '../../../Public/ImgPath';

const ic_items_selected = ImgPath.getImgPath('ic_items_selected');

const ic_items_normal = ImgPath.getImgPath('ic_items_normal');

const ic_activity_selected = ImgPath.getImgPath('ic_activity_selected');

const ic_activity_normal = ImgPath.getImgPath('ic_activity_normal');

export class CollectSwitchTitleEntity {

    public img: string = ic_items_selected;
    public imgNormal: string = ic_items_normal;
    public title: string = 'Items';
    public isSelected: boolean = true;

    public static init(img: string, imgNormal: string, title: string, isSelected: boolean): CollectSwitchTitleEntity {
        const self = new CollectSwitchTitleEntity();
        self.img = img;
        self.imgNormal = imgNormal;
        self.title = title;
        self.isSelected = isSelected;
        return self;
    }
}

export class CollectSwitchEntity {

    public titles: Array<CollectSwitchTitleEntity> = [];

    constructor() {
        this.titles.push(CollectSwitchTitleEntity.init(ic_items_selected, ic_items_normal, 'Items', true));
        this.titles.push(CollectSwitchTitleEntity.init(ic_activity_selected, ic_activity_normal, 'Activity', false));
    }
}