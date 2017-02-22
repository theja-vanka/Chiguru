import React, { Component, PropTypes } from 'react';
import { View, Image, StyleSheet, Text, Navigator, TouchableWithoutFeedback,BackAndroid } from 'react-native';



class BackgroundImage extends Component {
  
    render() {
        return (
            <Image source={require('./images/cit_bg.png')}
                  style={styles.backgroundImage}>

                  {this.props.children}

            </Image>
        );
    }
}

class BackgroundBotImageR3 extends Component {
  
    render() {
        return (
            <Image source={require('./images/blue.png')}
                  style={styles.backgroundImage}>

                  {this.props.children}

            </Image>
        );
    }
}
class BackgroundBotImageR2 extends Component {
  
    render() {
        return (
            <Image source={require('./images/pur.png')}
                  style={styles.backgroundImage}>

                  {this.props.children}

            </Image>
        );
    }
}
class BackgroundBotImageR1 extends Component {
  
    render() {
        return (
            <Image source={require('./images/yel.png')}
                  style={styles.backgroundImage}>

                  {this.props.children}

            </Image>
        );
    }
}
class BackgroundBotImageL3 extends Component {
  
    render() {
        return (
            <Image source={require('./images/ora.png')}
                  style={styles.backgroundImage}>

                  {this.props.children}

            </Image>
        );
    }
}
class BackgroundBotImageL2 extends Component {
  
    render() {
        return (
            <Image source={require('./images/red.png')}
                  style={styles.backgroundImage}>

                  {this.props.children}

            </Image>
        );
    }
}
class BackgroundBotImageL1 extends Component {
  
    render() {
        return (
            <Image source={require('./images/gre.png')}
                  style={styles.backgroundImage}>

                  {this.props.children}

            </Image>
        );
    }
}


export default class Home extends Component {

  onBackPress(){
    this.props.navigator.pop();
    return true; 
}

  goBack = () => {
    this.props.navigator.pop();
  };

  render() {
    return (
      <BackgroundImage>
          <View style={{flex: 1, flexDirection: 'row'}}>
           <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <BackgroundBotImageL1 />
      <BackgroundBotImageL2 />
      <BackgroundBotImageL3 />
      </View>
      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <BackgroundBotImageR1 />
      <BackgroundBotImageR2 />
      <BackgroundBotImageR3 />

       </View>

      </View>
          </BackgroundImage>
                   
                        
    )
  }
  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.onBackPress.bind(this));
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: 'rgba(0,0,0,0)'
  },
  backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
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
});