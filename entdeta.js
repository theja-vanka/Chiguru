import React, { Component, PropTypes } from 'react';
import { View, Navigator,StatusBar, ScrollView, StyleSheet, TouchableWithoutFeedback,BackAndroid } from 'react-native';

import {Text, Card, Button} from 'react-native-elements';
export default class Entdeta extends Component {
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
  title='Air Crash'
  image={require('./images/aircrash.png')}
  wrapperstyle>
  <Text style={{marginBottom: 10}}>
    Prove youself worthy to survive.
  </Text>
  <Button
    icon={{name:'toc'}}
     backgroundColor='#353a47'
 
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Details' />
</Card>
<Card
  title='Mime'
  image={require('./images/mime.png')}>
  <Text style={{marginBottom: 10}}>
    Let your body speak !!</Text>
  <Button
    icon={{name:'toc'}}
     backgroundColor='#353a47'
 
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Details' />
</Card>
<Card
  title='Man VS Food'
  image={require('./images/mvf.png')}>
  <Text style={{marginBottom: 10}}>
    
   Spit or Swallow
  </Text>
  <Button
    icon={{name:'toc'}}
     backgroundColor='#353a47'
 
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Details' />
</Card>
<Card
  title='Mock Rock'
  image={require('./images/mockrock.png')}>
  <Text style={{marginBottom: 10}}>
    Get your humor on.
  </Text>
  <Button
    icon={{name:'toc'}}
     backgroundColor='#353a47'
 
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Details' />
</Card>
<Card
  title='Minute-2-Win It'
  image={require('./images/m2wi.png')}>
  <Text style={{marginBottom: 10}}>
    Its all in the name.
  </Text>
  <Button
    icon={{name:'toc'}}
     backgroundColor='#353a47'
 
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Details' />
</Card>
<Card
  title='Movie Spoof'
  image={require('./images/moviespof.png')}>
  <Text style={{marginBottom: 10}}>
    Scary movie was just the beginning.
  </Text>
  <Button
    icon={{name:'toc'}}
     backgroundColor='#353a47'
 
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Details' />
</Card>
<Card
  title='Short Films'
  image={require('./images/shortfilm.png')}>
  <Text style={{marginBottom: 10}}>
    Size does matter.
  </Text>
  <Button
    icon={{name:'toc'}}
     backgroundColor='#353a47'
 
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Details' />
</Card>
<Card
  title='Short Stories'
  image={require('./images/sstory.png')}>
  <Text style={{marginBottom: 10}}>
    
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
