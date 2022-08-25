import {View,Text} from 'react-native';
import React, { useEffect, useState } from 'react';
import useAxios from '../hooks/useAxios';
import Slider from '../components/Slider';
import { B } from '../Utility';



const ProductDetailScreen = ({route, navigation}) => {
  //console.log(StyleSheet.absoluteFillObject);
  const {productID} = route.params;
  const axios = useAxios();
  const [item,setItem] = useState({});

  const getProduct = async () => {
    try {
      let response = await axios.get(`products/${productID}`);
      if (response.data) {
        setItem(response.data);
      } else {
      }
    } catch (error) {
      console.log(error)
    }
  };
  const images = [
    'https://source.unsplash.com/1024x768/?nature',
    'https://source.unsplash.com/1024x768/?water',
    'https://source.unsplash.com/1024x768/?girl',
    'https://source.unsplash.com/1024x768/?tree', // Network image
    'https://source.unsplash.com/1024x768/?nature',
  ];
  useEffect(()=>{
    getProduct();

  },[])

  return (
    <View style={{flex:1}}>
      <Slider images={images}/>
      <View style={{flex:1,borderColor:'red',borderRadius:1,borderWidth:1}}>
        <Text><B>{item.name}</B></Text>
      </View>
    </View>
  );
};

export default ProductDetailScreen;
