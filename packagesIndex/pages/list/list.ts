// packagesIndex/pages/list/list.ts
import config from "../../../config/index";

Page({
    /**
     * 页面的初始数据
     */
    data: {
        refresherBackground: config.theme.backgroundColor,
        active: 1,
        _freshing: false,
        tabs: [
            {
                title: "待处理",
                key: 0
            },
            {
                title: "处理中",
                key: 1
            },
            {
                title: "已完成",
                key: 2
            },
        ],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() { },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() { },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() { },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() { },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() { },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {
        console.log('onPullDownRefresh');

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() { },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() { },
    /**
    * 页面相关事件处理函数--监听用户下拉动作
    */
    onPulling(e) {
        console.log('onPulling:', e)
    },

    onRefresh() {
        console.log('onRefresh:',)
        if (this.data._freshing) return
        this.setData({
            _freshing: true
        })
        setTimeout(() => {
            this.setData({
                triggered: false,
            })
            this.setData({
                _freshing: false
            })
        }, 3000)
    },

    onRestore(e) {
        console.log('onRestore:', e)
    },

    onAbort(e) {
        console.log('onAbort', e)
    },

    onChange(event) {
        console.log(event);

        wx.showToast({
            title: `切换到标签 ${event.detail.title}`,
            icon: "none",
        });
    },
});
