import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  BackAndroid,
  Animated,
  Easing,
  TouchableWithoutFeedback
} from 'react-native';

import {Button} from 'react-native-elements';

class BackgroundImage extends Component {
   
    render() {
        return (
            <Image source={require('./images/open_bg.png')}
                  style={styles.backgroundImage}>

          {this.props.children}
            </Image>
        );
    }
}

class Backgroundhome1 extends Component {
  
   constructor () {
  super()
  this.animatedValue = new Animated.Value(0)
    }
  
    render() {
        const marginLeft = this.animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [400, 0]
  })
        return (
           <Animated.Image
        style={{
            marginLeft,
          flex: 1,
          width: null,
          height: null,
          resizeMode: 'cover'
           }}
          source={require('./images/home1.png')}>
                    {this.props.children}
          </Animated.Image>
        );
    }
    componentDidMount () {
  this.animate()
}
animate () {
  this.animatedValue.setValue(0)
  Animated.timing(
    this.animatedValue,
    {
      toValue: 1,
      duration: 500,
            delay: 700,
      easing: Easing.linear
    }
  ).start()
}
}
class Backgroundhome2 extends Component {
  
    constructor () {
  super()
  this.animatedValue = new Animated.Value(0)
    }
  
    render() {
        const marginLeft = this.animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [400, 0]
  })
        return (
            <Animated.Image
        style={{
            marginLeft,
          flex: 1,
          width: null,
          height: null,
          resizeMode: 'cover'
           }}
          source={require('./images/home2.png')}>
                    {this.props.children}
          </Animated.Image>
        );
    }
    componentDidMount () {
  this.animate()
}
animate () {
  this.animatedValue.setValue(0)
  Animated.timing(
    this.animatedValue,
    {
      toValue: 1,
      duration: 500,
            delay: 600,
      easing: Easing.linear
    }
  ).start()
}
}
class Backgroundhome3 extends Component {
  
   constructor () {
  super()
  this.animatedValue = new Animated.Value(0)
    }
  
    render() {
        const marginLeft = this.animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [400, 0]
  })
        return (
            <Animated.Image
        style={{
            marginLeft,
          flex: 1,
          width: null,
          height: null,
          resizeMode: 'cover'
           }}
          source={require('./images/home3.png')}>
                    {this.props.children}
          </Animated.Image>
        );
    }
    componentDidMount () {
  this.animate()
}
animate () {
  this.animatedValue.setValue(0)
  Animated.timing(
    this.animatedValue,
    {
      toValue: 1,
      duration: 500,
            delay: 500,
      easing: Easing.linear
    }
  ).start()
}
}
class Backgroundhome4 extends Component {
    constructor () {
  super()
  this.animatedValue = new Animated.Value(0)
    }
  
    render() {
        const marginLeft = this.animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [400, 0]
  })
        return (
            <Animated.Image
        style={{
            marginLeft,
          flex: 1,
          width: null,
          height: null,
          resizeMode: 'cover'
           }}
          source={require('./images/home4.png')}>
                    {this.props.children}
          </Animated.Image>
        );
    }
    componentDidMount () {
  this.animate()
}
animate () {
  this.animatedValue.setValue(0)
  Animated.timing(
    this.animatedValue,
    {
      toValue: 1,
      duration: 500,
      delay: 500,
      easing: Easing.linear
    }
  ).start()
}
}
class Backgroundhome5 extends Component {
    constructor () {
  super()
  this.animatedValue = new Animated.Value(0)
    }
  
    render() {
        const marginLeft = this.animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [400, 0]
  })
        return (
           <Animated.Image
        style={{
            marginLeft,
          flex: 1,
          width: null,
          height: null,
          resizeMode: 'cover'
           }}
          source={require('./images/home5.png')}>
                    {this.props.children}
          </Animated.Image>
        );
    } componentDidMount () {
  this.animate()
}
animate () {
  this.animatedValue.setValue(0)
  Animated.timing(
    this.animatedValue,
    {
      toValue: 1,
      duration: 500,
      easing: Easing.linear
    }
  ).start()
}
}

export default class Home extends Component {
     static get defaultProps() {
    return {
      title: 'Home'
    };
  }
    onBackPress(){
    this.props.navigator.pop();
    return true; 
}

  goBack = () => {
    this.props.navigator.pop();
  };
  render() {
    return (
    <BackgroundImage>
    <Backgroundhome5>
<Backgroundhome4>
<Backgroundhome3><Backgroundhome2><Backgroundhome1>
</Backgroundhome1></Backgroundhome2></Backgroundhome3>
</Backgroundhome4>
    </Backgroundhome5>
     </BackgroundImage>
    );
  }
   componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.onBackPress.bind(this));
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
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
   backgroundImage: {
        flex: 1,
        width: null,
        height: null,

        resizeMode: 'cover'
    },
    backgroundImage2: {
        flex: 20,
              position: 'relative',
        backgroundColor:'rgba(0,0,0,0)'
    },
});