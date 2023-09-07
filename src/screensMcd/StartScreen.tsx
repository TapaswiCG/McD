import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import Home from './Home';

interface StartScreenProps {
  navigation: NavigationProp<any>;
}

const StartScreen: React.FC<StartScreenProps> = ({navigation}) => {

  const navigateToHome = () => {
    navigation.navigate('AppNavigator');
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <Image source={require('../assets/mcdlogo.png')} style={styles.logo} />
      <Image source={require('../assets/mcdman.png')} style={styles.clownPicture} /> 
      <Text style={styles.text}>Selamat Datang di McDonald</Text>
      <Text style={styles.subText}>Makin hemat dan prakis pesan lewat aplikasi, banyak menu, banyak promo, nggak perlu keluar rumah!</Text>
      <TouchableOpacity style={styles.button} onPress={navigateToHome}>
        <Text style={styles.buttonText}>Pesan Sekarang</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DA291C',
    justifyContent: 'center',
    alignItems: 'center',
    padding:40,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginTop: 20,
  },
  clownPicture: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginTop: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color:'white',
  },
  subText: {
    fontSize: 16,
    // fontFamily:'arial',
    marginTop: 20,
    color:'white',
    textAlign:'center',
    marginLeft:10,
    marginRight:10,
    lineHeight:20,
    // marginBottom:10,
  },
  button: {
    backgroundColor: '#FFC72C',
    paddingHorizontal: 90,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 30,
    
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#DA291C',
  },
});

export default StartScreen;
