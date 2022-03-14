
export class LoginViewEntity {

    public placeholders: Array<string> = ["1", "2"];

    public title: string = "Login";

    public static init (placeholders: Array<string>, title: string): LoginViewEntity {
        const result: LoginViewEntity = new LoginViewEntity();
        result.placeholders = placeholders;
        result.title = title;
        return result;
    }

}