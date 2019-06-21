import React, { Component } from "react";
import MatchScreen from '../Core/MatchScreen';
import TweetScreen from '../Core/TweetScreen';
import LiveScoreScreen from '../Core/LiveScoreScreen';
import NewsScreen from '../Core/NewsScreen';
import { TabNavigator } from "react-navigation";
import AppFooter from '../../components/Layout/Footer';

import {
  SrilankaPrimaryInverse,
  SrilankaPrimary,
  SrilankaPrimaryLight
} from "../../assets/base";

import Srilanka from '../../assets/images/country/sri-lanka.png';

export default (SrilankaScreen = TabNavigator(
  {
    LiveScoreScreen: { screen: props => <LiveScoreScreen icon={Srilanka} lightColor={SrilankaPrimaryLight} bgColor={SrilankaPrimary} textColor={SrilankaPrimaryInverse} route={"SRILANKA"} {...props} /> 
    },

    TweetScreen: { screen: props => <TweetScreen icon={Srilanka} lightColor={SrilankaPrimaryLight} bgColor={SrilankaPrimary} textColor={SrilankaPrimaryInverse} route={"SRILANKA"} {...props} /> },
    
    NewsScreen: { screen: props => <NewsScreen icon={Srilanka} lightColor={SrilankaPrimaryLight} bgColor={SrilankaPrimary} textColor={SrilankaPrimaryInverse} route={"SRILANKA"}{...props} /> },

    MatchScreen: { screen: props => <MatchScreen icon={Srilanka} lightColor={SrilankaPrimaryLight} bgColor={SrilankaPrimary} textColor={SrilankaPrimaryInverse} route={"SRILANKA"} {...props} /> },
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <AppFooter color={SrilankaPrimary}{...props}/>
      );
    }
  }
));
