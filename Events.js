import React, { Component, PropTypes } from 'react';
import { View,Image, StyleSheet, Navigator, Dimensions,BackAndroid } from 'react-native';

import Carousel from 'react-native-looped-carousel';

import {Text, Button} from 'react-native-elements';

import Communications from 'react-native-communications';


const { width, height } = Dimensions.get('window');


class FsDeta extends Component {
         _handlePress = () => {
     this.props.navigator.push({name: 'fsdetails',});
    };
    

    render() {
        return (
             <View style={{flexDirection: 'row'}}>
          <Button backgroundColor= 'rgba(1,0,1,0.7)' icon={{name: 'assignment'}} onPress={this._handlePress}
                 title='Details'>
            
            </Button>
             <Button backgroundColor= 'rgba(1,0,1,0.7)' icon={{name: 'perm-phone-msg'}} onPress={() => Communications.phonecall('+918197855719', true)}

                 title='Contact'>
            
            </Button>
            </View>
        );
    }
}
class BobDeta extends Component {
         _handlePress = () => {
     this.props.navigator.push({name: 'bobdetails',});
    };
    

    render() {
        return (
             <View style={{flexDirection: 'row'}}>
          <Button backgroundColor= 'rgba(1,0,1,0.7)' icon={{name: 'assignment'}} onPress={this._handlePress}
                 title='Details'>
            
            </Button>
             <Button backgroundColor= 'rgba(1,0,1,0.7)' icon={{name: 'perm-phone-msg'}} onPress={() => Communications.phonecall('+919886160464', true)}

                 title='Contact'>
            
            </Button>
            </View>
        );
    }
}

class EntDeta extends Component {
         _handlePress = () => {
     this.props.navigator.push({name: 'entdetails',});
    };
    

    render() {
        return (
             <View style={{flexDirection: 'row'}}>
          <Button backgroundColor= 'rgba(1,0,1,0.7)' icon={{name: 'assignment'}} onPress={this._handlePress}
                 title='Explore'>
            
            </Button>
             <Button backgroundColor= 'rgba(1,0,1,0.7)' icon={{name: 'perm-phone-msg'}} onPress={() => Communications.phonecall('+919844329776', true)}

                 title='Contact'>
            
            </Button>
            </View>
        );
    }
}

class SpoDeta extends Component {
         _handlePress = () => {
     this.props.navigator.push({name: 'spodetails',});
    };
    

    render() {
        return (
             <View style={{flexDirection: 'row'}}>
          <Button backgroundColor= 'rgba(1,0,1,0.7)' icon={{name: 'assignment'}} onPress={this._handlePress}
                 title='Explore'>
            
            </Button>
             <Button backgroundColor= 'rgba(1,0,1,0.7)' icon={{name: 'perm-phone-msg'}} onPress={() => Communications.phonecall('+919686448865', true)}

                 title='Contact'>
            
            </Button>
            </View>
        );
    }
}

class ArtDeta extends Component {
         _handlePress = () => {
     this.props.navigator.push({name: 'artdetails',});
    };
    

    render() {
        return (
             <View style={{flexDirection: 'row'}}>
          <Button backgroundColor= 'rgba(1,0,1,0.7)' icon={{name: 'assignment'}} onPress={this._handlePress}
                 title='Explore'>
            
            </Button>
             <Button backgroundColor= 'rgba(1,0,1,0.7)' icon={{name: 'perm-phone-msg'}} onPress={() => Communications.phonecall('+918553806546', true)}

                 title='Contact'>
            
            </Button>
            </View>
        );
    }
}

class GmeDeta extends Component {
         _handlePress = () => {
     this.props.navigator.push({name: 'gmedetails',});
    };
    

    render() {
        return (
             <View style={{flexDirection: 'row'}}>
          <Button backgroundColor= 'rgba(1,0,1,0.7)' icon={{name: 'assignment'}} onPress={this._handlePress}
                 title='Explore'>
            
            </Button>
             <Button backgroundColor= 'rgba(1,0,1,0.7)' icon={{name: 'perm-phone-msg'}} onPress={() => Communications.phonecall('+919066324604', true)}

                 title='Contact'>
            
            </Button>
            </View>
        );
    }
}

class BusDeta extends Component {
         _handlePress = () => {
     this.props.navigator.push({name: 'busdetails',});
    };
    

    render() {
        return (
             <View style={{flexDirection: 'row'}}>
          <Button backgroundColor= 'rgba(1,0,1,0.7)' icon={{name: 'assignment'}} onPress={this._handlePress}
                 title='Explore'>
            
            </Button>
             <Button backgroundColor= 'rgba(1,0,1,0.7)' icon={{name: 'perm-phone-msg'}} onPress={() => Communications.phonecall('+918123413998', true)}

                 title='Contact'>
            
            </Button>
            </View>
        );
    }
}

class LitDeta extends Component {
         _handlePress = () => {
     this.props.navigator.push({name: 'litdetails',});
    };
    

    render() {
        return (
             <View style={{flexDirection: 'row'}}>
          <Button backgroundColor= 'rgba(1,0,1,0.7)' icon={{name: 'assignment'}} onPress={this._handlePress}
                 title='Explore'>
            
            </Button>
             <Button backgroundColor= 'rgba(1,0,1,0.7)' icon={{name: 'perm-phone-msg'}} onPress={() => Communications.phonecall('+919844329776', true)}
                 title='Contact'>
            
            </Button>
            </View>
        );
    }
}

