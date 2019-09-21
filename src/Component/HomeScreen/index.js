import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import MainScreenNavigator from "../ChatScreen";
import ProfileScreen from "../ProfileScreen";
import SideBar from "../SideBar/SideBar";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

const HomeScreenRouter = createAppContainer(
    createDrawerNavigator(
    {
      Home: { screen: HomeScreen },
      Chat: { screen: MainScreenNavigator },
      ProfileScreen: { screen: ProfileScreen }
    },
    {
      contentComponent: props => <SideBar {...props} />
    }
  )
);
export default HomeScreenRouter;
