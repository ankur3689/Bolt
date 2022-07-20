import {View, Text, Image} from 'react-native';
import React from 'react';
import useAuth from '../hooks/useAuth';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DrawerContent = ({state, navigation, descriptors}) => {
  const {setAuth} = useAuth();
  //console.log(state.index);
  return (
    <DrawerContentScrollView
      contentContainerStyle={{flex: 1}}
      style={{flex: 1}}>
      <View
        style={{
          borderBottomColor: '#D3D3D3',
          borderBottomWidth: 1,
          alignItems: 'center',
          paddingVertical:15,
        }}>
        <Image
          style={{width: 60, height: 60, borderRadius:50}}
          loadingIndicatorSource={require('../assets/no-user.jpg')}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Text>Ankur Chandravanshi</Text>
      </View>
      <View style={{flex:1}}>
        <DrawerItem
          label="Home"
          onPress={() => navigation.navigate('Home')}
          icon={({focused, color, size}) => {
            return (
              <Ionicons
                color={color}
                size={size}
                name={focused ? 'home' : 'home-outline'}
              />
            );
          }}
          focused={state.index === 0}
        />
        <DrawerItem
          label="Profile"
          onPress={() => navigation.navigate('Profile')}
          icon={({focused, color, size}) => {
            return (
              <Ionicons
                color={color}
                size={size}
                name={focused ? 'person' : 'person-outline'}
              />
            );
          }}
          focused={state.index === 1}
        />
        <DrawerItem
          label="My Orders"
          onPress={() => navigation.navigate('Profile')}
          icon={({focused, color, size}) => {
            return (
              <Ionicons
                color={color}
                size={size}
                name={focused ? 'list' : 'list-outline'}
              />
            );
          }}
          focused={state.index === 1}
        />
      </View>

      <View style={{borderTopColor:'#D3D3D3',borderTopWidth:1}}>
        <DrawerItem
          label="Logout"
          icon={({focused, color, size}) => {
            return <Ionicons color={color} size={size} name="exit-outline" />;
          }}
          onPress={() => setAuth(false)}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
