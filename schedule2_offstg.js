import React, { Component, PropTypes } from 'react';
import { View, Navigator,   StyleSheet, ScrollView,TouchableWithoutFeedback,BackAndroid } from 'react-native';

import Communications from 'react-native-communications';

import {List, Text, ListItem} from 'react-native-elements';
export default class Offstg2 extends Component {
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
    name: '8 Ball Pool',
    subtitle: '03:00 PM - 04:00 PM \n Venue: Ground Floor Room No. G4',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+919066324604', true),
    },
    {
    name: 'Basket Ball',
    subtitle: '10:00 AM - 04:00 PM \n Venue: School Ground',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+919686448865', true),
    },
    {
    name: 'Beat Boxing (Round-1)',
    subtitle: '10:30 AM - 01:30 PM \n Venue: 2nd Floor Seminar Hall',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+918884943183', true),
    },
    {
    name: 'Collage',
    subtitle: '11:00 AM - 01:00 PM \n Venue: 1st Floor Seminar Hall (Girls Bag Room)',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+918553806546', true),
    },
    {
    name: 'Face Painting',
    subtitle: '11:00 AM - 01:00 PM \n Venue: Ground Floor Room No. G1',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+918553806546', true),
    },
    {
    name: 'Foot Ball (Qualified Teams)',
    subtitle: '10:00 AM - 04:00 PM \n Venue: Ground',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+919686448865', true),
    },
    {
    name: 'Gully Cricket',
    subtitle: '10:00 AM - 04:00 PM \n Venue: Ground',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+919686448865', true),
    },
    {
    name: 'Kannada Quiz',
    subtitle: '10:00 AM - 01:00 PM \n Venue: Ground Floor Room No. G3',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+919844329776', true),
    },
    {
    name: 'Man v/s Food',
    subtitle: '01:00 PM - 03:00 PM \n Venue: Near Lawn',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+918892482450', true),
    },
    {
    name: 'Mini Militia',
    subtitle: '10:00 AM - 01:00 PM \n Venue: Ground Floor Room No. G4',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+919066324604', true),
    },
    {
    name: 'Nail Art',
    subtitle: '12:00 PM - 02:00 PM \n Venue: 1st Floor (Boys Bag Room)',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+918553806546', true),
    },
    {
    name: 'Paper Planes',
    subtitle: '02:00 PM - 03:00 PM \n Venue: 1st Floor Corridor',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+918892482450', true),
    },
    {
    name: 'Short Film',
    subtitle: '02:00 PM - 04:00 PM \n Venue: 3rd Floor Seminar Hall',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+918892482450', true),
    },
    {
    name: 'Slow Drag Race',
    subtitle: '12:00 PM - 02:00 PM \n Venue: Parking Lot',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+919686448865', true),
    },
    {
    name: 'Solo Dance',
    subtitle: '02:00 PM - 04:00 PM \n Venue: 2nd Floor Seminar Hall',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+918553338827', true),
    },
    {
    name: 'Treasure Hunt',
    subtitle: '11:00 AM - 03:00 PM \n Venue: Ground Floor Room No. G2',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+918892482450', true),
    },
    {
    name: 'Tug Of War',
    subtitle: '03:00 PM - 04:00 PM \n Venue: Ground',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+919686448865', true),
    },
]
    return (

<ScrollView>
      <Text h3 style={styles.heads}> Day 2</Text>
      <Text h5 style={styles.heads}> 12-Mar-2017 (Off-stage Events) {"\n"} </Text>
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