import React, { Component, PropTypes } from 'react';
import { View, Navigator, ScrollView, StyleSheet, TouchableWithoutFeedback,BackAndroid } from 'react-native';

import {Text, Card, Button} from 'react-native-elements';
export default class Gmedeta extends Component {
  static get defaultProps() {
    return {
      title: 'Events'
    };
  }

  _handlePressgd1 = () => {
     this.props.navigator.push({name: 'card801',});
    };
  _handlePressgd2 = () => {
     this.props.navigator.push({name: 'card802',});
    };
  _handlePressgd3 = () => {
     this.props.navigator.push({name: 'card803',});
    };
  _handlePressgd4 = () => {
     this.props.navigator.push({name: 'card804',});
    };
   _handlePressgd5 = () => {
     this.props.navigator.push({name: 'card805',});
    };
       _handlePressgd6 = () => {
     this.props.navigator.push({name: 'card806',});
    };
           _handlePressgd7 = () => {
     this.props.navigator.push({name: 'card807',});
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
  title='Counter Strike'
  image={require('./images/cs.jpg')}
  wrapperstyle>
  <Text style={{marginBottom: 10}}>
  Are you geek enough ?  </Text>
  <Button
     icon={{name:'toc'}}
      backgroundColor='#353a47'
       onPress={this._handlePressgd1}

    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Details' />
</Card>
<Card
  title='DoTA 2'
  image={require('./images/dota2.jpg')}
  wrapperstyle>
  <Text style={{marginBottom: 10}}>
  So begins a new age of knowledge.  </Text>
  <Button
     icon={{name:'toc'}}
      backgroundColor='#353a47'
       onPress={this._handlePressgd7}

    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Details' />
</Card>
<Card
  title='FIFA'
  image={require('./images/fifa.jpg')}>
  <Text style={{marginBottom: 10}}>
   Its not just a game. Its a religion.
  </Text>
  <Button
     icon={{name:'toc'}}
      backgroundColor='#353a47'
       onPress={this._handlePressgd2}

    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Details' />
</Card>
<Card
  title='Mini Militia'
  image={require('./images/mini.jpg')}>
  <Text style={{marginBottom: 10}}>
   No lag please. </Text>
  <Button
     icon={{name:'toc'}}
      backgroundColor='#353a47'
       onPress={this._handlePressgd3}

    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
</Card>
<Card
  title='8 Ball Pool'
  image={require('./images/8bp.jpg')}>
  <Text style={{marginBottom: 10}}>
    Pot the ball !
  </Text>
  <Button
     icon={{name:'toc'}}
      backgroundColor='#353a47'
        onPress={this._handlePressgd6}

    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
</Card>
<Card
  title='Pokemon Go'
  image={require('./images/pgo.jpg')}>
  <Text style={{marginBottom: 10}}>
    
    Gotta Catch'em All.
  </Text>
  <Button
     icon={{name:'toc'}}
      backgroundColor='#353a47'
       onPress={this._handlePressgd4}

    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
</Card>
<Card
  title='UNO'
  image={require('./images/uno.jpg')}>
  <Text style={{marginBottom: 10}}>
    Give your friend a draw 4.
  </Text>
  <Button
     icon={{name:'toc'}}
      backgroundColor='#353a47'
       onPress={this._handlePressgd5}

    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
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
