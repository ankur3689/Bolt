import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';

const BottomTab = ({navigation,activetab}) => {
  let selectedId = '';

  const handlePress = id => {
    selectedId = id;
    if (id === 'Home') {
      navigation.navigate('Home', {screen: 'Products'});
    } else if (id === 'Cart') {
      navigation.navigate('Home', {screen: 'Cart'});
    } else if (id === 'Category') {
      navigation.navigate('Home', {screen: 'Category'});
    }

    //console.log(id);
  };
  return (
    <SafeAreaView style={styles.safearea} edges={['left','right','bottom']}>
      <Pressable style={styles.iconWrapper} onPress={() => handlePress('Home')}>
        <Ionicons
          name="home-outline"
          size={20}
          color={activetab == 'Home' ? '#007affc7' : '#1c1c1ead'}
        />
        <Text style={{color: activetab == 'Home' ? '#007affc7' : '#1c1c1ead'}}>
          Home
        </Text>
      </Pressable>
      <Pressable
        style={styles.iconWrapper}
        onPress={() => handlePress('Category')}>
        <Ionicons
          name="apps-outline"
          size={20}
          color={activetab == 'Category' ? '#007affc7' : '#1c1c1ead'}
        />
        <Text
          style={{color: activetab == 'Category' ? '#007affc7' : '#1c1c1ead'}}>
          Category
        </Text>
      </Pressable>
      <Pressable style={styles.iconWrapper} onPress={() => handlePress('Cart')}>
        <Ionicons
          name="cart-outline"
          size={20}
          color={activetab == 'Cart' ? '#007affc7' : '#1c1c1ead'}
        />
        <Text style={{color: activetab == 'Cart' ? '#007affc7' : '#1c1c1ead'}}>
          Cart
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safearea: {
    borderTopWidth: 1,
    //borderRadius: 1,
    borderTopColor: '#D3D3D3',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#fff',
  },
  iconWrapper: {alignItems: 'center'},
});

export default BottomTab;
