//index.js
//获取应用实例
var app = getApp();
var input_X;
var condition_value1;
var condition_text_value1;
var condition_value2;
var condition_text_value2;
var condition_value3;
var condition_text_value3;
var condition_value3_Y;
var condition_text_valueY;
var condition_value3_A;
var condition_text_valueA;
var condition_value3_B;
var condition_text_valueB;
var result_value;

Page({
  data: {
    input_price:"",
    array_one: ['请选择', '增值税专用发票', '增值税普通发票'],
    array_two: ['请选择', '金融服务（营业用）', '业务宣传费-赠送', '购进 / 租入有形动产用于出租 / 转租','购进/租入不动产用于出租/转租'],
    array_three: ['请选择', '3%', '6%','11%', '17%'],
    array_four: ['请选择','么么哒', '么么', '你最美'],
    index_one:0,
    index_two: 0,
    index_three: 0,
    index_four: 0
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
  
  input_price:function(e){
    input_X = e.detail.value;
    console.log(input_X);
    this.setData({
      input_price: e.detail.value
    });
  },

  listenerPickerSelected_one: function (e) {
    //改变index值，通过setData()方法重绘界面
    this.setData({
      index_one: e.detail.value
    });
    condition_value1=e.detail.value;
    console.log(condition_value1);
    if (condition_value1==1){
      condition_text_value1 = "增值税专用发票"
      console.log(condition_text_value1);
    }else{
      condition_text_value1 = "增值税普通发票"
      console.log(condition_text_value2);
    }
  },
  /**
* 监听普通picker选择器
*/
  listenerPickerSelected_two: function (e) {
    //改变index值，通过setData()方法重绘界面
    this.setData({
      index_two: e.detail.value
    });
    condition_value2 = e.detail.value;
    console.log(condition_value2);
    if (e.detail.value == 1 && e.detail.value == 2) {
      this.setData({
        array_three: ['请选择', '3%','6%','11%', '17%'],
      })
    };
    if(e.detail.value==3){
      this.setData({
        array_three: ['请选择', '3%','11%', '17%'],
      })    
    };
    if (e.detail.value == 4) {
      this.setData({
        array_three: ['请选择', '5%', '11%'],
      })
    };
    if (condition_value2 == 1) {
      condition_text_value2 = "金融服务（营业用）"
      console.log(condition_text_value1);
    }
    else if (condition_value2 == 2){
      condition_text_value2 = "业务宣传费-赠送"
      console.log(condition_text_value2);
    }
    else if (condition_value2 == 3) {
      condition_text_value2 = "购进 / 租入有形动产用于出租 / 转租"
      console.log(condition_text_value2);
    }
    else if (condition_value2 == 4) {
      condition_text_value2 = "购进/租入不动产用于出租/转租"
      console.log(condition_text_value2);
    }
  },
  /**
* 监听普通picker选择器
*/
  listenerPickerSelected_three: function (e) {
    //改变index值，通过setData()方法重绘界面
    this.setData({
      index_three: e.detail.value
    });
    condition_value3 = e.detail.value;
    console.log(condition_value3);
    switch (e.detail.value) {
      case 0:
        
        console.log(condition_value3);
        break;
      case 1:
        
        console.log(condition_value3);
        break;
      case 2:
        
        console.log(condition_value3);
        break;
      case 3:
        
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
      index_four: e.detail.value
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
    
    if(condition_value1==1){
      console.log(condition_value1);
       if(condition_value2==1){
         console.log(condition_value2);
         result_value = input_X + ";  " + condition_text_value1 + ";  "+condition_text_value2+"";
       }
       else if(condition_value2==2){
         if(condition_value3==1){
           result_value=input_X/1.03*1.17
         }else{
           result_value=input_X;
         }
       }
    }

    // result_value=520;
    this.setData({
      result_text: result_value
    })
  },

  button_save: function (e) {
    this.setData({
      result_last_text: result_value
    })
  },

  button_clear: function (e) {
    
    result_value = "";
    this.setData({
      input_price: "",
      index_one: 0,
      index_two: 0,
      index_three: 0,
      index_four: 0,
      result_text: result_value
    })
  }
})
