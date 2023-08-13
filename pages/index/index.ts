// index.ts
// 获取应用实例
const app = getApp<IAppOption>();

Page({
    data: {
        list: [
            {
                name: "充值",
                icon: "/assets/充值.svg",
                type: 'url',
                url: "/pages/recharge/recharge",
            },

            {
                name: "娱乐",
                icon: "/assets/娱乐.svg",
                type: 'url',
                url: "/pages/enjoy/enjoy",
            },
            {
                name: "购物",
                icon: "/assets/购物.svg",
                type: 'url',
                url: "/pages/shopping/shopping",
            },
            {
                name: "微信支付有优惠",
                icon: "/assets/微信支付有优惠.jpg",
                appId: "wxe73c2db202c7eebf",
            },

            {
                name: "上海车展",
                icon: "/assets/上海车展.jpg",
                appId: "wx9659f424c6057c54",
            },
            {
                name: "小程序助手",
                icon: "/assets/小程序助手.jpg",
                appId: "wxcff7381e631cf54e",
            },
            // {
            //     name: "开发",
            //     icon: "/assets/开发.svg",
            //     type: 'url',
            //     url: "/pages/develop/develop",

            // },

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
    onShareAppMessage() {
        return {
            title: '生活常用小助手',
            path: '/pages/index/index',
        }
    },
});
