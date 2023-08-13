// index.ts
// 获取应用实例
const app = getApp<IAppOption>();

Page({
    data: {
        list: [
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
                name: "京东购物",
                icon: "/assets/京东购物.jpg",
                appId: "wx91d27dbf599dff74",
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
                name: "拼多多",
                icon: "/assets/拼多多.jpg",
                appId: "wx32540bd863b27570",
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
    onShareAppMessage() {
        return {
            title: '生活常用小助手',
            path: '/pages/shopping/shopping',
        }
    },
});
