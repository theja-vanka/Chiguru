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
  TouchableOpacity
} from 'react-native';

import {Button, Icon} from 'react-native-elements';

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

class BackgroundEvents extends Component {
   constructor () {
  super()
  this.springValue = new Animated.Value(0.3)
}
   _handlePressa = () => {
     this.props.navigator.push({name: 'Events',});
    };
    render() {
        return (
           <Animated.View style={[styles.matchline,{ transform: [{scale: this.springValue}] }]}  >
       <Icon
  reverse
  name='stars'
  color='#1a8fc0'
  onPress={this._handlePressa}

/>
<Text style={styles.catego}  onPress={this._handlePressa}>Events</Text>

</Animated.View>
        );
    }
        componentDidMount () {
  this.spring()
}
   spring () {
  this.springValue.setValue(0.3)
  Animated.spring(
    this.springValue,
    {
      toValue: 1,
      friction: 1,
    }
  ).start()
}
}

class BackgroundSchedule extends Component {
   constructor () {
  super()
  this.springValue = new Animated.Value(0.3)
}
 _handlePressb = () => {
     this.props.navigator.push({name: 'Schedule',});
    };
    render() {
        return (
      <Animated.View style={[styles.matchline,{ transform: [{scale: this.springValue}] }]}  >
       <Icon
  reverse
  name='schedule'
  color='#e9cd1e'
    onPress={this._handlePressb}
/>
<Text style={styles.catego} onPress={this._handlePressb}>Schedule</Text>
</Animated.View>
        );
    }
        componentDidMount () {
  this.spring()
}
   spring () {
  this.springValue.setValue(0.3)
  Animated.spring(
    this.springValue,
    {
      toValue: 1,
      friction: 1,
    }
  ).start()
}
}
class BackgroundLoc extends Component {
   constructor () {
  super()
  this.springValue = new Animated.Value(0.3)
}
 _handlePressc = () => {
     this.props.navigator.push({name: 'Loc',});
    };
    render() {
        return (
     <Animated.View style={[styles.matchline,{ transform: [{scale: this.springValue}] }]}  >
       <Icon
  reverse
  name='location-on'
  color='#bf4027'
    onPress={this._handlePressc}
/>
<Text style={styles.catego} onPress={this._handlePressc}>Location</Text>
</Animated.View>
        );
    }
        componentDidMount () {
  this.spring()
}
   spring () {
  this.springValue.setValue(0.3)
  Animated.spring(
    this.springValue,
    {
      toValue: 1,
      friction: 1,
    }
  ).start()
}
}

class BackgroundCon extends Component {
  constructor () {
  super()
  this.springValue = new Animated.Value(0.3)
}
     _handlePressd = () => {
     this.props.navigator.push({name: 'Contact',});
    };
    render() {
        return (

     <Animated.View style={[styles.matchline,{ transform: [{scale: this.springValue}] }]}  >
      <Icon
  reverse
  name='contact-mail'
  color='#0f8f46'
    onPress={this._handlePressd}
/> 
<Text style={styles.catego} onPress={this._handlePressd}>Contact Us</Text>
</Animated.View>
        
        );
    }
    componentDidMount () {
  this.spring()
}
   spring () {
  this.springValue.setValue(0.3)
  Animated.spring(
    this.springValue,
    {
      toValue: 1,
      friction: 1
    }
  ).start()
}
}




export default class Home extends Component {

  _handlePress = () => {
     this.props.navigator.push({name: 'Abt',});
    };
   
        static get defaultProps() {
    return {
      title: 'Home'
    };
  }
    onBackPress(){
    this.props.navigator.pop();
    return false; 
}

  goBack = () => {
    this.props.navigator.pop();
  };
  render() {
    return (

    
<View style={styles.container}>
    <BackgroundImage>

<View style={styles.matchline1}>
<TouchableOpacity>
  <Button  backgroundColor='rgba(0,0,0,0)' title= 'chiguru don don' color='rgba(0,0,0,0)' onPress={this._handlePress}/>
  <Button backgroundColor='rgba(0,0,0,0)' title= 'chiguru don don' color='rgba(0,0,0,0)' onPress={this._handlePress}/>
  <Button backgroundColor='rgba(0,0,0,0)' title= 'chiguru don don' color='rgba(0,0,0,0)' onPress={this._handlePress} />
  <Button backgroundColor='rgba(0,0,0,0)' title= 'chiguru don don' color='rgba(0,0,0,0)' onPress={this._handlePress}/>
  <Button backgroundColor='rgba(0,0,0,0)' title= 'chiguru don don' color='rgba(0,0,0,0)' onPress={this._handlePress}/>
  </TouchableOpacity>
       
</View>

<BackgroundEvents  navigator={this.props.navigator}/>

<BackgroundSchedule navigator={this.props.navigator} />

<BackgroundLoc navigator={this.props.navigator}/>
<BackgroundCon navigator={this.props.navigator}/>

  </BackgroundImage>
         
        
          </View>
 

 
    );
  }
   componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.onBackPress.bind(this));
}
}

const styles = StyleSheet.create({
  container1: {
    flex: 5,
    marginLeft : 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  catego : {
    marginLeft : 10,
    fontSize: 15,
    color: 'white',
  },
  container: {
    flex: 4,
    backgroundColor: '#353a47',
  },
  matchline: {
    flex : 1,
    flexDirection: 'row',
    alignItems:'center',
    margin : 10,
    backgroundColor: 'rgba(0,0,0,0)'
  },
    matchline1: {
    flex : 2,
    margin : 10,
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  check:{
backgroundColor:'rgba(0,0,0,0)'
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
});