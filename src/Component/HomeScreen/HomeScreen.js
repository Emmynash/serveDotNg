import React from "react";
import { StatusBar, TouchableOpacity, View, StyleSheet } from "react-native";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Form, 
  Item, 
  Input,
  Label
} from "native-base";
import DatePicker from 'react-native-datepicker'

export default class HomeScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      date:"2019-01-01",
      date_valid: true,
      user: "",
      user_valid: true,
      employer: "",
      employer_valid: true,
      bvn: "",
      bvn_valid: true,
    }
  }

  validateUser(user){
    if(user == ""){
      return this.setState({user_valid: false})
    }
    return user;
  }

  validateBvn(bvn){
    if(bvn.length !== 11){
      return this.setState({bvn_valid: false})
    }
    return bvn;
  }

  validateEmployer(employer){
    if(employer == ""){
      return this.setState({employer_valid: false})
    }
    return employer;
  }

  validateDate(date){
    if(date == ""){
      return this.setState({validateDate: false})
    }
    return date;
  }
  render() {
    const {date_valid, user, user_valid, employer_valid, employer, bvn, bvn_valid} = this.state;
    return (
      <Container>
        <Header style={{ backgroundColor: "#76D735", marginTop: 20 }} >
          <Left>
            <Button
              transparent
            >
              <TouchableOpacity
                 onPress={() => this.props.navigation.navigate("DrawerToggle")}>
                 <Icon style={{ color: "#FFF"}} name="menu" />
              </TouchableOpacity>
            </Button>
          </Left>
          <Body>
            <Title style={styles.headBody}>Welcome to Serve</Title>
          </Body>
          <Right />
        </Header>
            <Header style={styles.secHeader}>
                <Left>
                    <View style={styles.buttonCircle}><Icon style={{marginLeft: 0, color: "#76D735", size: 50}} name="md-paper-plane" /></View>
                </Left>
                <Right style={{marginLeft: -40}}>
                  <Text style={{color: "#FFF", textAlign: "left"}}>Before we offer you Loan, we need a few pieces of information</Text>
                </Right>  
            </Header>
        <Content padder>
        <Form>
            <Item stackedLabel>
              <Label>Full Legal Name</Label>
              <Input 
                    leftIcon={
                      <Icon
                          name="user-0"
                          style={{color: "#76D735", size: 30}}
                          size={25}
                      />
                  }
                  containerStyle={{ marginVertical: 15 }}
                  onChangeText={user => this.setState({ user })}
                  value={user}
                  inputStyle={{ marginLeft: 10, color: 'white' }}
                  keyboardAppearance="light"
                  autoFocus={false}
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="phone-pad"
                  returnKeyType="next"
                  ref={input => (this.userInput = input)}
                  onSubmitEditing={() => {
                      this.setState({ user_valid: this.validateUser(user) });
                      this.bvnInput.focus();
                  }}
                  blurOnSubmit={false}
                  errorStyle={{ textAlign: 'center', fontSize: 12 }}
                  errorMessage={
                    user_valid ? null : "Full Legal Names is required!"
                  }
              />
            </Item>
            <Item stackedLabel>
              <Label>Bank Verification Number</Label>
              <Input 
                  leftIcon={
                    <Icon
                        name="lock"
                        style={{color: "#76D735", size: 30}}
                        size={25}
                    />
                }
                containerStyle={{ marginVertical: 15 }}
                onChangeText={bvn => this.setState({ bvn })}
                value={bvn}
                inputStyle={{ marginLeft: 10, color: 'white' }}
                keyboardAppearance="light"
                autoFocus={false}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="phone-pad"
                returnKeyType="next"
                ref={input => (this.bvnInput = input)}
                onSubmitEditing={() => {
                    this.setState({ bvn_valid: this.validateBvn(bvn) });
                    this.dateInput.focus();
                }}
                blurOnSubmit={false}
                errorStyle={{ textAlign: 'center', fontSize: 12 }}
                errorMessage={
                  bvn_valid ? null : "BVN is required!"
                }
                  />
            </Item>
            <Item stackedLabel last>
              <Label>Date of Birth</Label>
              <DatePicker
                style={{width: 200}}
                date={this.state.date}
                mode="date"
                format="YYYY-MM-DD"
                minDate="1930-01-01"
                maxDate="1999-01-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36
                  }
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => {this.setState({date: date})}}
                ref={input => (this.dateInput = input)}
                onSubmitEditing={() => {
                  this.setState({ date_valid: this.validateDate(date) });
                  this.employerInput.focus();
                }}
                errorStyle={{ textAlign: 'center', fontSize: 12 }}
                  errorMessage={
                    date_valid ? null : "Date of Birth is required!"
                  }
              />
            </Item>
            <Item stackedLabel>
              <Label>Employer</Label>
              <Input 
                    leftIcon={
                      <Icon
                          name="home"
                          style={{color: "#76D735", size: 30}}
                          size={25}
                      />
                  }
                  containerStyle={{ marginVertical: 15 }}
                  onChangeText={employer => this.setState({ employer })}
                  value={employer}
                  inputStyle={{ marginLeft: 10, color: 'white' }}
                  keyboardAppearance="light"
                  autoFocus={false}
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="ascii-capable"
                  returnKeyType="next"
                  ref={input => (this.employerInput = input)}
                  onSubmitEditing={() => {
                      this.setState({ employer_valid: this.validateEmployer(employer) });
                  }}
                  blurOnSubmit={false}
                  errorStyle={{ textAlign: 'center', fontSize: 12 }}
                  errorMessage={
                    employer_valid ? null : "Employer's name is required!"
                  }
              />
            </Item>
            <View style={styles.footText}>
                <Text style={{textAlign: "center"}}>By hitting Continue you agree to serve's <Text style={{fontWeight: 'bold'}}>terms of use and loan account aggreement</Text></Text>
            </View>
            <Button style={{borderColor: "#76D735" }} bordered block> 
             <Text style={{color: "#305732"}}>continue</Text>
            </Button>
        </Form>
         {/* <Button
            full
            rounded
            dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Chat")}
          >
            <Text>Chat With People</Text>
          </Button>
          <Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("ProfileScreen")}
          >
            <Text>Goto Profiles</Text>
          </Button>*/}
        </Content> 
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  secHeader: {
    backgroundColor: "#305732",
    height: 100
  },
  headBody: {
    width: 200,
    color: "#000"
  },
  buttonCircle: {
    width: 50,
    height: 50,
    backgroundColor: '#919191',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  footText: {
    marginTop: 100,
    textAlign: "center",
    fontSize: 12
  }
})
