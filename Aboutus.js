import React, { Component, PropTypes } from 'react';
import { View,Image, Navigator, StyleSheet, BackAndroid } from 'react-native';
import {Text} from 'react-native-elements';


class BackgroundImage extends Component {
  
    render() {
        return (
            <Image source={require('./images/camb.png')}
                  style={styles.backgroundImage}>

   {this.props.children}
            </Image>
        );
    }
}
class BackgroundLogo extends Component {
  
    render() {
        return (
            <Image source={require('./images/abtcig.png')}
                  style={styles.backgroundImage}>

   {this.props.children}
            </Image>
        );
    }
}

export default class Aboutus extends Component {
  static get defaultProps() {
    return {
      title: 'Events'
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
<View style={styles.container1}>
  <BackgroundImage />
  </View>
  <View style={styles.container2}>
    <Text style={styles.welcome}>About Us</Text>
    <View>
    <Text style={styles.points}>Chiguru - An Intercollegiate Mega Cultural Extravaganza of Cambridge Institute of Technology, Bengaluru.</Text>
<Text style={styles.points}>The National Level Cultural Extravaganza of Cambridge Institute of Technology, Bengaluru is back again on this March 11th and 12th,2017 .Mark the dates and “GET CONNECTED “ with us.....</Text>
<Text style={styles.points}>IT'S BACK!! IT'S BETTER!! IT'S BIG!!</Text>
<Text style={styles.points}> Compete against the most talented from all around the city and set yourself apart. We at CITech provide the best opportunity for the MAJESTIC participants to flaunt what they've got.</Text>
<Text style={styles.points}>SURPRISE...SUSPENSE..and... ACTION...</Text>
  </View>
  </View>

  </View>
    )
  }
  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.onBackPress.bind(this));
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
    container1: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0)',
  },
    container2: {
    flex: 2,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#0f0e20',
  },
    points: {
    fontSize: 12,
    textAlign: 'center',
    margin: 10,
    color: '#0f0e20',
  },
   backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },

});
