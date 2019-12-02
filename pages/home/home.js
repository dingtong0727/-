// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
     focus: false,
     inputValue: '',
     banner: [
        {bannerimg: "./img/fengjing2.png"},
        {bannerimg: "./img/fengjing2.png"},
        {bannerimg: "./img/fengjing2.png"}],
     homelist:[
        {
          goods_id: 1,
         goods_img: './img/yashua2.png',
          goods_title: '亮佳电动牙刷MX213♥',
          goods_daoshoujia: '39',
          goods_yuanjia: '285',
          goods_yuexiao: '2885',
        },
       {
         goods_id: 2,
         goods_img: './img/yashua2.png',
         goods_title: '亮佳电动牙刷MX213❤',
         goods_daoshoujia: '39',
         goods_yuanjia: '285',
         goods_yuexiao: '2885',
       },        
       {
         goods_id: 3,
         goods_img: './img/yashua2.png',
         goods_title: '亮佳电动牙刷521♥♥♥',
         goods_daoshoujia: '39',
         goods_yuanjia: '285',
         goods_yuexiao: '2885',
       },
       {
         goods_id: 4,
         goods_img: './img/yashua2.png',
         goods_title: '亮佳电动牙刷♥♥♥',
         goods_daoshoujia: '39',
         goods_yuanjia: '285',
         goods_yuexiao: '2885',
       },
       {
         goods_id: 5,
         goods_img: './img/yashua2.png',
         goods_title: '亮佳电动牙刷❤',
         goods_daoshoujia: '39',
         goods_yuanjia: '285',
         goods_yuexiao: '2885',
       },
       {
         goods_id: 6,
         goods_img: './img/yashua2.png',
         goods_title: '亮佳电动牙刷MX213♥♥',
         goods_daoshoujia: '39',
         goods_yuanjia: '285',
         goods_yuexiao: '2885',
       }       
     ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
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

  },
  searchBtn: function () {
    alert("你点击了键盘搜索键")
  },
    // 页面滚动
  onPageScroll(e) {
    this.setData({
      scrollTop: e.scrollTop
    })
  }
})