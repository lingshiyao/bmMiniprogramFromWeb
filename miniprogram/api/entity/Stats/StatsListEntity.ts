import {StatsListItemEntity} from './StatsListItemEntity'

import {SelectBoxEntity} from '../Tools/SelectBoxEntity';

export class StatsListEntity {

    public categoriesMenus: Array<string> = [];

    public menus: Array<SelectBoxEntity> = [];

    private dateMenus: Array<string> = [
        "Last 7 Days",
        "Last 14 Days",
        "Last 30 Days",
        "Last 60 Days",
        "Last 90 Days",
        "Last Year",
        "All Time",
    ];

    public listData:Array<StatsListItemEntity> =[];

    constructor() {

        this.menus.push(SelectBoxEntity.init(this.dateMenus, false, false, '0'));
        this.menus.push(SelectBoxEntity.init(["2"], true, false, '1'));

        this.listData.push(new StatsListItemEntity());
        this.listData.push(new StatsListItemEntity());
        this.listData.push(new StatsListItemEntity());
        this.listData.push(new StatsListItemEntity());
        this.listData.push(new StatsListItemEntity());
        this.listData.push(new StatsListItemEntity());
        this.listData.push(new StatsListItemEntity());
        this.listData.push(new StatsListItemEntity());
        this.listData.push(new StatsListItemEntity());
        this.listData.push(new StatsListItemEntity());
        this.listData.push(new StatsListItemEntity());
        this.listData.push(new StatsListItemEntity());
        this.listData.push(new StatsListItemEntity());
        this.listData.push(new StatsListItemEntity());
        this.listData.push(new StatsListItemEntity());
        this.listData.push(new StatsListItemEntity());
        this.listData.push(new StatsListItemEntity());
        this.listData.push(new StatsListItemEntity());
        this.listData.push(new StatsListItemEntity());
        this.listData.push(new StatsListItemEntity());
        this.listData.push(new StatsListItemEntity());
        this.listData.push(new StatsListItemEntity());
        this.listData.push(new StatsListItemEntity());
        this.listData.push(new StatsListItemEntity());
        this.listData.push(new StatsListItemEntity());
        this.listData.push(new StatsListItemEntity());
        this.listData.push(new StatsListItemEntity());
        this.listData.push(new StatsListItemEntity());
        this.listData.push(new StatsListItemEntity());
        this.listData.push(new StatsListItemEntity());
        this.listData.push(new StatsListItemEntity());
        this.listData.push(new StatsListItemEntity());
        this.listData.push(new StatsListItemEntity());
        this.listData.push(new StatsListItemEntity());
        this.listData.push(new StatsListItemEntity());
        this.listData.push(new StatsListItemEntity());
        this.listData.push(new StatsListItemEntity());
        this.listData.push(new StatsListItemEntity());
        this.listData.push(new StatsListItemEntity());
        this.listData.push(new StatsListItemEntity());
    }
}