import React from 'react';
import { AppRegistry, ScrollView, Image, Text } from 'react-native';

export default class ScrollViews extends React.Component {
    static navigationOptions = { title: "ScrollView Demo" }
    render() {
      let pic = {
        uri: 'https://facebook.github.io/react-native/img/favicon.png'
      };
        return ( 
          <ScrollView>
            <Text style={{fontSize:96}}>Scroll me plz</Text>
            <Image source={pic} style={{ width: 64, height: 64 }} />
            <Image source={pic} style={{ width: 64, height: 64 }} />
            <Image source={pic} style={{ width: 64, height: 64 }} />
            <Image source={pic} style={{ width: 64, height: 64 }} />
            <Text style={{fontSize:96}}>If you like</Text>
            <Image source={pic} style={{ width: 64, height: 64 }} />
            <Image source={pic} style={{ width: 64, height: 64 }} />
            <Image source={pic} style={{ width: 64, height: 64 }} />
            <Image source={pic} style={{ width: 64, height: 64 }} />
            <Text style={{fontSize:96}}>Scrolling down</Text>
            <Image source={pic} style={{ width: 64, height: 64 }} />
            <Image source={pic} style={{ width: 64, height: 64 }} />
            <Image source={pic} style={{ width: 64, height: 64 }} />
            <Image source={pic} style={{ width: 64, height: 64 }} />
            <Text style={{fontSize:96}}>What's the best</Text>
            <Image source={pic} style={{ width: 64, height: 64 }} />
            <Image source={pic} style={{ width: 64, height: 64 }} />
            <Image source={pic} style={{ width: 64, height: 64 }} />
            <Image source={pic} style={{ width: 64, height: 64 }} />
            <Text style={{fontSize:96}}>Framework around?</Text>
            <Image source={pic} style={{ width: 64, height: 64 }} />
            <Image source={pic} style={{ width: 64, height: 64 }} />
            <Image source={pic} style={{ width: 64, height: 64 }} />
            <Image source={pic} style={{ width: 64, height: 64 }} />
            <Text style={{fontSize:80}}>React Native</Text>
            <Image source={pic} style={{ width: 64, height: 64 }} />
            <Image source={pic} style={{ width: 64, height: 64 }} />
            <Image source={pic} style={{ width: 64, height: 64 }} />
            <Image source={pic} style={{ width: 64, height: 64 }} />
          </ScrollView>
      );
    }
  }
  