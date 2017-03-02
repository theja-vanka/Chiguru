import React, { Component, PropTypes } from 'react';
import { View, Navigator, ScrollView, StyleSheet, TouchableWithoutFeedback,BackAndroid } from 'react-native';

import {Text, Card, Button} from 'react-native-elements';
export default class Gmedeta extends Component {
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
  title='Counter Strike'
  image={require('./images/aircrash.png')}
  wrapperstyle>
  <Text style={{marginBottom: 10}}>
  Are you geek enough ?  </Text>
  <Button
     icon={{name:'toc'}}
      backgroundColor='#353a47'
 
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Details' />
</Card>
<Card
  title='FIFA'
  image={require('./images/mime.png')}>
  <Text style={{marginBottom: 10}}>
   Its not just a game. Its a religion.
  </Text>
  <Button
     icon={{name:'toc'}}
      backgroundColor='#353a47'
 
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Details' />
</Card>
<Card
  title='Mini Militia'
  image={require('./images/mime.png')}>
  <Text style={{marginBottom: 10}}>
   No lag please. </Text>
  <Button
     icon={{name:'toc'}}
      backgroundColor='#353a47'
 
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
</Card>
<Card
  title='NFS'
  image={require('./images/mime.png')}>
  <Text style={{marginBottom: 10}}>
    Are you fast enough !
  </Text>
  <Button
     icon={{name:'toc'}}
      backgroundColor='#353a47'
 
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
</Card>
<Card
  title='Pokemon Go'
  image={require('./images/mime.png')}>
  <Text style={{marginBottom: 10}}>
    
    Gotta Catch'em All.
  </Text>
  <Button
     icon={{name:'toc'}}
      backgroundColor='#353a47'
 
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
</Card>
<Card
  title='UNO'
  image={require('./images/mime.png')}>
  <Text style={{marginBottom: 10}}>
    Give your friend a draw 4.
  </Text>
  <Button
     icon={{name:'toc'}}
      backgroundColor='#353a47'
 
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
