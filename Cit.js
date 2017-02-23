import React, { Component, PropTypes } from 'react';
import { View, Image, StyleSheet, Animated, Easing, Text, Navigator, TouchableWithoutFeedback,BackAndroid } from 'react-native';

import {Button} from 'react-native-elements';

import Events from './Events';

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
     _handlePress = () => {
     this.props.navigator.push({id: 5,});
    };
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
          <Button large backgroundColor= 'rgba(0,0,0,0)'
                 title='Contact Us' onPress={this._handlePress}/>
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
     _handlePress = () => {
     this.props.navigator.push({id: 6,});
    };
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
                             <View style={styles.containerr}>
          <Button large backgroundColor= 'rgba(0,0,0,0)'
                 title='Schedule' onPress={this._handlePress}/>
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
   _handlePress = () => {
     this.props.navigator.push({id: 3,});
    };
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
          <Button large backgroundColor= 'rgba(0,0,0,0)'
                 title='Events'onPress={this._handlePress}/>
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
     _handlePress = () => {
     this.props.navigator.push({id: 7,});
    };
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
          <Button large onPress={this._handlePress} backgroundColor= 'rgba(0,0,0,0)'
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
     _handlePress = () => {
     this.props.navigator.push({id: 8,});
    };
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
          <Button large onPress={this._handlePress} backgroundColor= 'rgba(0,0,0,0)'
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
     _handlePress = () => {
     this.props.navigator.push({id: 9,});
    };
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
          <Button large onPress={this._handlePress} backgroundColor= 'rgba(0,0,0,0)'
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


export default class Cit extends Component {

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
      <BackgroundBotImageL1 navigator={this.props.navigator}/>
      <BackgroundBotImageL2 navigator={this.props.navigator}/>
      <BackgroundBotImageL3 navigator={this.props.navigator}/>
      </View>
      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <BackgroundBotImageR1 navigator={this.props.navigator}/>
      <BackgroundBotImageR2 navigator={this.props.navigator}/>
      <BackgroundBotImageR3 navigator={this.props.navigator}/>

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
  containerr: {
    flex: 1,
    alignItems:'flex-end',
    justifyContent:'center',

    
    backgroundColor: 'rgba(0,0,0,0)'
  },
  containerl: {
    flex: 1,
    alignItems:'flex-start',
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