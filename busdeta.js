import React, { Component, PropTypes } from 'react';
import { View, Navigator, ScrollView, StyleSheet, TouchableWithoutFeedback,BackAndroid } from 'react-native';

import {Text, Card, Button} from 'react-native-elements';
export default class Busdeta extends Component {
  static get defaultProps() {
    return {
      title: 'Events'
    };
  }
  _handlePressfd1 = () => {
     this.props.navigator.push({name: 'card901',});
    };
  _handlePressfd2 = () => {
     this.props.navigator.push({name: 'card902',});
    };
  _handlePressfd3 = () => {
     this.props.navigator.push({name: 'card903',});
    };
  _handlePressfd4 = () => {
     this.props.navigator.push({name: 'card904',});
    };
   _handlePressfd5 = () => {
     this.props.navigator.push({name: 'card905',});
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
  title='Best Manager'
  image={require('./images/manager1.png')}
  wrapperstyle>
  <Text style={{marginBottom: 10}}>
    "My success comes from my team."
  </Text>
  <Button
     icon={{name:'toc'}}
      backgroundColor='#353a47'
      onPress={this._handlePressfd1}
 
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Details' />
</Card>
<Card
  title='Business Plan'
  image={require('./images/busplan.png')}>
  <Text style={{marginBottom: 10}}>
   "My vision is..."
  </Text>
  <Button
     icon={{name:'toc'}}
      backgroundColor='#353a47'
      onPress={this._handlePressfd2}
 
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Details' />
</Card>
<Card
  title='Business Quiz'
  image={require('./images/bquiz.png')}>
  <Text style={{marginBottom: 10}}>
    The idea with React Native Elements is more about component structure than actual design.
  </Text>
  <Button
     icon={{name:'toc'}}
      backgroundColor='#353a47'
      onPress={this._handlePressfd3}
 
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title= 'Details' />
</Card>
<Card
  title='Case Analysis'
  image={require('./images/casess.png')}>
  <Text style={{marginBottom: 10}}>
    Sherlock, Watson or Anderson !
  </Text>
  <Button
     icon={{name:'toc'}}
      backgroundColor='#353a47'
      onPress={this._handlePressfd4}
 
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title= 'Details' />
</Card>
<Card
  title='Product Launch'
  image={require('./images/product.png')}>
  <Text style={{marginBottom: 10}}>
Innovation meets creation.  </Text>
  <Button
     icon={{name:'toc'}}
      backgroundColor='#353a47'
      onPress={this._handlePressfd5}
 
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
