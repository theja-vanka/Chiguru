import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  BackAndroid
} from 'react-native';

class BackgroundImage extends Component {
    onBackPress(){
    this.props.navigator.pop();
    return true; 
}

  goBack = () => {
    this.props.navigator.pop();
  };
    render() {
        return (
            <Image source={require('./images/open_bg.png')}
                  style={styles.backgroundImage}>

          {this.props.children}
            </Image>
        );
    }
}

class Backgroundhome1 extends Component {
  
    render() {
        return (
            <Image source={require('./images/home1.png')}
                  style={styles.backgroundImage}>
          {this.props.children}

            </Image>
        );
    }
}
class Backgroundhome2 extends Component {
  
    render() {
        return (
            <Image source={require('./images/home2.png')}
                  style={styles.backgroundImage}>
          {this.props.children}

            </Image>
        );
    }
}
class Backgroundhome3 extends Component {
  
    render() {
        return (
            <Image source={require('./images/home3.png')}
                  style={styles.backgroundImage}>
          {this.props.children}

            </Image>
        );
    }
}
class Backgroundhome4 extends Component {
  
    render() {
        return (
            <Image source={require('./images/home4.png')}
                  style={styles.backgroundImage}>
          {this.props.children}

            </Image>
        );
    }
}
class Backgroundhome5 extends Component {
  
    render() {
        return (
            <Image source={require('./images/home5.png')}
                  style={styles.backgroundImage}>
          {this.props.children}

            </Image>
        );
    }
}

export default class Theja extends Component {
  render() {
    return (
    <BackgroundImage>
    <Backgroundhome1>
<Backgroundhome2>
<Backgroundhome3><Backgroundhome4><Backgroundhome5>
</Backgroundhome5></Backgroundhome4></Backgroundhome3>
</Backgroundhome2>
    </Backgroundhome1>
     </BackgroundImage>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
   backgroundImage: {
        flex: 1,
        width: null,
        height: null,

        resizeMode: 'cover'
    },
    backgroundImage2: {
        flex: 20,
              position: 'relative',
        backgroundColor:'rgba(0,0,0,0)'
    },
});