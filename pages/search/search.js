// pages/search/search.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    dataList: [
      {
        goods_id: 1,
        goods_title: '1中两瓶装运法国-希纳拉干红礼盒(中粮原瓶进口)',
        goods_img: './img/shoptu.png',
        goods_xiaoliang: '289',
        goods_price: '60'
      },{     
        goods_id: 1,
        goods_title: '2两瓶装运法国-希纳拉干红珍藏葡萄酒礼盒',
        goods_img: './img/shoptu.png',
        goods_xiaoliang: '0',
        goods_price: '70'
      },{
        goods_id: 1,
        goods_title: '3希纳拉干红珍藏葡萄酒礼盒(中粮原瓶进口)',
        goods_img: './img/shoptu.png',
        goods_xiaoliang: '0',
        goods_price: '80'
      },{
        goods_id: 1,
        goods_title: '4两瓶装运法国-希纳拉干红珍藏葡萄酒礼盒(中粮原瓶进口)',
        goods_img: './img/shoptu.png',
        goods_xiaoliang: '0',
        goods_price: '90'
      },{
        goods_id: 1,
        goods_title: '5中两瓶希纳拉干红珍藏葡萄酒礼盒(中粮原瓶进口)',
        goods_img: './img/shoptu.png',
        goods_xiaoliang: '0',
        goods_price: '110'
      }
    ],
  },
  back1: function () { 
    wx.navigateBack({
      delta: 1
    })
    console.log("返回")
  },
  alldel:function (){
    wx.showModal({
      content: '确认删除全部历史记录？',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    // console.log("全部删除")
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      //this.setData({
      //     title: options.title
      //})
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})