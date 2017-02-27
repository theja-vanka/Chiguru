import React, { Component, PropTypes } from 'react';
import { View, StyleSheet,Navigator, TouchableWithoutFeedback,BackAndroid } from 'react-native';

import {Text, Button, SocialIcon} from 'react-native-elements';
export default class Contactus extends Component {
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
      <Text style={styles.welcome}> Contact Us
        </Text>
        <View style={styles.dev}>
          <Text style={styles.info}>Developers
            </Text>
            <Text>Krishnatheja Vanka</Text>
            <Text>+91-9916596675</Text>

          </View>

         <View style={{flex: 1, flexDirection: 'row'}}>
        <SocialIcon
    type='facebook'
      />
      <SocialIcon
    type='instagram'
      />
      <SocialIcon
    type='youtube'
      />
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
    backgroundColor: 'black',
  },
  dev: {
    flex: 1,
    margin: 20,
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
   info: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});