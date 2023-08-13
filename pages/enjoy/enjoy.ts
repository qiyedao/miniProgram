// index.ts
// 获取应用实例
const app = getApp<IAppOption>();

Page({
    data: {
        list: [



            {
                name: "猫眼",
                icon: "/assets/猫眼.jpg",
                appId: "wxdbb4c5f1b8ee7da1",
            },
            {
                name: "猫眼专业版",
                icon: "/assets/猫眼专业版.jpg",
                appId: "wx062e4ce8f9690879",
            },


            {
                name: "大麦",
                icon: "/assets/大麦.jpg",
                appId: "wx938b41d0d7e8def0",
            },
            {
                name: "同城旅行",
                icon: "/assets/同城旅行.jpg",
                appId: "wx336dcaf6a1ecf632",
            },
            {
                name: "美团",
                icon: "/assets/美团.jpg",
                appId: "wxde8ac0a21135c07d",
            },

            {
                name: "肯德基",
                icon: "/assets/肯德基.jpg",
                appId: "wx23dde3ba32269caa",
            },
            {
                name: "麦当劳",
                icon: "/assets/麦当劳.jpg",
                appId: "wx25f982a55e60a540",
            },
            {
                name: "上海车展",
                icon: "/assets/上海车展.jpg",
                appId: "wx9659f424c6057c54",
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
    onShareAppMessage() {
        return {
            title: '生活常用小助手',
            path: '/pages/enjoy/enjoy',
        }
    },
});
