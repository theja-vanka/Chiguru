import React, { Component, PropTypes } from 'react';
import { View, Navigator, ScrollView, StyleSheet, TouchableWithoutFeedback,BackAndroid } from 'react-native';

import {Text, Card, Button} from 'react-native-elements';
export default class Artdeta extends Component {
  static get defaultProps() {
    return {
      title: 'Events'
    };
  }
  _handlePressfd1 = () => {
     this.props.navigator.push({name: 'card701',});
    };
  _handlePressfd2 = () => {
     this.props.navigator.push({name: 'card702',});
    };
  _handlePressfd3 = () => {
     this.props.navigator.push({name: 'card703',});
    };
  _handlePressfd4 = () => {
     this.props.navigator.push({name: 'card704',});
    };
   _handlePressfd5 = () => {
     this.props.navigator.push({name: 'card705',});
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
  title='Collage'
  image={require('./images/collage.png')}
  wrapperstyle>
  <Text style={{marginBottom: 10}}>
   Put it together.
  </Text>
  <Button
     icon={{name:'toc'}}
      backgroundColor='#353a47'
 onPress={this._handlePressfd1}
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Details' />
</Card>
<Card
  title='Doodles'
  image={require('./images/doodle.png')}>
  <Text style={{marginBottom: 10}}>
    Draw your life.
  </Text>
  <Button
     icon={{name:'toc'}}
      backgroundColor='#353a47'
 
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Details' />
</Card>
<Card
  title='Face Painting'
  image={require('./images/face.png')}>
  <Text style={{marginBottom: 10}}>
Photoshop on your face.  </Text>
  <Button
     icon={{name:'toc'}}
      backgroundColor='#353a47'
 onPress={this._handlePressfd2}
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Details' />
</Card>
<Card
  title='Nail Art'
  image={require('./images/nail.png')}>
  <Text style={{marginBottom: 10}}>
    Where Nails Meet Art.
  </Text>
  <Button
     icon={{name:'toc'}}
      backgroundColor='#353a47'
 onPress={this._handlePressfd3}
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Details' />
</Card>
<Card
  title='Photography'
  image={require('./images/cam.png')}>
  <Text style={{marginBottom: 10}}>
  Shoot em and frame them.
  </Text>
  <Button
     icon={{name:'toc'}}
      backgroundColor='#353a47'
 onPress={this._handlePressfd4}
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Details' />
</Card>
<Card
  title='Sketching'
  image={require('./images/vector_sketch.png')}>
  <Text style={{marginBottom: 10}}>
    Can you pull off a Neil Caffery
  </Text>
  <Button
     icon={{name:'toc'}}
      backgroundColor='#353a47'
 onPress={this._handlePressfd5}
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
