import { View, Text } from 'react-native'
import React from 'react'
import BottomTab from '../components/BottomTab';

const CartScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, borderColor: 'red', borderRadius: 1, borderWidth: 1}}>
        <Text>Cart Screen</Text>
      </View>

      <BottomTab navigation={navigation} activetab="Cart" />
    </View>
  );
}

export default CartScreen