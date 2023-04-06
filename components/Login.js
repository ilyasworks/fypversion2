import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, email, Alert, setEmail, password, setPassword, View, Image, ImageBackground } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Cookies from 'universal-cookie';
import { useCookies } from 'react-cookie'



import CreateAccount from './CreateAccount';
import StackBusInfo from './GetBusInfo';
import Location from './Location';

const SucessAlert = () => {
  Alert.alert(
    'Sorry!',
    'you enterd invalid email/password',
    [
      {
        text: 'OK',
        onPress: () => console.log('OK pressed'),
      },
    ],
    { cancelable: false }
  );
};

const Stack = createStackNavigator();
// async function  checkVech() {

//   await fetch('http://192.168.18.116:1337/api/vehicles')
//     .then((data) => data.json())
//     .then((res) => {
//       console.log(res.data[0].attributes.name)
//       return res
//     })
//     .catch((err) => console.error("error ye h bai ", {err }))
// }
function HomeScreen({ navigation }) {
  const [busList, setBus] = useState([])
  const [userCreds, setUserCreds] = useState([])
  const [jwToken, setJwtoken] = useState('')

  const [cookie, setCookie, removeCookie] = useCookies()

  const cookies = new Cookies();

  const logout = () => {
    cookies.remove()



    console.log("Successfully logged out")
  }

  const login = async () => {


    const userCredentials = JSON.stringify(userCreds)
    let loginResponse = await fetch('http://192.168.18.116:1337/api/auth/local', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: userCredentials
    })
    .catch((err) => console.error("error ye h bai ", { err }))
    let respFormat = await loginResponse.json()
    console.log(respFormat.jwt)
    var date = new Date();
    date.setTime(date.getTime() + (5 * 1000));
    console.log("DAte", { date })
    cookies.set('jwt', respFormat.jwt, { path: '/', maxAge: date });
    if (respFormat.jwt) {
      navigation.navigate('Details')
    } else {
      SucessAlert()
    }
    let cookres = setCookie('jwt', respFormat.jwt)
    console.log({ cookres })
    setJwtoken(cookies.get('jwt'));
  }



  console.log("cookie from state ", jwToken)
  const handleChange = (event) => {
    console.log("writing")
    console.log(event.target.name)
    const name = event.target.name;
    const value = event.target.value;

  }
  function getEmail(tex) {
    setUserCreds({ ...userCreds, identifier: tex })

  }
  function getPassword(pswd) {
    setUserCreds({ ...userCreds, password: pswd })

  }

  console.log("token : ", jwToken);


  return (
    <>
      {/* {jwToken ?
        
        
       ( <View>
          <Text>Hello You are already logged In!!</Text>
          <TouchableOpacity style={styles.button}  onPress={logout}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
          <StackBusInfo  />
        </View> ) */}

      <ImageBackground
        style={styles.backgroundImage}
        source={require('../assets/background.png')}>
        <View style={styles.container}>
          <Image style={styles.logo} source={require('../assets/bus.png')} />
          <Text style={styles.welcome_Note}> WELCOME</Text>
          <Text style={styles.center_text}> to</Text>
          <Text style={styles.tag_line}> UOBS GPS</Text>
          <TextInput
            name="email"
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(txt) => getEmail(txt)}
          />
          <TextInput
            style={styles.input}
            name="password"
            placeholder="Password"
            value={password}
            secureTextEntry
            onChangeText={(txt) => getPassword(txt)}

          />
          {/* navigation.navigate('Details') */}
          <TouchableOpacity style={styles.button} onPress={login}>
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
    </>
  )
}

function Login() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'transparent'
        }
      }}>
      <Stack.Screen name="Homescreen" component={HomeScreen} />
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
    height: 100,
    borderRadius:40

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
  button_create_account: {
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
