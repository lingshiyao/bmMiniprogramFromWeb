import {UploadingEntity} from "./UploadingEntity"

import {CreateAddButtonEntity} from "./CreateAddButtonEntity"

import {UserInputEntity} from '../Tools/UserInputEntity'

import {CreateSelectBoxEntity} from './CreateSelectBoxEntity'

import {LanguageConfig} from '../../../language/LanguageConfig'

// import { Language } from '../../language/Language';


export class CreateItemDataEntity {
    //// logo
    public media: string= "";

    //// logo
    public medias: any = null;

    //// 分类
    public categoryId: string = "";

    //// 输入数组
    public userInputArray: Array<string> = [];

    //// 属性
    public attrs: string = "";
}

export class CreateItemEntity {

    public uploading: UploadingEntity = UploadingEntity.init("", "")

    public menus: CreateSelectBoxEntity = new CreateSelectBoxEntity();

    public properties: CreateAddButtonEntity = CreateAddButtonEntity.init("", "")

    public supply: UserInputEntity = UserInputEntity.init("", "", "1", "text");

    public holdLimit: UserInputEntity = UserInputEntity.init("限量购买（必填）", "限制单个用户可购买的数量", "", "text");

    public mintPrice: UserInputEntity = UserInputEntity.init("Mint Price", "The number of coples that can be minted.No gas cost to you! Quantities above one coming soon.", "1", "text");
    
    public userInputData: Array<UserInputEntity> = [];

    public id: string = "";

    public attrs: string = "";

    public title: string = "";

    constructor() {

        const languageConfig = LanguageConfig.init();
        const language = languageConfig.changeLanguage();
        
        this.title = language.CREATE_ITEM_TITLE;
        this.mintPrice = UserInputEntity.init(language.CREATE_MINT_PRICE, language.CREATE_MINT_PRICE_DESCRIPTION, "1", "text");
        this.properties = CreateAddButtonEntity.init(language.CREATE_PROPERTIES, language.CREATE_PROPERTIES_DESCRIPTION);
        this.supply = UserInputEntity.init(language.CREATE_SUPPLE, language.CREATE_SUPPLE_DESCRIPTION, "1", "text");
        this.menus = CreateSelectBoxEntity.init([], language.CREATE_COLLECTION, language.CREATE_COLLECTION_DESCRIPTION);
        this.uploading  = UploadingEntity.init(language.CREATE_IMAGE, language.CREATE_IMAGE_DESCRIPTION)
        this.userInputData.push(UserInputEntity.init(language.CREATE_ITEM_NAME, "", language.CREATE_ITEM_NAME_PLACEHOLDER, "text"));
        this.userInputData.push(UserInputEntity.init(language.CREATE_ITEM_EXTERNAL_LINK, language.CREATE_ITEM_EXTERNAL_LINK_DESCRIPTION, language.CREATE_EXTERNAL_LINK_PLACEHOLDER, "text"));
        this.userInputData.push(UserInputEntity.init(language.CREATE_ITEM_DESCRIPTION, language.CREATE_ITEM_DESCRIPTION_DESCRIPTION, language.CREATE_DESCRIPTION_PLACEHOLDER, "textarea"));
    }
}