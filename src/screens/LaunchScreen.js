import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {B} from '../Utility';

const LaunchScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.text1}>
          Welcome to <B>Bolt</B>
        </Text>
        <Text style={styles.text2}>Explore Us</Text>
      </View>
      <View style={styles.imgContainer}>
        <Image source={require('../assets/launch.png')} />
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigate('Login')}>
          <Text style={styles.text3}>Log In</Text>
        </TouchableOpacity>
        <Text style={styles.text4} onPress={()=>navigation.navigate('Signup')}>Signup</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //fontFamily: '',
    // borderColor: 'red',
    // borderStyle: 'solid',
    // borderWidth: 2,
  },
  welcomeContainer: {flex: 1, paddingTop: 30},
  text1: {fontSize: 25},
  text2: {
    fontSize: 20,
    textAlign: 'center',
    /* borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 2, */
    paddingTop: 20,
  },
  imgContainer: {
    flex: 3,
    justifyContent: 'center',
  },
  btnContainer: {flex: 1,width:'100%',alignItems:'center'},
  loginBtn: {
    borderRadius: 5,
    //borderWidth: 2,
    width: '80%',
    paddingVertical: 12,
    backgroundColor: '#007affc7',
    //borderColor: '#007affc7',
  },
  text3: {fontSize: 20, color: '#fff', textAlign: 'center'},
  text4: {fontSize: 20, textAlign: 'center', marginTop: 30},
});

export default LaunchScreen;
