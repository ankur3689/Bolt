import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';

import useAuth from '../hooks/useAuth';
import {TextInput} from 'react-native-gesture-handler';

const Login = ({navigation}) => {
  const {auth, setAuth} = useAuth();

  const loginUser = () => {
    setAuth(true);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Username:</Text>
      <TextInput style={styles.input} placeholder="Please enter username" />
      <Text style={[styles.label, {marginTop: 20}]}>Password:</Text>
      <TextInput style={styles.input} placeholder="Please enter password" />
      <TouchableOpacity style={styles.loginBtn} onPress={() => loginUser()}>
        <Text style={styles.text3}>Log In</Text>
      </TouchableOpacity>
      <View style={styles.btnWrapper}>
        <Text style={styles.txtNewUser}>New user ? </Text>
        <Pressable onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.txtSignup}>Sign-up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 50,
  },
  input: {
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1,
    width: '100%',
    padding: 15,
  },
  loginBtn: {
    width: '100%',
    marginTop: 20,
    borderRadius: 5,
    borderWidth: 1,
    paddingVertical: 12,
    backgroundColor: '#007affc7',
    borderColor: '#007affc7',
  },
  text3: {fontSize: 20, color: '#fff', textAlign: 'center'},
  label: {marginBottom: 10, fontSize: 20},
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 50,
  },
  txtNewUser: {textAlign: 'center', fontSize: 15},
  txtSignup: {fontSize: 15},
});
