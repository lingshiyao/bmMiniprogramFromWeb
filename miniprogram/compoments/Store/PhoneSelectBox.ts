import {SelectBoxEntity} from "../../api/entity/Tools/SelectBoxEntity";
import {ImgPath} from "../../api/ImgPath";

const more_normal = ImgPath.getImgPath('btn_more_normal');

const more_selected = ImgPath.getImgPath('btn_more_selected');

Component({
    properties: {
        menuData: {
            type: Object, value: new SelectBoxEntity(),
        }
    }, data: {
        /**
         * 是否显示菜单
         */
        isShowMenu: false,

        /**
         * 箭头图片
         */
        menuMoreImg: ImgPath.getImgPath('btn_more_normal'),

        /**
         * 菜单第一个选项
         */
        fistTitle: ""
    }, methods: {
        /**
         * 改变箭头图片
         */
        changeImg() {
            if (this.data.isShowMenu === true) {
                this.setData({
                    'menuMoreImg': more_selected
                })
            } else {
                this.setData({
                    'menuMoreImg': more_normal
                })
            }
        }, disMiss() {
            this.setData({
                'isShowMenu': false
            })
            this.changeImg();
        },

        /**
         * 选择菜单
         * @param item
         * @param index
         */
        menuAction(event: any) {
            const index = event.currentTarget.dataset.index;
            const item = event.currentTarget.dataset.item;
            this.setData({
                'fistTitle': item
            })
            this.showMenuAction(item, this.properties.menuData.id, index);
        },

        /**
         * 展示菜单
         * @param key
         * @param id
         * @param index
         */
        showMenuAction(key: string, id: string, index: number) {
            this.clickCallBack(key, this.properties.menuData.id, index)
            this.setData({
                'isShowMenu': !this.data.isShowMenu
            })
            this.changeImg()
        }, clickCallBack(key: string, id: string, index: number) {
            // FIXME 未写逻辑
        }
    }, ready() {
        this.setData({
            'isShowMenu': this.properties.menuData.showMenu, 'fistTitle': this.properties.menuData.menu[0]
        })
    }, observers: {
        'menuData': function (menuData) {
            this.setData({
                'isShowMenu': menuData.showMenu
            })
            this.setData({
                'fistTitle': menuData.menu[0]
            })
            this.changeImg();
        }
    }
});


// FIXME
//
// /// 确认选择回调
// const emit = defineEmits<{
//     (e: 'clickCallBack', key: string, id: string, index: number): void,
// }>();
//
// /// 返回选择的菜单选项
// const clickCallBack = (key: string, id: string, index: number) => emit('clickCallBack', key, id, index);