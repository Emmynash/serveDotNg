import React, { Component } from "react";
import { View } from "react-native";
import { Container, Content, Picker, Button, Text } from "native-base";
import { Scene, Router, Actions, Reducer, ActionConst, Overlay, Tabs, Modal, Drawer, Stack, Lightbox } from 'react-native-router-flux';
import { AppLoading } from "expo";
import * as Font from 'expo-font'

import HomeScreen from "./src/Component/HomeScreen";
import Launcher from './src/Launcher';
import SignUpForm from './src/Component/Register/signUpForm';
import SignInForm from './src/Component/Login/signInForm';
import IntrosSlider from './src/intro_slider';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf"),
      OpenSansLight: require('./assets/OpenSans-Light.ttf')
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return <HomeScreen />
    {/*(<Router>
             <Stack key="root">
              <Scene key="IntrosSlider" component={IntrosSlider} title="" hideNavBar/> 
              <Scene key="login" component={SignInForm} title="Login" />
              <Scene key="register" component={SignUpForm} title="Register" />
              <Scene key="home" component={HomeScreen} hideNavBar/>
            </Stack>
    </Router>);*/}
  
  }
}
