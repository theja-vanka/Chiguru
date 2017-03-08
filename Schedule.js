import React, { Component, PropTypes } from 'react';
import { View, Navigator,   StyleSheet, ScrollView,TouchableWithoutFeedback,BackAndroid } from 'react-native';

import Communications from 'react-native-communications';

import {List, Text, ListItem} from 'react-native-elements';
export default class Schedule extends Component {
  static get defaultProps() {
    return {
      title: 'Events'
    };
  }
  onBackPress(){
    this.props.navigator.pop();
    return true; 
}
  _handlePress1 = () => {
     this.props.navigator.push({name: 'offstg1',});
    };
  _handlePress2 = () => {
     this.props.navigator.push({name: 'offstg2',});
    };

  goBack = () => {
    this.props.navigator.pop();
  };

  render() {
    const list = [
  {
    name: '9:00 AM - 11:30 AM',
    subtitle: 'Inauguration',
    icon: 'event',
    ricon: 'account-balance',
    },
  {
    name: '11:30 AM - 1:30 PM',
    subtitle: 'Mime',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+918105746825', true),
  },
  {
    name: '1:30 PM - 2:30 PM',
    subtitle: 'Stunt Show',
    icon: 'event',
    ricon: 'motorcycle',
    },
  {
    name: '2:30 PM - 4:30 PM',
    subtitle: 'Battle of Bands',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+918105901489', true),
  },
  {
    name: '4:30 PM - 6:30 PM',
    subtitle: 'Fusion Dance',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+919632242028', true),
  },
  {
    name: '6:30 PM - 7:00 PM',
    subtitle: 'Specials',
    icon: 'event',
    ricon: 'speaker',
  },
  {
    name: '7:00 PM - 9:30 PM',
    subtitle: 'Fashion Show',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+918197855719', true),
  },
  {
    name: 'Off-stage Events',
    icon: 'domain',
    phone: this._handlePress1,
  },
]
const list2 = [
  {
    name: '9:00 AM - 10:30 AM',
    subtitle: 'Air Crash',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+918892482450', true),
  },
  {
    name: '10:30 AM - 12:30 PM',
    subtitle: 'Mock rock',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+918105746825', true),
  },
  {
    name: '1:00 PM - 2:30 PM',
    subtitle: 'Indian Filmy Dance',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+919663457309', true),
  },
  {
    name: '2:30 PM - 3:00 PM',
    subtitle: 'Beat Boxing (Final Round)',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+918884943183', true),
  },
  {
    name: '3:00 PM - 4:30 PM',
    subtitle: 'Group Dance (contemporary / folk / classical)',
    icon: 'event',
    ricon: 'phone',
    phone: () => Communications.phonecall('+919986231381', true),
  },
  {
    name: '4:30 PM - 5:00 PM',
    subtitle: 'Specials',
    icon: 'event',
    ricon: 'speaker',
  },
  {
    name: '5:00 PM - 9:00 PM',
    subtitle: 'Live Concert (AGAM)',
    icon: 'event',
    ricon: 'live-tv',
  },
  {
    name: '9:00 PM - 10:30 PM',
    subtitle: 'DJ Night',
    icon: 'event',
    ricon: 'adjust',
  },
  {
    name: 'Off-stage Events',
    icon: 'domain',
    phone: this._handlePress2,
  },
]
    return (
<View style={styles.bgclr}>
<ScrollView>
      <Text h3 style={styles.heads}> Day 1 </Text>
      <Text h5 style={styles.heads}>{"\n"} 11-Mar-2017 </Text>
      <List>
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
<Text h3 style={styles.heads}> Day 2 </Text>
      <Text h5 style={styles.heads}>{"\n"} 12-Mar-2017 </Text>

      <List>
  {
    list2.map((l, i) => (
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
</ScrollView></View>

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
  bgclr: {
   backgroundColor: '#050606',
  },
});