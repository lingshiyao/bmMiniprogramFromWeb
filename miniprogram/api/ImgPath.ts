import {Config} from './Config'

export class ImgPath {

    //// CDN 地址
    // public static imgUrl = "https://cdn.jsdelivr.net/gh/MonkeyDKing/NFT/assets/";
    public static imgUrl = "/assets/";

    public static getImgPath = (imgName: string): string => {
        return this.imgUrl + imgName + ".png";
    }

    /*
    下载接口
    /file?type={number}&id={number}

    test: /file?type=3&id=1

    type 枚举如下
    0(user_face),1(store_icon),2(store_banner),3(art_media)
    */

    //// user_face
    public static getUserFace = (id: string) => {
        return Config.FILE_URL + "?type=0&id=" + id;
    }

    //// store_icon
    public static getSIcon = (id: string) => {
        return Config.FILE_URL + "?type=1&id=" + id;
    }

    //// store_banner
    public static getSBanner = (id: string) => {
        return Config.FILE_URL + "?type=2&id=" + id;
    }

    //// art_media
    public static getMedia = (id: string) => {
        return Config.FILE_URL + "?type=3&id=" + id;
    }
}