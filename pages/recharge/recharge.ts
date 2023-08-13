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
                name: "中国移动",
                icon: "/assets/中国移动.jpg",
                appId: "wx43aab19a93a3a6f2",
            },
            {
                name: "中国联通",
                icon: "/assets/中国联通.jpg",
                appId: "wx56af9763578b9a93",
            },
            {
                name: "中国电信",
                icon: "/assets/中国电信.jpg",
                appId: "wxd4daf5a66b681275",
            },
            {
                name: "江苏移动",
                icon: "/assets/江苏移动.jpg",
                appId: "wxd1928fe3355057e3",
            },
            {
                name: "江苏联通",
                icon: "/assets/江苏联通.jpg",
                appId: "wxdfd589c14006a67b",
            },
            {
                name: "江苏电信",
                icon: "/assets/江苏电信.jpg",
                appId: "wxa9d6ad7b7a62a74a",
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

        ],
        statusBarHeight: wx.getStorageSync('statusBarHeight'),
    },

    navigateMP(e: any) {
        console.log(e);
        const item = e.currentTarget.dataset.item
        if (item.type) {
            if (item.type === 'url') {
                wx.navigateTo({
                    url: item.url
                })
            }
            return
        }
        wx.navigateToMiniProgram({
            appId: item.appId,
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
