import React, { Component, PropTypes } from 'react';
import { View, Navigator, ScrollView, StyleSheet, TouchableWithoutFeedback,BackAndroid } from 'react-native';

import {Text, Card, Button} from 'react-native-elements';


export default class Musdeta extends Component {
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
      <ScrollView>

<Card
  title='Beat Boxing'
  image={require('./images/bbox.png')}
  wrapperstyle>
  <Text style={{marginBottom: 10}}>
  pv zk bschk pv zk pv bschk zk pv zk bschk pv zk pv. D cent out ! *Mic Drop*  </Text>
  <Button
    icon={{name:'toc'}}
     backgroundColor='#353a47'
     
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Details' />
</Card>
<Card
  title='Group Singing'
  image={require('./images/groups.png')}>
  <Text style={{marginBottom: 10}}>
    Harmony at its best.
  </Text>
  <Button
    icon={{name:'toc'}}
     backgroundColor='#353a47'
     
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Details' />
</Card>
<Card
  title='Solo Singing'
  image={require('./images/solos.png')}>
  <Text style={{marginBottom: 10}}>
    Is your pitch perfect.
  </Text>
  <Button
    icon={{name:'toc'}}
     backgroundColor='#353a47'
     
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Details' />
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
