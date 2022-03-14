import {SwitchBtnEntity} from '../Tools/SwitchBtnEntity'

export class StroesListEntity {
    public id: string = '' ;
    public name: string = '';
    public icon: string = '';
    public username: string = '';
    public address: string = '';
    public createdAt: string = '';
    public artCount: string = '';
    public money: string = '';
}

export class StroesEntity {
    
    /// switch 列表
    public switchList: Array<SwitchBtnEntity> = [];

    /// 
    public stroesList: Array<StroesListEntity> = [];

}