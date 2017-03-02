import React, { Component, PropTypes } from 'react';
import { View, Navigator, StyleSheet, TouchableWithoutFeedback,BackAndroid } from 'react-native';

import {Text} from 'react-native-elements';
export default class Mus2 extends Component {
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
<View style={styles.container}><Text style={styles.welcome}>Rules</Text>
<Text style={styles.points}>Time limit of 3+1 minutes</Text>
<Text style={styles.points}>One person can accompany the singer for playing an instrument</Text>
<Text style={styles.points}>Karaoke is allowed</Text>
<Text style={styles.points}>If required, Karaoke must be submitted to the event coordinator 30 minutes prior to the event only in pendrive (.mp3 files only) </Text>
<Text style={styles.points}>Registration fee: Rs.500</Text>
<Text style={styles.points}>Prize money: Winner: Rs.5000  Runner: Rs.2500</Text>


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
