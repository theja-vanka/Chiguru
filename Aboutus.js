import React, { Component, PropTypes } from 'react';
import { View, Navigator, StyleSheet, TouchableWithoutFeedback,BackAndroid } from 'react-native';
import {Text} from 'react-native-elements';

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
  <Text style={styles.welcome}>About Us</Text>
<Text style={styles.points}>Chiguru - An Intercollegiate Mega Cultural Extravaganza of Cambridge Institute of Technology, Bengaluru.</Text>
<Text style={styles.points}>The National Level Cultural Extravaganza of Cambridge Institute of Technology, Bengaluru is back again on this March 11th and 12th,2017 .Mark the dates and “GET CONNECTED “ with us.....</Text>
<Text style={styles.points}>IT'S BACK!! IT'S BETTER!! IT'S BIG!!</Text>
<Text style={styles.points}> Compete against the most talented from all around the city and set yourself apart. We at CITech provide the best opportunity for the MAJESTIC participants to flaunt what they've got.</Text>
<Text style={styles.points}>SURPRISE...SUSPENSE..and... ACTION...</Text>




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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#100F20',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
    points: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },

});
