//index.js
//获取应用实例
var app = getApp();
var input_X;
var condition_value1;
var condition_text_value1 = "";
var condition_value2;
var condition_text_value2 = "";
var condition_value3;
var condition_text_value3 = "";
var condition_value3_Y;
var condition_text_valueY = "";
var condition_value3_A;
var condition_text_valueA = "";
var condition_value3_B;
var condition_text_valueB = "";
var condition_array_one = ['3%', '6%', '11%', '17%'];
var condition_array_two = ['3%', '11%', '17%'];
var condition_array_three = ['5%', '11%'];
var result_value;
var result_compute_vlue = "";
var util = require('../../utils/util.js')

Page({
  data: {
    input_price_value:"",
    array_one: ['请选择', '增值税专用发票', '增值税普通发票','其他'],
    array_two: ['请选择', '金融服务（营业用）', '业务宣传费-赠送', '购进/租入有形动产用于出租/转租','购进/租入不动产用于出租/转租'],
    array_three: ['请选择', "3%", '6%','11%', '17%'],
    array_four: ['请选择','么么哒', '么么', '你最美'],
    index_one:0,
    index_two: 0,
    index_three: 0,
    index_four: 0,
    // hideinput_one:"none",
    hideinput_two: "none",
    hideinput_three: "none",
    input_one_price_value:"",
    input_two_price_value:"",
    input_three_price_value:""
  },

  onLoad: function () {
    console.log('onLoad')
  },
  
  onShareAppMessage: function () {
    wx.showShareMenu({
      withShareTicket: false
    })

    return {
      title: '乐乐为猪猪专属打造的成本计算小程序',
      desc: '欢迎使用',
      path: 'pages/index/index'//'/page/user?id=123'
    }

  },
  
  input_price:function(e){
    input_X = e.detail.value;
    console.log(input_X);
    this.setData({
      input_price_value: e.detail.value
    });
  },

  listenerPickerSelected_one: function (e) {
    //改变index值，通过setData()方法重绘界面
    this.setData({
      index_one: e.detail.value
    });
    condition_value1=e.detail.value;
    console.log(condition_value1);

    //动态设置布局
    if (condition_value1 == 1 && condition_value2 == 3) {
      console.log(condition_value1 + ";" + condition_value2);
      this.setData({
        // hideinput_one: "flex",
        hideinput_two: "none",
        hideinput_three: "none"
      });
    }
    else if (condition_value1 == 1 && condition_value2 == 4) {
      this.setData({
        // hideinput_one: "flex",
        hideinput_two: "flex",
        hideinput_three: "flex"
      });
    }
    else if (condition_value1 == 2 && (condition_value2 == 3 || condition_value2 == 4)) {
      console.log(condition_value1 + ";" + condition_value2);
      this.setData({
        // hideinput_one: "flex",
        hideinput_two: "none",
        hideinput_three: "none"
      });
    }
    else {
      this.setData({
        // hideinput_one: "none",
        hideinput_two: "none",
        hideinput_three: "none"
      });
    }

    //获取条件对应的文本，方便显示
    if (condition_value1==1){
      condition_text_value1 = "专票"
      console.log(condition_text_value1);
    } else if (condition_value1 == 2){
      condition_text_value1 = "普票"
      console.log(condition_text_value1);
    }else{
      condition_text_value1 = "其他"
      console.log(condition_text_value1);
    }

    //动态设置税率列表并设置税率文本为无
    //对其他情况进行特殊处理
    if (condition_value1 == 3) {
      this.setData({
        index_three: 0,
        array_three: ['无'],
      })
      condition_text_value3 = '无';
    }
    else {
      if (condition_value2 == 1 || condition_value2 == 2) {
        this.setData({
          array_three: ['请选择', '3%', '6%', '11%', '17%'],
        })
      };
      if (condition_value2 == 3) {
        this.setData({
          index_three: 0,
          array_three: ['请选择', '3%', '11%', '17%'],
        })
      };
      if (condition_value2 == 4) {
        this.setData({
          index_three: 0,
          array_three: ['请选择', '5%', '11%'],
        })
      };
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
    //动态设置税率列表
    if(condition_value1!=3){
      if (e.detail.value == 1 || e.detail.value == 2) {
        this.setData({
          array_three: ['请选择', '3%', '6%', '11%', '17%'],
        })
      };
      if (e.detail.value == 3) {
        this.setData({
          index_three: 0,
          array_three: ['请选择', '3%', '11%', '17%'],
        })
      };
      if (e.detail.value == 4) {
        this.setData({
          index_three: 0,
          array_three: ['请选择', '5%', '11%'],
        })
      };
    }else{
      this.setData({
        index_three: 0,
        array_three: ['无'],
      })
    }
    

    //动态设置布局
    if (condition_value1 == 1 && condition_value2 == 3) {
      console.log(condition_value1 + ";" + condition_value2);
      this.setData({
        // hideinput_one: "flex",
        hideinput_two: "none",
        hideinput_three: "none"
      });
    }
    else if (condition_value1 == 1 && condition_value2 == 4) {
      this.setData({
        // hideinput_one: "flex",
        hideinput_two: "flex",
        hideinput_three: "flex"
      });
    }
    else if (condition_value1 == 2 && (condition_value2 == 3 || condition_value2 == 4)) {
      console.log(condition_value1 + ";" + condition_value2);
      this.setData({
        // hideinput_one: "flex",
        hideinput_two: "none",
        hideinput_three: "none"
      });
    }
    else {
      this.setData({
        // hideinput_one: "none",
        hideinput_two: "none",
        hideinput_three: "none"
      });
    }
    
    //获取条件对应的文本，方便显示
    if (condition_value2 == 1) {
      condition_text_value2 = "金融服务（营业用）"
      console.log(condition_text_value1);
    }
    else if (condition_value2 == 2){
      condition_text_value2 = "业务宣传费-赠送"
      console.log(condition_text_value2);
    }
    else if (condition_value2 == 3) {
      condition_text_value2 = "购进/租入有形动产用于出租/转租"
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
    console.log("+++condition_value1：" + condition_value1);
    //获取条件对应的文本，方便显示
    if(condition_value1!=3){
      if (condition_value2 == 1 || condition_value2 == 2) {
        condition_text_value3 = condition_array_one[condition_value3 - 1];
      }
      else if (condition_value2 == 3) {
        condition_text_value3 = condition_array_two[condition_value3 - 1];
      }
      else if (condition_value2 == 4) {
        condition_text_value3 = condition_array_three[condition_value3 - 1];
      } 
    }else{
      condition_text_value3 = "无"
    }
    console.log("condition_text_value3："+condition_text_value3);
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

  // input_one_price: function (e) {
  //   condition_value3_Y = e.detail.value;
  //   console.log("condition_value3_Y:"+condition_value3_Y);
  //   this.setData({
  //     input_one_price_value: e.detail.value
  //   });
  // },

  input_two_price: function (e) {
    condition_value3_A = e.detail.value;
    console.log(condition_value3_A);
    this.setData({
      input_two_price_value: e.detail.value
    });
  },

  input_three_price: function (e) {
    condition_value3_B = e.detail.value;
    console.log(condition_value3_B);
    this.setData({
      input_three_price_value: e.detail.value
    });
  },

  button_compute:function(e){
    
    if(condition_value1==1){
       if(condition_value2==1){
         result_compute_vlue = input_X
       }
       else if(condition_value2==2){
         if (condition_value3 == 1) {
           result_compute_vlue = Math.round(input_X / 1.03 * 1.17 * 100) / 100

         }
         else {
           result_compute_vlue = input_X 
         }
         
       }else if(condition_value2==3){
         if (condition_value3 == 1) {
           result_compute_vlue = Math.round((input_X - input_X / 1.03 * 0.03) * 100) / 100

         }
         else if (condition_value3 == 2) {
           result_compute_vlue = Math.round((input_X - input_X / 1.11 * 0.11) * 100) / 100

         }
         else {
           result_compute_vlue = Math.round((input_X - input_X / 1.17 * 0.17) * 100) / 100

         }
       }
       else if (condition_value2 == 4) {
         if (condition_value3 == 1) {
           result_compute_vlue = Math.round((input_X - condition_value3_B /condition_value3_A*input_X / 1.05 * 0.05) * 100) / 100

         }
         else {
           result_compute_vlue = Math.round((input_X - condition_value3_B / condition_value3_A * input_X / 1.11 * 0.11) * 100) / 100

         }
       }
    }
    else if (condition_value1 == 2){
      if (condition_value2 == 1) {
        result_compute_vlue = input_X

      }
      else if (condition_value2 == 2) {
        if (condition_value3 == 1) {
          console.log("jisuan:" + input_X);
          result_compute_vlue = Math.round(input_X / 1.03 * 1.2*100)/100;
          console.log("result:" + result_compute_vlue);
        }
        else if (condition_value3 == 2) {
          result_compute_vlue = Math.round(input_X / 1.06 * 100) / 100;

        }
        else if (condition_value3 == 3) {
          result_compute_vlue = (input_X / 1.11 * 1.22).toFixed();

        }
        else{
          result_compute_vlue = Math.round(input_X / 1.17 * 1.34 * 100) / 100;

        }
      } else if (condition_value2 == 3) {
        result_compute_vlue = input_X

      }
      else if (condition_text_value2 == 4) {
        result_compute_vlue = input_X
      }
    }else{
      if (condition_value2 == 2){
        result_compute_vlue = Math.round(input_X / 1.17 * 1.34 * 100) / 100;
      }else{
        result_compute_vlue = input_X
      }
    }
    console.log(result_compute_vlue);
    result_value = result_compute_vlue + " (" + condition_text_value1 + ";  " + condition_text_value3 + ")";
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
    input_X=0;
    condition_value1=0;
    condition_text_value1 = "";
    condition_value2=0;
    condition_text_value2 = "";
    condition_value3=0;
    condition_text_value3 = "";
    condition_value3_Y=0;
    condition_text_valueY = "";
    condition_value3_A=0;
    condition_text_valueA = "";
    condition_value3_B=0;
    condition_text_valueB = "";
    result_value="";
    result_compute_vlue = "";
    this.setData({
      input_price_value: "",
      index_one: 0,
      index_two: 0,
      array_three: ['请选择', '3%', '6%', '11%', '17%'],
      index_three: 0,
      input_one_price_value:"",
      input_two_price_value: "",
      input_three_price_value: "",
      hideinput_one: "none",
      hideinput_two: "none",
      hideinput_three: "none",
      result_text: ""
    });
  },   
})

/** 
 * 左补齐字符串 
 *  
 * @param nSize 
 *            要补齐的长度 
 * @param ch 
 *            要补齐的字符 
 * @return 
 */
String.prototype.padLeft = function (nSize, ch) {
  var len = 0;
  var s = this ? this : "";
  ch = ch ? ch : '0';// 默认补0  

  len = s.length;
  while (len < nSize) {
    s = ch + s;
    len++;
  }
  return s;
}

/** 
 * 右补齐字符串 
 *  
 * @param nSize 
 *            要补齐的长度 
 * @param ch 
 *            要补齐的字符 
 * @return 
 */
String.prototype.padRight = function (nSize, ch) {
  var len = 0;
  var s = this ? this : "";
  ch = ch ? ch : '0';// 默认补0  

  len = s.length;
  while (len < nSize) {
    s = s + ch;
    len++;
  }
  return s;
}
/** 
 * 左移小数点位置（用于数学计算，相当于除以Math.pow(10,scale)） 
 *  
 * @param scale 
 *            要移位的刻度 
 * @return 
 */
String.prototype.movePointLeft = function (scale) {
  var s, s1, s2, ch, ps, sign;
  ch = '.';
  sign = '';
  s = this ? this : "";

  if (scale <= 0) return s;
  ps = s.split('.');
  s1 = ps[0] ? ps[0] : "";
  s2 = ps[1] ? ps[1] : "";
  if (s1.slice(0, 1) == '-') {
    s1 = s1.slice(1);
    sign = '-';
  }
  if (s1.length <= scale) {
    ch = "0.";
    s1 = s1.padLeft(scale);
  }
  return sign + s1.slice(0, -scale) + ch + s1.slice(-scale) + s2;
}
/** 
 * 右移小数点位置（用于数学计算，相当于乘以Math.pow(10,scale)） 
 *  
 * @param scale 
 *            要移位的刻度 
 * @return 
 */
String.prototype.movePointRight = function (scale) {
  var s, s1, s2, ch, ps;
  ch = '.';
  s = this ? this : "";

  if (scale <= 0) return s;
  ps = s.split('.');
  s1 = ps[0] ? ps[0] : "";
  s2 = ps[1] ? ps[1] : "";
  if (s2.length <= scale) {
    ch = '';
    s2 = s2.padRight(scale);
  }
  return s1 + s2.slice(0, scale) + ch + s2.slice(scale, s2.length);
}
/** 
 * 移动小数点位置（用于数学计算，相当于（乘以/除以）Math.pow(10,scale)） 
 *  
 * @param scale 
 *            要移位的刻度（正数表示向右移；负数表示向左移动；0返回原值） 
 * @return 
 */
String.prototype.movePoint = function (scale) {
  if (scale >= 0)
    return this.movePointRight(scale);
  else
    return this.movePointLeft(-scale);
}

Number.prototype.toFixed = function (scale) {
  var s, s1, s2, start;
  console.log('123');
  s1 = this + "";
  start = s1.indexOf(".");
  s = s1.movePoint(scale);

  if (start >= 0) {
    s2 = Number(s1.substr(start + scale + 1, 1));
    if (s2 >= 5 && this >= 0 || s2 < 5 && this < 0) {
      s = Math.ceil(s);
    }
    else {
      s = Math.floor(s);
    }
  }

  return s.toString().movePoint(-scale);
}  