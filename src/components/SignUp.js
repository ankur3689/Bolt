import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  TextInput,
} from 'react-native';


const SignUp = ({navigation}) => {
  
  const handleChange = () => {};
  const handleSubmit = () => {
     navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email:</Text>
      <TextInput style={styles.input} placeholder="Please enter email" />
      <Text style={[styles.label, {marginTop: 20}]}>Password:</Text>
      <TextInput style={styles.input} placeholder="Please enter password" />
      <Text style={[styles.label, {marginTop: 20}]}>Confirm Password:</Text>
      <TextInput style={styles.input} placeholder="Please enter confirm password" />
      <TouchableOpacity style={styles.loginBtn} onPress={() => handleSubmit()}>
        <Text style={styles.text3}>Create Account</Text>
      </TouchableOpacity>
      <View style={styles.btnWrapper}>
        <Text style={styles.txtNewUser}>Exiting user ? </Text>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={styles.txtSignup}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignUp;

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
    height: 50,
  },
  loginBtn: {
    width: '100%',
    marginTop: 20,
    borderRadius: 5,
    //borderWidth: 1,
    paddingVertical: 12,
    backgroundColor: '#007affc7',
    //borderColor: '#007affc7',
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
