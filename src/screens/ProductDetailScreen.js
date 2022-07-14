import {View, Text,Button} from 'react-native';
import React from 'react';

const ProductDetailScreen = ({navigation}) => {
  return (
    <View style={{flex:1}}>
      <Text>Detail Goes Here</Text>
      <Button title="Add to Cart" onPress={() => navigation.navigate('Cart')} />
    </View>
  );
};

export default ProductDetailScreen;
