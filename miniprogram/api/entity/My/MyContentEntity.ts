import {SwitchBtnEntity} from '../Tools/SwitchBtnEntity'

import {MyCollectionsItemEntity} from './MyCollectionsItemEntity'

import {CollectCardDataEntity} from '../Collect/CollectItemsListItemEntity'

import {MyOrderListEntity} from './MyOrderListEntity'

import {ImgPath} from '../../../Public/ImgPath'

const ic_collected_normal = ImgPath.getImgPath('ic_collected_normal');

const ic_collected_selected = ImgPath.getImgPath('ic_collected_selected');

const ic_favorited_normal = ImgPath.getImgPath('ic_favorited_normal');

const ic_favorited_selected = ImgPath.getImgPath('ic_favorited_selected');

const ic_collections_normal = ImgPath.getImgPath('ic_collections_normal');

const ic_collections_selected = ImgPath.getImgPath('ic_collections_selected');

const ic_order_normal = ImgPath.getImgPath('ic_order_normal');

const ic_order_selected = ImgPath.getImgPath('ic_order_selected');

const pic_share = ImgPath.getImgPath('pic_share');

export class MyCollectionListDataEntity {

    public img: string = "";
    public title: string = "";

    public static init(img: string, title: string): MyCollectionListDataEntity {
        const self = new MyCollectionListDataEntity();
        self.img = img;
        self.title = title;
        return self;
    }
}

export class MyContentEntity {

    public listData: Array<SwitchBtnEntity> = [];

    //// 我的订单
    public orderList: Array<MyOrderListEntity> = [];

    //// 我的店铺
    public collectionsData: Array<MyCollectionsItemEntity> = [];

    //// 我的 nft
    public collectedData: Array<CollectCardDataEntity> = [];

    //// 我的收藏
    public favoritedData: Array<CollectCardDataEntity> = [];

    //// 订单总数
    public orderTotal: number = 0;

    //// 喜欢总数
    public favoritedTotal: number = 0;

    //// 店铺总数
    public collectionsTotal: number = 0;

    constructor() {
        this.listData.push(SwitchBtnEntity.init(ic_order_normal, ic_order_selected, "我的订单"));
        this.listData.push(SwitchBtnEntity.init(ic_collected_normal, ic_collected_selected, "我的藏品"));
        this.listData.push(SwitchBtnEntity.init(ic_favorited_normal, ic_favorited_selected, "我的喜欢"));
        this.listData.push(SwitchBtnEntity.init(ic_collections_normal, ic_collections_selected, "我的创作"));
    };
}