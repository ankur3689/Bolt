import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  FlatList,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';
import {set} from 'react-native-reanimated';
import useAxios from '../hooks/useAxios';

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <View onPress={onPress} style={[styles.item]}>
    <View style={{flex: 2}}>
      <Image
        style={{width: '100%', height: '100%'}}
        source={{uri: item.images[0].src}}
      />
    </View>
    <View style={{flex: 1}}>
      <Text style={[styles.title, textColor]}>{item.name}</Text>
      <Text>$50</Text>
    </View>
  </View>
);

const ProductList = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const axios = useAxios();
  const loadProducts = async () => {
    try {
      let response = await axios.get('products');
      setProducts(prev => {
        return [...prev, ...response.data];
      });
      return 'success';
    } catch (error) {
      throw new Error('Error:' + error);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    loadProducts().then(
      res => {
        console.log('success', res);
        setIsLoading(false);
      },
      err => {
        console.log('tt', err);
        setIsLoading(false);
      },
    );
  }, []);

  const renderItem = ({item}) => {
    //console.log(item)
    return (
      <Item
        item={item}
        onPress={() => {
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
        extraData="extra_data"
        numColumns={2}
      />
      {isLoading && (
        <View
          style={{
            backgroundColor: 'rgba(52, 52, 52, 0.8)',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            justifyContent: 'center',
            alignItems: 'center',
            opacity: 0.5,
          }}>
          <ActivityIndicator size="large" color="#fff" animating={isLoading} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //borderRadius: 1,
    //borderColor: 'red',
    //borderWidth: 1,
    flex: 1,
  },
  item: {
    height: 300,
    margin: 1,
    //flexDirection:'row',
    flex: 1,
    borderColor: '#D3D3D3',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
  },
  title: {
    fontSize: 16,
  },
});
export default ProductList;
