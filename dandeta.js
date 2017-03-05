import React, { Component, PropTypes } from 'react';
import { View, Navigator, ScrollView, StyleSheet, TouchableWithoutFeedback,BackAndroid } from 'react-native';

import {Text, Card, Button} from 'react-native-elements';
export default class Dandeta extends Component {
  static get defaultProps() {
    return {
      title: 'Events'
    };
  }
 _handlePressfd1 = () => {
     this.props.navigator.push({name: 'card301',});
    };
  _handlePressfd2 = () => {
     this.props.navigator.push({name: 'card302',});
    };
    _handlePressfd3 = () => {
     this.props.navigator.push({name: 'card303',});
    };
    _handlePressfd4 = () => {
     this.props.navigator.push({name: 'card304',});
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
  title='Fusion Dance'
  image={require('./images/fs1.jpg')}
  wrapperstyle>
  <Text style={{marginBottom: 10}}>
    Live. Love. Dance.
    </Text>
  <Button
icon={{name:'toc'}}
    backgroundColor='#353a47'
      onPress={this._handlePressfd1}
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Details' />
</Card>
<Card
  title='Group Dance'
  image={require('./images/grpdan.jpg')}>
  <Text style={{marginBottom: 10}}>
  Are you bollywood enough ?  </Text>
  <Button
icon={{name:'toc'}}
    backgroundColor='#353a47'
     onPress={this._handlePressfd2}
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Details' />
</Card>
<Card
  title='Indian Filmy Dance'
  image={require('./images/indiand.jpg')}>
  <Text style={{marginBottom: 10}}>
    Back to the roots !
    </Text>
  <Button
icon={{name:'toc'}}
    backgroundColor='#353a47'
    onPress={this._handlePressfd3}
     
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Details' />
</Card>
<Card
  title='Solo Dance'
  image={require('./images/solod.jpg')}>
  <Text style={{marginBottom: 10}}>
    Break a leg !!
    </Text>
  <Button
icon={{name:'toc'}}
    backgroundColor='#353a47'
    onPress={this._handlePressfd4}
     
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
