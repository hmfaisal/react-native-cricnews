import React, { Component } from 'react';
import Spinner from 'react-native-spinkit';
import {View,Image} from 'react-native';
import {Title,Subtitle} from 'native-base';
import {WELCOME_SUBTITLE,WELCOME_TITLE,LOADING_CHECK_TITLE} from '../../constants';
import {
    FontFamily,
    fontSizeSM,
    fontSizeXL
} from '../../assets/base';
import Background from '../../assets/images/logo.png';

export default class AppLoader extends Component {
    constructor() {
        super();
        this.state = {
          isDisconnected: false
        };
    }

    componentDidMount(){
        this.turnOff = setTimeout(() => { 
            this.setState(() => ({isDisconnected: true}))
          }, 10000);
    }

    render() {
      return (
          <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: this.props.color}}>
                {this.props.hasSpin && (
                    <Spinner  isVisible={this.props.isVisible} size={48} type={this.props.type} color={this.props.textColor}/>
                )}
                {!this.props.hasSpin && (
                    <Image source={Background} style={{height:240,width:192}}/>
                )}
                {this.props.hasText && (
                    <View>
                        <Title style={{color:this.props.textColor,flexWrap:"wrap",fontSize:fontSizeXL,fontFamily:FontFamily,marginVertical:15}}> {WELCOME_TITLE}</Title>
                        <Subtitle style={{color:this.props.textColor,flexWrap:"wrap",fontSize:fontSizeSM,fontFamily:FontFamily,marginVertical:10}}>{WELCOME_SUBTITLE}</Subtitle>
                    </View>
                )}
                {this.state.isDisconnected && (
                    <Subtitle style={{color:this.props.textColor,flexWrap:"wrap",fontSize:fontSizeSM,fontFamily:FontFamily,marginVertical:10}}>{LOADING_CHECK_TITLE}</Subtitle>
                )}
          </View>
        
    );
  }
}