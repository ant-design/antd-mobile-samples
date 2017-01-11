import { FetchHttp, FetchHttpResource } from '../lib/es6-http-utils';
import Util from '../helpers/util'
import { GLOBAL_API_DOMAIN } from './config'

FetchHttp.defaultConfigs.interceptors.push({
    request(request) {
        if (request.method == 'GET') {
            // if (request.params) {
            //     request.params.time = new Date().getTime()
            //     request.params.source = appState.thePlatform
            // }
            // else {
            //     request.params = {
            //         time: new Date().getTime(),
            //         source: appState.thePlatform
            //     }
            // }
        } else {
            // request.data = {
            //     time: new Date().getTime(),
            //     source: appState.thePlatform,
            //     data: request.data
            // }
        }
        // if (Util.getLocalStorageInfo('HMC_ACCESS_TOKEN')) {
        //     request.headers.accessToken = Util.getLocalStorageInfo('HMC_ACCESS_TOKEN').accessToken
        // }
        return request;
    },
    reqeustError(request) {
        return request;
    },
    async response(response) {
        response.responseData = await response.json()
            // if (response.responseData.status == 0 && (response.responseData.errorcode == 'P-1012' || response.responseData.errorcode == 'P-1013')) {
            //     window.appHistory.push(`${appState.city}/login`)
            // }
        return response;
    },
    responseError(response) {
        console.log('responseError', response)
        return response;
    }
});
// FetchHttp.defaultConfigs.requestTransformers.push((data, headersGetter, status) => {
//     return data;
// });

