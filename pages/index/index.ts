// index.ts
// 获取应用实例
const app = getApp<IAppOption>();

Page({
    data: {
        list: [
            {
                name: "生活缴费",
                icon: "/assets/生活缴费.jpg",
                appId: "wxd2ade0f25a874ee2",
            },
            {
                name: "手机充值",
                icon: "/assets/手机充值.jpg",
                appId: "wxad3150031786d672",
            },
            {
                name: "微信支付有优惠",
                icon: "/assets/微信支付有优惠.jpg",
                appId: "wxe73c2db202c7eebf",
            },
            {
                name: "网上国网",
                icon: "/assets/网上国网.jpg",
                appId: "wx5899bdb8721621d6",
            },
            {
                name: "国网江苏电力营业厅",
                icon: "/assets/国网江苏电力营业厅.jpg",
                appId: "wx203b37ad2ad5d2a6",
            },
            {
                name: "猫眼专业版",
                icon: "/assets/猫眼专业版.jpg",
                appId: "wx062e4ce8f9690879",
            },
            {
                name: "京东快递",
                icon: "/assets/京东快递.jpg",
                appId: "wx73247c7819d61796",
            },
            {
                name: "今世缘官方商城",
                icon: "/assets/今世缘.jpg",
                appId: "wxde8445002ae37f3a",
            },
            {
                name: "小米Lite",
                icon: "/assets/小米Lite.jpg",
                appId: "wx17ea87763491620f",
            },
            {
                name: "vivo官方商城",
                icon: "/assets/vivo官方商城.jpg",
                appId: "wxe1f948b9ea887b35",
            },
            {
                name: "Apple Store官方商店",
                icon: "/assets/Apple Store.jpg",
                appId: "wxbc25a7df24ae0e6a",
            },
            {
                name: "任天堂官方商城",
                icon: "/assets/switch.jpg",
                appId: "wx9ae051915daf380a",
            },
            {
                name: "索尼中国在线商城",
                icon: "/assets/sony.jpg",
                appId: "wx22ad878506616b67",
            },

            {
                name: "oppo商城",
                icon: "/assets/oppo.jpg",
                appId: "wx9c825da1a7ba062e",
            },

            {
                name: "realme官方商城",
                icon: "/assets/realme.jpg",
                appId: "wx943bceb0027d26fc",
            },
            {
                name: "vivo+",
                icon: "/assets/vivo+.jpg",
                appId: "wxeb4a6201a90783f4",
            },
        ],
        statusBarHeight: wx.getStorageSync('statusBarHeight'),
    },

    navigateMP(e: any) {
        console.log(e);
        wx.navigateToMiniProgram({
            appId: e.currentTarget.dataset.item.appId,
        });
    },
    onLoad() {
        console.log(app, 'app');

        // @ts-ignore
        if (wx.getUserProfile) {
            this.setData({
                canIUseGetUserProfile: true,
            });
        }
    },
    getUserProfile() {
        // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
        wx.getUserProfile({
            desc: "展示用户信息", // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
            success: (res) => {
                console.log(res);
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true,
                });
            },
        });
    },
    getUserInfo(e: any) {
        // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
        console.log(e);
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true,
        });
    },
});
