import React from 'react';
import { Text, View } from 'react-native';

class Greeting extends React.Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default class Props extends React.Component {
    static navigationOptions = { title: "Props Demo" }
    render() {
      return (
        <View style={{alignItems: 'center'}}>
          <Greeting name='Lars' />
          <Greeting name='Sigurd' />
          <Greeting name='Thomas' />
        </View>
      )
    }
  }