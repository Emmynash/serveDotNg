import React from "react";
import { AppRegistry, Image, StatusBar, ImageBackground } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon,
  View
} from "native-base";
const routes = ["Loan", "Chat", "HowItWorks"];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container> 
        <Content>
          <View
           style={{
            height: 120,
            width: "100%",
            alignSelf: "stretch",
            position: "absolute",
            backgroundColor: "#000"
          }}>
            <Image
              square
              style={{
                height: 80,
                width: 150,
                position: "absolute",
                alignSelf: "center",
                top: 20
              }}
              source={require('../../../assets/logos/serve_logo_transparent.png')}
            />
          </View>
          
          <List
            dataArray={routes}
            contentContainerStyle={{ marginTop: 120 }}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}
                >
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
