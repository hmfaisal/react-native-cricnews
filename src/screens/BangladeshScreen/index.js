import React, { Component } from "react";
import MatchScreen from '../Core/MatchScreen';
import TweetScreen from '../Core/TweetScreen';
import LiveScoreScreen from '../Core/LiveScoreScreen';
import NewsScreen from '../Core/NewsScreen';
import { TabNavigator } from "react-navigation";
import AppFooter from '../../components/Layout/Footer';

import {
  BangladeshPrimaryInverse,
  BangladeshPrimary,
  BangladeshPrimaryLight
} from "../../assets/base";
import Bangladesh from '../../assets/images/country/bangladesh.png';


export default (BangladeshScreen = TabNavigator(
  {
    LiveScoreScreen: { screen: props => <LiveScoreScreen bgColor={BangladeshPrimary} lightColor={BangladeshPrimaryLight} textColor={BangladeshPrimaryInverse} icon={Bangladesh} route={"BANGLADESH"} {...props} /> 
    },

    TweetScreen: { screen: props => <TweetScreen bgColor={BangladeshPrimary} lightColor={BangladeshPrimaryLight} textColor={BangladeshPrimaryInverse} icon={Bangladesh} route={"BANGLADESH"} {...props} /> },
    
    NewsScreen: { screen: props => <NewsScreen bgColor={BangladeshPrimary} lightColor={BangladeshPrimaryLight} textColor={BangladeshPrimaryInverse} icon={Bangladesh} route={"BANGLADESH"}{...props} /> },

    MatchScreen: { screen: props => <MatchScreen bgColor={BangladeshPrimary} lightColor={BangladeshPrimaryLight} textColor={BangladeshPrimaryInverse} icon={Bangladesh} route={"BANGLADESH"} {...props} /> },
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <AppFooter color={BangladeshPrimary}{...props}/>
      );
    }
  }
));
