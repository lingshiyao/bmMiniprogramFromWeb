import {ImgPath} from "../../ImgPath";

export class InfoHeaderImgsEntity {
    public ethLogo: string = ImgPath.getImgPath('icon_eth');
    public flowerLogo: string = ImgPath.getImgPath('icon_flower');
    public headerImg: string = "";
    public buyImgStr: string = ImgPath.getImgPath('ic_wallet_selected');
    public makeOfferImgStr: string = ImgPath.getImgPath('ic_label_normal');
    public defaultImg: string = "";
    public pic_love_normal: string = ImgPath.getImgPath('btn_collect_normal');
    public pic_love_selected: string = ImgPath.getImgPath('btn_collect_selected');
}

export class InfoHeaderItemsEntity {
    public title: string = "Project Name：";
    public content: string = "Muntant Ape Yacht Club";
    public css: string = "itemContent";
    public des: string = "";

    public static init(title: string, content: string, css: string, des: string): InfoHeaderItemsEntity {
        const self = new InfoHeaderItemsEntity();
        self.title = title;
        self.content = content;
        self.css = css;
        self.des = des;
        return self;
    }
}

export class InfoHeaderEntity {

    public infoID: string = "";

    public imgs: InfoHeaderImgsEntity = new InfoHeaderImgsEntity();

    public items: Array<InfoHeaderItemsEntity> = [];

    public isLike: boolean = false;

    public supply: string = "";

    public maxSupply: string = "";

    public uid: string = "";

    public storeid: string = "";

    public showEitdBtn: Boolean = false;
    
    public artName: string = "";

    public price: string = "";

    public storeName: string = "";

    constructor() {
        this.items.push(InfoHeaderItemsEntity.init("", "", "", ""));
        this.items.push(InfoHeaderItemsEntity.init("", "", "", ""));
    }
}