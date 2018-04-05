import React from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class HeightWidth extends React.Component {
    static navigationOptions = { title: "Height & Width First Demo" }
    render() {
        return (
            <View>
            <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
            <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
            <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
          </View>
        )
    }
}