import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, View, RefreshControl } from 'react-native';
import { Container, Spinner, Thumbnail, Text, Icon } from 'native-base';
import VideoItem from './VideoItem';

import {
    colorBg,
    colorBorder,
    colorBlack,
    colorWhiteInverse,
    FontFamily,
    fontSizeSM,
    fontSizeXS,
    colorBlackInverse,
} from '../../assets/base';

import {
    CONFIG_DATA_URL,
}  from '../../constants';

class VideoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          refreshing: false,
          loading: true,
          url:null,
          data:null
        };
    }
    componentWillMount() {
        this.setState({
            data:this.props.data,
            url:this.props.data.STREAMS.SOURCE[0].URL,
            loading: false
        })
    }

    _onRefresh() {
        this.setState({ refreshing: true });
        fetch(CONFIG_DATA_URL)
        .then((response) => response.json())
        .then((data) => {
            if(this.props.tabRoute==="STREAM"){
                this.setState({
                    data: data.APP,
                    url: data.APP.STREAMS.SOURCE[0].URL,
                    refreshing: false
                })
            }else{
                let config;
                if (this.props.route === "HOME") {
                    config = data.HOME;
                }
                if (this.props.route === "AFGHANISTAN") {
                    config = data.AFGHANISTAN;
                }
                if (this.props.route === "AUSTRALIA") {
                    config = data.AUSTRALIA;
                }
                if (this.props.route === "BANGLADESH") {
                    config = data.BANGLADESH;
                }
                if (this.props.route === "ENGLAND") {
                    config = data.ENGLAND;
                }
                if (this.props.route === "INDIA") {
                    config = data.INDIA;
                }
                if (this.props.route === "NEWZEALAND") {
                    config = data.NEWZEALAND;
                }
                if (this.props.route === "PAKISTAN") {
                    config = data.PAKISTAN;
                }
                if (this.props.route === "SOUTHAFRICA") {
                    config = data.SOUTHAFRICA;
                }
                if (this.props.route === "SRILANKA") {
                    config = data.SRILANKA;
                }
                if (this.props.route === "WESTINDIES") {
                    config = data.WESTINDIES;
                }
                this.setState({
                    data: config,
                    url: config.STREAMS.SOURCE[0].URL,
                    refreshing: false
                })
            }
            
        })
    }

    handleClick (data) {
        this.setState({
            url:data.URL
        })
    }

    renderView = () => {
        const { color,textColor} = this.props;
        const {data,url} = this.state;
        if (this.state.loading) {
            return <Spinner color={color}/>;
        }
        return (
            <ScrollView refreshControl={
                <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh.bind(this)}
                />
            } style={{ flex: 1, backgroundColor:colorBg, paddingBottom:10}} >
                <VideoItem
                    color={color}
                    textColor={textColor}
                    url={url}
                />
                <View >
                    {data.STREAMS.SOURCE.map((d, index) => {
                        return(
                            <View key={index} style={{flex:1,flexDirection:'row',justifyContent:'flex-start', alignItems:'center',padding:10,borderBottomColor:colorBorder,borderBottomWidth:1}}>
                                <View style={{width:'20%',justifyContent:'flex-start',paddingLeft:10}}>
                                    <Thumbnail source={{uri:d.IMAGE}} style={{height:48,width:48}}/>
                                </View>
                                <View style={{width:'40%'}}>
                                    <Text style={{color:colorWhiteInverse,fontSize:fontSizeSM,fontFamily:FontFamily}}>{d.NAME}</Text>
                                </View>
                                <TouchableOpacity style={{width:'40%',padding:5,margin:0}} onPress={()=>this.handleClick(d)}>
                                    <View
                                        style={{flex:1,flexDirection: 'row',justifyContent:'center',alignItems:'center',backgroundColor:this.props.color,borderRadius:2}}
                                    >
                                        <Icon name="play-circle-filled" type="MaterialIcons" style={{fontSize:24,color:this.props.textColor,marginRight:8}}/>
                                        <Text style={{color:this.props.textColor,fontSize:fontSizeSM,fontFamily:FontFamily}}>{data.STREAMS.NAME.PLAY}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )}
                    )}
                </View>
            </ScrollView>
       );
    }

    render() {
        return (
          <Container>
            {this.renderView()}
          </Container>
        );
      }
}

export default VideoList;