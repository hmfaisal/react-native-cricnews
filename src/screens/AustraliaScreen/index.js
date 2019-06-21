import React, { Component } from "react";
import MatchScreen from '../Core/MatchScreen';
import TweetScreen from '../Core/TweetScreen';
import LiveScoreScreen from '../Core/LiveScoreScreen';
import NewsScreen from '../Core/NewsScreen';
import { TabNavigator } from "react-navigation";
import AppFooter from '../../components/Layout/Footer';

import {
  AustraliaPrimaryInverse,
  AustraliaPrimary,
  AustraliaPrimaryLight
} from "../../assets/base";

import Australia from '../../assets/images/country/australia.png';


export default (AustraliaScreen = TabNavigator(
  {
    LiveScoreScreen: { screen: props => <LiveScoreScreen bgColor={AustraliaPrimary} lightColor={AustraliaPrimaryLight} textColor={AustraliaPrimaryInverse} icon={Australia} route={"AUSTRALIA"} {...props} /> 
    },

    TweetScreen: { screen: props => <TweetScreen bgColor={AustraliaPrimary} lightColor={AustraliaPrimaryLight} textColor={AustraliaPrimaryInverse} icon={Australia} route={"AUSTRALIA"} {...props} /> },
    
    NewsScreen: { screen: props => <NewsScreen bgColor={AustraliaPrimary} lightColor={AustraliaPrimaryLight} textColor={AustraliaPrimaryInverse} icon={Australia} route={"AUSTRALIA"}{...props} /> },

    MatchScreen: { screen: props => <MatchScreen bgColor={AustraliaPrimary} lightColor={AustraliaPrimaryLight} textColor={AustraliaPrimaryInverse} icon={Australia} route={"AUSTRALIA"} {...props} /> },
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <AppFooter color={AustraliaPrimary}{...props}/>
      );
    }
  }
));
