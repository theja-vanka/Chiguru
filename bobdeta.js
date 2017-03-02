import React, { Component, PropTypes } from 'react';
import { View, Navigator, Image, StyleSheet, TouchableWithoutFeedback,BackAndroid } from 'react-native';

import {Text} from 'react-native-elements';



class BackgroundImage extends Component {
   
    render() {
        return (
            <Image source={require('./images/lobo.png')}
                  style={styles.backgroundImage}>

          {this.props.children}
            </Image>
        );
    }
}

export default class Bobdet extends Component {
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

      <View style={styles.container}>
          <BackgroundImage />
          <View style={styles.containerdown}>

            <Text style={styles.welcome}>Rules</Text>
<Text style={styles.points}>Minimum of

three members per band</Text>
<Text style={styles.points}>Time allotted

will be 10+5 minutes inclusive of sound check. </Text>
<Text style={styles.points}>No props allowed
</Text>
<Text style={styles.points}>Registration fee: Rs.1000 
</Text>
<Text style={styles.points}>Winner:

Rs.12000 
</Text>
<Text style={styles.points}>Runners up: 6000
</Text>
          </View>
          </View>
 
          
    )
  }
  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.onBackPress.bind(this));
}
}


const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0)',
  },  containerup: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#100F20',
  },  containerdown: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#394359',
  },
   welcome: {
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
    points: {
    fontSize: 11,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
    points: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  }, backgroundImage: {
        flex: 1,
        width: null,
        height: null,
    backgroundColor: '#100F20',
        resizeMode: 'cover'
    },
  

});
