import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import BottomTab from '../components/BottomTab';

import DrawerHeader from '../components/DrawerHeader';
import ProductList from '../components/ProductList';

function ProductsScreen({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <DrawerHeader title="Bolt" navigation={navigation} />

      <ProductList navigation={navigation} />
      <BottomTab navigation={navigation} activetab='Home' />
    </View>
  );
}

export default ProductsScreen;
