import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, Text } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 320,
    height: 320,
  },
  text: {
    color: "#000",
    fontFamily: ""
  }
}); 

const slides = [
    {
        key: 'intro_1',
        title: <Text style={{marginBottom: -200, height: 300, color: "#000",fontFamily: ""}}>Serve Your Needs!</Text>,
        text: <Text style={styles.text}>Its time to go shoping with 0 cash, and come back happy</Text>,
        image: require('../assets/slider/secure.png'),
        backgroundColor: '#FFF',
    },
    {
        key: 'intro_2',
        title: <Text style={styles.text}>Low Interest Rate</Text>,
        text: <Text style={styles.text}>Access loans with as low as 8.5% monthly interest rate</Text>,
        image: require('../assets/slider/interest.png'),
        backgroundColor: '#FFF',
    },
    {
        key: 'intro_3',
        title: <Text style={styles.text}>Secure Lending Platform</Text>,
        text: <Text style={styles.text}>Borrow with confidence and repay with ease</Text>,
        image: require('../assets/slider/credit.png'),
        backgroundColor: '#FFF',
    }
];

export default class IntroSlider extends React.Component {
  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="md-arrow-round-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
        />
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="md-checkmark"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
          onPress={() => this.props.navigation.navigate("signUp")}
        />
      </View>
    );
  };
  render() {
    return (
      <AppIntroSlider
        style={{marginTop: 20}}
        slides={slides}
        renderDoneButton={this._renderDoneButton}
        renderNextButton={this._renderNextButton}
      />
    );
  }
}