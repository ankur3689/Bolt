import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DrawerScreen from './src/screens/DrawerScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import LaunchScreen from './src/screens/LaunchScreen';
import {AuthProvider} from './src/contexts/AuthContext';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import useAuth from './src/hooks/useAuth.js';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <AppNavigation />
      </SafeAreaProvider>
    </AuthProvider>
  );
};

const AppNavigation = () => {
  const {auth} = useAuth();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Launch"
        screenOptions={{headerShown: false}}>
        {!auth ? (
          <>
            <Stack.Screen name="Launch" component={LaunchScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignUpScreen} />
          </>
        ) : (
          <Stack.Screen name="DrawerScreen" component={DrawerScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
