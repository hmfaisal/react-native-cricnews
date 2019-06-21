import React, { Component } from "react";
import MatchScreen from '../Core/MatchScreen';
import TweetScreen from '../Core/TweetScreen';
import LiveScoreScreen from '../Core/LiveScoreScreen';
import NewsScreen from '../Core/NewsScreen';
import { TabNavigator } from "react-navigation";
import AppFooter from '../../components/Layout/Footer';

import {
  WestIndiesPrimaryInverse,
  WestIndiesPrimary,
  WestIndiesPrimaryLight
} from "../../assets/base";

import WestIndies from '../../assets/images/country/west-indies.png';

export default (WestIndiesScreen = TabNavigator(
  {
    LiveScoreScreen: { screen: props => <LiveScoreScreen lightColor={WestIndiesPrimaryLight} bgColor={WestIndiesPrimary} textColor={WestIndiesPrimaryInverse} icon={WestIndies} route={"WESTINDIES"} {...props} /> 
    },

    TweetScreen: { screen: props => <TweetScreen lightColor={WestIndiesPrimaryLight} bgColor={WestIndiesPrimary} textColor={WestIndiesPrimaryInverse} icon={WestIndies} route={"WESTINDIES"} {...props} /> },
    
    NewsScreen: { screen: props => <NewsScreen lightColor={WestIndiesPrimaryLight} bgColor={WestIndiesPrimary} textColor={WestIndiesPrimaryInverse} icon={WestIndies} route={"WESTINDIES"}{...props} /> },

    MatchScreen: { screen: props => <MatchScreen lightColor={WestIndiesPrimaryLight} bgColor={WestIndiesPrimary} textColor={WestIndiesPrimaryInverse} icon={WestIndies} route={"WESTINDIES"} {...props} /> },
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <AppFooter color={WestIndiesPrimary}{...props}/>
      );
    }
  }
));
