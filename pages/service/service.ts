// index.ts
// 获取应用实例
const app = getApp<IAppOption>();

Page({
  data: {
    list: [
      {
        name: "国家政务服务",
        icon: "/assets/国家政务.jpg",
        appId: "wx2eec5fb00157a603",
      },
      {
        name: "国务院",
        icon: "/assets/国务院.jpg",
        appId: "wxbebb3cdd9b331046",
      },
      {
        name: "移民局",
        icon: "/assets/移民局.jpg",
        appId: "wx4743d5c5f530d265",
      }, {
        name: "苏服办",
        icon: "/assets/苏服办.jpg",
        appId: "wx10721f536f3e1af5",
      },


      {
        name: "江苏医保",
        icon: "/assets/江苏医保.jpg",
        appId: "wxed8fbfb5b4285e98",
      },

      {
        name: "江苏人社",
        icon: "/assets/江苏人社.jpg",
        appId: "wx7aa6ad8c15829d96",
      },
      {
        name: "江苏税务",
        icon: "/assets/江苏税务.jpg",
        appId: "wxc62d206c3112de5a",
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
