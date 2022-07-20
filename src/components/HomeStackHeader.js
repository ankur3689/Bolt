
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


function HomeStackHeader(props) {
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
      paddingVertical:15,
    },
    icon: {fontSize: 30, color: '#1E90FF', position: 'absolute', left: 10},
    text1: {
      fontSize: 18,
    },
  });

  export default HomeStackHeader;