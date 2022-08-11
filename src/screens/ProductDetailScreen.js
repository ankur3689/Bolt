import {View, Text} from 'react-native';
import React from 'react';


const ProductDetailScreen = ({route, navigation}) => {
  //console.log(route)
  const {productID} = route.params;
  const images = [
    'https://source.unsplash.com/1024x768/?nature',
    'https://source.unsplash.com/1024x768/?water',
    'https://source.unsplash.com/1024x768/?girl',
    'https://source.unsplash.com/1024x768/?tree', // Network image
  ];

  return (
    <View style={{flex: 1}}>
      <Text>Image slider goes here</Text>
    </View>
  );
};

export default ProductDetailScreen;
