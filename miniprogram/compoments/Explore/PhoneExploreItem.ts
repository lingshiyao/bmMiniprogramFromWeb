import {MyCollectionsItemEntity} from "../../api/entity/My/MyCollectionsItemEntity";

Component({
    properties: {
        data: {
            type: Object, value: new MyCollectionsItemEntity()
        }
    }, data: {}, methods: {},
    ready() {
    },
    observers: {
        'data': function (data) {
        }
    }
});