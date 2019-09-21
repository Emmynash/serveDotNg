import React from "react";
import { AppRegistry, Alert } from "react-native";

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
  H1
} from "native-base";

export default class EditScreenOne extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header  style={{ backgroundColor: "white", marginTop: 20 }} >
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon style={{ color: "green"}}  name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title style={{ color: "black" }}>EditScreenTwo</Title>
        </Body>
        <Right />
      </Header>
    )
  });
  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Icon active name="paper-plane" />
              <Text>Edit Screen 2</Text>
              <Right>
                <Icon name="close" />
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
