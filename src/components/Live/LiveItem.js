import React, { Component } from 'react';
import {  Dimensions, Linking, TouchableOpacity, Share } from "react-native";
import { Card, CardItem, Text, Body } from 'native-base';
import HTML from 'react-native-render-html';
import {
  colorWhiteInverse,
  FontFamily,
  fontSizeMD,
  fontSizeSM
} from "../../assets/base";

class LiveItem extends Component {

  handleClick = () => {
    const { links } = this.props.item;
    Linking.canOpenURL(links[0].url).then(supported => {
      if (supported) {
        Linking.openURL(links[0].url);
      } else {
        console.log('Cannot open URL');
      }
    });

  };

  shareMessage = () => {
    const { link } = this.props.item;
    Share.share({
      message: link
    });
  }
  render() {
    const { title, description} = this.props.item;
    let temp= title.split(":");
    let game_title1=temp[1].replace(/[$#@%]/g, '');
    let game_title = game_title1.replace(/\(.*?\)/g, '');
    let game_score=temp[2];
    
    return (
      <TouchableOpacity >
        <Card >
          <CardItem header style={{ paddingLeft: 10, paddingRight: 10}}>
            <Text style={{ color:colorWhiteInverse, fontWeight:'bold', fontSize:fontSizeMD, fontFamily:FontFamily  }}>
              {game_title}
            </Text>
          </CardItem>
          <CardItem style={{ paddingLeft: 12, paddingRight: 12}}>
            <Body>
              <Text style={{color:colorWhiteInverse, fontSize:fontSizeMD, fontFamily:FontFamily }}>
                {game_score}
              </Text>
              <HTML html={description} baseFontStyle={{fontSize:fontSizeSM, fontFamily:FontFamily }} containerStyle={{paddingLeft: 5, paddingRight: 5}} imagesMaxWidth={Dimensions.get('window').width} />
            </Body>
          </CardItem>
        </Card>
     </TouchableOpacity>

    );
  }
}

export default LiveItem;
