import React, { Component, PropTypes } from 'react';
import { View, Navigator, ScrollView, StyleSheet, TouchableWithoutFeedback,BackAndroid } from 'react-native';
import Communications from 'react-native-communications';

import {Text, Card, Button} from 'react-native-elements';
export default class Litdeta extends Component {
  static get defaultProps() {
    return {
      title: 'Events'
    };
  }
  _handlePressfd1 = () => {
     this.props.navigator.push({name: 'card101',});
    };
  _handlePressfd2 = () => {
     this.props.navigator.push({name: 'card102',});
    };
  _handlePressfd4 = () => {
     this.props.navigator.push({name: 'card104',});
    };

  
  onBackPress(){
    this.props.navigator.pop();
    return true; 
}

  goBack = () => {
    this.props.navigator.pop();
  };

  render() {
    return (
      <ScrollView>

<Card
  title='Thatt Antha Heli'
  image={require('./images/qck.jpg')}
  wrapperstyle>
  <Text style={{marginBottom: 10}}>
    Are you quick enough ?
  </Text>
  <Button
     icon={{name:'toc'}}
      backgroundColor='#353a47'
      onPress={this._handlePressfd1}

    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Details' />
</Card>
<Card
  title='Criminal Case'
  image={require('./images/criminal.jpg')}>
  <Text style={{marginBottom: 10}}>
  Just Detective stuff !  </Text>
  <Button
     icon={{name:'toc'}}
      backgroundColor='#353a47'
      onPress={this._handlePressfd2}
 
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Details' />
</Card>

<Card
  title='Aashubashane'
  image={require('./images/spk.jpg')}>
  <Text style={{marginBottom: 10}}>
    Kannada Speech.
  </Text>
  <Button
     icon={{name:'toc'}}
      backgroundColor='#353a47'
      onPress={this._handlePressfd4}
 
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title= 'Details' />
</Card>


          </ScrollView>
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
