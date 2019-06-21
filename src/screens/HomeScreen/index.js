import React, { Component } from "react";
import HomeScreen from "./HomeScreen";
import AfghanistanScreen from "../AfghanistanScreen";
import AustraliaScreen from "../AustraliaScreen";
import BangladeshScreen from "../BangladeshScreen";
import EnglandScreen from "../EnglandScreen";
import IndiaScreen from "../IndiaScreen";
import NewZealandScreen from "../NewZealandScreen";
import PakistanScreen from "../PakistanScreen";
import SouthAfricaScreen from "../SouthAfricaScreen";
import SrilankaScreen from "../SrilankaScreen";
import WestIndiesScreen from "../WestIndiesScreen";
import SideBar from "../../components/Layout/Sidebar";
import { DrawerNavigator } from "react-navigation";

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen:HomeScreen },
    Afghanistan: { screen: AfghanistanScreen },
    Australia: { screen: AustraliaScreen },
    Bangladesh: { screen: BangladeshScreen },
    England: { screen: EnglandScreen },
    India: { screen: IndiaScreen },
    NewZealand: { screen: NewZealandScreen },
    Pakistan: { screen: PakistanScreen },
    SouthAfrica: { screen: SouthAfricaScreen },
    Srilanka: { screen: SrilankaScreen },
    WestIndies: { screen: WestIndiesScreen }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
