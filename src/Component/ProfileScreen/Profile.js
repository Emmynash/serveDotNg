import React from "react";
import { AppRegistry, Alert, TouchableOpacity } from "react-native";

import {
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Button,
  H1,
  Accordion
} from "native-base";
import { DrawerActions } from "react-navigation-drawer";

import { StackNavigator } from "react-navigation";
import EditScreenOne from "./EditScreenOne.js";
import EditScreenTwo from "./EditScreenTwo.js";

export default class Profile extends React.Component {
  componentDidMount() {
    if (this.props.navigation.state.params !== undefined) {
      Alert.alert("USER found", this.props.navigation.state.params.name);
    }
  }
  render() {
    const dataArray = [
      { title: "About Serve", content: "Lorem ipsum dolor sit amet" },
      { title: "Eligebility Criteria", content: "Lorem ipsum dolor sit amet" },
      { title: "Repayment Plans", content: "Lorem ipsum dolor sit amet" },
      { title: "Late Repayment", content: "Lorem ipsum dolor sit amet" },
      { title: "Loan Offers", content: "Lorem ipsum dolor sit amet" }
    ];
    return (
      <Container>
        <Content padder>
        <Accordion dataArray={dataArray} expanded={0}/>
          <Card>
            <CardItem>
              <Icon active name="paper-plane" />
              <Text>Show User profiles here</Text>
              <Right>
                <Icon name="close" />
              </Right>
            </CardItem>
          </Card>
          <Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("EditScreenOne")}
          >
            <Text>Goto EditScreen One</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
Profile.navigationOptions = ({ navigation }) => {
  return {
    header: (
      <Header  style={{ backgroundColor: "#76D735", marginTop: 20 }} >
        <Left>
          <TouchableOpacity transparent  onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Icon style={{ color: "#FFF"}}  name="menu" />
          </TouchableOpacity>
        </Left>
        <Body>
          <Title style={{ color: "#000", width: 200}}>How It Works</Title>
        </Body>
        <Right />
      </Header>
    )
  };
};
