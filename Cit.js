import React, { Component, PropTypes } from 'react';
import { View, Image, StyleSheet, Animated, Easing, Text, Navigator, TouchableWithoutFeedback,BackAndroid } from 'react-native';

import {Button} from 'react-native-elements';

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
    outputRange: [200, 0]
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
          <TouchableWithoutFeedback>
                             <View style={styles.container}>
          <Button backgroundColor= 'rgba(0,0,0,0)'
                 title='Contact Us'/>
                 </View>
                 </TouchableWithoutFeedback>
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
    outputRange: [200, 0]
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
          <TouchableWithoutFeedback>
                             <View style={styles.container}>
          <Button backgroundColor= 'rgba(0,0,0,0)'
                 title='Schedule'/>
                 </View>
                 </TouchableWithoutFeedback>
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
class BackgroundBotImageR1 extends Component {
    constructor () {
  super()
  this.animatedValue = new Animated.Value(0)
}
  
    render() {
        const marginLeft = this.animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [200, 0]
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
          <TouchableWithoutFeedback>
                             <View style={styles.container}>
          <Button backgroundColor= 'rgba(0,0,0,0)'
                 title='Events'/>
                 </View>
                 </TouchableWithoutFeedback>
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
      delay: 750,
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
    outputRange: [-200, 0]
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
          <TouchableWithoutFeedback>
                             <View style={styles.container}>
          <Button backgroundColor= 'rgba(0,0,0,0)'
                 title='Location'/>
                 </View>
                 </TouchableWithoutFeedback>
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
    outputRange: [-200, 0]
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
          
           <TouchableWithoutFeedback>
                             <View style={styles.container}>
          <Button backgroundColor= 'rgba(0,0,0,0)'
                 title='Sponcers'/>
                 </View>
                 </TouchableWithoutFeedback>
  
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
    outputRange: [-200, 0]
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
          <TouchableWithoutFeedback>
                             <View style={styles.container}>
          <Button backgroundColor= 'rgba(0,0,0,0)'
                 title='About Us'/>
                 </View>
                 </TouchableWithoutFeedback>
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
      delay : 750,
      easing: Easing.linear
    }
  ).start()

  


}
}


class Cit extends Component {

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
    alignItems:'center',
    justifyContent:'center',

    
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