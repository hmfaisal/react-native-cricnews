import React, { Component } from 'react';
import {Header, Left, Button, Icon, Body, Title, Thumbnail } from 'native-base';
import { Image } from "react-native";
import {
  colorWhite,
  colorBlack,
  FontFamily,
  fontSizeMD
} from "../../assets/base";

export default class AppHeader extends Component {
  render() {
    return (
      <Header hasTabs style={{ backgroundColor: colorWhite}} androidStatusBarColor={colorBlack}>
        <Left>
          <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")} >
            <Icon type="MaterialIcons" name='apps' style={{color:this.props.color,fontSize:32}} />
          </Button>
        </Left>
        <Body style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
          <Thumbnail square source={this.props.icon} style={{height:32,width:32,marginRight:10}}/>
          <Title style={{color:this.props.color,fontSize:fontSizeMD, fontFamily:FontFamily,alignItems:"center"}}>{this.props.title?this.props.title:"ICC Cricket"}</Title>
        </Body>
     </Header>
    );
  }
}
