const pic_arrow_normal = ImgPath.getImgPath('pic_arrow_normal');

const pic_arrow_selected = ImgPath.getImgPath('pic_arrow_selected');

import {ImgPath} from "../../ImgPath";

const pic_web_normal = ImgPath.getImgPath('pic_web_normal');

const pic_web_selected = ImgPath.getImgPath('pic_web_selected');

const pic_discord_normal = ImgPath.getImgPath('pic_discord_normal');

const pic_discord_selected = ImgPath.getImgPath('pic_discord_selected');

const pic_instagram_fill_normal = ImgPath.getImgPath('pic_instagram_fill_normal');

const pic_instagram_fill_selected = ImgPath.getImgPath('pic_instagram_fill_selected');

const pic_twitter_normal = ImgPath.getImgPath('pic_twitter_normal');

const pic_twitter_selected = ImgPath.getImgPath('pic_twitter_selected');

const pic_more_selected = ImgPath.getImgPath('pic_more_selected');

export class CollectBannerItemEntity {
    public normal: string = '';
    public select: string = '';

    public static init(normal: string, select: string): CollectBannerItemEntity {
        const self = new CollectBannerItemEntity();
        self.normal = normal;
        self.select = select;
        return self;
    }
}

export class CollectBannerContentEntity {
    public title: string = 'floor price';
    public num: string = '34.96';

    public static init(title: string, num: string): CollectBannerContentEntity {
        const self = new CollectBannerContentEntity();
        self.title = title;
        self.num = num;
        return self;
    }
}

export class CollectBannerEntity {
    //// 简介
    public introduction: string = "";
    //// 项目名称
    public projectName: string = "";
    //// 作者
    public projectAuthor: string = "";
    //// 最后更新时间
    public projectTime: string = "";
    //// 图标
    public headerImg: string = "";
    //// nts
    public items: Array<CollectBannerItemEntity> = [];
    //// 销售额。。。。。
    public contents: Array<CollectBannerContentEntity> = [];
    //// 背景图
    public banner: string = "";
    //// 店铺id
    public storeId: string = "";
    //// uid
    public uid: string = "";
    //// URL
    public url: string = "";
    //// 是否是盲盒店铺
    public isBlind: boolean = false;

    constructor() {
        // this.items.push(CollectBannerItemEntity.init(pic_arrow_normal, pic_arrow_selected));
        this.items.push(CollectBannerItemEntity.init(pic_web_normal, pic_web_selected));
        // this.items.push(CollectBannerItemEntity.init(pic_discord_normal, pic_discord_selected));
        // this.items.push(CollectBannerItemEntity.init(pic_instagram_fill_normal, pic_instagram_fill_selected));
        // this.items.push(CollectBannerItemEntity.init(pic_twitter_normal, pic_twitter_selected));
        this.items.push(CollectBannerItemEntity.init(pic_more_selected, pic_more_selected));

        this.contents.push(CollectBannerContentEntity.init('发行数量', '0'));
        this.contents.push(CollectBannerContentEntity.init('总拥有者', '0'));
        this.contents.push(CollectBannerContentEntity.init('已售数量', '0'));
        this.contents.push(CollectBannerContentEntity.init('总销售额', '0'));
    }
}