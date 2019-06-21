import React, { Component } from "react";
import MatchScreen from '../Core/MatchScreen';
import TweetScreen from '../Core/TweetScreen';
import LiveScoreScreen from '../Core/LiveScoreScreen';
import NewsScreen from '../Core/NewsScreen';
import { TabNavigator } from "react-navigation";
import AppFooter from '../../components/Layout/Footer';

import {
  NewZealandPrimaryInverse,
  NewZealandPrimary,
  NewZealandPrimaryLight
} from "../../assets/base";

import NewZealand from '../../assets/images/country/new-zealand.png';


export default (NewZealandScreen = TabNavigator(
  {
    LiveScoreScreen: { screen: props => <LiveScoreScreen icon={NewZealand} lightColor={NewZealandPrimaryLight} bgColor={NewZealandPrimary} textColor={NewZealandPrimaryInverse} route={"NEWZEALAND"} {...props} /> 
    },

    TweetScreen: { screen: props => <TweetScreen bgColor={NewZealandPrimary} textColor={NewZealandPrimaryInverse} route={"NEWZEALAND"} {...props} /> },
    
    NewsScreen: { screen: props => <NewsScreen bgColor={NewZealandPrimary} textColor={NewZealandPrimaryInverse} route={"NEWZEALAND"}{...props} /> },

    MatchScreen: { screen: props => <MatchScreen bgColor={NewZealandPrimary} textColor={NewZealandPrimaryInverse} route={"NEWZEALAND"} {...props} /> },
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <AppFooter color={NewZealandPrimary}{...props}/>
      );
    }
  }
));
