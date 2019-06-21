import React, { Component } from "react";
import MatchScreen from '../Core/MatchScreen';
import TweetScreen from '../Core/TweetScreen';
import LiveScoreScreen from '../Core/LiveScoreScreen';
import NewsScreen from '../Core/NewsScreen';
import { TabNavigator } from "react-navigation";
import AppFooter from '../../components/Layout/Footer';

import {
  EnglandPrimaryInverse,
  EnglandPrimary,
  EnglandPrimaryLight
} from "../../assets/base";

import England from '../../assets/images/country/uk.png';


export default (EnglandScreen = TabNavigator(
  {
    LiveScoreScreen: { screen: props => <LiveScoreScreen bgColor={EnglandPrimary} lightColor={EnglandPrimaryLight} textColor={EnglandPrimaryInverse} icon={England} route={"ENGLAND"} {...props} /> 
    },

    TweetScreen: { screen: props => <TweetScreen bgColor={EnglandPrimary} lightColor={EnglandPrimaryLight} textColor={EnglandPrimaryInverse} icon={England} route={"ENGLAND"} {...props} /> },
    
    NewsScreen: { screen: props => <NewsScreen bgColor={EnglandPrimary} lightColor={EnglandPrimaryLight} textColor={EnglandPrimaryInverse} icon={England} route={"ENGLAND"}{...props} /> },

    MatchScreen: { screen: props => <MatchScreen bgColor={EnglandPrimary} lightColor={EnglandPrimaryLight} textColor={EnglandPrimaryInverse} icon={England} route={"ENGLAND"} {...props} /> },
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <AppFooter color={EnglandPrimary}{...props}/>
      );
    }
  }
));
