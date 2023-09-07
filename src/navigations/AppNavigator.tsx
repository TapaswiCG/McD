// // Navigation.tsx
// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {Button} from 'react-native-paper';

// // Screens
// import StartScreen from '../screensMcd/StartScreen';
// import Home from '../screensMcd/Home';
// import SpecialOffers from '../screensMcd/SpecialOffers';
// import ItemDetails from '../screensMcd/ItemDetails';
// import CartPage from '../screensMcd/CartPage';
// import Profile from '../screensMcd/Profile';

// import Icon from 'react-native-vector-icons/Ionicons';
// import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
// import { Ionicons } from '@expo/vector-icons';

// const Tab = createBottomTabNavigator();

// const AppNavigator = () => {
//   return (
//     <NavigationContainer independent={true}>
//       <Tab.Navigator 
//       //@ts-ignore
//       tabBarOptions={{
//           labelStyle: { display: 'none' }, 
//         }}
//       screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let IconComponent;
//             let iconName;

//             if (route.name === 'Home') {
//               IconComponent=focused ? Icon : Icon;
//               iconName = focused ? 'home' : 'home-outline'; 
//             } else if (route.name === 'SpecialOffers') {
//               IconComponent=focused ? MaterialIcon : MaterialIcon;
//               iconName = focused ? 'celebration' : 'celebration';
//             } else if (route.name === 'Items') {
//               IconComponent=focused ? Icon : Icon;
//               iconName = focused ? 'fast-food' : 'fast-food-outline';
//             } else if (route.name === 'Cart') {
//               IconComponent=focused ? Icon : Icon;
//               iconName = focused ? 'cart' : 'cart-outline';
//             }else if (route.name === 'Profile') {
//               IconComponent=focused ? Icon : Icon;
//               iconName = focused ? 'person' : 'person-outline';
//             }
//             const iconColor = focused ? '#DA291C' : 'gray';
//               //@ts-ignore
//             return <IconComponent name={iconName} size={size} color={iconColor} />;
//           },
//         })}>
//         <Tab.Screen
//           name="Home"
//           component={Home}
//           options={{
//             tabBarLabel: 'Home',
//             headerShown: false,
//           }}
//         />
//         <Tab.Screen
//           name="SpecialOffers"
//           component={SpecialOffers}
//           options={{
//             tabBarLabel: 'Offers',
//             headerShown: false,
//           }}
//         />
//         <Tab.Screen
//           name="Items"
//           component={ItemDetails}
//           options={{
//             tabBarLabel: 'Items',
//             headerShown: false,
//           }}
//         />
//         <Tab.Screen
//           name="Cart"
//           component={CartPage}
//           options={{
//             tabBarLabel: 'Cart',
//             headerShown: false,
//           }}
//         />
//         <Tab.Screen
//           name="Profile"
//           component={Profile}
//           options={{
//             tabBarLabel: 'Cart',
//             headerShown: false,
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// export default AppNavigator;


// Navigation.tsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Button} from 'react-native-paper';

// Screens
import StartScreen from '../screensMcd/StartScreen';
import Home from '../screensMcd/Home';
import SpecialOffers from '../screensMcd/SpecialOffers';
import ItemDetails from '../screensMcd/ItemDetails';
import CartPage from '../screensMcd/CartPage';
import Profile from '../screensMcd/Profile';

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    // <NavigationContainer independent={true}>
      <Tab.Navigator 
      //@ts-ignore
      tabBarOptions={{
          labelStyle: { display: 'none' }, 
        }}
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let IconComponent;
            let iconName;

            if (route.name === 'Home') {
              IconComponent=focused ? Icon : Icon;
              iconName = focused ? 'home' : 'home-outline'; 
            } else if (route.name === 'SpecialOffers') {
              IconComponent=focused ? MaterialIcon : MaterialIcon;
              iconName = focused ? 'celebration' : 'celebration';
            } else if (route.name === 'Items') {
              IconComponent=focused ? Icon : Icon;
              iconName = focused ? 'fast-food' : 'fast-food-outline';
            } else if (route.name === 'Cart') {
              IconComponent=focused ? Icon : Icon;
              iconName = focused ? 'cart' : 'cart-outline';
            }else if (route.name === 'Profile') {
              IconComponent=focused ? Icon : Icon;
              iconName = focused ? 'person' : 'person-outline';
            }
            const iconColor = focused ? '#DA291C' : 'gray';
              //@ts-ignore
            return <IconComponent name={iconName} size={size} color={iconColor} />;
          },
        })}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="SpecialOffers"
          component={SpecialOffers}
          options={{
            tabBarLabel: 'Offers',
            headerShown: false,
          }}
        />
        {/* <Tab.Screen
          name="Items"
          component={ItemDetails}
          options={{
            tabBarLabel: 'Items',
            headerShown: false,
          }}
        /> */}
        <Tab.Screen
          name="Cart"
          component={CartPage}
          options={{
            tabBarLabel: 'Cart',
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Cart',
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default AppNavigator;
