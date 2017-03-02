import React, { Component, PropTypes } from 'react';
import { View, Navigator, StyleSheet, TouchableWithoutFeedback,BackAndroid } from 'react-native';

import {Text} from 'react-native-elements';
export default class Sport6 extends Component {
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
<Text style={styles.points}>Each team should have 6 members</Text>
<Text style={styles.points}>Direction of pull will be decided by the toss</Text>
<Text style={styles.points}>First team to pull mid rope marker six feet beyond middle line is the winner</Text>
<Text style={styles.points}>Tournament is a single elimination </Text>
<Text style={styles.points}>No gloves, cleats, tapes, glue</Text>
<Text style={styles.points}>Registration fee: Rs.300</Text>
<Text style={styles.points}>Prize money: Winners: Rs.3000, Runners: Rs.1000</Text>


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
