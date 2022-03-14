// import {InfoTransactionEntity} from '../../web/components/Info/InfoTransactionEntity'
// import {InfoHeaderEntity} from '../../web/components/Info/InfoHeaderEntity'
////// netWorking
// import {
//   art,
//   artStat,
//   favExists,
//   favoriteToggle,
//   mint,
//   wxJsapiOpenId,
//   wxJsapiPayParams
// } from '../../netWorking/netWorking'
// import {ImgPath} from "../../Public/ImgPath";
// import {WeiXinApi} from '../../netWorking/WeiXinApi';
// // import { PhoneLog } from "../components/Global/PhoneLog";
// import {WxPay} from "../../netWorking/WxPay";
// import {weiXinPayInit} from "../../netWorking/WeiXinPay";

import {request} from "../api/Api";
import {InfoHeaderEntity} from "../api/entity/Info/InfoHeaderEntity";
import {ImgPath} from "../api/ImgPath";
import {UserSet} from "../api/UserSet";

const NULL:any = null;

//FIXME
// var openId: string | null = null;


Page({
  data: {
    /**
     * 艺术品 模型
     */
    nft:new InfoHeaderEntity(),
    phoneModalLoading:NULL,
    phoneModalTips:NULL,
    /**
     * 属性 json
     */
    attributes:{},

    /**
     * 属性 json 数量
     */
    attributesNumber:"",

    /**
     * 描述
     */
    description:"",

    options: NULL
  },
  onLoad(options) {
    (async () => {
      this.setData({
        'options': options
      })
      // 获取 单个艺术品
      await this.initOpenId();
      // FIXME
      // await weiXinPayInit();
      await this.getArt();
    })();
  },
  async initOpenId() {
    // //FIXME
    // const wxCode = WxPay.getWxCode(window.location.href);
    // if (wxCode) {
    //   let res = await wxJsapiOpenId(wxCode);
    //   if (res.code === "0") {
    //     openId = res.data.wxJsapiOpenId.openid;
    //   } else {
    //     phoneModalTips.value.show({ btnContent: "确认", content: res, title: "错误" });
    //   }
    // }
  },
  /**
   * 获取 单个艺术品
   * @param artId 艺术品 id
   */
  async getArt() {
    // FIXME

    // 获取 艺术品 id
    const artId = this.options.id;

    // 获取 getUserInfo
    const user = await UserSet.getUserInfo();
    if (artId) {
      const art = await request.art({artId: <string>artId}, true)
      if (art) {
        const nftT = this.data.nft;
        // id
        nftT.infoID = art.id;
        // 店铺id
        nftT.storeid = art.stores[0].id;
        nftT.supply = art.supplied.toString();
        nftT.maxSupply = art.maxSupply.toString();
        // get openid 如果 openid 不存在 并且 art 价格 大于 0 ，才去跳转 获取 openid
        if (!this.data.openId &&
            Number.parseFloat(art.mintPrice) > 0 &&
            (art.maxSupply - art.supplied > 0)) {

          // FIXME
          // // art id
          // const artId = art.id;
          // // store id
          // const storeId = this.options.sid;
          // location.href = WeiXinApi.getAuthorizePath({ artId, storeId });
          // return;
        }
        // art 的作者
        nftT.uid = art.stores[0].user.id;
        // icon
        nftT.imgs.headerImg = ImgPath.getMedia(art.id);
        nftT.artName = art.name;
        nftT.price = art.mintPrice;
        nftT.storeName = art.stores[0].name;

        // if (user) {
        //   if (user.id === nftT.uid) {
        //     ////// 如果当前用户是该art的创作者，就可以修改该art
        //     nftT.showEitdBtn = true;
        //   }
        // }

        // 获取属性
        if (art.attrs) {
          this.setData({
            'attributes':art.attrs
          })
          this.getArtStat();
        }

        // 获取描述
        this.setData({
          'description': art.description
        })

        // 获取该 nft 是否 被收藏过
        if (user) {
          this.getFavExists();
        }

        this.setData({
          'nft': nftT
        })
      } else {

      }
    }
  },
  async getArtStat() {
    // FIXME
    // ///// 获取 艺术品 id
    // const artId = router.currentRoute.value.query.id;
    // const res = await artStat(<string>artId);
    // if (res.code === "0") {
    //   ///// 获取属性
    //   if (res.data.artStat) {
    //     attributesNumber.value = res.data.artStat;
    //   } else {
    //     attributesNumber.value = JSON.parse('{"": ""}');
    //   }
    // }
  },

  /**
   * 收藏或取消收藏作品
   * @param artid
   */
  async likeAction(nftId: string) {
    // FIXME
    // const res = await favoriteToggle(nftId);
    // if (res.code === "0") {
    //   nft.value.isLike = !nft.value.isLike
    // } else {
    //   Public.navigationBar.showLoginAction();
    // }
  },

  /**
   * 收藏品是否被收藏过
   * @param artid
   */
  async getFavExists() {
    // FIXME
    // const user = UserSet.getUserInfo();
    // const res = await favExists(user.user.id, nft.value.infoID);
    // if (res.code === "0") {
    //   nft.value.isLike = res.data.favExists;
    // } else {
    //   Public.navigationBar.showLoginAction();
    // }
  },

  /**
   *  点击 购买 或者 修改商品
   *  @param 类型
   */
  btnAction(type: number) {
    // FIXME
    // switch (type) {
    //   case 0:   ////// 购买
    //     mintArts()
    //     break;
    //   case 1:   ////// 修改
    //     // const user = UserSet.getUserInfo();
    //     goToPage("create", "item", <string>router.currentRoute.value.query.id);
    //     break;
    //   default:
    //     break;
    // }
  },

  /**
   *  铸造
   *  @param 类型
   */
  async mintArts() {
    // FIXME
    // // 如果 token === null 就弹出登录
    // if (UserSet.getToken() === null) {
    //   Public.ifPhoneAppGotoLogin();
    //   return;
    // }
    //
    // const artId = nft.value.infoID;                               ///// art id
    // const storeId = <string>router.currentRoute.value.query.sid;  ///// store id
    // var openID = openId;                                          ///// openId
    //
    // // get openid 如果 openid 不存在 并且 art 价格 大于 0 ，才去跳转 获取 openid
    // // if (!openId && Number.parseFloat(nft.value.price) > 0) {
    // //   location.href = WeiXinApi.getAuthorizePath({ artId, storeId });
    // //   return;
    // // }
    //
    // /// 如果 是免费的 openid 就 置空
    // if (Number.parseFloat(nft.value.price) <= 0) {
    //   openID = "";
    // }
    //
    // await phoneModalLoading.value.show();
    //
    // const res = await mint(artId, storeId, "WX_JS_API", <string>openID);
    // if (res.code === "0") {
    //   /// 如果 价格为 0 跳转到订单页面
    //   if (!res.data.mint.needPay) {
    //     goToPage("phone/home", "3");
    //   } else {
    //     const wxParams = await wxJsapiPayParams(res.data.mint.tradeReturn.prepay_id);
    //
    //     const _window: any = window;
    //
    //     await _window.___weixinPay(
    //         wxParams.data.wxJsapiPayParams.appId,
    //         wxParams.data.wxJsapiPayParams.timeStamp,
    //         wxParams.data.wxJsapiPayParams.nonceStr.toString(),
    //         wxParams.data.wxJsapiPayParams.package,
    //         wxParams.data.wxJsapiPayParams.signType,
    //         wxParams.data.wxJsapiPayParams.paySign,
    //         function (r: any) {
    //           if (r.err_msg == "get_brand_wcpay_request:ok") {
    //             goToPage("phone/home", "3");
    //           }
    //         }
    //     )
    //     await phoneModalLoading.value.hide();
    //   }
    // } else {
    //   await phoneModalLoading.value.hide();
    //   phoneModalTips.value.show({ btnContent: "确认", content: res.error.message, title: "错误" });
    // }
  },
  /**
   *  点击 进入 所属店铺
   */
  gotoStore() {
    // FIXME
    // if (nft.value.storeid) {
    //   goToPage("collected", nft.value.storeid);
    // }
  },

  /**
   * 页面跳转
   * @param path ///// 跳转地址
   * @param id   ///// 跳转id
   */
  goToPage(path: string, id?: string, storeId?: string) {
    // FIXME
    // const l_path = `/${path.toLocaleLowerCase()}`
    // if (id) {
    //   router.push({
    //     path: l_path,
    //     query: {
    //       id: id!,
    //     }
    //   })
    //   if (storeId) {
    //     router.push({
    //       path: l_path,
    //       query: {
    //         id: id!,
    //         sid: storeId!
    //       }
    //     })
    //   }
    // } else {
    //   router.push({
    //     path: l_path
    //   })
    // }
  },

  bottomAction(index: number) {
    // FIXME
    // switch (index) {
    //   case 1:             //// 收藏
    //     likeAction(<string>router.currentRoute.value.query.id);
    //     break;
    //
    //   case 2:             //// 修改
    //     // const user = UserSet.getUserInfo();
    //     // goToPage("create", "item", <string>router.currentRoute.value.query.id);
    //     break;
    //
    //   case 3:             //// 铸造
    //     mintArts();
    //     break;
    //
    //   default:
    //     break;
    // }
  },
  /**
   * 进入店铺
   */
  goToStore() {
    // TODO 未验证
    // router.push({
    //   path: "/phone/store",
    //   query: {
    //     id: nft.value.storeid
    //   }
    // })
    wx.navigateTo({
      url: `/pages/PhoneStorePage?id=${this.data.nft.storeid}`,
    })
  }


});
