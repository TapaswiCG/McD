// Import necessary components and createStackNavigtor from React Navigation
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AppNavigator from './AppNavigator';
import CategoryDetails from '../screensMcd/CategoryDetails';
import ItemDetails from '../screensMcd/ItemDetails';

const Stack = createStackNavigator();

const InternalNavigation=()=> {
  return (
    <NavigationContainer independent={true}>
    <Stack.Navigator initialRouteName="AppNavigator">
      <Stack.Screen name="AppNavigator" component={AppNavigator} options={{headerShown: false}} />
      <Stack.Screen name="CategoryDetails" component={CategoryDetails} options={{headerShown: true}} />
      <Stack.Screen name="ItemDetails" component={ItemDetails} options={{headerShown: true}} />

    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default InternalNavigation;