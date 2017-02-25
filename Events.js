import React, { Component, PropTypes } from 'react';
import { View, Text,Image, StyleSheet, Navigator, Dimensions,BackAndroid } from 'react-native';

import Carousel from 'react-native-looped-carousel';

const { width, height } = Dimensions.get('window');


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
          delay={2000}
          style={this.state.size}
          autoplay
          pageInfo
          onAnimateNextPage={(p) => console.log(p)}
        >
          <View style={[this.state.size]}>
            <Image style={{
          flex: 1,
          width: null,
          height: null,
          resizeMode: 'cover' }} source={require('./images/f_sho.png')}><View style={styles.container}><Text style={styles.welcome}>Fashion Show </Text></View></Image></View>
          <View style={[ this.state.size]}><Image style={{
          flex: 1,
          width: null,
          height: null,
          resizeMode: 'cover' }} source={require('./images/bob.png')}><View style={styles.container}><Text style={styles.welcome}>Battle of Bands </Text></View></Image></View>
          <View style={[ this.state.size]}><Image style={{
          flex: 1,
          width: null,
          height: null,
          resizeMode: 'cover' }} source={require('./images/dan.png')}><View style={styles.container}><Text style={styles.welcome}>Entertainment </Text></View></Image></View>
          <View style={[ this.state.size]}><Image style={{
          flex: 1,
          width: null,
          height: null,
          resizeMode: 'cover' }} source={require('./images/sport.png')}><View style={styles.container}><Text style={styles.welcome}>Sports </Text></View></Image></View>
          <View style={[ this.state.size]}><Image style={{
          flex: 1,
          width: null,
          height: null,
          resizeMode: 'cover' }} source={require('./images/art.png')}><View style={styles.container}><Text style={styles.welcome}>Arts </Text></View></Image></View>
          <View style={[ this.state.size]}><Image style={{
          flex: 1,
          width: null,
          height: null,
          resizeMode: 'cover' }} source={require('./images/game.png')}><View style={styles.container}><Text style={styles.welcome}>Gaming </Text></View></Image></View>
          <View style={[ this.state.size]}><Image style={{
          flex: 1,
          width: null,
          height: null,
          resizeMode: 'cover' }} source={require('./images/busi.png')}><View style={styles.container}><Text style={styles.welcome}>Business </Text></View></Image></View>
          <View style={[ this.state.size]}><Image style={{
          flex: 1,
          width: null,
          height: null,
          resizeMode: 'cover' }} source={require('./images/lit.png')}><View style={styles.container}><Text style={styles.welcome}>Literary </Text></View></Image></View>
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
    backgroundColor: 'rgba(0,0,0,0)',
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
