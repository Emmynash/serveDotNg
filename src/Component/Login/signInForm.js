import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    Dimensions,
} from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

import KeyboardShift from '../../keyboardShift';
import HomeScreen from "../HomeScreen";

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const BG_IMAGE = require('../../../assets/logos/slider1.jpg');

export default class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            code: '',
            code_valid: true,
            phone: '',
            phone_valid: true,
            login_failed: false,
            showLoading: false,
        };
    }

    validateCode(code) {
        if(code.length !== 4){
            return this.setState({code_valid: false});
        }

        return code;
    }

    validatePhone(phone) {
        if (phone.length !== 11) {
            return this.setState({ phone_valid: false });
        }

        return phone;
    }


    submitSigninCredentials = async () => {
        const { showLoading, code, phone } = this.state;
        const url = 'https://us-central1-serve-ng.cloudfunctions.net/';

        try {
            await axios.post(`${url}verifyPassword`, { code, phone })
            console.log('Sigin Successfully!')
            return this.props.navigation.navigate("Loan")
            ;
        } catch (error) {
            console.log(error)
            alert(`signin error: code or phone number is incorrect! `);
        }


        this.setState({
            showLoading: !showLoading,
        });
    }

    render() {
        const { code, phone, code_valid, phone_valid, showLoading } = this.state;

        return (
            <KeyboardShift>
                {() => (
                    <View style={styles.container}>
                        <ImageBackground  style={styles.bgImage}>
                            <View style={styles.loginView}>
                                <View style={styles.loginTitle}>
                                    <Image
                                        style={{ width: 250, height: 150, marginBottom: 150 }}
                                        source={require('../../../assets/logos/serve_logo_transparent.png')}
                                    /> 
                                </View>
                                <View style={styles.loginInput}>
                                    <Input
                                        leftIcon={
                                            <Icon
                                                name="arrow-circle-right"
                                                type="font-awesome"
                                                color="#76D735"
                                                size={25}
                                            />
                                        }
                                        containerStyle={{ marginVertical: 15 }}
                                        onChangeText={code => this.setState({ code })}
                                        value={code}
                                        inputStyle={{ marginLeft: 10, color: 'white' }}
                                        keyboardAppearance="light"
                                        placeholder="Code"
                                        autoFocus={false}
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        keyboardType="number-pad"
                                        returnKeyType="next"
                                        ref={input => (this.codeInput = input)}
                                        onSubmitEditing={() => {
                                            this.setState({ code_valid: this.validateCode(code) });
                                            this.phoneInput.focus();
                                        }}
                                        blurOnSubmit={false}
                                        placeholderTextColor="white"
                                        errorStyle={{ textAlign: 'center', fontSize: 12 }}
                                        errorMessage={
                                            code_valid ? null : 'Please enter a valid code'
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
                                    title="SIGN IN"
                                    activeOpacity={1}
                                    underlayColor="transparent"
                                    onPress={this.submitSigninCredentials}
                                    loading={showLoading}
                                    loadingProps={{ size: 'small', color: 'white' }}
                                    disabled={!code_valid || !phone_valid}
                                    buttonStyle={{
                                        height: 50,
                                        width: 250,
                                        backgroundColor: 'transparent',
                                        borderWidth: 2,
                                        borderColor: 'white',
                                        borderRadius: 30,
                                    }}
                                    containerStyle={{ marginVertical: 10 }}
                                    titleStyle={{ fontWeight: 'bold', color: 'white' }}
                                />
                                <View style={styles.footerView}>
                                    <Text style={{ color: 'grey' }}>New here?</Text>
                                    <Button
                                        title="Create an Account"
                                        type="clear"
                                        activeOpacity={0.5}
                                        titleStyle={{ color: 'white', fontSize: 15 }}
                                        containerStyle={{ marginTop: -10 }}
                                        onPress={() => Athis.props.navigation.navigate("signUp")}
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
    loginView: {
        marginTop: 30,
        backgroundColor: 'transparent',
        width: 250,
        height: 400,
    },
    loginTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    travelText: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'monospace',
    },
    plusText: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'normal',
    },
    loginInput: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerView: {
        marginTop: 20,
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
});