import React, {useCallback, useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  FlatList,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import useAxios from '../hooks/useAxios';

const ProductList = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [stopLoadMore, setStopLoadMore] = useState(false);
  const axios = useAxios();
  const loadProducts = async page => {
    console.log('GetPage', page);
    try {
      let response = await axios.get('products', {
        params: {
          page: page,
        },
      });
      if (response.data.length === 0) {
        console.log('No more products.');
        setStopLoadMore(true);
      } else {
        setProducts(prev => {
          return [...prev, ...response.data];
        });
      }

      return 'success';
    } catch (error) {
      throw new Error(error);
    }
  };

  const loadMoreProducts = () => {
    if (loadingMore === true) {
      return false; //already running a page load
    }
    if (stopLoadMore === true) {
      console.log('StopLoadMore', stopLoadMore);
      return false; // no more records exists
    }
    setLoadingMore(true);
    console.log('SettingLoadingMore', pageNumber + 1);
    setPageNumber(prev => prev + 1);
    console.log('LoadingMore', pageNumber + 1);
    loadProducts(pageNumber + 1).then(
      res => {
        console.log('success', res);
        setLoadingMore(false);
      },
      err => {
        console.log('Error:', err);
        setLoadingMore(false);
      },
    );
  };

  useEffect(() => {
    setIsLoading(true);
    loadProducts(1).then(
      res => {
        //console.log('success', res);
        setIsLoading(false);
      },
      err => {
        console.log('Error:', err);
        setIsLoading(false);
      },
    );
  }, []);

  const renderItem = ({item, index, separators}) => {
    const handleItemPress = item => {
      navigation.navigate('ProductDetail', {productID: item.id});
    };
    return <Item item={item} index={index} handleItemPress={handleItemPress} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData="extra_data"
        numColumns={2}
        onEndReached={loadMoreProducts}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
      {isLoading && (
        <View style={styles.fullPageLoader}>
          <ActivityIndicator size="large" color="#fff" animating={isLoading} />
        </View>
      )}
      {loadingMore && (
        <ActivityIndicator size="large" animating={loadingMore} />
      )}
    </View>
  );
};

const Item = ({item, index, handleItemPress}) => {
  const columnSeratorStyle =
    index % 2 === 0 ? {borderRightColor: '#D3D3D3', borderRightWidth: 0.5} : {};
  //console.log(item.images);
  return (
    <TouchableOpacity style={{flex: 1}} onPress={() => handleItemPress(item)}>
      <View style={[styles.item, columnSeratorStyle]}>
        <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={{width: 100, height: 100}}
            source={{uri: item.images[0].src}}
            defaultSource={require('../assets/no-product.png')}
          />
        </View>
        <View style={{flex: 1, marginTop: 10}}>
          <Text style={[styles.title]}>{item.name}</Text>
          {item.in_stock && <Text style={[styles.title]}>${item.price}</Text>}
          {!item.in_stock && (
            <Text style={[styles.title, {color: 'red'}]}>Out Of Stock</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};
const ItemSeparator = () => {
  return <View style={{borderColor: '#D3D3D3', borderWidth: 0.5}}></View>;
};

const styles = StyleSheet.create({
  container: {
    //borderRadius: 1,
    //borderColor: 'red',
    //borderWidth: 1,
    flex: 1,
  },
  item: {
    height: 170,
    //margin: 1,
    //flexDirection:'row',
    flex: 1,
    borderColor: '#D3D3D3',
    //borderWidth: 1,
    //borderRadius: 5,
    padding: 10,
  },
  title: {
    fontSize: 12,
  },
  fullPageLoader: {
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.5,
  },
});

export default ProductList;
