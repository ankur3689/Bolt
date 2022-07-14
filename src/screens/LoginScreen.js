import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <Button title='Log In' onPress={()=>navigation.navigate('DrawerScreen')}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default LoginScreen;
