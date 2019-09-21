import React, { Component } from "react";
import Profile from "./Profile.js";
import EditScreenOne from "./EditScreenOne";
import EditScreenTwo from "./EditScreenTwo";
import { createStackNavigator } from "react-navigation-stack";
export default (DrawNav = createStackNavigator(
  {
    Profile: { screen: Profile },
    EditScreenOne: { screen: EditScreenOne },
    EditScreenTwo: { screen: EditScreenTwo }
  },
  {
    initialRouteName: "Profile"
  }
));
