export function compareVersion(v1Param: string, v2Param: string) {
    const v1 = v1Param.split('.');
    const v2 = v2Param.split('.');
    const len = Math.max(v1.length, v2.length);

    while (v1.length < len) {
        v1.push('0');
    }
    while (v2.length < len) {
        v2.push('0');
    }

    for (let i = 0; i < len; i++) {
        const num1 = parseInt(v1[i]);
        const num2 = parseInt(v2[i]);

        if (num1 > num2) {
            return 1;
        } else if (num1 < num2) {
            return -1;
        }
    }

    return 0;
}

export const showVersionTip = () => {

    if (wx.canIUse("getAppBaseInfo")) {
        const version = wx.getAppBaseInfo().SDKVersion;
        if (compareVersion(version, '2.21.4') >= 0) {
            autoUpdate()
            //  版本之上
        } else {
            showInfo()
        }
    } else {
        // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提�?
        showInfo()
    }
};
export const showInfo = () => {
    wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。',
        showCancel: false,
        success(res) {
            if (res.confirm) {
                console.log('用户点击确定');
                wx.exitMiniProgram({
                    success: function () { },
                    fail: function () { }
                });
            } else if (res.cancel) {
                console.log('用户点击取消');
            }
        }
    });
}

export const autoUpdate = () => {

    // 获取小程序更新机制兼容
    if (wx.canIUse('getUpdateManager')) {
        const updateManager = wx.getUpdateManager()
        updateManager.onCheckForUpdate(function (res) {
            if (res.hasUpdate) {
                wx.showModal({
                    title: '更新提示',
                    content: '检测到新版本，是否下载新版本并重启小程序？',
                    success: function (res) {
                        if (res.confirm) {
                            downLoadAndUpdate(updateManager)
                        } else if (res.cancel) {
                            wx.showModal({
                                title: '温馨提示',
                                content: '本次版本更新涉及到新的功能添加，旧版本无法正常访问的',
                                showCancel: false,
                                confirmText: "确定更新",
                                success: function (res) {
                                    if (res.confirm) {
                                        //下载新版本，并重新应用
                                        downLoadAndUpdate(updateManager)
                                    }
                                }
                            })
                        }
                    }
                })
            }
        })
    } else {
        wx.showModal({
            title: '提示',
            content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。',
        })
    }
}

export const downLoadAndUpdate = (updateManager: { onUpdateReady: (arg0: () => void) => void; applyUpdate: () => void; onUpdateFailed: (arg0: () => void) => void; }) => {

    wx.showLoading({
        title: '加载中',
    });
    updateManager.onUpdateReady(function () {
        wx.hideLoading()
        updateManager.applyUpdate()
    })
    updateManager.onUpdateFailed(function () {
        wx.hideLoading()
        // 新的版本下载失败
        wx.showModal({
            title: '已经有新版本了哟~',
            content: '新版本已经上线，请您删除当前小程序，重新搜索打开',
        })
    })
}
