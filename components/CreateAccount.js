import { Text, View, Image, ImageBackground, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { setEmail, email, password, setPassword, CheckBox } from "react-native";
import { Alert } from 'react-native';



const SucessAlert = () => {
  Alert.alert(
    'Button Pressed',
    'You have pressed the button!',
    [
      {
        text: 'OK',
        onPress: () => console.log('OK pressed'),
      },
    ],
    { cancelable: false }
  );
};


export default function CreateAccount() {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../assets/background.png')}>
      <View style={styles.container}>
        <Text style={styles.welcome_Note}> SIGN UP</Text>

        <Text style={styles.LableText}> Name* </Text>
        <TextInput
          style={styles.input}
          placeholder="Muhammad Ilyas"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.LableText}> Email* </Text>
        <TextInput
          style={styles.input}
          placeholder="ilyas@gmail.com"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.LableText}>Registration Number* </Text>
        <TextInput
          style={styles.input}
          placeholder="2019-uobs-203"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.LableText}> Set Password* </Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <View style={styles.button_create_account}>
          <TouchableOpacity style={styles.button} onPress={SucessAlert}>
            <Text style={styles.buttonText}>Create an Account</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.forget_password}> Already Have an Account</Text>
        </View>

      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%'
  },
  welcome_Note: {
    paddingBottom: 0,
    fontWeight: 'bold',
    fontSize: 30,
    color: "orange",
    color: '#1e90ff'

  },
  LableText: {
    width: '80%',
    paddingBottom: 8,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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