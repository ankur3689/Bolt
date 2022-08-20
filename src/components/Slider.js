import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

let {width, height} = Dimensions.get('window');
height = width * 0.6;

const Slider = props => {
  const [activeImage,setActiveImage] = useState(0);

  const onScrolling = ({nativeEvent})=>{
    let index = Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width);
    setActiveImage(index);
  }
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={onScrolling}
        scrollEventThrottle={0} //lower the number less frequent event is fired
        >
        {props.images.map((img, index) => {
          return (
            <Image
              key={index}
              source={{uri: img}}
              style={{
                width,
                height,
              }}
            />
          );
        })}
      </ScrollView>
      <View style={styles.paging}>
        {props.images.map((image, index) => {
          return (
            <Text
              key={index}
              style={
                activeImage === index
                  ? styles.pagingTextActive
                  : styles.pagingText
              }>
              ⬤
            </Text>
          );
        })}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {width, height},
  paging: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  pagingText: {color: '#888'},
  pagingTextActive: {color: '#FFF'},
});
export default Slider;
