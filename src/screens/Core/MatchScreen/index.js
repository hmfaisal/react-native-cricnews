import React, { Component } from 'react';
import firebase from 'react-native-firebase';
import AppHeader from "../../../components/Layout/Header";
import AppLoader from "../../../components/Layout/Loader";
import { Container, Tab, Tabs, TabHeading, Text, Spinner } from 'native-base';
import StandingsItem from '../../../components/Standings/StandingsItem';
import FixturesItem from '../../../components/Fixtures/FixturesItem';
import VideoList from '../../../components/Videos/VideoList';

import {
    CONFIG_DATA_URL,
    CONFIG_SCHEDULE_URL,
    INTERSTITIAL_ADD_ID
}  from '../../../constants';

import {
    FontFamily,
    fontSizeMD
} from '../../../assets/base';


export default class LiveScoreScreen extends Component {
    constructor() {
        super();
        this.state = {
          isReady: false,
          configData:null,
          globalData:null,
          scheduleData:[],
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
        Promise.all([
            fetch(CONFIG_DATA_URL),
            fetch(CONFIG_SCHEDULE_URL)
        ])
        .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
        .then(([data, scheduleData]) => {
            let config;
            let schedule=[];
            if(this.props.route==="HOME"){
                config = data.HOME;
                schedule = scheduleData.HOME;
            }
            if(this.props.route==="AFGHANISTAN"){
                config = data.AFGHANISTAN;
                schedule = scheduleData.AFGHANISTAN;
            }
            if(this.props.route==="AUSTRALIA"){
                config = data.AUSTRALIA;
                schedule = scheduleData.AUSTRALIA;
            }
            if(this.props.route==="BANGLADESH"){
                config = data.BANGLADESH;
                schedule = scheduleData.BANGLADESH;
            }
            if(this.props.route==="ENGLAND"){
                config = data.ENGLAND;
                schedule = scheduleData.ENGLAND;
            }
            if(this.props.route==="INDIA"){
                config = data.INDIA;
                schedule = scheduleData.INDIA;
            }
            if(this.props.route==="NEWZEALAND"){
                config = data.NEWZEALAND;
                schedule = scheduleData.NEWZEALAND;
            }
            if(this.props.route==="PAKISTAN"){
                config = data.PAKISTAN;
                schedule = scheduleData.PAKISTAN;
            }
            if(this.props.route==="SOUTHAFRICA"){
                config = data.SOUTHAFRICA;
                schedule = scheduleData.SOUTHAFRICA;
            }
            if(this.props.route==="SRILANKA"){
                config = data.SRILANKA;
                schedule = scheduleData.SRILANKA;
            }
            if(this.props.route==="WESTINDIES"){
                config = data.WESTINDIES;
                schedule = scheduleData.WESTINDIES;
            }
            this.setState({
                configData:config,
                globalData:data.APP,
                scheduleData:schedule,
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
        const {configData,isReady,globalData,scheduleData} = this.state;
        if (!isReady) {
            return <AppLoader hasSpin={true} hasText={false} type={'9CubeGrid'} isVisible={true} color={this.props.bgColor} textColor={this.props.textColor}/>;
        }
        return (
            <Container>
                <AppHeader icon={this.props.icon} color={this.props.bgColor}  title={configData.NAME.TITLE} {...this.props}/>
                <Tabs tabBarUnderlineStyle={{backgroundColor:this.props.lightColor}} >
                    <Tab heading={ <TabHeading style={{ backgroundColor: this.props.bgColor }}><Text style={{color:this.props.textColor,fontFamily:FontFamily,fontSize:fontSizeMD}}>{globalData.NAME.FIXTURES}</Text></TabHeading>}>
                        <FixturesItem
                            url={configData.URL.FIXTURES}
                            color={this.props.bgColor}
                            textColor={this.props.textColor}
                            title={globalData.NAME.FIXTURES}
                            schedules={scheduleData}
                        />
                    </Tab> 
                    <Tab heading={ <TabHeading style={{ backgroundColor: this.props.bgColor }}><Text style={{color:this.props.textColor,fontFamily:FontFamily,fontSize:fontSizeMD}}>{globalData.NAME.STANDINGS}</Text></TabHeading>}>
                        <StandingsItem
                            url={configData.URL.STANDINGS}
                            color={this.props.bgColor}
                            textColor={this.props.textColor}
                            title={globalData.NAME.STANDINGS}
                        />
                    </Tab>
                    <Tab heading={ <TabHeading style={{ backgroundColor: this.props.bgColor }}><Text style={{color:this.props.textColor,fontFamily:FontFamily,fontSize:fontSizeMD}}>{globalData.NAME.HIGHLIGHTS}</Text></TabHeading>}>
                        {this.state.isDisplayed && (
                            <VideoList
                                textColor={this.props.textColor}
                                color={this.props.bgColor}
                                data={configData}
                                route={this.props.route}
                                tabRoute={"HIGHLIGHTS"}
                            />
                        )}
                    </Tab> 
                </Tabs>
            </Container>
            
        );
    }
}