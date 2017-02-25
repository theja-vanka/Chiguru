import React, { Component, PropTypes } from 'react';
import { View, Text, Navigator,
Animated,
Easing,
Image,
StyleSheet,
TouchableWithoutFeedback,
Button,
BackAndroid } from 'react-native';

import {Overlay} from 'react-native-overlay';


class BackgroundImage extends Component {
  
    render() {
        return (
          <Overlay>
            <Image source={require('./images/open_bg.png')}
                  style={styles.backgroundImage}>

            </Image>
            </Overlay>
        );
    }
}
class Contact extends Component {
  
    render() {
        return (
            <Image source={require('./images/contact.png')}
                  style={styles.backgroundImage}>

                  {this.props.children}

            </Image>
        );
    }
}
class Locat extends Component {
  
    render() {
        return (
            <Image source={require('./images/location.png')}
                  style={styles.backgroundImage}>

                  {this.props.children}

            </Image>
        );
    }
}
class Spons extends Component {
  
    render() {
        return (
            <Image source={require('./images/sponsor.png')}
                  style={styles.backgroundImage}>

                  {this.props.children}

            </Image>
        );
    }
}
class Sche extends Component {
  
    render() {
        return (
            <Image source={require('./images/sche.png')}
                  style={styles.backgroundImage}>

                  {this.props.children}

            </Image>
        );
    }
}
class Eventz extends Component {
  
    render() {
        return (
            <Image source={require('./images/events.png')}
                  style={styles.backgroundImage}>

                  {this.props.children}

            </Image>
        );
    }
}
class Abtz extends Component {
  
    render() {
        return (
            <View
                  style={styles.container}>

                  {this.props.children}

            </View>
        );
    }
}




export default class Home extends Component {
  static get defaultProps() {
    return {
      title: 'Home'
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
             <BackgroundImage>   
                   
        <Abtz />
          <Eventz /> 
        <Sche />
          <Spons />
          <Locat />
          <Contact />
      
  </ BackgroundImage>
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
  },
  backgroundLog: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
});
