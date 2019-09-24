import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import MainScreenNavigator from "../ChatScreen";
import ProfileScreen from "../ProfileScreen";
import SideBar from "../SideBar/SideBar";
import SignUpForm from '../Register/signUpForm';
import SignInForm from '../Login/signInForm';
import IntroSlider from '../../intro_slider';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

const HomeScreenRouter = createAppContainer(
    createDrawerNavigator(
    {
      slider: {screen: IntroSlider},
      signUp: {screen: SignUpForm},
      signIn: {screen: SignInForm},
      Loan: { screen: HomeScreen },
      Chat: { screen: MainScreenNavigator },
      HowItWorks: { screen: ProfileScreen }
    },
    {
      contentComponent: props => <SideBar {...props} />
    },
    {
    initialRouteName: 'slider',
  }
  )
);
export default HomeScreenRouter;
