import React, { Component } from 'react';
import { Button, Icon, Text, Footer, FooterTab, Spinner } from 'native-base';

import {
  colorWhite,
  colorWhiteInverse,
  colorBorder
} from "../../assets/base";

import {
  CONFIG_DATA_URL
}  from '../../constants';

export default class AppFooter extends Component {
    constructor() {
        super();
        this.state = {
          isReady: false,
          globalData:null
        };
    }
    componentDidMount(){
        fetch(CONFIG_DATA_URL)
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                globalData:data.APP,
                isReady: true
            })
        })
    }
    render() {
      const {isReady,globalData} = this.state;
      if (!isReady) {
        return null;
      }
      return (
        <Footer style={{ borderTopWidth:1,borderTopColor:colorBorder}}>
          <FooterTab style={{ backgroundColor: colorWhite, color: colorWhiteInverse}} >

            <Button vertical style={{backgroundColor: "transparent"}} active={this.props.navigationState.index === 0} onPress={() => this.props.navigation.navigate("NewsScreen")}>
              <Icon name="rss-feed" type="MaterialIcons" style={{color: this.props.navigationState.index === 0?this.props.color:colorWhiteInverse,fontWeight:this.props.navigationState.index === 0?"600":"400",fontSize:24}}/>
              <Text style={{color: this.props.navigationState.index === 0?this.props.color:colorWhiteInverse,fontWeight:this.props.navigationState.index === 0?"600":"400",fontSize:8}}>{globalData.NAME.NEWS}</Text>
            </Button>

            <Button vertical style={{backgroundColor: "transparent"}} active={this.props.navigationState.index === 1} onPress={() => this.props.navigation.navigate("LiveScoreScreen")} >
              <Icon name="live-tv" type="MaterialIcons" style={{color: this.props.navigationState.index === 1?this.props.color:colorWhiteInverse,fontSize:24,fontWeight:this.props.navigationState.index === 1?"600":"400"}}/>
              <Text style={{color: this.props.navigationState.index === 1?this.props.color:colorWhiteInverse,fontWeight:this.props.navigationState.index === 1?"600":"400",fontSize:8}}>{globalData.NAME.LIVESCORE}</Text>
            </Button>
            
            <Button vertical style={{backgroundColor: "transparent"}} active={this.props.navigationState.index === 2} onPress={() => this.props.navigation.navigate("TweetScreen")}>
              <Icon active name="social-twitter" type="SimpleLineIcons" style={{color: this.props.navigationState.index === 2?this.props.color:colorWhiteInverse,fontWeight:this.props.navigationState.index === 2?"600":"400",fontSize:24}}/>
              <Text style={{color: this.props.navigationState.index === 2?this.props.color:colorWhiteInverse,fontWeight:this.props.navigationState.index === 2?"600":"400",fontSize:8}}>{globalData.NAME.TWEETS}</Text>
            </Button>

            <Button vertical style={{backgroundColor: "transparent"}} active={this.props.navigationState.index === 3} onPress={() => this.props.navigation.navigate("MatchScreen")}>
              <Icon name="social-dribbble" type="SimpleLineIcons" style={{color: this.props.navigationState.index === 3?this.props.color:colorWhiteInverse,fontWeight:this.props.navigationState.index === 3?"600":"400",fontSize:24}}/>
              <Text style={{color: this.props.navigationState.index === 3?this.props.color:colorWhiteInverse,fontWeight:this.props.navigationState.index === 3?"600":"400",fontSize:8}}>{globalData.NAME.MATCHES}</Text>
            </Button>

          </FooterTab>
        </Footer>
      );
    }
}