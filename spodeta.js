import React, { Component, PropTypes } from 'react';
import { View, Navigator, ScrollView, StyleSheet, TouchableWithoutFeedback,BackAndroid } from 'react-native';

import {Text, Card, Button} from 'react-native-elements';
export default class Spodeta extends Component {
  static get defaultProps() {
    return {
      title: 'Events'
    };
  }

   _handlePressfd1 = () => {
     this.props.navigator.push({name: 'card601',});
    };
  _handlePressfd2 = () => {
     this.props.navigator.push({name: 'card602',});
    };
  _handlePressfd3 = () => {
     this.props.navigator.push({name: 'card603',});
    };
  _handlePressfd4 = () => {
     this.props.navigator.push({name: 'card604',});
    };
   _handlePressfd5 = () => {
     this.props.navigator.push({name: 'card605',});
    };
      _handlePressfd6 = () => {
     this.props.navigator.push({name: 'card606',});
    };
          _handlePressfd7 = () => {
     this.props.navigator.push({name: 'card607',});
    };
              _handlePressfd8 = () => {
     this.props.navigator.push({name: 'card608',});
    };
              _handlePressfd9 = () => {
     this.props.navigator.push({name: 'card609',});
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
  title='Basketball'
  image={require('./images/bball.png')}
  wrapperstyle>
  <Text style={{marginBottom: 10}}>
    Dunk it.
  </Text>
  <Button
     icon={{name:'toc'}}
      backgroundColor='#353a47'
  onPress={this._handlePressfd1}

    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Details' />
</Card>
<Card
  title='Throwball (Women)'
  image={require('./images/throw.png')}
  wrapperstyle>
  <Text style={{marginBottom: 10}}>
    Why should boys have all the fun.
  </Text>
  <Button
     icon={{name:'toc'}}
      backgroundColor='#353a47'
  onPress={this._handlePressfd7}

    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Details' />
</Card>
<Card
  title='Football'
  image={require('./images/foot.png')}>
  <Text style={{marginBottom: 10}}>
   Score it to win it.
  </Text>
  <Button
     icon={{name:'toc'}}
      backgroundColor='#353a47'
  onPress={this._handlePressfd2}

    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Details' />
</Card>
<Card
  title='Gully Cricket'
  image={require('./images/cric.png')}>
  <Text style={{marginBottom: 10}}>
   Smash that window.
  </Text>
  <Button
     icon={{name:'toc'}}
      backgroundColor='#353a47'
  onPress={this._handlePressfd3}

    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Details' />
</Card>
<Card
  title='Slow Drag Race'
  image={require('./images/speed.png')}>
  <Text style={{marginBottom: 10}}>
    No trainer wheels.
  </Text>
  <Button
     icon={{name:'toc'}}
      backgroundColor='#353a47'
  onPress={this._handlePressfd4}

    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Details' />
</Card>
<Card
  title='Treasure Hunt'
  image={require('./images/thunt.png')}>
  <Text style={{marginBottom: 10}}>
    Decrypt this. 'UPHWXOYW'
  </Text>
  <Button
     icon={{name:'toc'}}
      backgroundColor='#353a47'
  onPress={this._handlePressfd5}

    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Details' />
</Card>
<Card
  title='Tug of War'
  image={require('./images/tuffwar.png')}>
  <Text style={{marginBottom: 10}}>
    Yank it !
  </Text>
  <Button
     icon={{name:'toc'}}
      backgroundColor='#353a47'
  onPress={this._handlePressfd6}

    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Details' />
</Card>
<Card
  title='Carrom'
  image={require('./images/carr.png')}>
  <Text style={{marginBottom: 10}}>
    Let your fingers do the talking !
  </Text>
  <Button
     icon={{name:'toc'}}
      backgroundColor='#353a47'
  onPress={this._handlePressfd8}

    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Details' />
</Card>
<Card
  title='Table Tennis'
  image={require('./images/tt.png')}>
  <Text style={{marginBottom: 10}}>
    Ping Pong !!
  </Text>
  <Button
     icon={{name:'toc'}}
      backgroundColor='#353a47'
  onPress={this._handlePressfd9}

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
