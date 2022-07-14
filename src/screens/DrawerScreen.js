import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStack from './HomeScreen';
import ProfileScreen from './ProfileScreen';

const Drawer = createDrawerNavigator();

function DrawerScreen({navigation}) {
  return (
    <Drawer.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{drawerLabel: 'Home'}}
      />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default DrawerScreen;
