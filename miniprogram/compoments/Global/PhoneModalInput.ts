import {ModalInputParam} from "./ModalInputParam";

interface ConfirmListener {
    onConfirm(data: Array<string>): void;

    onCancel(): void;
}

let listener: ConfirmListener;

Component({
    properties: {},
    data: {
        modalInputParam: {
            defaultValue: [],
            inputPlaceholder: [],
            submitContent: "",
            title: "",
        },
        isShow: false,
        inputs: []
    },
    methods: {
        show(_modalInputParam: ModalInputParam) {
            this.setData({
                'isShow': true
            })
            this.setData({
                'modalInputParam': _modalInputParam
            })

            const inputsT = [];
            for (let i = 0; i < _modalInputParam.inputPlaceholder.length; i++) {
                inputsT.push(_modalInputParam.defaultValue[i]);
            }
            this.setData({
                'inputs': inputsT
            })
            return new Promise<Array<string> | null>((resolve) => {
                listener = {
                    onConfirm: (data: Array<string>): void => {
                        console.log(data)
                        resolve(data);
                    }, onCancel: (): void => {
                        resolve(null);
                    },
                };
            });
        },
        submit() {
            this.setData({
                'isShow': false
            })
            setTimeout(() => {
                console.log(this.data.inputs)
                listener.onConfirm(this.data.inputs);
                const inputsT = this.data.inputs;
                for (let i = 0; i < inputsT.length; i++) {
                    inputsT[i] = "";
                }
                this.setData({
                    'inputs': inputsT
                })
                // TODO 此处不需要等待，当前没有动画
            }, 0)
        },
        cancel() {
            this.setData({
                'isShow': false
            })
            setTimeout(() => {
                listener.onCancel();
            }, 500)
        },
        myInput(e: any) {
            const index:number = e.currentTarget.dataset.index;
            const txt:string = e.detail.value;
            const inputT = this.data.inputs;
            inputT[index] = txt;
            this.setData({
                'input': inputT
            })
        }
    }
});