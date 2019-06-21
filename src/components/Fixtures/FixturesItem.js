import React, { Component } from 'react';
import { Card, CardItem, Text, Button, Icon, Right, Left, Body, Thumbnail } from 'native-base';
import { View, ScrollView,TouchableOpacity} from 'react-native';

import moment from "moment";

import {
  colorBg,
  colorWhiteInverse,
  FontFamily,
  fontSizeSM,
  fontSizeMD,
  fontSizeLG,
  fontSizeXS
} from '../../assets/base';

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
import Logo from '../../assets/images/logo.png';

class FixturesItem extends Component {

  render() {
    const { schedules} = this.props;
    return (
      <ScrollView style={{ flex: 1, backgroundColor:colorBg,marginBottom:10}}>
        {schedules.map((data, index) => {
          let date = moment(parseInt(data.timeStamp)).format('LL');
          let time = moment(parseInt(data.timeStamp)).format('LT');
          let teams =[];
          let flags=[];
          if(data.team1.trim() ==="Afghanistan"){
            flags.push(Afghanistan);
            teams.push("Afghanistan");
          }
          if(data.team1.trim() ==="Australia"){
            flags.push(Australia);
            teams.push("Australia");
          }
          if(data.team1.trim() ==="Bangladesh"){
            flags.push(Bangladesh);
            teams.push("Bangladesh");
          }
          if(data.team1.trim() ==="India"){
            flags.push(India);
            teams.push("India");
          }
          if(data.team1.trim() ==="England" ){
            flags.push(England);
            teams.push("England");
          }
          if(data.team1.trim() ==="New Zealand"){
            flags.push(NewZealand);
            teams.push("New Zealand");
          }
          if(data.team1.trim() ==="Pakistan"){
            flags.push(Pakistan);
            teams.push("Pakistan");
          }
          if(data.team1.trim() ==="South Africa"){
            flags.push(SouthAfrica);
            teams.push("South Africa");
          }
          if(data.team1.trim() ==="Sri Lanka"){
            flags.push(Srilanka);
            teams.push("Sri Lanka");
          }
          if(data.team1.trim() ==="West Indies"){
            flags.push(WestIndies);
            teams.push("West Indies");
          }
          if( data.team2.trim() ==="Afghanistan"){
            flags.push(Afghanistan);
            teams.push("Afghanistan");
          }
          if(data.team2.trim() ==="Australia"){
            flags.push(Australia);
            teams.push("Australia");
          }
          if(data.team2.trim() ==="Bangladesh"){
            flags.push(Bangladesh);
            teams.push("Bangladesh");
          }
          if(data.team2.trim() ==="India"){
            flags.push(India);
            teams.push("India");
          }
          if(data.team2.trim() ==="England"){
            flags.push(England);
            teams.push("England");
          }
          if(data.team2.trim() ==="New Zealand"){
            flags.push(NewZealand);
            teams.push("New Zealand");
          }
          if(data.team2.trim() ==="Pakistan"){
            flags.push(Pakistan);
            teams.push("Pakistan");
          }
          if(data.team2.trim() ==="South Africa"){
            flags.push(SouthAfrica);
            teams.push("South Africa");
          }
          if(data.team2.trim() ==="Sri Lanka"){
            flags.push(Srilanka);
            teams.push("Sri Lanka");
          }
          if(data.team2.trim() ==="West Indies"){
            flags.push(WestIndies);
            teams.push("West Indies");
          }else{
            flags.push(Logo);
            flags.push(Logo);
            teams.push("TBA");
            teams.push("TBA");
          }
          return (
            <TouchableOpacity key={index}>
              <Card >
                <CardItem header style={{ paddingLeft: 10, paddingRight: 10}}>
                  <Icon name="event" type="MaterialIcons" style={{color: this.props.color,fontSize:32,marginRight:8}}/>
                  <Text style={{ color:this.props.color, fontWeight:'bold', fontSize:fontSizeLG, fontFamily:FontFamily }}>{date}</Text>
                </CardItem>
                <View style={{ paddingLeft: 10, paddingRight: 10, display:'flex', flexDirection:'column'}}>
                  <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <Thumbnail square source={flags[0]} style={{height:32,width:32,marginRight:5}}/>
                    <Text style={{ color:colorWhiteInverse, fontSize:fontSizeMD, fontWeight:'bold', fontFamily:FontFamily, marginRight:10 }}>{teams[0]}</Text>
                    <Text style={{ color:colorWhiteInverse, fontSize:fontSizeSM, fontFamily:FontFamily, marginRight:10  }}>vs</Text>
                    <Thumbnail square source={flags[1]} style={{height:32,width:32,marginRight:5}}/>
                    <Text style={{ color:colorWhiteInverse, fontSize:fontSizeMD, fontWeight:'bold', fontFamily:FontFamily }}>{teams[1]}</Text>
                  </View>
                  <View style={{display:'flex',flexDirection:'row',marginTop:10}}>
                    <Icon name="donut-large" type="MaterialIcons" style={{color: this.props.color,fontSize:22,marginRight:8}}/>
                    <Text style={{ color:colorWhiteInverse, fontSize:fontSizeSM, fontFamily:FontFamily }}>{data.description}</Text>
                  </View>
                  <View style={{display:'flex',flexDirection:'row',marginTop:5}}>
                    <Icon name="schedule" type="MaterialIcons" style={{color: this.props.color,fontSize:22,marginRight:8}}/>
                    <Text style={{ color:colorWhiteInverse, fontSize:fontSizeSM, fontFamily:FontFamily, marginRight:8 }}>{time}</Text>
                    <Text style={{ color:colorWhiteInverse, fontSize:fontSizeSM, fontFamily:FontFamily }}>(your time)</Text>
                  </View>
                  <View style={{display:'flex',flexDirection:'row',marginTop:5,marginBottom:20}}>
                    <Icon name="room" type="MaterialIcons" style={{color: this.props.color,fontSize:18,marginRight:8}}/>
                    <Text style={{ color:colorWhiteInverse, fontSize:fontSizeXS, fontFamily:FontFamily}}>{data.venue}</Text>
                  </View>
                </View>
              </Card>
            </TouchableOpacity>
          )}
        )}
      </ScrollView>
    );
  }
}

export default FixturesItem;

