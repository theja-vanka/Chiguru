import React, { Component, PropTypes } from 'react';
import { View, StyleSheet,Image,Linking,Navigator, ScrollView, TouchableWithoutFeedback,BackAndroid } from 'react-native';

import Communications from 'react-native-communications';




import {Text, Button, SocialIcon} from 'react-native-elements';
class BackgroundImage extends Component {
  
    render() {
        return (
            <Image source={require('./images/conus.png')}
                  style={styles.backgroundImage}>

                  {this.props.children}

            </Image>
        );
    }
}

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
      <BackgroundImage>
      <ScrollView>
      

        <View style={styles.dev}>
             <Button icon={{name: 'android'}}  large backgroundColor='rgba(0,0,0,0.1)' title='Developers' ></Button>
            <Button   backgroundColor='rgba(0,0,0,0.1)' title='Krishnatheja Vanka'   icon={{name: 'call'}} onPress={() => Communications.phonecall('+919916596675', true)} ></Button>
            <Button  backgroundColor='rgba(0,0,0,0.1)' title='Manjunath Sangashetty'   icon={{name: 'call'}} onPress={() => Communications.phonecall('+918892105395', true)} ></Button>
</View>
<View style={styles.dev}>
   <Button icon={{name: 'bubble-chart'}}  large backgroundColor='rgba(0,0,0,0.1)' title='Art and Concept' ></Button>
            <Button  backgroundColor='rgba(0,0,0,0.1)' title='Jeffrey Samuel Ronald'   icon={{name: 'call'}} onPress={() => Communications.phonecall('+919886160464', true)} ></Button> 
            <Button  backgroundColor='rgba(0,0,0,0.1)' title='Shreyas M'   icon={{name: 'call'}} onPress={() => Communications.phonecall('+917892404817', true)} ></Button> 

</View>
        
        <View style={styles.dev}>
     <Button icon={{name: 'group'}}  large backgroundColor='rgba(0,0,0,0.1)' title='Co-ordinators' ></Button>

            <Button  backgroundColor='rgba(0,0,0,0.1)' title='Raghav Chakravarthy'   icon={{name: 'call'}} onPress={() => Communications.phonecall('+918951170746', true)} ></Button>

             <Button  backgroundColor='rgba(0,0,0,0.1)' title='Sohan Singh'   icon={{name: 'call'}} onPress={() => Communications.phonecall('+918951513227', true)} ></Button>
  
            <Button   backgroundColor='rgba(0,0,0,0.1)' title='Haneesh'   icon={{name: 'call'}} onPress={() => Communications.phonecall('+917760683399', true)} ></Button>
             <Button   backgroundColor='rgba(0,0,0,0.1)' title='Varun'   icon={{name: 'call'}} onPress={() => Communications.phonecall('+919620096500', true)} ></Button>
              <Button   backgroundColor='rgba(0,0,0,0.1)' title='Ranjeet'   icon={{name: 'call'}} onPress={() => Communications.phonecall('+919741894545', true)} ></Button>
              <Button   backgroundColor='rgba(0,0,0,0.1)' title='Vinod'   icon={{name: 'call'}} onPress={() => Communications.phonecall('+919449443703', true)} ></Button>
              <Button   backgroundColor='rgba(0,0,0,0.1)' title='Jithendra'   icon={{name: 'call'}} onPress={() => Communications.phonecall('+919742147418', true)} ></Button>

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
      
      
 
         
       
        </ScrollView>
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
    backgroundColor: '#0f0e20',
  },
  dev: {
    flex: 3,
    margin: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  welcome: {
    fontSize: 23,
    margin: 10,
    color: 'white',
  },
   info1: {
    fontSize: 14,
    margin: 2,
    color: 'white',
  },
    info11: {
    fontSize: 12,
    margin: 2,
    color: 'white',
  },
     info: {
    fontSize: 23,
   

    color: 'white',
  },
      infol: {
    fontSize: 15,
    margin: 10,
    color: 'white',
  },
   backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
  instructions: {
    color: '#333333',
    marginBottom: 5,
  },
});