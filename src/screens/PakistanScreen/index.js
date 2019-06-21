import React, { Component } from "react";
import MatchScreen from '../Core/MatchScreen';
import TweetScreen from '../Core/TweetScreen';
import LiveScoreScreen from '../Core/LiveScoreScreen';
import NewsScreen from '../Core/NewsScreen';
import { TabNavigator } from "react-navigation";
import AppFooter from '../../components/Layout/Footer';

import {
  PakistanPrimaryInverse,
  PakistanPrimary,
  PakistanPrimaryLight
} from "../../assets/base";

import Pakistan from '../../assets/images/country/pakistan.png';


export default (PakistanScreen = TabNavigator(
  {
    LiveScoreScreen: { screen: props => <LiveScoreScreen icon={Pakistan} bgColor={PakistanPrimary} lightColor={PakistanPrimaryLight} textColor={PakistanPrimaryInverse} route={"PAKISTAN"} {...props} /> 
    },

    TweetScreen: { screen: props => <TweetScreen icon={Pakistan} bgColor={PakistanPrimary} lightColor={PakistanPrimaryLight} textColor={PakistanPrimaryInverse} route={"PAKISTAN"} {...props} /> },
    
    NewsScreen: { screen: props => <NewsScreen icon={Pakistan} bgColor={PakistanPrimary} lightColor={PakistanPrimaryLight} textColor={PakistanPrimaryInverse} route={"PAKISTAN"}{...props} /> },

    MatchScreen: { screen: props => <MatchScreen icon={Pakistan} bgColor={PakistanPrimary} lightColor={PakistanPrimaryLight} textColor={PakistanPrimaryInverse} route={"PAKISTAN"} {...props} /> },
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <AppFooter color={PakistanPrimary}{...props}/>
      );
    }
  }
));
