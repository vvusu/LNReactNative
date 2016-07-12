/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight, ScrollView} from 'react-native';
var Swiper = require('react-native-swiper');

var Index = React.createClass ({
  render: function(){
    return (
      <ScrollView>
        <View style={styles.container}>
          <Slider/>

          <View style = {[styles.sbu_red, styles.sbu_view]}>

            <TouchableHighlight underlayColor={'#FA6778'} style={{flex:1}}>
  	        	<View style={[styles.sbu_flex, styles.sbu_borderRight]}>
  	        		<View style={[styles.sub_con_flex, styles.sub_text]}>
  	        			<Text style={[styles.font16]}>酒店</Text>
  	        		</View>
  	        		<View style={[styles.sub_con_flex]}>
  	        			<Image style={[styles.sbu_icon_img]} source={{uri:BUIcon[0]}}></Image>
  	        		</View>
  	        	</View>
            </TouchableHighlight>

            <View style={[styles.sbu_flex, styles.sbu_borderRight]}>
          		<View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
          			<Text style={[styles.font16]}>海外</Text>
          		</View>
          		<View style={[styles.sub_con_flex, styles.sub_text]}>
          			<Text style={[styles.font16]}>周边</Text>
          		</View>
          	</View>

          	<View style={[styles.sbu_flex]}>
          		<View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
          			<Text style={[styles.font16]}>团购.特惠</Text>
          		</View>
          		<View style={[styles.sub_con_flex, styles.sub_text]}>
          			<Text style={[styles.font16]}>客栈.公寓</Text>
          		</View>
          	</View>

          </View>

          <View style = {[styles.sbu_blue, styles.sbu_view]}>

            <TouchableHighlight underlayColor={'#FA6778'} style={{flex:1}}>
  	        	<View style={[styles.sbu_flex, styles.sbu_borderRight]}>
  	        		<View style={[styles.sub_con_flex, styles.sub_text]}>
  	        			<Text style={[styles.font16]}>飞机</Text>
  	        		</View>
  	        		<View style={[styles.sub_con_flex]}>
  	        			<Image style={[styles.sbu_icon_img]} source={{uri:BUIcon[1]}}></Image>
  	        		</View>
  	        	</View>
            </TouchableHighlight>

            <View style={[styles.sbu_flex, styles.sbu_borderRight]}>
          		<View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
          			<Text style={[styles.font16]}>火车票</Text>
          		</View>
          		<View style={[styles.sub_con_flex, styles.sub_text]}>
          			<Text style={[styles.font16]}>汽车票</Text>
          		</View>
          	</View>

          	<View style={[styles.sbu_flex]}>
          		<View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
          			<Text style={[styles.font16]}>接收机</Text>
          		</View>
          		<View style={[styles.sub_con_flex, styles.sub_text]}>
          			<Text style={[styles.font16]}>自驾.专车</Text>
          		</View>
          	</View>

          </View>

          <View style = {[styles.sbu_green, styles.sbu_view]}>

            <TouchableHighlight underlayColor={'#FA6778'} style={{flex:1}}>
              <View style={[styles.sbu_flex, styles.sbu_borderRight]}>
                <View style={[styles.sub_con_flex, styles.sub_text]}>
                  <Text style={[styles.font16]}>旅游</Text>
                </View>
                <View style={[styles.sub_con_flex]}>
                  <Image style={[styles.sbu_icon_img]} source={{uri:BUIcon[2]}}></Image>
                </View>
              </View>
            </TouchableHighlight>

            <View style={[styles.sbu_flex, styles.sbu_borderRight]}>
              <View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
                <Text style={[styles.font16]}>火车票</Text>
              </View>
              <View style={[styles.sub_con_flex, styles.sub_text]}>
                <Text style={[styles.font16]}>汽车票</Text>
              </View>
            </View>

            <View style={[styles.sbu_flex]}>
              <View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
                <Text style={[styles.font16]}>接收机</Text>
              </View>
              <View style={[styles.sub_con_flex, styles.sub_text]}>
                <Text style={[styles.font16]}>自驾.专车</Text>
              </View>
            </View>

          </View>

          <View style = {[styles.sbu_yellow, styles.sbu_view]}>

            <TouchableHighlight underlayColor={'#FA6778'} style={{flex:1}}>
              <View style={[styles.sbu_flex, styles.sbu_borderRight]}>
                <View style={[styles.sub_con_flex, styles.sub_text]}>
                  <Text style={[styles.font16]}>攻略</Text>
                </View>
                <View style={[styles.sub_con_flex]}>
                  <Image style={[styles.sbu_icon_img]} source={{uri:BUIcon[3]}}></Image>
                </View>
              </View>
            </TouchableHighlight>

            <View style={[styles.sbu_flex, styles.sbu_borderRight]}>
              <View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
                <Text style={[styles.font16]}>火车票</Text>
              </View>
              <View style={[styles.sub_con_flex, styles.sub_text]}>
                <Text style={[styles.font16]}>汽车票</Text>
              </View>
            </View>

            <View style={[styles.sbu_flex]}>
              <View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
                <Text style={[styles.font16]}>接收机</Text>
              </View>
              <View style={[styles.sub_con_flex, styles.sub_text]}>
                <Text style={[styles.font16]}>自驾.专车</Text>
              </View>
            </View>

          </View>


          <View style={[styles.img_view]}>
            <View style={[styles.img_flex, {borderRightWidth:0.5}]}>
              <Image style={[styles.img_wh]} source={{uri:Images[0]}}></Image>
            </View>
            <View style={[styles.img_flex, {borderLeftWidth:0,}]}>
              <Image style={[styles.img_wh]} source={{uri:Images[1]}}></Image>
            </View>
          </View>

        </View>
      </ScrollView>
    );
  }
});

