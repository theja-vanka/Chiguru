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
  BackAndroid,
  TouchableWithoutFeedback
} from 'react-native';

import {
  Button
} from 'react-native-elements';

import Home from './Home';

import Events from './Events';

import Contactus from './Contactus';


import Try from './try';

import Dance1 from './eve_fudan';

import Dance2 from './eve_grpdan';

import Dance3 from './eve_indfildan';

import Dance4 from './eve_soldan';

import Business1 from './eve_bstmanag';

import Business2 from './eve_busplan';

import Business3 from './eve_busquiz';

import Business4 from './eve_caseana';

import Business5 from './eve_prolnch';

import Game1 from './eve_csgo';

import Game2 from './eve_fifa';
import Game3 from './eve_minmilt';
import Game4 from './eve_pokmn';
import Game5 from './eve_uno';
import Game6 from './eve_8bp';
import Game7 from './eve_dota';

import Art1 from './eve_coll';
import Art2 from './eve_fcepnt';
import Art3 from './eve_nlart';
import Art4 from './eve_photo';
import Art5 from './eve_sktch';

import Sport1 from './eve_basktbl';
import Sport2 from './eve_footbl';
import Sport3 from './eve_gulcrkt';
import Sport4 from './eve_slwdrgrc';
import Sport5 from './eve_trshnt';
import Sport6 from './eve_tow';
import Sport7 from './eve_throw';
import Sport8 from './eve_carom';
import Sport9 from './eve_tt';

import Ent1 from './eve_aircrash';
import Ent2 from './eve_mime';
import Ent3 from './eve_manvfood';
import Ent4 from './eve_mkrk';
import Ent5 from './eve_m2win';
import Ent6 from './eve_shrtfilms';

import Mus1 from './eve_bbox';
import Mus2 from './eve_grpsin';
import Mus3 from './eve_solsin';

import Literacy1 from './eve_101';
import Literacy2 from './eve_102';
import Literacy3 from './eve_103';
import Literacy4 from './eve_104';

import Aboutus from './Aboutus';

import Schedule from './Schedule';

import Sponsors from './Sponsors';

import Location from './location';

import Fsdet from './Fsdet';

import Bobdeta from './bobdeta';

import Entdeta from './entdeta';

import Spodeta from './spodeta';

import Artdeta from './artdeta';

import Gmedeta from './gmedeta';

import Busdeta from './busdeta';

import Litdeta from './litdeta';

import Dandeta from './dandeta';

import Musdeta from './musdeta';

import Airdet from './Aircrash';

import Offstg1 from './schedule1_offstg';

import Offstg2 from './schedule2_offstg';



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
  onBackPress(){
    this.props.navigator.pop();
    return false; 
}

  goBack = () => {
    this.props.navigator.pop();
  };
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
  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.onBackPress.bind(this));
}

}

