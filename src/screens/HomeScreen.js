import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View, StyleSheet} from 'react-native';
import CartScreen from './CartScreen';
import CategoryScreen from './CategoryScreen';
import ProductsScreen from './ProductsScreen';
import ProductDetailScreen from './ProductDetailScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {getHeaderTitle} from '@react-navigation/elements';
import {SafeAreaView} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: 'Back',

        header: ({navigation, route, options, back}) => {
          const title = getHeaderTitle(options, route.name);

          return (
            <CustomHeader
              title={title}
              back={back}
              navigation={navigation}
              options={options}
            />
          );
        },
      }}>
      <Stack.Screen
        name="Products"
        component={ProductsScreen}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{
          headerTitle: 'Product Info',
        }}></Stack.Screen>
      <Stack.Screen name="Cart" component={CartScreen}></Stack.Screen>
      <Stack.Screen name="Category" component={CategoryScreen}></Stack.Screen>
    </Stack.Navigator>
  );
}

function CustomHeader(props) {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <View style={styles.view1}>
        {props.back ? (
          <Ionicons
            style={styles.icon}
            name="arrow-back"
            onPress={props.navigation.goBack}
          />
        ) : undefined}

        <Text style={styles.text1}>{props.title}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#D3D3D3',
  },
  view1: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#D3D3D3',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    paddingVertical:15
  },
  icon: {fontSize: 30, color: '#1E90FF', position: 'absolute', left: 10},
  text1: {
    fontSize: 18,
  },
});

export default HomeStack;
