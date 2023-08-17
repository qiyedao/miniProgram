// index.ts
// 获取应用实例
const app = getApp<IAppOption>();

Page({
  data: {
    list: [
      {
        name: "京东快递",
        icon: "/assets/京东快递.jpg",
        appId: "wx73247c7819d61796",
      }, {
        name: "顺丰快递",
        icon: "/assets/顺丰快递.jpg",
        appId: "wxd4185d00bf7e08ac",
      }, {
        name: "丰巢",
        icon: "/assets/丰巢.jpg",
        appId: "wxf953eb11611bb594",
      }, {
        name: "EMS",
        icon: "/assets/EMS.jpg",
        appId: "wx63e410bc2c6a792e",
      },

      {
        name: "极兔快递",
        icon: "/assets/极兔快递.jpg",
        appId: "wxe37801988179d0a5",
      },
      {
        name: "德邦快递",
        icon: "/assets/德邦快递.jpg",
        appId: "wxa1ebeeb0ed47f0b2",
      }, {
        name: "美团跑腿",
        icon: "/assets/美团跑腿.jpg",
        appId: "wx84d3c06952bb4072",
      }, {
        name: "UU跑腿",
        icon: "/assets/UU跑腿.jpg",
        appId: "wx453615a79bad971f",
      }, {
        name: "货拉拉",
        icon: "/assets/货拉拉.jpg",
        appId: "wxb1a70937ee94c194",
      },

      {
        name: "滴滴货运",
        icon: "/assets/滴滴货运.jpg",
        appId: "wxab1642da834a1339",
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
