//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    array_one: ['Android', 'IOS', 'ReactNativ', 'WeChat', 'Web'],
    array_two: ['爱我', '亲我', '吻我'],
    array_three: ['爱你', '亲你', '吻你'],
    array_four: ['么么哒', '么么', '你最美'],
    index:0
  },

  onLoad: function () {
    console.log('onLoad')
  },
  
  onShareAppMessage: function () {
    wx.showShareMenu({
      withShareTicket: false
    })

    return {
      title: '乐乐为猪猪专属打造开发的成本计算小程序',
      desc: '欢迎使用',
      path: '/page/user?id=123'
    }

  },

  listenerPickerSelected_one: function (e) {
    //改变index值，通过setData()方法重绘界面
    this.setData({
      index: e.detail.value
    });
    switch (e.detail.value) {
      case 0:
        condition_value1 = e.detail.value;
        console.log(condition_value1);
        break;
      case 1:
        condition_value1 = e.detail.value;
        console.log(condition_value1);
        break;
      case 2:
        condition_value1 = e.detail.value;
        console.log(condition_value1);
        break;
      case 3:
        condition_value1 = e.detail.value;
        console.log(condition_value1);
        break;
    }
  },
  /**
* 监听普通picker选择器
*/
  listenerPickerSelected_two: function (e) {
    //改变index值，通过setData()方法重绘界面
    this.setData({
      index: e.detail.value
    });
    switch (e.detail.value) {
      case 0:
        condition_value2 = e.detail.value;
        console.log(condition_value2);
        break;
      case 1:
        condition_value2 = e.detail.value;
        console.log(condition_value3);
        break;
      case 2:
        condition_value2 = e.detail.value;
        console.log(condition_value2);
        break;
      case 3:
        condition_value2 = e.detail.value;
        console.log(condition_value2);
        break;
    }
  },
  /**
* 监听普通picker选择器
*/
  listenerPickerSelected_three: function (e) {
    //改变index值，通过setData()方法重绘界面
    this.setData({
      index: e.detail.value
    });
    switch (e.detail.value) {
      case 0:
        condition_value3 = e.detail.value;
        console.log(condition_value3);
        break;
      case 1:
        condition_value3 = e.detail.value;
        console.log(condition_value3);
        break;
      case 2:
        condition_value3 = e.detail.value;
        console.log(condition_value3);
        break;
      case 3:
        condition_value3 = e.detail.value;
        console.log(condition_value3);
        break;
    }


  },
  /**
* 监听普通picker选择器
*/
  listenerPickerSelected_four: function (e) {
    //改变index值，通过setData()方法重绘界
    this.setData({
      index: e.detail.value
    });
    switch (e.detail.value) {
      case 0:
        condition_value4 = e.detail.value;
        console.log(condition_value4);
        break;
      case 1:
        condition_value4 = e.detail.value;
        console.log(condition_value4);
        break;
      case 2:
        condition_value4 = e.detail.value;
        console.log(condition_value4);
        break;
      case 3:
        condition_value4 = e.detail.value;
        console.log(condition_value4);
        break;
    }
  }, 

  button_compute:function(e){
    this.setdata({
      result_text: 520
    })
  },

  button_clear: function (e) {
    this.setdata({
      result_text: null
    })
  }
})