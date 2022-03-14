import {SelectBoxEntity} from "../Tools/SelectBoxEntity";

export class CollectTimeScreenEntity {

    public menusData: SelectBoxEntity = new SelectBoxEntity();

    constructor() {
        this.menusData.menu = [
            "Last 7 Days",
            "Last 14 Days",
            "Last 30 Days",
            "Last 60 Days",
            "Last 90 Days",
            "Last Year",
            "All Time",
        ]
    }
}