// FetchHttp.defaultConfigs.responseTransformers.push((data, headersGetter, status) => {
//     return data;
// });
const Api = new FetchHttpResource(GLOBAL_API_DOMAIN, {}, {
    // login: {//用户登录
    //     method: 'POST',
    //     url: '/user/member/login'
    // },
    // register: {//用户注册
    //     method: 'POST',
    //     url: "/user/member/register"
    // },
    // getSmscode: {//获取短信验证码
    //     method: "POST",
    //     url: "/user/member/sms-code"
    // },
    // checkIsOldUser: {//验证是否老用户
    //     method: "POST",
    //     url: "/user/member/validate-phone"
    // },
    // getAccessTokenByRefreshToken: {//通过refreshToken获取新的accessToken和refreshToken
    //     method: "POST",
    //     url: "/user/member/refresh-token"
    // },
    // getUserCenterTrackActivity: {//我的信息
    //     method: "POST",
    //     url: "/user/member/user-info"
    // },
    encrypt: {
        method: "GET",
        url: "/encrypt/:str"
    },
    // updateDsCarSubscribeStatus: {//更新我的订阅状态
    //     method: "PUT",
    //     url: "/user/member/subscribe-state"
    // },
    // getDsCarSubscribePriceHistroy: {//获取订阅款型价格记录
    //     method: "GET",
    //     url: "/user/member/subscribe-modelprice/:subscribeId"
    // },
    // getUserCenterFavorite: {//获取我的收藏列表
    //     method: "GET",
    //     url: "/user/member/favorites"
    // },
    // getSubscribeFavoriteFlag: {//获取直销车订阅收藏状态
    //     method: "GET",
    //     url: "/user/member/subscribe-favorite-flag"
    // },
    // addDsCarSubscribe: {//添加订阅
    //     method: "POST",
    //     url: "/user/member/subscribe"
    // },
    // removeDsCarSubscribe: {//取消订阅
    //     method: "DELETE",
    //     url: "/user/member/site-subsrcribe/:modelId"
    // },
    // addDsCarFavorites: {//添加收藏
    //     method: "POST",
    //     url: "/user/member/favorites"
    // },
    // removeDsCarFavorites: {//取消收藏
    //     method: "DELETE",
    //     url: "/user/member/favorites/:modelId"
    // },
    // getOrderOfferPriceTopInfo: {//报价单头部信息
    //     method: "GET",
    //     url: "/ask/:askpId"
    // },
    // getOrderOfferPriceDetail: {//报价单详情
    //     method: "GET",
    //     url: "/respond/ask/:askpId/2"
    // },
    // getOrderOfferAskDetail: {//订单详情
    //     method: "GET",
    //     url: "/order/:orderType/:orderId"
    // },
    // getPriceOrderList: {//报价单列表
    //     method: "GET",
    //     url: "/ask"
    // },
    // getShopComment: {//获取4S店评分
    //     method: "GET",
    //     url: "/merchant/fs/:shopId/commentCount"
    // },
    // getBanner: {//获取banner图片
    //     method: "GET",
    //     url: "/advert/:cityCode/1/:advertPageType"
    // },
    // submitProcurement: {//发送代购请求
    //     method: "POST",
    //     url: "/user/member/purchase/:cityCode"
    // },
    // fetchRecommandDirectSaleCarList: {
    //     method: "GET",
    //     url: "/ware/ds/car/recommend/:cityCode"
    // },
    // doCreatePayRequest: {//发送支付请求
    //     method: "POST",
    //     url: "/pay/before"
    // },
    // getPayDetail: {
    //     method: "GET",
    //     url: "/pay/proof/:subject/:orderId"
    // },
    // sendUnsubsribe: {
    //     method: "POST",
    //     url: "/order/apply"
    // },
    // getPriceCurveData: {
    //     method: "GET",
    //     url: "/ware/car/pricecurve/:cityCode/:carTypeId"
    // },
    // fetchCarConfigurationData: {
    //     method: "GET",
    //     url: "/ware/car/:cityCode/car-type/:currentCarTypeId/config"
    // },
    // getSearchSuggetsion: {
    //     method: "GET",
    //     url: "/ware/car/:cityCode/car-type"
    // },
    // getCarParityTopInfo: {//获取比价车顶部基本信息
    //     method: "GET",
    //     url: "/ware/car/:cityCode/car-type/:typeId"
    // },
    // getCarParityImages: {//获取比价车图片列表
    //     method: "GET",
    //     url: "/ware/car/:cityCode/car-type/:typeId/pic"
    // },
    // getCarParityModelList: {//获取比价车款型列表
    //     method: "GET",
    //     url: "/ware/car/:cityCode/car-type/:typeId/car-model/ask"
    // },
    // getCarParityHistoryPrice: {//获取历史比价案例列表
    //     method: "GET",
    //     url: "/respond/show/:cityCode/:typeId"
    // },
    // getCarParityUserHistory: {//获取比价车用户晒单列表
    //     method: "GET",
    //     url: "/user/member/timeline/:cityCode"
    // },
    // getCarParityColors: {//获取比价车颜色列表
    //     method: "GET",
    //     url: "/ware/car/:cityCode/car-type/:typeId/model/:modelId/color"
    // },
    // getCarParityLicenses: {//获取比价车牌照列表
    //     method: "GET",
    //     url: "/ask/license/:cityCode"
    // },
    // getCarParityRegionsFirst: {//首次获取比价车区域列表
    //     method: "GET",
    //     url: "/area/city-region-business-district"
    // },
    // getCarParityRegions: {//获取比价车区域列表
    //     method: "GET",
    //     url: "/area/city/:cityCode/region"
    // },
    // getCarParityBusinessDistrict: {//获取热点区域列表
    //     method: "GET",
    //     url: "/area/city/region/:regionId/business-district"
    // },
    // getCarParityMerchants: {//获取比价车4s店列表
    //     method: "GET",
    //     url: "/merchant/fs/:cityCode/fsInfo/position"
    // },
    // submitParity: {//发送比价请求
    //     method: "POST",
    //     url: "/ask"
    // },
    // getCarConfiguration: {//获取车型配置详情
    //     method: "GET",
    //     url: "/ware/car/:cityCode/car-type/:typeId/model/:modelId/config"
    // },
    // fetchAskOrderListData: {
    //     method: "GET",
    //     url: "/order"
    // },
    // getDirectSaleDetailImageData: {
    //     method: "GET",
    //     url: "/ware/ds/car/:currentCarTypeId/photo"
    // },
    // getDsCarTopInfo: {
    //     method: "GET",
    //     url: "/ware/ds/car/:directSaleCarTypeId/:cityCode"
    // },
    // getCarPriceChart: {
    //     method: "GET",
    //     url: "/ware/ds/car/priceCurve/:currentCarModelId"
    // },
    // getCarListByFilter: {
    //     method: "GET",
    //     url: "/ware/ds/:cityCode/car"
    // },
    // getCarFilterOptionsData: {
    //     method: "GET",
    //     url: "/ware/ds/car/brand/:cityCode"
    // },
    // fetchDirectSaleCarSaleOptions: {
    //     method: "GET",
    //     url: "/ware/ds/car/purintent/:directSaleCarModelId/:licenseType/:cityCode"
    // },
    // saveOrder: {
    //     method: "POST",
    //     url: "/ds/trade/purchaseintent"
    // },
    // getHotCarList: {
    //     method: "GET",
    //     url: "/ware/car/hot-car/:cityCode"
    // },
    // getBrandList: {
    //     method: "GET",
    //     url: "/ware/car/car-brand/:cityCode"
    // },
    // fetchOrderPaiedResult: {
    //     method: "POST",
    //     url: "/pay/proof/2/:orderId"
    // },
    // cutPrice: {
    //     method: "POST",
    //     url: "/respond/cutPrice"
    // },
    // doLike: {
    //     method: "POST",
    //     url: "/merchant/fs/:commentFs/comment/:commentFk"
    // },
    // fetchCollect: {
    //     method: "POST",
    //     url: "/buriedPoint/data"
    // },
    // getUserLocation: {
    //     method: "GET",
    //     url: "/area/cityCode"
    // },
    // getCarModelListData: {
    //     method: "GET",
    //     url: "/ware/car/:cityCode/:carBrandId/car-type"
    // },
})
export default Api