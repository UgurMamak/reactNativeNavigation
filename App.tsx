import React from 'react';
// Theme
// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Text, View} from 'react-native';

import Home from './src/screens/Home';
import List from './src/screens/List';

//const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();
function App(): JSX.Element {
  return (
    <NavigationContainer>
      <View>
        <Text>Deneme34444</Text>
      </View>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="List" component={List} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
