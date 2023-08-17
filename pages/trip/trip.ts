// index.ts
// 获取应用实例
const app = getApp<IAppOption>();

Page({
  data: {
    list: [
      {
        name: "同城旅行",
        icon: "/assets/同城旅行.jpg",
        appId: "wx336dcaf6a1ecf632",
    },
      {
        name: "滴滴出行",
        icon: "/assets/滴滴出行.jpg",
        appId: "wxaf35009675aa0b2a",
      },
      {
        name: "T3",
        icon: "/assets/T3.jpg",
        appId: "wxe241a1d8464bc578",
      }, {
        name: "滴滴代驾",
        icon: "/assets/滴滴代驾.jpg",
        appId: "wxc591d03d429cf06e",
      }, 
      {
        name: "高德代驾",
        icon: "/assets/高德代驾.jpg",
        appId: "wxe56a6314f0b95129",
      }, 
      {
        name: "腾讯出行",
        icon: "/assets/腾讯出行.jpg",
        appId: "wx65cc950f42e8fff1",
      }, 
      {
        name: "南方航空",
        icon: "/assets/南方航空.jpg",
        appId: "wx729238547ac7a14c",
      },  {
        name: "东方航空",
        icon: "/assets/东方航空.jpg",
        appId: "wxc1d4e8f52a93da7e",
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
      path: '/pages/index/index',
    }
  },
});
