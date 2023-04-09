import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {decode} from 'html-entities';
import useAxios from '../hooks/useAxios';
import Slider from '../components/Slider';

export default function ProductDetail({route}) {
  //console.log(StyleSheet.absoluteFillObject);
  const {productID} = route.params;
  const axios = useAxios();
  const [item, setItem] = useState({});

  const getProduct = async () => {
    try {
      let response = await axios.get(`products/${productID}`);
      if (response.data) {
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
  //console.log(item);
  return (
    <SafeAreaView edges={['left', 'right', 'bottom']} style={{flex: 1}}>
      <Slider images={images} />
      <ScrollView style={styles.detailView}>
        <View style={styles.titleWrapper}>
          <Text style={styles.titleTxt}>{item.name}</Text>
          <Text style={styles.priceTxt}>
            {decode(item?.price_html?.replace(/(<([^>]+)>)/gi, ''))}
          </Text>
        </View>

        <Text>{item?.description?.replace(/(<([^>]+)>)/gi, '')}</Text>
      </ScrollView>

      <View style={styles.btnContainer}>
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
  detailView: {
    flex: 1,
    //borderColor: 'pink',
    //borderRadius: 1,
    //borderWidth: 3,
    padding: 10,
  },
  titleTxt: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  priceTxt: {marginBottom:10,fontSize:15,fontWeight:'bold'},
  titleWrapper: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  btn: {
    width: '45%',
    borderRadius: 5,
    paddingVertical: 12,
    backgroundColor: '#007affc7',
  },
  textBtn: {fontSize: 20, color: '#fff', textAlign: 'center'},
});
