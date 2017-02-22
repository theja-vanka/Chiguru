import React, { Component, PropTypes } from 'react';
import { View, Image, StyleSheet, Animated, Easing, Text, Navigator, TouchableWithoutFeedback,BackAndroid } from 'react-native';



class BackgroundImage extends Component {
  
    render() {
        return (
            <Image source={require('./images/cit_bg.png')}
                  style={styles.backgroundImage}>

                  {this.props.children}

            </Image>
        );
    }
}

class BackgroundBotImageR3 extends Component {
    constructor () {
  super()
  this.animatedValue = new Animated.Value(0)
}
  
    render() {
        const marginLeft = this.animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0]
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
          source={require('./images/blue.png')}>
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
      duration: 1000,
      easing: Easing.linear
    }
  ).start()

  


}
}
class BackgroundBotImageR2 extends Component {
    constructor () {
  super()
  this.animatedValue = new Animated.Value(0)
}
  
    render() {
        const marginLeft = this.animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0]
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
          source={require('./images/pur.png')}>
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
      duration: 1000,
      delay: 500,
      easing: Easing.linear
    }
  ).start()

  


}
}
class BackgroundBotImageR1 extends Component {
    constructor () {
  super()
  this.animatedValue = new Animated.Value(0)
}
  
    render() {
        const marginLeft = this.animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0]
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
          source={require('./images/yel.png')}>
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
      duration: 1000,
      delay: 500,
      easing: Easing.linear
    }
  ).start()

  


}
}
class BackgroundBotImageL3 extends Component {
  constructor () {
  super()
  this.animatedValue = new Animated.Value(0)
}
    render() {
        const marginLeft = this.animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 0]
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
          source={require('./images/ora.png')}>
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
      duration: 1000,
      easing: Easing.linear
    }
  ).start()

  


}
}
class BackgroundBotImageL2 extends Component {
      constructor () {
  super()
  this.animatedValue = new Animated.Value(0)
}
  
    render() {
        const marginLeft = this.animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 0]
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
          source={require('./images/red.png')}>
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
      duration: 1000,
      delay : 500,
      easing: Easing.linear
    }
  ).start()

  


}
}
class BackgroundBotImageL1 extends Component {
     constructor () {
  super()
  this.animatedValue = new Animated.Value(0)
}
  
    render() {
         const marginLeft = this.animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 0]
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
          source={require('./images/gre.png')}>
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
      duration: 1000,
      delay : 500,
      easing: Easing.linear
    }
  ).start()

  


}
}


export default class Home extends Component {

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
          <View style={{flex: 1, flexDirection: 'row'}}>
           <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <BackgroundBotImageL1 />
      <BackgroundBotImageL2 />
      <BackgroundBotImageL3 />
      </View>
      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <BackgroundBotImageR1 />
      <BackgroundBotImageR2 />
      <BackgroundBotImageR3 />

       </View>

      </View>
          </BackgroundImage>
                   
                        
    )
  }
  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.onBackPress.bind(this));
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: 'rgba(0,0,0,0)'
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