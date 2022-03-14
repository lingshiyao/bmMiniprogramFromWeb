import {LanguageConfig} from "../../language/LanguageConfig";

export class HomeBrowseItemEntity {

    public imgSrc: string = '';
    public title: string =  "Art";
    public id: string = "";
    public sId: string = "";

    public static init(imgSrc: string, title: string, id: string): HomeBrowseItemEntity {
        const self: HomeBrowseItemEntity = new HomeBrowseItemEntity();
        self.imgSrc = imgSrc;
        self.title = title;
        self.id = id;
        return self;
    }
}

export class HomeBrowseEntity {

    public title: string = "Browse by category";

    public items: Array<HomeBrowseItemEntity> = [];

    constructor() {

        const languageConfig = LanguageConfig.init();
        const language = languageConfig.changeLanguage();

        this.title = language.HOME_BROWSE_CATEGORY;

        // this.items.push(HomeBrowseItemEntity.init(pic_art, language.HOME_BROWSE_ART,""));
        // this.items.push(HomeBrowseItemEntity.init(pic_music, language.HOME_BROWSE_MUSIC,""));
        // this.items.push(HomeBrowseItemEntity.init(pic_domainnames, language.HOME_BROWSE_DOMAIN_NAMES,""));
        // this.items.push(HomeBrowseItemEntity.init(pic_virtualworlds, language.HOME_BROWSE_VIRTUAL_WORLDS,""));
        // this.items.push(HomeBrowseItemEntity.init(pic_tradingcards, language.HOME_BROWSE_TRADING_CARDS,""));
        // this.items.push(HomeBrowseItemEntity.init(pic_collectibles, language.HOME_BROWSE_TRADING_COLLECTIBLES,""));
    }
} 