import React, { useState } from 'react';
import {
  AsyncStorage,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import FormInput from '../components/FormInput';
import colors from '../constants/Colors'

export default function SignInScreen({navigation}){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'test');
    navigation.navigate('App');
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    contentContainer: {
      marginTop: 60,
    },
    button: {
      marginBottom: 30,
      marginHorizontal: 20,
      alignItems: 'center',
      backgroundColor: 'rgba(190,240,190,.95)',
      borderRadius: 3,
      color: '#000',
    },
    signUpButton: {
      marginBottom: 30,
      marginHorizontal: 20,
      alignItems: 'center',
      backgroundColor: 'rgba(255,255,255,.95)',
      borderRadius: 3,
    },
    buttonText: {
      textAlign: 'center',
      padding: 13,
      fontFamily:'cambay-bold',
      fontSize: 20,
      color: '#000'
    }
  });
  return (
    <View style={styles.container}>
      <ImageBackground 
        style={{width: '100%', height: '100%'}}
        source={require('../assets/images/business.jpg')}
      >
        <View style={styles.contentContainer}>
        <Text style={{
          color: '#9e9',
          fontSize: 80,
          marginBottom: 30,
          fontFamily:'cambay-bold',
          textAlign: 'center',
          backgroundColor: 'rgba(255,255,255,.9)',
        }}>Aegis</Text>
          <FormInput
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            label="Email"
            value={email}
            onChange={setEmail}
            autoCompleteType="email"
          />
          <FormInput
            autoCorrect={false}
            autoCapitalize="none"
            label="Password"
            value={password}
            onChange={setPassword}
            autoCompleteType="password"
            secureTextEntry
          />
          <TouchableOpacity onPress={() => _signInAsync()} >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Sign In</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => navigation.navigate('SignUp')} >
            <View style={styles.signUpButton}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}


SignInScreen.navigationOptions = {
  header: null,
};