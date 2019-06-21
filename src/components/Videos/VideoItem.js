import React, { Component } from 'react';
import {  WebView, ScrollView } from 'react-native';

class VideoItem extends Component {

  render() {
    let  jsCode = `
      document.querySelector('.header_container').style.display='none';
      document.querySelector('.ptvsportsmenu_container').style.display='none';
      document.querySelector('.iccresultsimg').style.display='none';
      document.querySelector('.ptvsportsmenu_container').style.display='none';
      document.querySelector('.ptvsportsmenu_container').style.display='none';
    `;

    return (
        <WebView
          source={{uri:this.props.url}}
          injectedJavaScript={jsCode}
          javaScriptEnabledAndroid={true}
          startInLoadingState={true}
          style={{ height: 360, width:'100%', marginBottom:10 }}
          scrollEnabled={true}
          scalesPageToFit={true}
        />
      
    );
  }
}

export default VideoItem;

