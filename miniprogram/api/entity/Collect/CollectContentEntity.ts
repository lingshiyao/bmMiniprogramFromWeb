import { ImgPath } from '../../ImgPath';
import {SwitchBtnEntity} from '../Tools/SwitchBtnEntity'

const ic_items_selected = ImgPath.getImgPath('ic_items_selected');

const ic_items_normal = ImgPath.getImgPath('ic_items_normal');

const ic_activity_selected = ImgPath.getImgPath('ic_activity_selected');

const ic_activity_normal = ImgPath.getImgPath('ic_activity_normal');

export class CollectContentEntity {
    public switchData: Array<SwitchBtnEntity> = [];

    constructor() {
        this.switchData.push(SwitchBtnEntity.init( ic_items_normal, ic_items_selected, "Items"));
        this.switchData.push(SwitchBtnEntity.init( ic_activity_normal, ic_activity_selected, "Activity"));
    }
}