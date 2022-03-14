
export class InfoTransactionEntity {
    public from: string = "0xc352b534e8b987e036";
    public to: string = "0xc352b534e8b987e036";
    public date: string = "2021.05.01";

    public static init(from: string, to: string, date: string): InfoTransactionEntity {
        const self = new InfoTransactionEntity();
        self.from = from;
        self.to = to;
        self.date = date;
        return self;
    }
}