export default class Chiguru extends Component {
  _renderScene(route, navigator) {
    if (route.name === 'Main') {
      return <Chiguru1 navigator={navigator} />
    } else if (route.name === 'Cit') {
      return <Home navigator={navigator}
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
      
    }else if (route.name === 'entdetails'){
      return <Entdeta navigator={navigator}/>
      
    }else if (route.name === 'spodetails'){
      return <Spodeta navigator={navigator}/>

    }else if (route.name === 'offstg1'){
      return <Offstg1 navigator={navigator}/>

    }else if (route.name === 'offstg2'){
      return <Offstg2 navigator={navigator}/>  
      
    }else if (route.name === 'artdetails'){
      return <Artdeta navigator={navigator}/>
      
    }else if (route.name === 'gmedetails'){
      return <Gmedeta navigator={navigator}/>
      
    }else if (route.name === 'busdetails'){
      return <Busdeta navigator={navigator}/>
      
    }else if (route.name === 'litdetails'){
      return <Litdeta navigator={navigator}/>
      
    }
    else if (route.name === 'dandetails'){
      return <Dandeta navigator={navigator}/>
      
    }
    else if (route.name === 'musdetails'){
      return <Musdeta navigator={navigator}/>
      
    }
    else if (route.name === 'card101'){
      return <Literacy1 navigator={navigator}/>
      
    }
    else if (route.name === 'card102'){
      return <Literacy2 navigator={navigator}/>
      
    }
    else if (route.name === 'card103'){
      return <Literacy3 navigator={navigator}/>
      
    }
    else if (route.name === 'card104'){
      return <Literacy4 navigator={navigator}/>
      
    }
    else if (route.name === 'card905'){
      return <Business5 navigator={navigator}/>
      
    }
    else if (route.name === 'card901'){
      return <Business1 navigator={navigator}/>
      
    }
    else if (route.name === 'card902'){
      return <Business2 navigator={navigator}/>
      
    }
    else if (route.name === 'card903'){
      return <Business3 navigator={navigator}/>
      
    }
    else if (route.name === 'card904'){
      return <Business4 navigator={navigator}/>
      
    }
    else if (route.name === 'card801'){
      return <Game1 navigator={navigator}/>
      
    }
    else if (route.name === 'card802'){
      return <Game2 navigator={navigator}/>
      
    }
    else if (route.name === 'card803'){
      return <Game3 navigator={navigator}/>
      
    }
    else if (route.name === 'card804'){
      return <Game4 navigator={navigator}/>
      
    }else if (route.name === 'card805'){
      return <Game5 navigator={navigator}/>
      
    }else if (route.name === 'card806'){
      return <Game6 navigator={navigator}/>
      
    }
    else if (route.name === 'card807'){
      return <Game7 navigator={navigator}/>
      
    }
    else if (route.name === 'card701'){
      return <Art1 navigator={navigator}/>
      
    }
    else if (route.name === 'card702'){
      return <Art2 navigator={navigator}/>
      
    }
    else if (route.name === 'card703'){
      return <Art3 navigator={navigator}/>
      
    }
    else if (route.name === 'card704'){
      return <Art4 navigator={navigator}/>
      
    }
    else if (route.name === 'card705'){
      return <Art5 navigator={navigator}/>
      
    }
    else if (route.name === 'card601'){
      return <Sport1 navigator={navigator}/>
      
    }
    else if (route.name === 'card602'){
      return <Sport2 navigator={navigator}/>
      
    }else if (route.name === 'card607'){
      return <Sport7 navigator={navigator}/>
      
    }
    else if (route.name === 'card608'){
      return <Sport8 navigator={navigator}/>
      
    }
    else if (route.name === 'card609'){
      return <Sport9 navigator={navigator}/>
      
    }
    else if (route.name === 'card603'){
      return <Sport3 navigator={navigator}/>
      
    }
    else if (route.name === 'card604'){
      return <Sport4 navigator={navigator}/>
      
    }
    else if (route.name === 'card605'){
      return <Sport5 navigator={navigator}/>
      
    }
    else if (route.name === 'card606'){
      return <Sport6 navigator={navigator}/>
      
    }
    else if (route.name === 'card608'){
      return <Sport8 navigator={navigator}/>
      
    }
    else if (route.name === 'card609'){
      return <Sport9 navigator={navigator}/>
      
    }
    else if (route.name === 'card501'){
      return <Ent1 navigator={navigator}/>
      
    }
    else if (route.name === 'card502'){
      return <Ent2 navigator={navigator}/>
      
    }
    else if (route.name === 'card503'){
      return <Ent3 navigator={navigator}/>
      
    }
    else if (route.name === 'card504'){
      return <Ent4 navigator={navigator}/>
      
    }
    else if (route.name === 'card505'){
      return <Ent5 navigator={navigator}/>
      
    }
    else if (route.name === 'card506'){
      return <Ent6 navigator={navigator}/>
      
    }
    else if (route.name === 'card401'){
      return <Mus1 navigator={navigator}/>
      
    }
    else if (route.name === 'card402'){
      return <Mus2 navigator={navigator}/>
      
    }
    else if (route.name === 'card403'){
      return <Mus3 navigator={navigator}/>
      
    }
    else if (route.name === 'card301'){
      return <Dance1 navigator={navigator}/>
      
    }
    else if (route.name === 'card302'){
      return <Dance2 navigator={navigator}/>
      
    }
    else if (route.name === 'card303'){
      return <Dance3 navigator={navigator}/>
      
    }
    else if (route.name === 'card304'){
      return <Dance4 navigator={navigator}/>
      
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
      return Navigator.SceneConfigs.VerticalUpSwipeJump;
    } else if (route.name === 'Schedule'){
      return Navigator.SceneConfigs.VerticalUpSwipeJump;
    }else if (route.name === 'Loc'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }else if (route.name === 'Sponsor'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }else if (route.name === 'Abt'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }
    else if (route.name === 'airdetails'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }
    else if (route.name === 'fsdetails'){
      return Navigator.SceneConfigs.VerticalUpSwipeJump;
    }
    else if (route.name === 'bobdetails'){
      return Navigator.SceneConfigs.VerticalUpSwipeJump;
    }
    else if (route.name === 'entdetails'){
      return Navigator.SceneConfigs.VerticalUpSwipeJump;
    }
    else if (route.name === 'spodetails'){
      return Navigator.SceneConfigs.VerticalUpSwipeJump;
    }
    else if (route.name === 'offstg1'){
      return Navigator.SceneConfigs.FloatFromRight;
    }
    else if (route.name === 'offstg2'){
      return Navigator.SceneConfigs.FloatFromRight;
    }
    else if (route.name === 'artdetails'){
      return Navigator.SceneConfigs.VerticalUpSwipeJump;
    }
    else if (route.name === 'gmedetails'){
      return Navigator.SceneConfigs.VerticalUpSwipeJump;
    }
    else if (route.name === 'busdetails'){
      return Navigator.SceneConfigs.VerticalUpSwipeJump;
    }
    else if (route.name === 'litdetails'){
      return Navigator.SceneConfigs.VerticalUpSwipeJump;
    }
    else if (route.name === 'dandetails'){
      return Navigator.SceneConfigs.VerticalUpSwipeJump;
    }
    else if (route.name === 'musdetails'){
      return Navigator.SceneConfigs.VerticalUpSwipeJump;
    }
     else if (route.name === 'card1'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }
    else if (route.name === 'card101'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }
    else if (route.name === 'card102'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }
    else if (route.name === 'card103'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }
    else if (route.name === 'card104'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }
    else if (route.name === 'card901'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }
    else if (route.name === 'card902'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }
    else if (route.name === 'card903'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }
    else if (route.name === 'card904'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }
    else if (route.name === 'card905'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }
    else if (route.name === 'card801'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }
    else if (route.name === 'card802'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }
    else if (route.name === 'card803'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }
    else if (route.name === 'card804'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }
    else if (route.name === 'card805'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }
    else if (route.name === 'card806'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }
    else if (route.name === 'card807'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }
    
    else if (route.name === 'card701'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }
    else if (route.name === 'card702'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }else if (route.name === 'card703'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }else if (route.name === 'card704'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }else if (route.name === 'card705'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }
    else if (route.name === 'card601'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }
     else if (route.name === 'card602'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }
     else if (route.name === 'card603'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }
     else if (route.name === 'card604'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }
     else if (route.name === 'card605'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }
     else if (route.name === 'card606'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }
    else if (route.name === 'card607'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }
    else if (route.name === 'card608'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }
    else if (route.name === 'card609'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }
    else if (route.name === 'card501'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }
    else if (route.name === 'card502'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }
    else if (route.name === 'card503'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }
    else if (route.name === 'card504'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }
    else if (route.name === 'card505'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }
    else if (route.name === 'card506'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }
    else if (route.name === 'card401'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }
     else if (route.name === 'card402'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }
     else if (route.name === 'card403'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }
    else if (route.name === 'card301'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }
    else if (route.name === 'card302'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }
    else if (route.name === 'card303'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }
    else if (route.name === 'card304'){
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
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
