import React from 'react';
//import {Text, Button} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//import Icon from 'react-native-vector-icons/FontAwesome';
import Play from './src/views/Play';
import Profile from './src/views/Profile';
import Dashboard from './src/views/Dashboard';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Feed">
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{tabBarLabel: 'Profile', tabBarBadge: 3}}
        />

        <Tab.Screen name="Play" component={Play} />

        <Tab.Screen name="Dashboard" component={Dashboard} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
