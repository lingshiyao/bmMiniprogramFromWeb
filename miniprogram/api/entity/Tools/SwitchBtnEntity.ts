

export class SwitchBtnEntity {

    public normal_img: string = "";
    public select_img: string = "";
    public title: string = "";
    public id: string = "";
    public order: string = ""

    public static init(normal_img: string, select_img: string, title: string): SwitchBtnEntity {
        const self = new SwitchBtnEntity();
        self.normal_img = normal_img;
        self.select_img = select_img;
        self.title = title;
        return self;
    }
}