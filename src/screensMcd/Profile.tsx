import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { logoutRequest } from '../redux/actions/authActions'; // Import your logout action
import { RootState } from '../redux/store';


const Profile = () => {
  const user = useSelector((state:any) => state.login.currentUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Dispatch the logout action when the user logs out
    dispatch(logoutRequest());
  };

  useEffect(() =>{
    console.log("user is printed here : ");
    console.log(user)
  },[user])

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Profile</Text>
      <View style={styles.userInfo}>
      <Text style={styles.userInfoText}>Name: <Text style={styles.userBlackText}>{user.name}</Text></Text>
        <Text style={styles.userInfoText}>Phone Number: <Text style={styles.userBlackText}>{user.phoneNumber}</Text></Text>
        <Text style={styles.userInfoText}>Email: <Text style={styles.userBlackText}>{user.email}</Text></Text>
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  userInfo: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  userInfoText: {
    color: 'red', 
    fontSize: 16,
  },
  userRedText: {
    color: 'red', 
  },
  userBlackText: {
    color: 'black', 
  },
  logoutButton: {
    backgroundColor: '#DA291C',
    padding: 10,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Profile;
