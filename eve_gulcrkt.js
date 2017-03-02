import React, { Component, PropTypes } from 'react';
import { View, Navigator, StyleSheet, TouchableWithoutFeedback,BackAndroid } from 'react-native';

import {Text} from 'react-native-elements';
export default class Sport3 extends Component {
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
<Text style={styles.points}>Each team consists of 5 members (5+2)</Text>
<Text style={styles.points}>4 overs a side</Text>
<Text style={styles.points}>No run through</Text>
<Text style={styles.points}>Only 4s</Text>
<Text style={styles.points}>6s are considered out</Text>
<Text style={styles.points}>3 beaten for a player is considered as out </Text>
<Text style={styles.points}>One pitch one hand is considered as out</Text>
<Text style={styles.points}>One bat has to be brought per team</Text>
<Text style={styles.points}>Registration fee: Rs.500</Text>
<Text style={styles.points}>Prize money: Winners: Rs.5000 Runners: Rs.3000 </Text>
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
