import {LanguageConfig} from '../../../language/LanguageConfig'

import {Config} from '../../../Public/Config';

export class NavigationbarTitleItem {

    public css: string = "nav-title";
    public title: string = "";
    public path: string = "";

    public static init(title: string, path: string, css?: string): NavigationbarTitleItem {
        const result: NavigationbarTitleItem = new NavigationbarTitleItem();

        if (!!css) {
            result.css = css;
        }
        result.path = path;
        result.title = title;
        return result;
    }
}

export class NavigationBarEntity {

    /// 标题数组
    public navItems: Array<NavigationbarTitleItem> = [];

    /// 下拉菜单数组
    public loginDownMenu: Array<string> = ["Log In", "Sign Up"];

    /// 创建气泡菜单
    public createDownMenu: Array<string> = ["Create a Collection", "Create New Item"];

    /// 创建气泡菜单
    public userDownMenu: Array<string> = ["用户名", "设置", "退出"];

    constructor() {

        localStorage.setItem(Config.locaLanguage, "ch")
        let language = LanguageConfig.init();
        let l = language.changeLanguage();
        
        this.navItems.push(NavigationbarTitleItem.init(l.NAV_TITLE_HOME, "Home"));
        this.navItems.push(NavigationbarTitleItem.init(l.NAV_TITLE_EXPLORE, "explore"));
        this.navItems.push(NavigationbarTitleItem.init(l.NAV_TITLE_STATS, "Stats"));
        this.navItems.push(NavigationbarTitleItem.init(l.NAV_TITLE_CREATE, "Create"));
        this.navItems.push(NavigationbarTitleItem.init(l.NAV_TITLE_MY, "My"));

        this.loginDownMenu = [l.NAV_TITLE_LOG_IN, l.NAV_TITLE_SIGN_UP];
        this.createDownMenu = [l.NAV_TITLE_CREATE_COLLECTION, l.NAV_TITLE_CREATE_ITEM];
        this.userDownMenu = ["用户名", "设置", "退出"];
    };

}