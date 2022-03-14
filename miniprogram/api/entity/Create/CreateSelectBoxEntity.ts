

export class CreateMenusDataEntity {
    public name: string = "";
    public id: string = "";
}

export class CreateSelectBoxEntity {

    public menusData: Array<CreateMenusDataEntity> = [];

    public title: string = "Collection";

    public details: string = "This is the collection where your item will appear.";

    public static init(menusData: Array<CreateMenusDataEntity>, title: string = "", details: string = ""): CreateSelectBoxEntity {
        const self = new CreateSelectBoxEntity();
        self.menusData = menusData;
        self.details = details;
        self.title = title;
        return self
    }
}