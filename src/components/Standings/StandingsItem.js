import React, { Component } from 'react';
import {  WebView } from 'react-native';
import { ScrollView, TouchableOpacity, View, RefreshControl } from 'react-native';

class StandingsItem extends Component {

  render() {
    let  jsCode = `
      document.querySelector('.footer').style.display='none';
      document.querySelector('.global-navigation').style.display='none';
      document.querySelector('.global-header').style.display='none';
      document.querySelector('.cwc-promo').style.display='none';
      document.querySelector('.page-header__background').style.display='none';
    `;

    return (
      <ScrollView style={{ flex: 1, paddingBottom:10}} >
        <WebView
          source={{uri:this.props.url}}
          injectedJavaScript={jsCode}
          javaScriptEnabledAndroid={true}
          startInLoadingState={true}
          style={{ height:1024}}
        />
        </ScrollView>
    );
  }
}

export default StandingsItem;

