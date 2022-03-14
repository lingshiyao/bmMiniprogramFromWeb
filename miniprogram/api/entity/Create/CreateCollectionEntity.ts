import {UploadingEntity} from './UploadingEntity'

import {UserInputEntity} from '../Tools/UserInputEntity'

import {CreateMenusDataEntity, CreateSelectBoxEntity} from './CreateSelectBoxEntity'

import {LanguageConfig} from '../../../language/LanguageConfig'

// import { Language } from '../../language/Language';

export class CreateStoreDataEntity {

    //// logo
    public logoImg: any = null;

    //// banner 图片
    public bannerImg: any = null;

    //// 分类
    public categoryId: string = "";

    //// 店铺类型
    public isBlind: boolean = false;

    //// 输入数组
    public userInputArray: Array<string> = [];
}

export class CreateCollectionEntity {

    public uploadingData: Array<UploadingEntity> = [];

    public userInputData: Array<UserInputEntity> = [];

    ///// 店铺menus
    public menus: CreateSelectBoxEntity = new CreateSelectBoxEntity();

    public isBlind: boolean = false;

    ///// 是否是盲盒 menus
    public isBilndmenus: CreateSelectBoxEntity = new CreateSelectBoxEntity();

    public title: string = "";

    constructor() {

        const languageConfig = LanguageConfig.init();
        const language = languageConfig.changeLanguage();
        this.title = language.CREATE_STORE_TITLE;
        this.menus = CreateSelectBoxEntity.init([], language.NAV_TITLE_CREATE_COLLECTION, language.CREATE_STORE_DESCRIPTION);

        const bilndData = new CreateMenusDataEntity();
        bilndData.id = "1";
        bilndData.name = "普通店铺"
        const bilndData1 = new CreateMenusDataEntity();
        bilndData1.id = "2";
        bilndData1.name = "盲盒店铺"
        this.isBilndmenus = CreateSelectBoxEntity.init([bilndData, bilndData1], "店铺类型", "选择店铺类型");

        this.uploadingData.push(UploadingEntity.init( language.CREATE_LOGO_IMAGE, language.CREATE_LOGO_IMAGE_DESCRIPTION, 350));
        // this.uploadingData.push(UploadingEntity.init("Featured Image", "This image will also be used for featuring you colle));
        this.uploadingData.push(UploadingEntity.init( language.CREATE_BANNER_IMAGE, language.CREATE_BANNER_IMAGE_DESCRIPTION, 1400));

        this.userInputData.push(UserInputEntity.init( language.CREATE_NAME, "", language.CREATE_NAME_PLACEHOLDER, "text"));
        this.userInputData.push(UserInputEntity.init( language.CREATE_EXTERNAL_LINK, language.CREATE_EXTERNAL_LINK_DESCRIPTION, language.CREATE_EXTERNAL_LINK_PLACEHOLDER, "text"));
        this.userInputData.push(UserInputEntity.init( language.CREATE_DESCRIPTION, language.CREATE_DESCRIPTION_DESCRIPTION, language.CREATE_DESCRIPTION_PLACEHOLDER, "textarea"));
        this.userInputData.push(UserInputEntity.init("限量购买", "限制单个用户在本店可购买的作品数量（默认不限制）", "", "text"));
    }

}

