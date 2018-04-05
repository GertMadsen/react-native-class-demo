import React from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class FlexBox extends React.Component {
    static navigationOptions = { title: "FlexBox Demo" }
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                
              }}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
              </View>
        )
    }
}