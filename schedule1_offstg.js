import React, { Component, PropTypes } from 'react';
import { View, Navigator,   StyleSheet, ScrollView,TouchableWithoutFeedback,BackAndroid } from 'react-native';

import Communications from 'react-native-communications';

import {List, Text, ListItem} from 'react-native-elements';
export default class Offstg1 extends Component {
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
    const list = [
  {
    name: 'Aashubashane',
    subtitle: '01:00 PM - 02:00 PM \n Venue: Ground Floor Room No. G3',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+919844329776', true),
    },
    {
    name: 'Best Manager',
    subtitle: '12:00 PM - 06:00 PM \n Venue: 1st Floor DKM Block',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+918123413998', true),
    },
    {
    name: 'Business Plan',
    subtitle: '12:00 PM - 06:00 PM \n Venue: 1st Floor DKM Block',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+918123413998', true),
    },
    {
    name: 'Business Quiz',
    subtitle: '12:00 PM - 06:00 PM \n Venue: 1st Floor DKM Block',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+918123413998', true),
    },
    {
    name: 'Carrom',
    subtitle: '12:00 PM - 03:00 PM \n Venue: Sports Room 4th Floor',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+919686448865', true),
    },
    {
    name: 'Case Analysis',
    subtitle: '12:00 PM - 06:00 PM \n Venue: 1st Floor DKM Block',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+918123413998', true),
    },
    {
    name: 'Counter Strike',
    subtitle: '10:00 AM - 12:00 PM \n Venue: 1st Floor Computer Labs',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+919066324604', true),
    },
    {
    name: 'Criminal Case',
    subtitle: '01:00 PM - 03:00 PM \n Venue: Ground Floor Room No. G1',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+919066324604', true),
    },
    {
    name: 'Dota 2',
    subtitle: '03:00 PM - 05:00 PM \n Venue: 1st Floor Computer Labs',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+919066324604', true),
    },
    {
    name: 'FIFA',
    subtitle: '01:00 PM - 03:00 PM \n Venue: 1st Floor Camputer Labs',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+919066324604', true),
    },
    {
    name: 'Football (Round-1)',
    subtitle: '12:00 PM - 05:00 PM \n Venue: Ground',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+919686448865', true),
    },
    {
    name: 'Group Singing',
    subtitle: '02:00 PM - 05:00 PM \n Venue: 2nd Floor Seminar Hall',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+918884943183', true),
  },
  {
    name: 'Gully Cricket',
    subtitle: '10:00 AM - 04:00 PM \n Venue: Ground',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+919686448865', true),
    },
    {
    name: 'Minute To Win It',
    subtitle: '02:00 PM - 04:00 PM \n Venue: 1st Floor Seminar Hall',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+918892482450', true),
    },
    {
    name: 'Photography',
    subtitle: '12:00 PM - 05:00 PM \n Venue: Ground Floor Room No. G4',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+918553806546', true),
    },
    {
    name: 'Pokemon Go',
    subtitle: '12:00 PM - 05:00 PM \n Venue: Near Cafe Coffee Day',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+919066324604', true),
    },
    {
    name: 'Product Launch',
    subtitle: '12:00 PM - 06:00 PM \n Venue: 1st Floor DKM Block',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+918884943183', true),
    },
    {
    name: 'Sketching',
    subtitle: '11:00 PM - 01:00 PM \n Venue: 4th Floor BPD Lab',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+918553806546', true),
    },
    {
    name: 'Solo Singing',
    subtitle: '12:00 PM - 02:00 PM \n Venue: 2nd Floor Seminar Hall',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+918884943183', true),
    },
    {
    name: 'Table Tennis',
    subtitle: '12:00 PM - 03:00 PM \n Venue: Sports Room 4th Floor',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+919686448865', true),
    },
    {
    name: 'Throw Ball',
    subtitle: '12:00 PM - 05:00 PM \n Venue: Ground',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+919686448865', true),
    },
    {
    name: 'UNO',
    subtitle: '12:00 PM - 02:00 PM \n Venue: Ground Floor Room No. G5',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+919066324604', true),
    },
]
    return (

<ScrollView>
      <Text h3 style={styles.heads}> Day 1</Text>
      <Text h5 style={styles.heads}> 11-Mar-2017 (Off-stage Events) {"\n"} </Text>
      <List >
  {
    list.map((l, i) => (
    <ListItem
        roundAvatar
        key={i}
       leftIcon={{name: l.icon}}
       rightIcon={{name: l.ricon}}
        title={l.name}
        subtitle={l.subtitle}
        onPress={l.phone}
      />
    ))
    
  }
  
  </List>
</ScrollView>

    )
  }
  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.onBackPress.bind(this));
}
}
const styles = StyleSheet.create({
  heads: {
   textAlign:'center',
   backgroundColor: '#050606',
  }, 
});