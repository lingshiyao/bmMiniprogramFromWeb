import {LanguageConfig} from '../../../language/LanguageConfig'

export class HomeBannerLeftEntity {

    public title: string = "Discover，collect，and sell extraordinary NFTs";

    public titleContent: string = "on the world's first & largest NFT marketplace";

    public news: string = "Learn more about Digital Exchange";

    public explore: string = "Explore";

    public create: string = "Create";

    constructor() {

        const languageConfig = LanguageConfig.init();
        const language = languageConfig.changeLanguage();

        /////////// 获取本地 语言
        this.title = language.HOME_BANNER_LEFT_TITLE;
        this.titleContent = language.HOME_BANNER_LEFT_TITLE_CONTENT;
        this.news = language.HOME_BANNER_LEFT_NEWS;
        this.explore = language.HOME_BANNER_LEFT_EXPLORE;
        this.create = language.HOME_BANNER_LEFT_CREATE;
    }


}