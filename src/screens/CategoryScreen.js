import {View, Text} from 'react-native';
import React from 'react';
import BottomTab from '../components/BottomTab';


const CategoryScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, borderColor: 'red', borderRadius: 1, borderWidth: 1}}>
        <Text>CategoryScreen</Text>
      </View>

      <BottomTab navigation={navigation} activetab="Category" />
    </View>
  );
};

export default CategoryScreen;
