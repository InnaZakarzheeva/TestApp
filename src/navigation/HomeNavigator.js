import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, WebViewScreen } from '../screens';

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
      }}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="webView" component={WebViewScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
