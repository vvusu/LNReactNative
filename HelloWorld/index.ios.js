/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 /**
    （1）require：引入外部模块，就像，引入我们自己创建的/pages/Index.js一样。
    （2）引入定义NavigatorIOS、AppRegistry、StyleSheet组件和类。
    （3）在render中调用NavigatorIOS组件，initialRoute是初始化路由，title是当前页面的头部标题；component是当前路由下显示的组件；
    （4）注意：这里NavigatorIOS的style需要设置大小，比如这里设置是flex：1，否则就不能显示内容主体；
    （5）最后我们需要注册当前应用：AppRegistry.registerComponent('HelloWorld', () => NV);
 */

 import React, { Component } from 'react';
 import { NavigatorIOS, AppRegistry, StyleSheet } from 'react-native';
 var Index = require('./pages/Index');
 var Swiper = require('react-native-swiper');

 var NV = React.createClass({
     render: function(){
         return(
             <NavigatorIOS
                 style={styles.container}
                 initialRoute={{
                     title: '首页',
                     component: Index,
                 }}
             />
             
         );
     }
 });

 var sliderImgs = [
     'http://images3.c-ctrip.com/SBU/apph5/201505/16/app_home_ad16_640_128.png',
     'http://images3.c-ctrip.com/rk/apph5/C1/201505/app_home_ad49_640_128.png',
     'http://images3.c-ctrip.com/rk/apph5/D1/201506/app_home_ad05_640_128.jpg'
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
     container: {
         flex: 1,
     }
 });

 AppRegistry.registerComponent('HelloWorld', () => NV);
