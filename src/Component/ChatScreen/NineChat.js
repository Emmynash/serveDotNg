import React from "react";
import { AppRegistry, View, StatusBar } from "react-native";
import { NavigationActions } from "react-navigation";
import {
  Button,
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
  Input,
  InputGroup,
  Item,
  Tab,
  Tabs,
  Footer,
  FooterTab,
  Label
} from "native-base";

export default class NineChat extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header>  style={{ backgroundColor: "white", marginTop: 20 }} 
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon style={{ color: "green"}}  name="menu" />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: "black"}}>Jade Chat</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Item floatingLabel style={{ marginTop: 20 }}>
            <Label>Jade Chat</Label>
            <Input />
          </Item>
          <Button
            rounded
            info
            style={{ marginTop: 20, alignSelf: "center" }}
            onPress={() => navigate("ProfileScreen", { name: "Nine" })}
          >
            <Text>Goto Jade Profile</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
