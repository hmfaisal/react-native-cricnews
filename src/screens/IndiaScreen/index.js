import React, { Component } from "react";
import MatchScreen from '../Core/MatchScreen';
import TweetScreen from '../Core/TweetScreen';
import LiveScoreScreen from '../Core/LiveScoreScreen';
import NewsScreen from '../Core/NewsScreen';
import { TabNavigator } from "react-navigation";
import AppFooter from '../../components/Layout/Footer';

import {
  IndiaPrimaryInverse,
  IndiaPrimary,
  IndiaPrimaryLight
} from "../../assets/base";

import India from '../../assets/images/country/india.png';

export default (IndiaScreen = TabNavigator(
  {
    LiveScoreScreen: { screen: props => <LiveScoreScreen icon={India} bgColor={IndiaPrimary} lightColor={IndiaPrimaryLight} textColor={IndiaPrimaryInverse} route={"INDIA"} {...props} /> 
    },

    TweetScreen: { screen: props => <TweetScreen icon={India} bgColor={IndiaPrimary} lightColor={IndiaPrimaryLight} textColor={IndiaPrimaryInverse} route={"INDIA"} {...props} /> },
    
    NewsScreen: { screen: props => <NewsScreen icon={India} bgColor={IndiaPrimary} lightColor={IndiaPrimaryLight} textColor={IndiaPrimaryInverse} route={"INDIA"}{...props} /> },

    MatchScreen: { screen: props => <MatchScreen icon={India} bgColor={IndiaPrimary} lightColor={IndiaPrimaryLight} textColor={IndiaPrimaryInverse} route={"INDIA"} {...props} /> },
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <AppFooter color={IndiaPrimary}{...props}/>
      );
    }
  }
));
