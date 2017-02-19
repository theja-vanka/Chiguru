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
  this.scaleValue = new Animated.Value(0)
}
  render() {
     const spin = this.spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })
  const scaleText = this.scaleValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.5, 2]
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
  this.scaleValue.setValue(0)
  const createAnimation = function (value, duration, easing, delay = 0) {
    return Animated.timing(
      value,
      {
        toValue: 1,
        duration,
        easing,
        delay
      }
    )
  }
   const createSpin = function (value, duration, easing) {
    return Animated.timing(
      value,
      {
        toValue: 1,
        duration,
        easing,
      }
    )
  }
  Animated.parallel([
    createSpin(this.spinValue, 40000, Easing.linear),
    createAnimation(this.scaleValue, 1000, Easing.ease, 1000)
           
  ]).start()
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
