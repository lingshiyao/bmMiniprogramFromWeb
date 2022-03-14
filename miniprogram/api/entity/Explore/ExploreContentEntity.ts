import {SwitchBtnEntity} from '../Tools/SwitchBtnEntity'

import {MyCollectionsItemEntity} from '../My/MyCollectionsItemEntity';

export class ExploreContentEntity {

    public listData: Array<SwitchBtnEntity> = [];

    public itemData: Array<MyCollectionsItemEntity> = [];

    ///// 默认选中 索引
    public index: number = 0;

    constructor() {
        // this.listData.push(SwitchBtnEntity.init("", "", "Trending"));
        // this.listData.push(SwitchBtnEntity.init("", "", "top"));
        // this.listData.push(SwitchBtnEntity.init("", "", "art"));
        // this.listData.push(SwitchBtnEntity.init("", "", "Trending"));
        // this.listData.push(SwitchBtnEntity.init("", "", "top"));
        // this.listData.push(SwitchBtnEntity.init("", "", "art"));
        // this.listData.push(SwitchBtnEntity.init("", "", "Trending"));
        // this.listData.push(SwitchBtnEntity.init("", "", "top"));
        // this.listData.push(SwitchBtnEntity.init("", "", "art"));
        // this.listData.push(SwitchBtnEntity.init("", "", "Trending"));
    };
}