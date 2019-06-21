import React, { Component } from "react";
import firebase from 'react-native-firebase';
import HomeScreen from "./screens/HomeScreen";
import AppLoader from "./components/Layout/Loader";

import {
  colorPrimary,
  colorPrimaryInverse
} from './assets/base';

import {
  INTERSTITIAL_ADD_ID
} from './constants';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  componentDidMount(){
    this.turnOff = setTimeout(() => { 
      this.setState(() => ({isReady: true}))
    }, 3000);

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
    }, 60000);
  }
  
  render() {
    if (!this.state.isReady) {
      return <AppLoader hasSpin={false} hasText={true} type={'Pulse'} isVisible={true} color={colorPrimary} textColor={colorPrimaryInverse}/>;
    }
    return <HomeScreen />;
  }
}
