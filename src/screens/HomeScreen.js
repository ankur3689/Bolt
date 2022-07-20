import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CartScreen from './CartScreen';
import CategoryScreen from './CategoryScreen';
import ProductsScreen from './ProductsScreen';
import ProductDetailScreen from './ProductDetailScreen';

import {getHeaderTitle} from '@react-navigation/elements';
import HomeStackHeader from '../components/HomeStackHeader';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: 'Back',

        header: ({navigation, route, options, back}) => {
          const title = getHeaderTitle(options, route.name);

          return (
            <HomeStackHeader
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

export default HomeStack;
