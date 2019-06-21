import React, { Component } from "react";
import MatchScreen from '../Core/MatchScreen';
import TweetScreen from '../Core/TweetScreen';
import LiveScoreScreen from '../Core/LiveScoreScreen';
import NewsScreen from '../Core/NewsScreen';
import { TabNavigator } from "react-navigation";
import AppFooter from '../../components/Layout/Footer';

import {
  SouthAfricaPrimaryInverse,
  SouthAfricaPrimary,
  SouthAfricaPrimaryLight
} from "../../assets/base";

import SouthAfrica from '../../assets/images/country/south-africa.png';

export default (SouthAfricaScreen = TabNavigator(
  {
    LiveScoreScreen: { screen: props => <LiveScoreScreen icon={SouthAfrica} bgColor={SouthAfricaPrimary} lightColor={SouthAfricaPrimaryLight} textColor={SouthAfricaPrimaryInverse} route={"SOUTHAFRICA"} {...props} /> 
    },

    TweetScreen: { screen: props => <TweetScreen bicon={SouthAfrica} bgColor={SouthAfricaPrimary} lightColor={SouthAfricaPrimaryLight} textColor={SouthAfricaPrimaryInverse} route={"SOUTHAFRICA"} {...props} /> },
    
    NewsScreen: { screen: props => <NewsScreen icon={SouthAfrica} bgColor={SouthAfricaPrimary} lightColor={SouthAfricaPrimaryLight} textColor={SouthAfricaPrimaryInverse}route={"SOUTHAFRICA"}{...props} /> },

    MatchScreen: { screen: props => <MatchScreen icon={SouthAfrica} bgColor={SouthAfricaPrimary} lightColor={SouthAfricaPrimaryLight} textColor={SouthAfricaPrimaryInverse} route={"SOUTHAFRICA"} {...props} /> },
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <AppFooter color={SouthAfricaPrimary}{...props}/>
      );
    }
  }
));
