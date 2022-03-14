import {MyCollectionsItemEntity} from '../My/MyCollectionsItemEntity'

export class CategoryContentEntity {

    ///////// 标题
    public titleString: string = "";


    ///////// 分类
    public category: string = "";


    ///////// 数据数组
    public itemArray: Array<MyCollectionsItemEntity> = [];
}