Component({
    properties: {
        src: {
            type: String,
            value: "",
        }
    },
    data: {
        loading:true
    },
    methods: {
        onLoadingSuccess() {
            this.setData({
                'loading': false,
            })
            console.log("load success")
        },
        onLoadingError() {
            console.log("error")
        }
    }
});
