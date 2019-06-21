import React, { Component } from 'react';
import { ScrollView, Dimensions, Linking, TouchableOpacity, Share  } from "react-native";
import { Card, CardItem, Text, Button, Icon, Right, Left, Body} from 'native-base';
import HTML from 'react-native-render-html';
import {
  colorWhiteInverse,
  colorTerciary,
  FontFamily,
  fontSizeXS,
  fontSizeMD,
  fontSizeLG
} from "../../assets/base";

class NewsItem extends Component {

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
    const { title, published, description} = this.props.item;
    return (
      <TouchableOpacity onPress={this.handleClick} >
        <Card>
          <CardItem header style={{ paddingLeft: 10, paddingRight: 10}}>
            <Text style={{ color:colorWhiteInverse, fontWeight:'bold', fontSize:fontSizeMD, fontFamily:FontFamily }} note>
              {title}
            </Text>
          </CardItem>
          <CardItem cardBody style={{ paddingLeft: 10, paddingRight: 10}}>
            <Body>
              <HTML html={description} baseFontStyle={{fontSize:fontSizeMD, fontFamily:FontFamily }} containerStyle={{paddingLeft: 2, paddingRight: 2}} imagesMaxWidth={Dimensions.get('window').width} />
            </Body>
          </CardItem>
          <CardItem footer style={{ paddingLeft: 12, paddingRight: 12}}>
            <Left>
              <Button transparent onPress={this.shareMessage}>
                <Icon style={{ fontSize: fontSizeLG, color: this.props.color }} active name="share" />
                <Text style={{color:colorTerciary, fontSize:fontSizeXS,fontFamily:FontFamily }} >share</Text>
              </Button>
            </Left>
            <Right>
              <Text style={{color:colorWhiteInverse, fontSize:8,fontFamily:FontFamily }}>{published}</Text>
            </Right>
          </CardItem>
        </Card>
     </TouchableOpacity>

    );
  }
}

export default NewsItem;