/**
其实4个九宫格都是一样，这个其实可以封装成组件，这里采用拷贝的形式，开发一个，其他3个就ok的，不会偷懒的工程师，不是好工程师［偷笑］。分析下布局：
（1）其实首先是3个列在一行的布局，那么外层组件是需要flexDirection: 'row'，各占据宽度的1/3,即各自flex:1；
（2）每个列内又分两行， 需要每个行都是flex:1,各占据高度的一半；
（3）第一列是文字图片组合，其余都是文字组合；
（4）所有行内元素都是水平、垂直居中；
（5）这里使用了个TouchableHighlight组件，是为了出发onPress事件，类似于click或者touch事件。
*/

var BUIcon = [
	'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/%E6%9C%AA%E6%A0%87%E9%A2%98-1.png',
	'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/feiji.png',
	'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/lvyou.png',
	'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/gonglue.png'
];

var Images = [
	'https://webresource.c-ctrip.com/ResCRMOnline/R5/html5/images/zzz_pic_salead01.png',
	'https://images3.c-ctrip.com/rk/apph5/B1/201505/app_home_ad06_310_120.jpg'
];

var sliderImgs = [
   'https://images3.c-ctrip.com/SBU/apph5/201505/16/app_home_ad16_640_128.png',
   'https://images3.c-ctrip.com/rk/apph5/C1/201505/app_home_ad49_640_128.png',
   'https://images3.c-ctrip.com/rk/apph5/D1/201506/app_home_ad05_640_128.jpg'
];

var Slider = React.createClass({
   render: function(){
   return (
     <Swiper style={styles.wrapper} showsButtons={false} autoplay={true} height={150} showsPagination={false}>
       <Image style={[styles.slide,]} source={{uri: sliderImgs[0]}}></Image>
       <Image style={[styles.slide,]} source={{uri: sliderImgs[1]}}></Image>
       <Image style={[styles.slide,]} source={{uri: sliderImgs[2]}}></Image>
     </Swiper>
   );
 }
});

var styles = StyleSheet.create({
	//container
  	container:{
    	backgroundColor:'#F2F2F2',
    	flex:1,
  	},

    //Slider
    wrapper: {
      height: 80,
    },
    slide: {
      height: 80,
      resizeMode: Image.resizeMode.contain,
    },
    //sub

    sbu_view: {
      height:84,
  		marginLeft: 5,
  		marginRight:5,
  		borderWidth:1,
  		borderRadius:5,
  		marginBottom:10,
  		flexDirection:'row',
    },
    sbu_red: {
      backgroundColor: '#FA6778',
      borderColor:'#FA6778',
      marginTop:-70,
    },
    sbu_blue: {
      backgroundColor: '#3D98FF',
    	borderColor:'#3D98FF',
    },
    sbu_green:{
      backgroundColor: '#5EBE00',
      borderColor:'#5EBE00',
    },
    sbu_yellow: {
      backgroundColor: '#FC9720',
      borderColor:'#FC9720',
    },
    sbu_flex: {
      flex: 1,
    },
    sbu_borderRight:{
      borderColor:'#fff',
      borderRightWidth: 0.5,
  },
  sbu_icon_img:{
    height:40,
    width:40,
    resizeMode:Image.resizeMode.contain,
  },
  sub_con_flex:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sub_text:{
    justifyContent:'center',
  },
  font16:{
    fontSize:17,
    color:'#FFF',
    fontWeight:'900',
  },
  sbu_borderBottom:{
    borderBottomWidth:0.5,
    borderBottomColor:'#fff',
  },
  img_view:{
    height:62,
    marginLeft:5,
    marginRight:5,
    flexDirection: 'row',
    marginBottom:20,
    backgroundColor:'#fff',
  },
  img_flex:{
    flex:1,
    borderWidth:1,
    borderColor:'#ccc',
  },
  img_wh: {
    height:59,
    borderRightWidth:0,
    resizeMode:Image.resizeMode.contain,
  }

});

module.exports = Index;
