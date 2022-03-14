export class ArtsListEntity {
    public id: string = '';
    public name: string = '';
    public author: string = '';
    public storeName: string = '';
    public address: string = '';
    public createdAt: string = '';
    public artCount: string = '';
    public supplied: string = '';
    public money: number = 0;
}

export class ArtsEntity {

    /// switch 列表
    // public switchList: Array<SwitchBtnEntity> = [];


    public artsList: Array<ArtsListEntity> = [];
}