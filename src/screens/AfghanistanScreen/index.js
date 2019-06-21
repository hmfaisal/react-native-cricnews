import React, { Component } from "react";
import MatchScreen from '../Core/MatchScreen';
import TweetScreen from '../Core/TweetScreen';
import LiveScoreScreen from '../Core/LiveScoreScreen';
import NewsScreen from '../Core/NewsScreen';
import { TabNavigator } from "react-navigation";
import AppFooter from '../../components/Layout/Footer';

import {
  AfghanistanPrimaryInverse,
  AfghanistanPrimary,
  AfghanistanPrimaryLight
} from "../../assets/base";

import Afghanistan from '../../assets/images/country/afghanistan.png';

export default (AfghanistanScreen = TabNavigator(
  {
    LiveScoreScreen: { screen: props => <LiveScoreScreen bgColor={AfghanistanPrimary} lightColor={AfghanistanPrimaryLight} textColor={AfghanistanPrimaryInverse} icon={Afghanistan } route={"AFGHANISTAN"} {...props} /> 
    },

    TweetScreen: { screen: props => <TweetScreen bgColor={AfghanistanPrimary} lightColor={AfghanistanPrimaryLight} textColor={AfghanistanPrimaryInverse} icon={Afghanistan } route={"AFGHANISTAN"} {...props} /> },
    
    NewsScreen: { screen: props => <NewsScreen bgColor={AfghanistanPrimary} lightColor={AfghanistanPrimaryLight} textColor={AfghanistanPrimaryInverse} icon={Afghanistan } route={"AFGHANISTAN"}{...props} /> },

    MatchScreen: { screen: props => <MatchScreen bgColor={AfghanistanPrimary} lightColor={AfghanistanPrimaryLight} textColor={AfghanistanPrimaryInverse} icon={Afghanistan } route={"AFGHANISTAN"} {...props} /> },
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <AppFooter color={AfghanistanPrimary}{...props}/>
      );
    }
  }
));
