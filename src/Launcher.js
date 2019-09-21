import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';


class Launcher extends Component {
    

    // componentDidMount() {
    //     SplashScreen.hide();
    // }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{ width: 250, height: 150, marginTop: 10 }}
                    source={require('../assets/logos/serve_logo_transparent.png')}
                /> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Launcher;