import {AppConstant} from "../AppConstant";

export class ImgPathUtils {

    public static getUserFace = (id: string) => {
        return AppConstant.FILE_URL + "?type=0&id=" + id;
    }

    public static getStoreIcon = (id: string | undefined) => {
        return AppConstant.FILE_URL + "?type=1&id=" + id;
    }

    public static getStoreBanner = (id: string) => {
        return AppConstant.FILE_URL + "?type=2&id=" + id;
    }

    public static getMedia = (id: string | undefined) => {
        return AppConstant.FILE_URL + "?type=3&id=" + id;
    }
}