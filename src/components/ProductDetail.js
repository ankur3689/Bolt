import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useAxios from '../hooks/useAxios';
import Slider from '../components/Slider';
import {B} from '../Utility';

export default function ProductDetail({route}) {
  //console.log(StyleSheet.absoluteFillObject);
  const {productID} = route.params;
  const axios = useAxios();
  const [item, setItem] = useState({});

  const getProduct = async () => {
    try {
      let response = await axios.get(`products/${productID}`);
      if (response.data) {
        console.log(item)
        setItem(response.data);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };
  const images = [
    'https://source.unsplash.com/1024x768/?nature',
    'https://source.unsplash.com/1024x768/?water',
    'https://source.unsplash.com/1024x768/?girl',
    'https://source.unsplash.com/1024x768/?tree', // Network image
    'https://source.unsplash.com/1024x768/?nature',
  ];
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <SafeAreaView
      edges={['left', 'right', 'bottom']}
      style={{flex: 1, borderColor: 'red', borderRadius: 1, borderWidth: 1}}>
      <Slider images={images} />
      <View
        style={{
          flex: 1,
          borderColor: 'pink',
          borderRadius: 1,
          borderWidth: 3,
          paddingTop: 10,
        }}>
        <Text>
          <B>{item.name}</B>
        </Text>
      </View>
      <View
        style={{
          borderColor: 'blue',
          borderRadius: 1,
          borderWidth: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => console.log('add to cart')}>
          <Text style={styles.textBtn}>Add To Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => console.log('Buy Now')}>
          <Text style={styles.textBtn}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: '45%',
    //marginTop: 20,
    borderRadius: 5,
    //borderWidth: 1,
    paddingVertical: 12,
    backgroundColor: '#007affc7',
    //borderColor: '#007affc7',
  },
  textBtn: {fontSize: 20, color: '#fff', textAlign: 'center'},
});
