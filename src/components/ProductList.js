import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, FlatList, View, Image} from 'react-native';
import { set } from 'react-native-reanimated';
import useAxios from '../hooks/useAxios';

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <View onPress={onPress} style={[styles.item]}>
    <View style={{flex: 2}}>
      <Image
        style={{width: '100%', height: '100%'}}
        source={{uri:item.images[0].src}}
      />
    </View>
    <View style={{flex: 1}}>
      <Text style={[styles.title, textColor]}>{item.name}</Text>
      <Text>$50</Text>
    </View>
  </View>
);

const ProductList = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);
  const [products, setProducts] = useState([]);
  const axios = useAxios();

  useEffect(() => {
    async function apiCall() {
      try {
        let response = await axios.get('products');
        //console.log('headers:',response.data);
        setProducts((prev)=>{
          return [...prev,...response.data]
        })
      } catch (error) {
        console.log('Error:',error);
      }
    }
    apiCall();
  }, []);

  const renderItem = ({item}) => {
    //console.log(item)
    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id);
          navigation.navigate('ProductDetail');
        }}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 1,
    borderColor: 'red',
    borderWidth: 1,
    flex: 1,
    padding: 5,
  },
  item: {
    height: 300,
    margin: 1,
    //flexDirection:'row',
    flex: 1,
    borderColor: '#D3D3D3',
    borderWidth: 1,
  },
  title: {
    fontSize: 16,
  },
});
export default ProductList;
