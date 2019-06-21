import React, { Component } from 'react';
import firebase from 'react-native-firebase';
import AppHeader from "../../../components/Layout/Header";
import AppLoader from "../../../components/Layout/Loader";
import { Container, Tab, Tabs, ScrollableTab, TabHeading, Text, Spinner } from 'native-base';
import NewsList from '../../../components/News/NewsList';

import {
    CONFIG_DATA_URL,
    INTERSTITIAL_ADD_ID
}  from '../../../constants';

import {
    FontFamily,
    fontSizeMD
} from '../../../assets/base';

export default class NewsScreen extends Component {
    constructor() {
        super();
        this.state = {
          isReady: false,
          configData:null,
          globalData:null
        };
    }
    componentDidMount(){
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
    render() {
        const {configData,isReady,globalData} = this.state;
        if (!isReady) {
            return <AppLoader hasSpin={true} hasText={false} type={'9CubeGrid'} isVisible={true} color={this.props.bgColor} textColor={this.props.textColor}/>;
        }
        return (
            <Container>
                <AppHeader icon={this.props.icon} color={this.props.bgColor}  title={configData.NAME.TITLE} {...this.props}/>
                <Tabs tabBarUnderlineStyle={{backgroundColor:this.props.lightColor}} renderTabBar={()=> <ScrollableTab style={{ backgroundColor: this.props.bgColor }}/>}>
                    {configData.NEWS.map((data, index) => {
                        return(
                            <Tab key={index} heading={ <TabHeading style={{ backgroundColor: "transparent"}}><Text style={{color:this.props.textColor,fontFamily:FontFamily,fontSize:fontSizeMD}}>{data.NAME}</Text></TabHeading>}>
                            <NewsList
                                url={data.URL}
                                color={this.props.bgColor}
                                textColor={this.props.textColor}
                                title={data.NAME}
                            />
                        </Tab>
                       )}
                    )}
                </Tabs>
            </Container>
            
        );
    }
}