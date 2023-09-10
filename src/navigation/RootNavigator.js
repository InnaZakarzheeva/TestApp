import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthScreen } from '../screens';
import { useSelector } from 'react-redux';
import { selectIsUserLoggedIn } from '../redux/selectors';
import HomeNavigator from './HomeNavigator';

const Stack = createStackNavigator();

const RootNavigator = () => {
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);

  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
      }}>
      {isUserLoggedIn ? (
        <Stack.Screen name="homeNavigator" component={HomeNavigator} />
      ) : (
        <Stack.Screen name="auth" component={AuthScreen} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
