import {LanguageCH} from './LanguageCH'
import {Language} from './Language'

export class LanguageConfig {

    public static self: LanguageConfig = new LanguageConfig();

    public static init(): LanguageConfig {
        if (!this.self) {
            this.self = new LanguageConfig();
        }
        return this.self;
    }

    /**
     * 废弃-当前默认为中文
     */
    public changeLanguage(): Language {
        return LanguageCH.init();
    }
}

