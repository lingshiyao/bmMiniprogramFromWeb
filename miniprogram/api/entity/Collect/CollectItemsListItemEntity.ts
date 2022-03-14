import {ImgPath} from "../../ImgPath";

const icon_flower = ImgPath.getImgPath('icon_flower');

const ic_bigblack = ImgPath.getImgPath('ic_bigblack');

const pic_time = ImgPath.getImgPath('pic_time');

const pic_snow =  ImgPath.getImgPath('pic_snow');

const pic_love_normal = ImgPath.getImgPath('pic_love_normal');

const testImg = ImgPath.getImgPath('slsls');

export class CollectCardDataEntity {
    public author: string = "";         //// 作者   改为项目名称
    public name: string = "";           //// 暂时删除
    public id: string = "5530"; 
    public nftId: string = "";   
    public sId: string = "";   
    public tokenId: string = "";         
    public price: string = "10022222";
    public time: string = "Last";
    public headerImg: string = testImg;
    public lastPrice: string = "";            //// 暂时删除
    public like: string = "99999";
    public isSelected: boolean = false;
    public isShowSupple: boolean = false;
    public isShowNumber: boolean = false;
    public supple: number = 0;
    public maxSupply:string = "10000";
    public index: number = 0;       /// 索引

}

export class CollectListItemCardEntity {

    public leftImg: string = "";        //// 收藏图片/雪花
    public rightImg: string = "";       //// 货币标示/喜欢图片
    public price: string = "";          //// 价格
    public des: string = "";            //// 描述
    public time: string = "";           //// 时间
    public text: string = "";           //// ???

    public static init(leftImg: string, rightImg: string = "", text?:string, price?:string, des?: string, time?:string): CollectListItemCardEntity  {
        const self = new CollectListItemCardEntity();
        self.leftImg = leftImg;
        self.rightImg = rightImg;
        if (!text) self.text = text!;
        if (!des) self.des = des!;
        if (!time) self.text = time!;
        if (!price) self.price = price!;
        
        return self;
    }
}

export class CollectItemsListItemEntity {

    public itemContentData: Array<CollectListItemCardEntity> = [];

    public itemNameCss: string = "collect-content-item-des";

    public itemNormalImg: string = "collect-content-item-normal-img";

    public itemsPriceCss: string = "collect-content-item-price";

    constructor() {
        this.itemContentData.push(CollectListItemCardEntity.init(icon_flower));
        this.itemContentData.push(CollectListItemCardEntity.init(ic_bigblack));
        this.itemContentData.push(CollectListItemCardEntity.init(pic_snow, pic_love_normal));
    }
}