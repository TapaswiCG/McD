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
// import {signUpRequest} from '../redux/actions/authActions'; // Import your Redux action
import {RootState} from '../redux/store';
import { useNavigation } from '@react-navigation/native';
import { signUpRequest } from '../reduxMcd/action';

//@ts-ignore
const SignUp = () => {
  const dispatch = useDispatch();
  // const error = useSelector((state: RootState) => state.auth.error);
  // const error = useSelector((state: RootState) => state.auth.error);
  const users = useSelector((state:any) => state.signUp.users);
  const isLogin = useSelector((state:any) => state.login.isLogin)

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('male');

  const validateForm = () => {
    if (name.length > 20) {
      Alert.alert(
        'Validation Error',
        'Name should be less than 20 characters.',
      );
      return false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      Alert.alert('Validation Error', 'Phone number should be 10 digits long.');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Validation Error', 'Invalid email format.');
      return false;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      Alert.alert(
        'Validation Error',
        'Password should have at least 1 capital alphabet, 1 small alphabet, and 1 number with a minimum length of 8 characters.',
      );
      return false;
    }

    return true;
  };

  const handleSignUp = () => {
    if (!validateForm()) {
      return;
    }

    //@ts-ignore
    const emailExists = users.some(user => user.email === email);
    const phoneNumberExists = users.some(
      //@ts-ignore
      user => user.phoneNumber === phoneNumber,
    );

    if (emailExists) {
      Alert.alert('Validation Error', 'Email is already registered.');
      return;
    }

    if (phoneNumberExists) {
      Alert.alert('Validation Error', 'Phone number is already registered.');
      return;
    }
    // // Create a user object with the form data
    const user = {
      id: Date.now().toString(),
      name,
      phoneNumber,
      email,
      password,
      gender,
    };

    // Dispatch the sign-up action
    dispatch(signUpRequest(user));
    // console.log('Users in the store:', users);
  };

  //@ts-ignore
  const navigation = useNavigation();

  const handleSignInPress = () => {
    //@ts-ignore
    navigation.navigate('SignIn'); 
  };

  useEffect(() => {
    console.log('Users in the store:', users);
    console.log("Is Login ",isLogin);
    
  }, [users])
  
  //

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={require('../assets/mcdlogo.png')} style={styles.logo} />
        <Text style={styles.heading}>Welcome to McDonald's</Text>
        <Text style={styles.subheading}>Register to continue</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.fieldName}>Name</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your name"
            value={name}
            onChangeText={text => setName(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.fieldName}>Phone Number</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChangeText={text => setPhoneNumber(text)}
          />
        </View>
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
        <View style={styles.inputContainer}>
          <Text style={{fontSize: 16, color: 'gray', marginRight: 270}}>
            Gender
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Text style={{fontSize: 16, color: 'gray', marginRight: 3}}>
            Male
          </Text>
          <Switch
            value={gender === 'female'}
            onValueChange={value => setGender(value ? 'female' : 'male')}
            trackColor={{false: '#dcdfe3', true: '#dcdfe3'}} // Change track color
            thumbColor={gender === 'female' ? '#DA291C' : '#DA291C'} // Change thumb color
            style={{transform: [{scale: 1.1}]}}
          />
          <Text
            style={{
              fontSize: 16,
              color: 'gray',
              marginRight: 180,
              marginLeft: 2,
            }}>
            Female
          </Text>
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={{color: 'white', fontSize: 16, marginTop: 7}}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',paddingBottom:20}}>
          <Text>Already have an account?  </Text>
          <TouchableOpacity >
            <Text style={{color:'#DA291C'}} onPress={handleSignInPress}>Sign In</Text>
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
  },
  subheading: {
    fontSize: 18,
    color: 'black',
    marginTop: 2,
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
    marginTop: 20,
    backgroundColor: '#DA291C',
    height: 40,
    width: 260,
    alignItems: 'center',
    borderRadius: 18,
  },
});

export default SignUp;
