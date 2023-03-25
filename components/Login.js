import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, email, setEmail, password, setPassword , View, Image, ImageBackground } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


import CreateAccount from './CreateAccount';
import StackBusInfo from './GetBusInfo';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
    return (
        <ImageBackground
        style={styles.backgroundImage}
        source={require('../assets/background.png')}>
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo.png')} />
            <Text style={styles.welcome_Note}> WELCOME</Text>
            <Text style={styles.center_text}> to</Text>
            <Text style={styles.tag_line}> UOBS GPS</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Details')}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <View>
              <Text style={styles.forget_password}> Forget Password</Text>
            </View>
    
            <View style={styles.button_create_account}> 
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Create_Account')}>
              <Text style={styles.buttonText}>Create an Account</Text>
            </TouchableOpacity>
            </View>
         
        </View>
        </ImageBackground>
    );
}

function Login() {
    return (
        <Stack.Navigator
        screenOptions={{
        headerStyle: {
        backgroundColor: 'transparent' }}}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={StackBusInfo} />
            <Stack.Screen name="Create_Account" component={CreateAccount} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({ 
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      width: '100%',
      height: '100%'
    },
    logo: {
      width: 80,
      height: 100
  
    },
    welcome_Note: {
      paddingBottom: 0,
      fontWeight: 'bold',
      fontSize: 30,
      color: "orange",
      color: '#1e90ff'
  
    },
    tag_line: {
      paddingBottom: 50,
      fontSize: 20,
      color: '#808080'
    },
    center_text: {
      padding: 10,
      fontSize: 20,
      color: '#808080'
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: '#f2f2f2',
    },
    input: {
      width: '80%',
      height: 50,
      padding: 10,
      backgroundColor: '#fff',
      borderRadius: 5,
      marginBottom: 10,
    },
    button: {
      width: '80%',
      height: 50,
      backgroundColor: '#1e90ff',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
    },
    button_create_account:{
      paddingTop: 30,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    forget_password: {
      paddingTop: 10,
      color: '#1e90ff'
    }
  });


export default Login;
