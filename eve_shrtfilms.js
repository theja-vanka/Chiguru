import React, { Component, PropTypes } from 'react';
import { View, Navigator, StyleSheet, TouchableWithoutFeedback,BackAndroid } from 'react-native';

import {Text} from 'react-native-elements';
export default class Ent6 extends Component {
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
<Text style={styles.points}>Movies will be judged according to its quality and the message it conveys</Text>
<Text style={styles.points}>At least one actor and the director should be present at the time of screening</Text>
<Text style={styles.points}>Any vulgarity in words or actions will lead to disqualification</Text>
<Text style={styles.points}>No mixing or morphing of online videos </Text>
<Text style={styles.points}>Time limit: 6+4 minutes</Text>
<Text style={styles.points}>Registration fee: Rs.200</Text>
<Text style={styles.points}>Prize money: Winners: Rs3000 Runners: Rs.1500</Text>


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
