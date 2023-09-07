// import { View, Text } from 'react-native'
// import React from 'react'
// import FirstPage from './src/screensMcd/FirstPage'
// import SecondScreen from './src/screensMcd/SecondScreen'
// import SpecialOffers from './src/screensMcd/SpecialOffers'
// import Extra from './src/screensMcd/Extra'
// import ItemDetails from './src/screensMcd/ItemDetails'
// import CartPage from './src/screensMcd/CartPage'

// const App = () => {
//   return (
//     <View style={{flex:1}}>
//       {/* <FirstPage/> */}
//       {/* <SecondScreen/> */}
//       {/* <SpecialOffers/> */}
//       {/* <CartPage/> */}
//       <Extra/>

//     </View>
//   )
// }

// export default App

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import StartScreen from './src/screensMcd/StartScreen';
// import AppNavigator from './src/navigations/AppNavigator';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Start">
//         <Stack.Screen name="StartScreen" component={StartScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="AppNavigator" component={AppNavigator} options={{ headerShown: false }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

import React from 'react';
import SignUp from './src/screensMcd/SignUp';
import SignIn from './src/screensMcd/SignIn';
import Home from './src/screensMcd/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AppNavigator from './src/navigations/AppNavigator';
import CategoryDetails from './src/screensMcd/CategoryDetails';
// import SignIn from './src/screensMcd/SignIn';

import {Provider, useSelector} from 'react-redux';
// import store, {persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from './src/reduxMcd/store';
import InternalNavigation from './src/navigations/InternalNavigation';

const Stack = createStackNavigator();

const App = () => {
  

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RootStack/>
      </PersistGate>
    </Provider>
  );
};

const RootStack = () => {

  const isLogin = useSelector((state: any) => state.login.isLogin);

  console.log("checking in Rootstack ; ",isLogin);
  

  return (
    <NavigationContainer independent={true}>
      {!isLogin ? <AuthNavigation /> : <InternalNavigation />}
    </NavigationContainer>
  );
};

const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="SignUp">
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="AppNavigator"
        component={AppNavigator}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen name="CategoryDetails" component={CategoryDetails} />
    </Stack.Navigator>
  );
};

export default App;
