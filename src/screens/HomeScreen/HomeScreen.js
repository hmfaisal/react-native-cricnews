import React, { Component } from "react";
import MatchScreen from '../Core/MatchScreen';
import TweetScreen from '../Core/TweetScreen';
import LiveScoreScreen from '../Core/LiveScoreScreen';
import NewsScreen from '../Core/NewsScreen';
import { TabNavigator } from "react-navigation";
import AppFooter from '../../components/Layout/Footer';

import {
  colorPrimaryInverse,
  colorPrimary,
  colorPrimaryLight
} from "../../assets/base";

import Logo from '../../assets/images/logo.png';

export default (HomeScreen = TabNavigator(
  {
    
    NewsScreen: { screen: props => <NewsScreen bgColor={colorPrimary} lightColor={colorPrimaryLight} textColor={colorPrimaryInverse} icon={Logo}  route={"HOME"}{...props} /> },
    
    LiveScoreScreen: { screen: props => <LiveScoreScreen bgColor={colorPrimary} lightColor={colorPrimaryLight} textColor={colorPrimaryInverse} icon={Logo} route={"HOME"} {...props} /> 
    },

    TweetScreen: { screen: props => <TweetScreen bgColor={colorPrimary} lightColor={colorPrimaryLight} textColor={colorPrimaryInverse} icon={Logo} route={"HOME"} {...props} /> },

    MatchScreen: { screen: props => <MatchScreen bgColor={colorPrimary} lightColor={colorPrimaryLight} textColor={colorPrimaryInverse} icon={Logo} route={"HOME"} {...props} /> }
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <AppFooter color={colorPrimary}{...props}/>
      );
    }
  }
));
