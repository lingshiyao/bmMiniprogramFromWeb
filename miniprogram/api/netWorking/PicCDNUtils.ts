/**
 * CDN的类型
 */
export type PicCDNType = {
    /**
     * CDN地址
     */
    url: string;
  
    /**
     * CDN的名字
     */
    name: string;
  };
  
  /**
   * 图片的CDN工具
   */
  export class PicCDNUtils {
  
    private static picCDNUtils: PicCDNUtils;
  
    public static getInstance(): PicCDNUtils {
      if (PicCDNUtils.picCDNUtils == null)
        PicCDNUtils.picCDNUtils = new PicCDNUtils();
      return PicCDNUtils.picCDNUtils;
    }
  
    constructor() {
      this.addCDN({
        url: "https://cdn.jsdelivr.net/gh/lingshiyao/shutulian/",
        name: "github",
      });
      this.addCDN({
        url: "/assets/",
        name: "assets",
      });
    }
  
    /**
     * 添加CDN
     *
     * @param cdn
     * @private
     */
    private addCDN(cdn: PicCDNType): void {
      this.CDNList.push(cdn);
    }
  
    /**
     * 获取CDN的地址
     *
     * @private
     */
    private getBaseUrl(): string | null {
      for (let i = 0; i < this.CDNList.length; i++) {
        const item = this.CDNList[i];
        if (item.name === this.chooseCDN) {
          return item.url;
        }
      }
      return null;
    }
  
    private chooseCDN = "assets";
  
    private CDNList: Array<PicCDNType> = [];
  
    /**
     * 获取图片的地址
     * @param picName
     */
    public static getPicUrl(picName: string): string {
      return PicCDNUtils.getInstance().getBaseUrl() + picName;
    }
  
    /**
     * 获取css background需要的代码
     * @param picName
     */
    public static getBackgroundUrlCode(picName: string): string {
      return `url('${PicCDNUtils.getPicUrl(picName)}')`;
    }
  }
  