class DanDeta extends Component {
         _handlePress = () => {
     this.props.navigator.push({name: 'dandetails',});
    };
    

    render() {
        return (
             <View style={{flexDirection: 'row'}}>
          <Button backgroundColor= 'rgba(1,0,1,0.7)' icon={{name: 'assignment'}} onPress={this._handlePress}
                 title='Explore'>
            
            </Button>
             <Button backgroundColor= 'rgba(1,0,1,0.7)' icon={{name: 'perm-phone-msg'}} onPress={() => Communications.phonecall('+918553338827', true)}
                 title='Contact'>
            
            </Button>
            </View>
        );
    }
}

class Musdeta extends Component {
         _handlePress = () => {
     this.props.navigator.push({name: 'musdetails',});
    };
    

    render() {
        return (
             <View style={{flexDirection: 'row'}}>
          <Button backgroundColor= 'rgba(1,0,1,0.7)' icon={{name: 'assignment'}} onPress={this._handlePress}
                 title='Explore'>
            
            </Button>
             <Button backgroundColor= 'rgba(1,0,1,0.7)' icon={{name: 'perm-phone-msg'}} onPress={() => Communications.phonecall('+918884943183', true)}
                 title='Contact'>
            
            </Button>
            </View>
        );
    }
}



export default class Events extends Component {

  constructor(props) {
    super(props);

    this.state = {
      size: { width, height },
    };
  }

   _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  }
  

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
     <View style={{ flex: 1 }} onLayout={this._onLayoutDidChange}>
         
        <Carousel
          style={this.state.size}
          bullets
          autoplay = {false}
          currentpage
          onAnimateNextPage={(p) => console.log(p)}
        >
          <View style={[this.state.size]}>
            <Image style={{
          flex: 1,
          width: null,
          height: null,
          resizeMode: 'cover' }} source={require('./images/eve_fs.png')}><View style={styles.container}><Text style={styles.welcome}>Fashion Show </Text>
         <FsDeta navigator={this.props.navigator}/>
          </View></Image></View>

          <View style={[ this.state.size]}>
              <Image style={{
          flex: 1,
          width: null,
          height: null,
          resizeMode: 'cover' }} source={require('./images/bob.png')}><View style={styles.container}><Text style={styles.welcome}>Battle of Bands </Text>
        <BobDeta navigator={this.props.navigator}/>        
         </View></Image></View>

         <View style={[ this.state.size]}>
              <Image style={{
          flex: 1,
          width: null,
          height: null,
          resizeMode: 'cover' }} source={require('./images/dan.png')}><View style={styles.container}><Text style={styles.welcome}>Dance </Text>
          <DanDeta navigator={this.props.navigator}/>  
          </View></Image></View>

          <View style={[ this.state.size]}>
              <Image style={{
          flex: 1,
          width: null,
          height: null,
          resizeMode: 'cover' }} source={require('./images/eve_mus.png')}><View style={styles.container}><Text style={styles.welcome}>Musical </Text>
          <Musdeta navigator={this.props.navigator}/>  
          </View></Image></View>

          <View style={[ this.state.size]}>
              <Image style={{
          flex: 1,
          width: null,
          height: null,
          resizeMode: 'cover' }} source={require('./images/eve_ent.png')}><View style={styles.container}><Text style={styles.welcome}>Entertainment </Text>
          <EntDeta navigator={this.props.navigator}/>  
          </View></Image></View>

          <View style={[ this.state.size]}>
              <Image style={{
          flex: 1,
          width: null,
          height: null,
          resizeMode: 'cover' }} source={require('./images/sport.png')}><View style={styles.container}><Text style={styles.welcome}>Sports </Text>
          <SpoDeta navigator={this.props.navigator}/>  
         </View></Image></View>

          <View style={[ this.state.size]}>
              <Image style={{
          flex: 1,
          width: null,
          height: null,
          resizeMode: 'cover' }} source={require('./images/art.png')}><View style={styles.container}><Text style={styles.welcome}>Arts </Text>
          <ArtDeta navigator={this.props.navigator}/>  
         </View></Image></View>

          <View style={[ this.state.size]}>
              <Image style={{
          flex: 1,
          width: null,
          height: null,
          resizeMode: 'cover' }} source={require('./images/eve_gme.png')}><View style={styles.container}><Text style={styles.welcome}>Gaming </Text>
          <GmeDeta navigator={this.props.navigator}/>  
          </View></Image></View>

          <View style={[ this.state.size]}>
              <Image style={{
          flex: 1,
          width: null,
          height: null,
          resizeMode: 'cover' }} source={require('./images/bus.png')}><View style={styles.container}><Text style={styles.welcome}>Business </Text>
          <BusDeta navigator={this.props.navigator}/>  
          <View style={{flexDirection: 'row'}}>
         
            </View></View></Image></View>

          <View style={[ this.state.size]}>
              <Image style={{
          flex: 1,
          width: null,
          height: null,
          resizeMode: 'cover' }} source={require('./images/lit1.png')}><View style={styles.container}><Text style={styles.welcome}>Literary </Text>
          <LitDeta navigator={this.props.navigator}/>  
          </View></Image></View>

          

        </Carousel>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(1,1,1,0.6)',
  },
  welcome: {
    fontSize: 30,
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
