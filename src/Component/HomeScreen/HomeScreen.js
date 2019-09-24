import React from "react";
import { StatusBar, TouchableOpacity, View, StyleSheet, Dimensions } from "react-native";
import {
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Right,
  Form, 
  Item, 
  Label
} from "native-base";
import DatePicker from 'react-native-datepicker'
import { Input, Button, Icon} from 'react-native-elements';
import { DrawerActions } from "react-navigation-drawer";

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class HomeScreen extends React.Component { 
  constructor(props){
    super(props)
    this.state = {
      date:"1999-01-01",
      date_valid: true,
      user: "",
      user_valid: true,
      employer: "",
      employer_valid: true,
      bvn: "",
      bvn_valid: true,
      showLoading: false
    }

    this.validateUser = this.validateUser.bind(this);
    this.validateBvn = this.validateBvn.bind(this);
    this.validateEmployer = this.validateEmployer.bind(this);
    this.validateDate = this.validateDate.bind(this);
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

  submitSupplicantCredentials = async () => {
    const {user, date, bvn, employer, showLoading} = this.state;

}
  render() {
    const {date_valid, date, user, user_valid, employer_valid, employer, bvn, bvn_valid, showLoading} = this.state;
    return (
      <Container>
        <Header style={{ backgroundColor: "#76D735", marginTop: 20 }} >
          <Left>
            {/*<Button
              transparent
            >*/} 
              <TouchableOpacity
                 onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
                 <Icon color="#FFF" size={25} type="font-awesome" name="bars" /> 
              </TouchableOpacity>
            {/*</Button>*/}
          </Left>
          <Body>
            <Title style={styles.headBody}>Welcome to Serve</Title>
          </Body>
          <Right />
        </Header>
            <Header style={styles.secHeader}>
                <Left>
                    <View style={styles.buttonCircle}><Icon marginLeft={0} color="#76D735" size={30} type="font-awesome" name="paper-plane" /></View>
                </Left>
                <Right style={{marginLeft: -40}}>
                  <Text style={{color: "#FFF", textAlign: "left"}}>Before we offer you Loan, we need a few pieces of information</Text>
                </Right>  
            </Header>
        <Content padder> 
        <View style={styles.supplicantDet}>
            {/*<Item stackedLabel>
              <Label>Full Legal Name</Label>*/}
              <Input
                  containerStyle={{ marginVertical: 15 }}
                  onChangeText={user => this.setState({ user })}
                  value={user}
                  placeholder="Full Legal Name"
                  inputStyle={{ marginLeft: 10, color: '#000'}}
                  keyboardAppearance="light"
                  autoFocus={false}
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="ascii-capable"
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

                  rightIcon={
                    <Icon
                        name="user"
                        type="font-awesome"
                        color="#95989c"
                        size={25}
                    />
                }
                  
              />
            {/*</Item>
            <Item stackedLabel>
              <Label>Bank Verification Number</Label>*/}
              <Input 
                containerStyle={{ marginVertical: 15 }}
                onChangeText={bvn => this.setState({ bvn })}
                value={bvn}
                placeholder="Bank Verification Number"
                inputStyle={{ marginLeft: 10, color: '#000'}}
                keyboardAppearance="light"
                autoFocus={false}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="phone-pad"
                returnKeyType="next"
                ref={input => (this.bvnInput = input)}
                onSubmitEditing={() => {
                    this.setState({ bvn_valid: this.validateBvn(bvn) });
                }}
                blurOnSubmit={false}
                errorStyle={{ textAlign: 'center', fontSize: 12 }}
                errorMessage={
                  bvn_valid ? null : "BVN is required!"
                }
                rightIcon={
                  <Icon
                      name="lock"
                      type="font-awesome"
                      color="#95989c"
                      size={25}
                  />
              }
                  />
            {/*</Item>
            <Item style={{width: 200,  borderBottom: "1px solid #76D735"}} stackedLabel last>
              <Label>Date of Birth</Label>*/}
              <View style={styles.dateItems}>
                <Text style={{color: "#b0b0b0", marginBottom: 4}}>Date of Birth</Text>
              <DatePicker
                containerStyle={{ marginVertical: 15 }}
                style={{width: 200}}
                date={date}
                placeholder="Date of Birth"
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
                    marginLeft: 0,
                    height: 0, 
                    opacity: 0
                  },
                  placeholderText: {
                    fontSize: 12
                  },
                  dateInput: {
                    marginLeft: 0,
                    marginVertical: 15,
                    borderWidth: 0,
                    borderBottomWidth: 0
                  }
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => {this.setState({date: date})}}
                ref={input => (this.dateInput = input)}
                onSubmitEditing={() => {
                  this.setState({ date_valid: this.validateDate(date) });
                }}
                errorStyle={{ textAlign: 'center', fontSize: 12 }}
                  errorMessage={
                    date_valid ? null : "Date of Birth is required!"
                  }
              />
              <Icon
                        name="calendar"
                        type="font-awesome"
                        color="#95989c"
                        size={20}
                        marginBottom={7}
                        marginLeft={14}
               />
              </View>
            {/*</Item>
            <Item stackedLabel>
              <Label>Employer</Label>*/}
              <Input
                  containerStyle={{ marginVertical: 15 }}
                  onChangeText={employer => this.setState({ employer })}
                  value={employer}
                  placeholder="Employer"
                  inputStyle={{ marginLeft: 10, color: '#000'}}
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

                  rightIcon={
                    <Icon
                        name="home"
                        type="font-awesome"
                        color="#95989c"
                        size={25}
                    />
                }
              />
            {/*</Item>*/}
            <View style={styles.footText}>
                <Text style={{textAlign: "center"}}>By hitting Continue you agree to serve's <Text style={{fontWeight: 'bold'}}>terms of use and loan account aggreement</Text></Text>
            </View>
            <Button
                title="Continue"
                activeOpacity={1}
                underlayColor="transparent"
                onPress={this.submitSupplicantCredentials}
                loading={showLoading}
                loadingProps={{ size: 'small', color: '#000' }}
                disabled={!employer_valid || !user_valid || !date_valid || !bvn_valid}
                buttonStyle={{
                    height: 50,
                    width: 350,
                    backgroundColor: 'transparent',
                    borderWidth: 1,
                    borderRadius: 0,
                    marginTop: 20,
                    borderColor: "#76D735" 
                }}
                containerStyle={{ marginVertical: 10 }}
                titleStyle={{ fontWeight: 'normal', color: '#305732' }}
            />
            {/*<Button 
              style={{borderColor: "#76D735" }} 
              bordered 
              block
              disabled={!employer_valid || !user_valid || !date_valid || !bvn_valid}> 
             <Text style={{color: "#305732"}}>continue</Text>
            </Button>*/}
        </View>
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
  supplicantDet: {
    marginTop: 30,
    backgroundColor: 'transparent',
    width: 350,
    height: 500,
    marginLeft: 10,
    alignItems: "center"
  },
  footText: {
    marginTop: 70,
    textAlign: "center",
    fontSize: 12
  },
  dateItems: {
    position: "relative",
    alignItems: "flex-end",
    flexDirection: "row",
    borderBottomWidth: 1
  }
})
