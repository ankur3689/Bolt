import { View, Text, Button } from 'react-native'
import React from 'react';
import DrawerHeader from '../components/DrawerHeader';

const ProfileScreen = ({navigation}) => {
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button title='Goto Home' onPress={()=>navigation.navigate('Home',{screen:'Products'})}/>
    </View>
  )
}

export default ProfileScreen