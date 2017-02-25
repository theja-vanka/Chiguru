import React, { Component, PropTypes } from 'react';
import { View, Text, Navigator, StyleSheet, TouchableWithoutFeedback,BackAndroid } from 'react-native';

export default class Aboutus extends Component {
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
        <View style={styles.container}>
          <Text onPress={this.goBack}>About</Text>
        </View>
      </TouchableWithoutFeedback>
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
});
