import React, { Component } from 'react';
import firebase from 'react-native-firebase';
import AppHeader from "../../../components/Layout/Header";
import AppLoader from "../../../components/Layout/Loader";
import { Container, Tab, Tabs,TabHeading, Text, Spinner  } from 'native-base';
import LiveList from '../../../components/Live/LiveList';
import VideoList from '../../../components/Videos/VideoList';

import {
    FontFamily,
    fontSizeMD
} from '../../../assets/base';

import {
    CONFIG_DATA_URL,
    INTERSTITIAL_ADD_ID
}  from '../../../constants';

export default class LiveScoreScreen extends Component {
    constructor() {
        super();
        this.state = {
          isReady: false,
          configData:null,
          globalData:null,
          isDisplayed:false
        };
    }
    componentDidMount(){
        this.didComponentFocus = this.props.navigation.addListener('didFocus', () => {
            if (this.state.isDisplayed !== true) {
              this.setState({ isDisplayed: true })
            }
        });
        this.willComponentBlur = this.props.navigation.addListener('willBlur', () => {
            if (this.state.isDisplayed !== false) {
              this.setState({ isDisplayed: false })
            }
        });
        fetch(CONFIG_DATA_URL)
        .then((response) => response.json())
        .then((data) => {
            let config;
            if(this.props.route==="HOME"){
                config = data.HOME;
            }
            if(this.props.route==="AFGHANISTAN"){
                config = data.AFGHANISTAN;
            }
            if(this.props.route==="AUSTRALIA"){
                config = data.AUSTRALIA;
            }
            if(this.props.route==="BANGLADESH"){
                config = data.BANGLADESH;
            }
            if(this.props.route==="ENGLAND"){
                config = data.ENGLAND;
            }
            if(this.props.route==="INDIA"){
                config = data.INDIA;
            }
            if(this.props.route==="NEWZEALAND"){
                config = data.NEWZEALAND;
            }
            if(this.props.route==="PAKISTAN"){
                config = data.PAKISTAN;
            }
            if(this.props.route==="SOUTHAFRICA"){
                config = data.SOUTHAFRICA;
            }
            if(this.props.route==="SRILANKA"){
                config = data.SRILANKA;
            }
            if(this.props.route==="WESTINDIES"){
                config = data.WESTINDIES;
            }
            
            this.setState({
                configData:config,
                globalData:data.APP,
                isReady: true
            })
        });
        const advert = firebase.admob().interstitial(INTERSTITIAL_ADD_ID);
        const AdRequest = firebase.admob.AdRequest;
        const request = new AdRequest();
        advert.loadAd(request.build());
        advert.on('onAdLoaded', () => {
            console.log('Advert ready to show.');
        });
        // Simulate the interstitial being shown "sometime" later during the apps lifecycle
        setTimeout(() => {
            if (advert.isLoaded()) {
                advert.show();
            } else {
            }
        }, 30000);
    }

    componentWillUnmount() {
        this.didComponentFocus.remove();
        this.willComponentBlur.remove();
    }

    render() {
        const {configData,isReady,globalData} = this.state;
        if (!isReady) {
            return <AppLoader hasSpin={true} hasText={false} isVisible={true} type={'9CubeGrid'} color={this.props.bgColor} textColor={this.props.textColor}/>;
        }
        return (
            <Container >
                <AppHeader icon={this.props.icon} color={this.props.bgColor} title={configData.NAME.TITLE} {...this.props}/>
                <Tabs  onChangeTab={() => this.setState(s => ({ mountComponent:null}))} tabBarUnderlineStyle={{backgroundColor:this.props.lightColor}} >

                    <Tab heading={ <TabHeading style={{ backgroundColor: this.props.bgColor }}><Text style={{color:this.props.textColor,fontFamily:FontFamily,fontSize:fontSizeMD}}>{globalData.NAME.LIVESCORE}</Text></TabHeading>}>
                        <LiveList
                            url={globalData.URL.LIVE_SCORE}
                            textColor={this.props.textColor}
                            color={this.props.bgColor}
                            title={globalData.NAME.LIVESCORE}
                        />
                    </Tab>

                    <Tab heading={ <TabHeading style={{ backgroundColor: this.props.bgColor }}><Text style={{color:this.props.textColor,fontFamily:FontFamily,fontSize:fontSizeMD}}>{globalData.NAME.LIVESTREAM}</Text></TabHeading>}>
                        {this.state.isDisplayed && (
                            <VideoList
                                textColor={this.props.textColor}
                                color={this.props.bgColor}
                                data={globalData}
                                route={this.props.route}
                                tabRoute={"STREAM"}
                            />
                        )}
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}