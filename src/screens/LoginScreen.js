import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import useAuth from '../hooks/useAuth';

const LoginScreen = ({navigation}) => {
  const {auth,setAuth} = useAuth();
  const loginUser = ()=>{
    setAuth(true);
  }
  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <Button title='Log In' onPress={()=>loginUser()}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default LoginScreen;
