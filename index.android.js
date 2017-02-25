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
  Easing,
  Navigator,
  TouchableWithoutFeedback
} from 'react-native';

import {
  Button
} from 'react-native-elements';

import Home from './Home';

import Events from './Events';

import Contactus from './Contactus';

import Cit from './Cit';

import Aboutus from './Aboutus';

import Schedule from './Schedule';

import Sponsors from './Sponsors';

import Location from './location';

import Fsdet from './Fsdet';

import Bobdeta from './bobdeta';

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

class BackgroundButton extends Component {
   _handlePress = () => {
     this.props.navigator.push({name: 'Cit',});
    };
  constructor () {
  super()
  this.opacityValue = new Animated.Value(0)
}

 
    render() {
      const opacity = this.opacityValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 1, 0]
  })
        return (
          
           <Animated.View
        style={{
          opacity,
          flex: 1,
    
    backgroundColor: 'rgba(0,0,0,0)'}} >
    <TouchableWithoutFeedback>
              <View><Button
              icon={{name: 'touch-app'}}
  title='Get Connected'
  backgroundColor='rgba(0,0,0,0)' onPress={this._handlePress}/>
</View>
   </TouchableWithoutFeedback>
  
   {this.props.children}
  </Animated.View>
  
 
        );
        
    }
    componentDidMount () {
  this.animate1()
}
animate1 () {
  this.opacityValue.setValue(0)
  Animated.timing(
    this.opacityValue,
    {
      toValue: 1,
      duration: 2000,
      delay: 1000,
      easing: Easing.linear
    }
  ).start(() => this.animate1())
}
}
class BackgroundCitech extends Component {
  
    render() {
        return (
         <View style={styles.container}>
              <Text style={styles.welcome}>
                </Text>
  {this.props.children}
              </View>
        );
    }
}
class BackgroundTest extends Component {
  
    render() {
        return (
            <Image source={require('./images/sp_logo.png')}
                  style={styles.backgroundImage}>

          {this.props.children}
            </Image>
        );
    }
}


class BackgroundLines extends Component {
  constructor(){
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
    inputRange: [0, 0.5, 1],
    outputRange: [1.1, 1.2, 1.1]
  })
        return (
            <Animated.Image
        style={{
          flex: 6,
          width: null,
          height: null,
          resizeMode: 'cover',
          transform: [{rotate: spin},{scale: scaleText}] }}
          source={require('./images/sp_lines.png')}>
          {this.props.children}
          </Animated.Image>
        );
    }
      componentDidMount () {
  this.animation()
}
animation () {
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
    createAnimation(this.scaleValue, 2000, Easing.linear, 1000)
           
  ]).start(() => this.animation())
}
}



class Chiguru1 extends Component {
  render() {
  
    return (
      <BackgroundImage>
        <BackgroundTest>
     <BackgroundCitech>
       </BackgroundCitech>
        <BackgroundLines>
            </BackgroundLines>
                 <BackgroundButton navigator={this.props.navigator}>
                   </BackgroundButton>
          </BackgroundTest>         
      </BackgroundImage>
    );
  }

}

export default class Chiguru extends Component {
  _renderScene(route, navigator) {
    if (route.name === 'Main') {
      return <Chiguru1 navigator={navigator} />
    } else if (route.name === 'Cit') {
      return <Cit navigator={navigator}
       />
    } else if (route.name ==='Events'){
      return <Events navigator={navigator}/>
      
    }else if (route.name === 'Contact'){
      return <Contactus navigator={navigator}/>
      
    }else if (route.name ==='Abt'){
      return <Aboutus navigator={navigator}/>
      
    }else if (route.name === 'Sponsor'){
      return <Sponsors navigator={navigator}/>
      
    }else if (route.name === 'Loc'){
      return <Location navigator={navigator}/>
      
    }else if (route.name === 'Schedule'){
      return <Schedule navigator={navigator}/>
      
    }else if (route.name === 'fsdetails'){
      return <Fsdet navigator={navigator}/>
      
    }else if (route.name === 'bobdetails'){
      return <Bobdeta navigator={navigator}/>
      
    }
  }
  render() {
  
    return (
      <Navigator
      configureScene={(route) => {
    if (route.name === 'Cit') {
      return Navigator.SceneConfigs.VerticalUpSwipeJump;
    } else if (route.name === 'Events'){
      return Navigator.SceneConfigs.FloatFromRight;
    } else if (route.name === 'Contact'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    } else if (route.name === 'Schedule'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }else if (route.name === 'Loc'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }else if (route.name === 'Sponsor'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }else if (route.name === 'Abt'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }
    else if (route.name === 'fsdetails'){
      return Navigator.SceneConfigs.VerticalUpSwipeJump;
    }
    else if (route.name === 'bobdetails'){
      return Navigator.SceneConfigs.VerticalUpSwipeJump;
    }
  }}
        initialRoute={{name: 'Main', }}
        renderScene={this._renderScene} 
        navigator={navigator} />
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
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
