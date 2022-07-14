import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SignUpScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>SignUpScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  });

export default SignUpScreen