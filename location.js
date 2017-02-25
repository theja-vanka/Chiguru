import React, { Component, PropTypes } from 'react';
import { View, Text, Navigator, WebView, BackAndroid } from 'react-native';

export default class Location extends Component {
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
      <WebView
        source={{uri: 'https://www.google.co.in/maps/place/Cambridge+Institute+of+Technology/@13.0123067,77.7041594,15z/data=!4m12!1m6!3m5!1s0x0:0xf8f534df379561ed!2sCambridge+Institute+of+Technology!8m2!3d13.0123067!4d77.7041594!3m4!1s0x0:0xf8f534df379561ed!8m2!3d13.0123067!4d77.7041594'}}
      />
    )
  }
  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.onBackPress.bind(this));
}
}