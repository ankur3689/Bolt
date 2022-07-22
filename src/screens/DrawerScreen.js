import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStack from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import DrawerHeader from '../components/DrawerHeader';
import {getHeaderTitle} from '@react-navigation/elements';
import DrawerContent from '../components/DrawerContent';
import MyOrdersScreen from './MyOrdersScreen';

const Drawer = createDrawerNavigator();

function DrawerScreen({navigation}) {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: ({navigation, route, options}) => {
          const title = getHeaderTitle(options, route.name);
          return (
            <DrawerHeader
              route={route}
              title={title}
              navigation={navigation}
              options={options}
            />
          );
        },
      }}
      drawerContent={({state, navigation, descriptors}) => {
        return (
          <DrawerContent
            state={state}
            navigation={navigation}
            descriptors={descriptors}
          />
        );
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{drawerLabel: 'Home', headerShown: false}}
      />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="MyOrders" component={MyOrdersScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerScreen;
