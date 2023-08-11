import { showVersionTip } from "./utils/util"

// app.ts
App<IAppOption>({
    globalData: {

    },
    onLaunch() {

        showVersionTip()
        wx.getSystemInfo().then(res => {
            console.log(res, 'res');
            this.globalData.statusBarHeight = res.statusBarHeight
        })
        // 登录
        // wx.login({
        //   success: res => {
        //     console.log(res.code)
        //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
        //   },
        // })
    },
})