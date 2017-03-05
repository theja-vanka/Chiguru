import React, { Component, PropTypes } from 'react';
import { View, StyleSheet,Linking,Navigator, ScrollView, TouchableWithoutFeedback,BackAndroid } from 'react-native';

import Communications from 'react-native-communications';


import {Text, Button, SocialIcon} from 'react-native-elements';
export default class Contactus extends Component {
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
      <View style={styles.container}>
      <Text style={styles.welcome}> Contact Us
        </Text>
        <View style={styles.dev}>
          <Text style={styles.info}>Co-ordinators
            </Text>
            <Text style={styles.info1}>Raghav Chakravarthy</Text>
            <Text style={styles.info1}>+91-8951170746</Text>
            <Text style={styles.info1}>Sohan Singh</Text>
            <Text style={styles.info1}>+91-8951513227</Text>
            <Text style={styles.info1}>Haneesh</Text>
            <Text style={styles.info1}>+91-7760683399</Text>

          </View>

          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center',justifyContent: 'center'}}>
        <SocialIcon
    type='facebook'
    onPress={() => Linking.openURL('https://www.facebook.com/chigurucitech/')}
      />
      <SocialIcon
    type='instagram'
    onPress={() => Linking.openURL('https://www.instagram.com/chigurucitech/')}
      />
      <SocialIcon
    type='youtube'
    onPress={() => Linking.openURL('https://www.youtube.com/channel/UCayNEVTqQidRY7XThhUOSrw')}
      />
      </View>
      <View style={styles.dev}>
          <Text style={styles.info}>Developers
            </Text>
            <Button  large backgroundColor='rgba(0,0,0,0)' title='Krishnatheja Vanka' onPress={() => Linking.openURL('https://theja-vanka.github.io/')} ></Button>
            <Button  large backgroundColor='rgba(0,0,0,0)' title='Manjunath Sangashetty' onPress={() => Communications.phonecall('+918892105395', true)} ></Button>
</View>
 <View style={styles.dev}>
          <Text style={styles.info} >Art and Concept
            </Text>
            <Text style={styles.info1}>Shreyas M</Text>
            <Text style={styles.info1}>+91-7892404817</Text>
</View>
         
        </View>
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
    backgroundColor: '#0f0e20',
  },
  dev: {
    flex: 3,
    margin: 20,
    backgroundColor: '#353a47',
  },
  welcome: {
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
   info1: {
    fontSize: 14,
    textAlign: 'center',
    margin: 2,
    color: 'white',
  },
    info11: {
    fontSize: 12,
    textAlign: 'center',
    margin: 2,
    color: 'white',
  },
     info: {
    fontSize: 23,
    textAlign: 'center',

    color: 'white',
  },
      infol: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});