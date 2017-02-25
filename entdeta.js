import React, { Component, PropTypes } from 'react';
import { View, Navigator, StyleSheet, TouchableWithoutFeedback,BackAndroid } from 'react-native';

import {Text} from 'react-native-elements';
export default class Entdeta extends Component {
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
<Text style={styles.points}>Each team must have a theme.</Text>
<Text style={styles.points}>A team must consist of minimum 10 members and a maximum of 14 members inclusive of one for music and another for lighting. </Text>
<Text style={styles.points}>Only one team can participate from a college.</Text>
<Text style={styles.points}>Any form of obscenity will lead to disqualification of the team</Text>
<Text style={styles.points}>Time allotted: 7+1 minutes</Text>
<Text style={styles.points}>Registration fee: Rs.2000.</Text>
<Text style={styles.points}>Winners: Rs.35000.</Text>
<Text style={styles.points}>Runners up: Rs.20000.</Text>


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
