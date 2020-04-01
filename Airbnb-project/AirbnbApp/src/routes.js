import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

const AppStack = createStackNavigator();

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Main from './pages/Main'

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator >
        <AppStack.Screen name="SignIn" component={SignIn} />
        <AppStack.Screen name="SignUp" component={SignUp} />
        <AppStack.Screen name="Main" component={Main} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
///<AppStack.Navigator screenOptions={{ headerShown: false }}>