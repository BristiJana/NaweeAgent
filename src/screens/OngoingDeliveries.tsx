import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DummyOrderList from '../Components/DummyOrderList';
const OngoingDeliveries = () => {
  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={require('../assests/background.png')}
          resizeMode="contain"
          imageStyle={styles.bgImage}
          style={styles.image}>
          <DummyOrderList deliveryStatus="Transit..."/>
        </ImageBackground>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    marginHorizontal: wp('5%'),
  },
  image: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default OngoingDeliveries;
