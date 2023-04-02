import React from 'react';
import {View} from 'react-native';
import ProductDetail from '../components/ProductDetail';

const ProductDetailScreen = ({route, navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ProductDetail route={route} />
    </View>
  );
};

export default ProductDetailScreen;
