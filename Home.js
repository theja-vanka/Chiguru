import React, { Component, PropTypes } from 'react';
import { View, Text, Navigator, TouchableWithoutFeedback } from 'react-native';

export default class Home extends Component {
  static get defaultProps() {
    return {
      title: 'Home'
    };
  }

  goBack = () => {
    this.props.navigator.pop();
  };

  render() {
    return (
      <TouchableWithoutFeedback>
        <View>
          <Text onPress={this.goBack}>Home</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}