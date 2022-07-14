import React from "react";
import {View,Button,Text} from "react-native";
import DrawerHeader from '../components/DrawerHeader';

function ProductsScreen({navigation}) {
    return (
      <View>
        <DrawerHeader title="Bolt" navigation={navigation} />
        <Text>Products List Goes Here.</Text>
        <Button
          title="GoTo Product Detail"
          onPress={() => navigation.navigate('ProductDetail')}></Button>
      </View>
    );
  }

  export default ProductsScreen;