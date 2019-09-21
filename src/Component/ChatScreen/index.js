import React, { Component } from "react";
import LucyChat from "./LucyChat";
import JadeChat from "./JadeChat";
import NineChat from "./NineChat";
import { createBottomTabNavigator } from "react-navigation-tabs";
// import { TabNavigator } from 'react-navigation"'
import {
  Button,
  Text,
  Icon,
  Item,
  Footer,
  FooterTab,
  Label
} from "native-base";
export default (MainScreenNavigator = createBottomTabNavigator(
  {
    LucyChat: { screen: props => <LucyChat {...props} /> },
    JadeChat: { screen: props => <JadeChat {...props} /> },
    NineChat: { screen: props => <NineChat {...props} /> }
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              // active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("LucyChat")}
            >
              <Icon name="bowtie" />
              <Text>Lucy</Text>
            </Button>
            <Button
              vertical
              // active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("JadeChat")}
            >
              <Icon name="briefcase" />
              <Text>Nine</Text>
            </Button>
            <Button
              vertical
              // active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("NineChat")}
            >
              <Icon name="headset" />
              <Text>Jade</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
));
