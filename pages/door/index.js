// pages/door/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  naviagteToPage(e) {
    console.log("e", e)
    const page = e.target.dataset.page
    console.log('page: ', page);
    wx.navigateTo({
      url: `/pages/${page}/index`
    })
  }
})