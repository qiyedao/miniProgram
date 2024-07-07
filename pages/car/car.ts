// pages/time/time.ts
Page({

    /**
     * 页面的初始数据
     */
    data: {
        total: '',
        month: '',
        time: ''

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {

    },
    onChange(e) {
        const { name } = e.currentTarget.dataset
        const value = e.detail
        this.setData({
            [name]: value
        })
        const { total, month, time } = this.data
        console.log({ total, month, time });
        if (total && month && time) {
            const totalMoney = total * 10000
            const payTotal: number = month * time
            const interestTotal = payTotal - totalMoney
            const interestMonth = interestTotal / totalMoney / time
            const interestYear = interestMonth * 12
            console.log({ totalMoney, payTotal, interestTotal, interestMonth });

            this.setData({
                rate: (interestYear * 100).toFixed(2)
            })
        }

    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {
        return {
            title: '生活常用小助手',
            path: '/pages/time/time',
        }
    },
})