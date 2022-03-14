import {ModalTipParam} from "./ModalTipParam";

Component({
    properties: {}, data: {
        content: "", title: "", btnContent: "", isShow: false,
    }, methods: {
        show(modalTipParam: ModalTipParam) {
            this.setData({
                'title': modalTipParam.title,
                'content': modalTipParam.content,
                'btnContent': modalTipParam.btnContent,
                'isShow': true
            })
        }, hide() {
            this.setData({
                'isShow': false
            })
        }
    }
});