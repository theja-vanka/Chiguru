/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Easing
} from 'react-native';

class BackgroundImage extends Component {
  
    render() {
        return (
            <Image source={require('./images/splash_fin.png')}
                  style={styles.backgroundImage}>

                  {this.props.children}

            </Image>
        );
    }
}


export default class Chiguru extends Component {
  constructor () {
  super()
  this.spinValue = new Animated.Value(0)
}
  render() {
     const spin = this.spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })
    return (
      <BackgroundImage>
        <Animated.Image
        style={{
          flex: 1,
          width: null,
          height: null,
          resizeMode: 'cover',
          transform: [{rotate: spin}] }}
          source={require('./images/sp_lines.png')} />
      </BackgroundImage>
    );
  }
  componentDidMount () {
  this.spin()
}
spin () {
  this.spinValue.setValue(0)
  Animated.timing(
    this.spinValue,
    {
      toValue: 1,
      duration: 40000,
      easing: Easing.linear
    }
  ).start(() => this.spin())
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Chiguru', () => Chiguru);
