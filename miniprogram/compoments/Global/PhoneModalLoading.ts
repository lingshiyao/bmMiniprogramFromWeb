interface ConfirmListener {
    onConfirm(): void;
}

let listener: ConfirmListener;

Component({
    properties: {}, data: {
        isShow: false
    }, methods: {
        show() {
            this.setData({
                'isShow': true
            })
            setTimeout(() => {
                listener.onConfirm();
                // TODO 此处没有动画，所以时间为0
            }, 0);
            return new Promise<any>(resolve => {
                listener = {
                    onConfirm(): void {
                        resolve("");
                    }
                };
            })
        }, hide() {
            this.setData({
                'isShow': false
            })
            setTimeout(() => {
                listener.onConfirm();
                // TODO 此处没有动画，所以时间为0
            }, 0);
            return new Promise<any>(resolve => {
                listener = {
                    onConfirm(): void {
                        resolve("");
                    }
                };
            })
        }
    }
});