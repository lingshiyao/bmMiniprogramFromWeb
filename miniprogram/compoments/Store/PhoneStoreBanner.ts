import {CollectBannerEntity} from "../../api/entity/Collect/CollectBannerEntity";

Component({
    properties: {
        data: {
            type: Object,
            value: new CollectBannerEntity()
        }
    },
    data: {},
    methods: {},
    ready() {
    },
    observers: {
        'data': function (data) {
        }
    }
});