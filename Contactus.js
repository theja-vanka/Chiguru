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
      <Text> Contact Us
        </Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(1,1,1,0.6)',
  },
  welcome: {
    fontSize: 30,
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