import React from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class HeightWidth2 extends React.Component {
    static navigationOptions = { title: "Height & Width Second Demo" }
    render() {
        return (
            <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
          </View>
        )
    }
}