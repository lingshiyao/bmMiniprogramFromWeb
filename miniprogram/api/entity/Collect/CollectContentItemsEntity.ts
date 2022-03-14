import {ImgPath} from '../../../Public/ImgPath';
import {CollectCardDataEntity} from './CollectItemsListItemEntity'
import {SwitchBtnEntity} from '../Tools/SwitchBtnEntity'
import {SelectBoxEntity} from '../Tools/SelectBoxEntity';

const ic_four_normal = ImgPath.getImgPath('ic_four_normal');
const ic_four_selected = ImgPath.getImgPath('ic_four_selected');
const ic_nine_normal = ImgPath.getImgPath('ic_nine_normal');
const ic_nine_selected = ImgPath.getImgPath('ic_nine_selected');

export class CollectContentItemsEntity {

    private menu_0: Array<string> = ["Single", "All items", "Bundles"];

    private menu_1: Array<string> = ["价格: 从高到低", "价格: 从低到高"];

    //// 下拉菜单
    public menus: Array<SelectBoxEntity> = [];
 
    /// 选择菜单 
    public switchLists: Array<SwitchBtnEntity> = [];

    /// list items 
    public items: Array<CollectCardDataEntity> = [];

    constructor() {

        this.menus.push(SelectBoxEntity.init(this.menu_0, false, false, "0"));
        this.menus.push(SelectBoxEntity.init(this.menu_1, false, false, "1"));

        this.switchLists.push(SwitchBtnEntity.init(ic_nine_normal, ic_nine_selected, ""));
        this.switchLists.push(SwitchBtnEntity.init(ic_four_normal, ic_four_selected, ""));

        this.items.push(new CollectCardDataEntity());
        this.items.push(new CollectCardDataEntity());
        this.items.push(new CollectCardDataEntity());
    }
}