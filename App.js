import React from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView, ScrollView } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { StackNavigator } from 'react-navigation';

import WhatToDo from './WhatToDo.js';
import Basics from './Basics.js';
import Props from './Props.js';
import State from './State.js';
import Style from './Style.js';
import HeightWidth from './HeightWidth.js';
import HeightWidth2 from './HeightWidth2.js';
import FlexBox from './FlexBox.js';
import TextInputs from './TextInputs.js';
import Touches from './Touches.js';
import Touches2 from './Touches2.js';
import ScrollViews from './ScrollViews.js';
import FlatListDemo from './FlatList.js';
import SectionListDemo from './SectionList.js';
import FetchExample from './FetchExample.js';

//Todo: Create a new file (NetWorking.js), import it,add a "Touchable", and complete the exercise

const Touchable = (props) => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>)


class HomeScreen extends React.Component {
  static navigationOptions = { title: 'Facebook Tutorial Exercise' };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView >
        <Touchable onPress={() => navigate('web')} title="What I have to do" />
        <Touchable onPress={() => navigate('basics')} title="Basics" />
        <Touchable onPress={() => navigate('props')} title="Props" />
        <Touchable onPress={() => navigate('state')} title="State" />
        <Touchable onPress={() => navigate('style')} title="Style" />
        <Touchable onPress={() => navigate('heightwidth')} title="Height & Width - I" />
        <Touchable onPress={() => navigate('heightwidth2')} title="Height & Width - II" />
        <Touchable onPress={() => navigate('flexbox')} title="Flex Box" />
        <Touchable onPress={() => navigate('textinputs')} title="Text Input" />
        <Touchable onPress={() => navigate('touches')} title="Touches - I" />
        <Touchable onPress={() => navigate('touches2')} title="Touches - II" />
        <Touchable onPress={() => navigate('scrollviews')} title="Scroll View" />
        <Touchable onPress={() => navigate('flatlist')} title="Flat List View" />
        <Touchable onPress={() => navigate('sectionlist')} title="Section List ViewI" />
        <Touchable onPress={() => navigate('fetchexample')} title="Networking" />
      </ScrollView>
    )
  }
}

export default App = () => <RouteStack style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight / 2 }} />

const RouteStack = StackNavigator({
  Home: { screen: HomeScreen },
  web: { screen: WhatToDo },
  basics: { screen: Basics },
  props: { screen: Props },
  state: { screen: State },
  style: { screen: Style },
  heightwidth: { screen: HeightWidth },
  heightwidth2: { screen: HeightWidth2 },
  flexbox: { screen: FlexBox },
  textinputs: { screen: TextInputs },
  touches: { screen: Touches },
  touches2: { screen: Touches2 },
  scrollviews: { screen: ScrollViews },
  flatlist: { screen: FlatListDemo },
  sectionlist: { screen: SectionListDemo },
  fetchexample: { screen: FetchExample },
});

const styles = StyleSheet.create({
  button: {
    margin: 3,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 7,
    fontSize: 18,
    fontWeight: "bold",
    color: 'white'
  }
})