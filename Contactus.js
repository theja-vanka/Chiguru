import React, { Component, PropTypes } from 'react';
import { View, StyleSheet,Navigator, ScrollView, TouchableWithoutFeedback,BackAndroid } from 'react-native';

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
      />
      <SocialIcon
    type='instagram'
      />
      <SocialIcon
    type='youtube'
      />
      </View>
      <View style={styles.dev}>
          <Text style={styles.info}>Guided By:
            </Text>
            <Text style={styles.info1}>Pankaja K</Text>
            <Text style={styles.info1}></Text>
          </View>
          <View style={styles.dev}>
          <Text style={styles.infol}>Developer
            </Text>
            <Text style={styles.info11}>Krishnatheja Vanka</Text>
            <Text style={styles.info11}>+91-9916596675</Text>
            <Text style={styles.info11}>theja-vanka.github.io</Text>
            
          </View>
 <View style={styles.dev}>
          <Text style={styles.infol}>Art and Concept
            </Text>
            <Text style={styles.info11}>Shreyas M</Text>
            <Text style={styles.info11}>+91-7892404817</Text>
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
    flex: 2,
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
    fontSize: 18,
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
    margin: 10,
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