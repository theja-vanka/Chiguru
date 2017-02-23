import React, { Component, PropTypes } from 'react';
import { View, Text, Navigator, TouchableWithoutFeedback,BackAndroid } from 'react-native';

export default class Sponcers extends Component {
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
      <TouchableWithoutFeedback>
        <View>
          <Text onPress={this.goBack}>Sponcers</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.onBackPress.bind(this));
}
}