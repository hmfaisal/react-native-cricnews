import React from "react";
import { Image } from "react-native";
import {Text, Container, List, ListItem, Content} from "native-base";
import {
  HOME_TITLE,
  AFGHANISTAN_TITLE,
  AUSTRALIA_TITLE,
  BANGLADESH_TITLE,
  ENGLAND_TITLE,
  INDIA_TITLE,
  NEWZEALAND_TITLE,
  PAKISTAN_TITLE,
  SOUTHAFRICA_TITLE,
  SRILANKA_TITLE,
  WESTINDIES_TITLE
}  from '../../constants';
import Background from '../../assets/images/logo.png';
import HomeIcon from '../../assets/images/country/home.png';
import Afghanistan from '../../assets/images/country/afghanistan.png';
import Australia from '../../assets/images/country/australia.png';
import Bangladesh from '../../assets/images/country/bangladesh.png';
import India from '../../assets/images/country/india.png';
import England from '../../assets/images/country/uk.png';
import NewZealand from '../../assets/images/country/new-zealand.png';
import Pakistan from '../../assets/images/country/pakistan.png';
import SouthAfrica from '../../assets/images/country/south-africa.png';
import Srilanka from '../../assets/images/country/sri-lanka.png';
import WestIndies from '../../assets/images/country/west-indies.png';
import {colorPrimary, colorPrimaryInverse, colorSecondary} from '../../assets/base';

const routes = [
  {
    "name":HOME_TITLE,
    "icon":HomeIcon
  },
  {
    "name":AFGHANISTAN_TITLE,
    "icon":Afghanistan
  },
  {
    "name":AUSTRALIA_TITLE,
    "icon":Australia
  },
  {
    "name":BANGLADESH_TITLE,
    "icon":Bangladesh
  },
  {
    "name":ENGLAND_TITLE,
    "icon":England
  },
  {
    "name":INDIA_TITLE,
    "icon":India
  },
  {
    "name":NEWZEALAND_TITLE,
    "icon":NewZealand
  },
  {
    "name":PAKISTAN_TITLE,
    "icon":Pakistan
  },
  {
    "name":SOUTHAFRICA_TITLE,
    "icon":SouthAfrica
  },
  {
    "name":SRILANKA_TITLE,
    "icon":Srilanka
  },
  {
    "name":WESTINDIES_TITLE,
    "icon":WestIndies
  }
];

export default class SideBar extends React.Component {
  render() {
    return (
      <Container style={{backgroundColor:colorPrimary}}>
        <Content>
          <Image
            source={Background}
            style={{
              height: 140,
              width: 112,
              position: "absolute",
              alignSelf: "center",
              marginVertical:15
            }}
          />

          <List
            dataArray={routes}
            contentContainerStyle={{ marginTop: 160 }}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data.name)}
                >
                  <Image source={data.icon} style={{height:data.name==="Home"?56:32,width:data.name==="Home"?56:32,marginRight:10 }}/>
                  <Text style={{color:data.name==="Home"?colorSecondary:colorPrimaryInverse,fontSize:data.name==="Home"?16:12}}>{data.name}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}