// SignUp.tsx

import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Switch,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
// import {loginRequest} from '../redux/actions/authActions'; // Import your Redux action
import {RootState} from '../redux/store';
import {useNavigation} from '@react-navigation/native';

import {loginRequest} from '../reduxMcd/action';

//@ts-ignore
const SignIn = () => {
  const dispatch = useDispatch();

  const isLogin = useSelector((state: any) => state.login.isLogin);
  const users = useSelector((state: any) => state.signUp.users);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    let userCheck = false;

    console.log('all users');
    console.log(users);
    //@ts-ignore
    const user = users.find(user => user.email === email);
    console.log('user details');
    console.log(user);

    //@ts-ignore
    const emailExists = users.some(user => user.email === email);
    if (!emailExists) {
      Alert.alert('Validation Error', 'Email not found.');
      userCheck = false;
      //@ts-ignore
      if (user.password !== password) {
        Alert.alert('Validation Error', 'Incorrect password.');
        userCheck = false;
      } else {
        userCheck = true;
      }
    } else {
      userCheck = true;
    }

    if (userCheck) {
      dispatch(loginRequest(user));
    } else {
      Alert.alert('Check Email and password');
    }
  };

  const navigation = useNavigation();

  // const handleSignIn = () => {
  //   if (!validateForm()) {
  //     return;
  //   }

  //   //@ts-ignore
  //   // navigation.navigate('AppNavigator');
  // };

  const handleSignUpPress = () => {
    //@ts-ignore
    navigation.navigate('SignUp');
  };

  useEffect(() => {
    console.log(isLogin);

    console.log("isLogin : ",isLogin);
    

    if (isLogin) {
      //@ts-ignore
      navigation.navigate('AppNavigator');
    }
  }, [isLogin]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={require('../assets/mcdlogo.png')} style={styles.logo} />
        <Text style={styles.heading}>Welcome to McDonald's</Text>
        <Text style={styles.subheading}>Login to continue</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.fieldName}>Email</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.fieldName}>Password</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your password"
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={{color: 'white', fontSize: 16, marginTop: 7}}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', paddingBottom: 20}}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity>
            <Text style={{color: '#DA291C'}} onPress={handleSignUpPress}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#DA291C',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 250,
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 50,
  },
  heading: {
    fontSize: 18,
    color: 'black',
    marginTop: 10,
    paddingTop: 30,
  },
  subheading: {
    fontSize: 18,
    color: 'black',
    marginTop: 2,
    paddingBottom: 30,
  },
  inputContainer: {
    marginTop: 10,
  },
  fieldName: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 5,
  },
  textInput: {
    backgroundColor: 'transparent',
    width: 320,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingLeft: 10,
  },
  button: {
    marginTop: 60,
    backgroundColor: '#DA291C',
    height: 40,
    width: 260,
    alignItems: 'center',
    borderRadius: 18,
  },
});

export default SignIn;
