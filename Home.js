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



export default class Home extends Component {

  _handlePressa = () => {
     this.props.navigator.push({name: 'Events',});
    };
    _handlePressb = () => {
     this.props.navigator.push({name: 'Schedule',});
    };
    _handlePressc = () => {
     this.props.navigator.push({name: 'Loc',});
    };
     _handlePressd = () => {
     this.props.navigator.push({name: 'Contact',});
    };
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

    
<View style={styles.container}>
    <BackgroundImage>
     <View style={styles.matchline}>

</View>
<View style={styles.matchline}>
       
</View>
<View style={styles.matchline}>
       <Icon
  reverse
  name='stars'
  color='#1a8fc0'
  onPress={this._handlePressa}

/>

</View>
<View style={styles.matchline}>
       <Icon
  reverse
  name='schedule'
  color='#e9cd1e'
    onPress={this._handlePressb}
/>
</View>
<View style={styles.matchline}>
       <Icon
  reverse
  name='location-on'
  color='#bf4027'
    onPress={this._handlePressc}
/>
</View>
<View style={styles.matchline}>
      <Icon
  reverse
  name='contact-mail'
  color='#0f8f46'
    onPress={this._handlePressd}
/> 
</View>
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
  container: {
    flex: 4,
    backgroundColor: '#353a47',
  },
  matchline: {
    flex : 1,
    margin : 10,
    backgroundColor: 'rgba(0,0,0,0)'
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