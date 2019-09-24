import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    Dimensions,
} from 'react-native';
import { Input, Button, Icon, Card } from 'react-native-elements';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

import KeyboardShift from '../../keyboardShift';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const BG_IMAGE = require('../../../assets/logos/slider1.jpg');

export default class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            email: "",
            organ: "",           
            phone: '',
            phone_valid: true,
            email_valid: true,
            username_valid: true,
            organ_valid: true,
            login_failed: false,
            showLoading: false,
        };
    }

    validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return re.test(email);
    }

    validatePhone(phone) {
        if (phone.length !== 11) {
            return this.setState({ phone_valid: false });
        }

        return phone;
    }

    
   submitSignupCredentials = async () => {
       const { showLoading, email, phone } = this.state;
       const url = 'https://us-central1-serve-ng.cloudfunctions.net/';

      try {
         await axios.post(`${url}createUser`, { email, phone });
         await axios.post(`${url}oneTimePassword`, { email, phone });
          console.log('Account Created!');
          return this.props.navigation.navigate("signIn");
      } catch (error) {
          console.log(error)
          alert(`signup error: email or phone number already exist! `);
      }
      

       this.setState({
           showLoading: !showLoading,
       });
   }

    render() {
        const { email, phone, email_valid, organ_valid, username_valid, phone_valid, showLoading, } = this.state;

        return (
            <KeyboardShift>
            {() => (
                    <View style={styles.container}>
                        <ImageBackground  style={styles.bgImage}>
                            <View style={styles.signUpView}>
                                <View style={styles.signUpTitle}>    
                                    <Image
                                        style={{  width: 250, height: 150, marginBottom: 150 }}
                                        source={require('../../../assets/logos/serve_logo_transparent.png')}
                                    /> 
                                </View>
                                <View style={styles.signUpInput}>
                                    <Input
                                        leftIcon={
                                            <Icon
                                                name="envelope-square"
                                                type="font-awesome"
                                                color="#76D735"
                                                size={25}
                                            />
                                        }
                                        containerStyle={{ marginVertical: 15 }}
                                        onChangeText={email => this.setState({ email })}
                                        value={email}
                                        inputStyle={{ marginLeft: 10, color: 'white' }}
                                        keyboardAppearance="light"
                                        placeholder="Email"
                                        autoFocus={false}
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        keyboardType="email-address"
                                        returnKeyType="next"
                                        ref={input => (this.emailInput = input)}
                                        onSubmitEditing={() => {
                                            this.setState({ email_valid: this.validateEmail(email) });
                                            this.phoneInput.focus();
                                        }}
                                        blurOnSubmit={false}
                                        placeholderTextColor="white"
                                        errorStyle={{ textAlign: 'center', fontSize: 12 }}
                                        errorMessage={
                                            email_valid ? null : 'Please enter a valid email address'
                                        }
                                    />
                                    <Input
                                        leftIcon={
                                            <Icon
                                                name="phone"
                                                type="font-awesome"
                                                color="rgba(118, 215, 53, 1)"
                                                size={25}
                                            />
                                        }
                                        containerStyle={{ marginVertical: 20 }}
                                        onChangeText={phone => this.setState({ phone })}
                                        value={phone}
                                        inputStyle={{ marginLeft: 10, color: 'white' }}
                                        secureTextEntry={false}
                                        keyboardAppearance="light"
                                        placeholder="Phone"
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        keyboardType="phone-pad"
                                        returnKeyType="done"
                                        ref={input => (this.phoneInput = input)}
                                        blurOnSubmit={true}
                                        placeholderTextColor="white"
                                        onSubmitEditing={() => {
                                            this.setState({ phone_valid: this.validatePhone(phone) });
                                        }}
                                        errorMessage={
                                            phone_valid ? null : 'Please enter a valid phone number'
                                        }
                                    />
                                </View>
                                <Button
                                    title="SIGN UP"
                                    activeOpacity={1}
                                    underlayColor="transparent"
                                    onPress={this.submitSignupCredentials}
                                    loading={showLoading}
                                    loadingProps={{ size: 'small', color: 'white' }}
                                    disabled={!email_valid || !phone_valid || !username_valid || !organ_valid}
                                    buttonStyle={{
                                        height: 50,
                                        width: 250,
                                        backgroundColor: 'transparent',
                                        borderWidth: 2,
                                        borderColor: 'white',
                                        borderRadius: 30,
                                        marginTop: 25
                                    }}
                                    containerStyle={{ marginVertical: 10 }}
                                    titleStyle={{ fontWeight: 'bold', color: 'white' }}
                                />
                                <View style={styles.footerView}>
                                    <Text style={{ color: 'grey' }}>Already have an Account?</Text>
                                    <Button
                                        title="Log in"
                                        type="clear"
                                        activeOpacity={0.5}
                                        titleStyle={{ color: 'white', fontSize: 15 }}
                                        containerStyle={{ marginTop: -10 }}
                                        onPress={() => this.props.navigation.navigate("signIn")}
                                    />
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
            )}
            </KeyboardShift>            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
    },
    bgImage: {
        flex: 1,
        top: 0,
        left: 0,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    },
    signUpView: {
        marginTop: 30,
        backgroundColor: 'transparent',
        width: 250,
        height: 400,
    },
    signUpTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signUpInput: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerView: {
        marginTop: 0,
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
});