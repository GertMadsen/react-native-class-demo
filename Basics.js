import React from 'react';
import { Text, View, Image } from 'react-native';

class Greeting extends React.Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default class Basics extends React.Component {
  static navigationOptions = { title: "Learn the Basics" }
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello World</Text>
        <Image source={pic} style={{ width: 193, height: 110 }} />
        <Greeting name='Lars' />
        <Greeting name='Sigurd' />
        <Greeting name='Thomas' />
      </View>
    )
  }
}

