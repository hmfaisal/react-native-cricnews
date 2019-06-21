import React, { Component } from 'react';
import { ListView, RefreshControl } from 'react-native';
import * as rssParser from 'react-native-rss-parser';
import { Container, Spinner } from 'native-base';
import NewsItem from './NewsItem';
import {colorPrimary,colorBg} from "../../assets/base";

class NewsList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([
      ]),
      refreshing: false,
      loading: true
    };
  }

  componentWillMount() {
    fetch(this.props.url)
    .then((response) => response.text())
    .then((responseData) => rssParser.parse(responseData))
    .then((rss) => {
      const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.setState({
          dataSource: ds.cloneWithRows(rss.items),
          loading: false
        });
    });
  }


  _onRefresh() {
    this.setState({ refreshing: true });
    fetch(this.props.url)
    .then((response) => response.text())
    .then((responseData) => rssParser.parse(responseData))
    .then((rss) => {
      const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.setState({
          dataSource: ds.cloneWithRows(rss.items),
          refreshing: false
        });
    });
  }


  renderView = () => {
    if (this.state.loading) {
      return <Spinner color={colorPrimary}/>;
    }
    const { color } = this.props;
    return (
      <Container style={{ flex: 1, backgroundColor:colorBg }}>
        <ListView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <NewsItem
              item={rowData}
              color={color}
            />
          }
        />
     </Container>
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

export default NewsList;