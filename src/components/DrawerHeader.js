import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Icon from 'react-native-vector-icons/Ionicons';

function DrawerHeader({title, navigation}) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Icon
          name="menu-outline"
          style={styles.icon}
          onPress={() => navigation.openDrawer()}></Icon>
        <Text style={styles.text1}>{title}</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeArea: {backgroundColor: '#fff'},
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#D3D3D3',
    paddingVertical: 15,
  },
  icon: {fontSize: 30, color: '#1E90FF', position: 'absolute', left: 12},
  text1: {
    fontSize: 18,
  },
});

export default DrawerHeader;
