import React, { Component, PropTypes } from 'react';
import { View, Navigator, ScrollView, StyleSheet, TouchableWithoutFeedback,BackAndroid } from 'react-native';

import {Text, Card, Button} from 'react-native-elements';
export default class Spodeta extends Component {
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
  title='Basketball'
  image={require('./images/aircrash.png')}
  wrapperstyle>
  <Text style={{marginBottom: 10}}>
    Dunk it.
  </Text>
  <Button
     icon={{name:'toc'}}
      backgroundColor='#353a47'
 
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Details' />
</Card>
<Card
  title='Football'
  image={require('./images/mime.png')}>
  <Text style={{marginBottom: 10}}>
   Score it to win it.
  </Text>
  <Button
     icon={{name:'toc'}}
      backgroundColor='#353a47'
 
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Details' />
</Card>
<Card
  title='Gully Cricket'
  image={require('./images/mime.png')}>
  <Text style={{marginBottom: 10}}>
   Smash that window.
  </Text>
  <Button
     icon={{name:'toc'}}
      backgroundColor='#353a47'
 
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Details' />
</Card>
<Card
  title='Slow Drag Race'
  image={require('./images/mime.png')}>
  <Text style={{marginBottom: 10}}>
    No trainer wheels.
  </Text>
  <Button
     icon={{name:'toc'}}
      backgroundColor='#353a47'
 
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Details' />
</Card>
<Card
  title='Treasure Hunt'
  image={require('./images/mime.png')}>
  <Text style={{marginBottom: 10}}>
    Decrypt this. 'UPHWXOYW'
  </Text>
  <Button
     icon={{name:'toc'}}
      backgroundColor='#353a47'
 
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Details' />
</Card>
<Card
  title='Tug of War'
  image={require('./images/mime.png')}>
  <Text style={{marginBottom: 10}}>
    Yank it !
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
