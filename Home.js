import React, { Component, PropTypes } from 'react';
import { View, Text, Navigator, TouchableHighlight } from 'react-native';

export default class Home extends Component {
  static get defaultProps() {
    return {
      title: 'Home'
    };
  }

  render() {
    return (
      <View>
        <Text>Home</Text>
      </View>
    )
  }
}