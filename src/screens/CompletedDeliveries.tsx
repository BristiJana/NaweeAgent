import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DummyOrderList from '../components/DummyOrderList';
const CompletedDeliveries = () => {
  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/background.png')}
          resizeMode="contain"
          imageStyle={styles.bgImage}
          style={styles.image}>
          <DummyOrderList />
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
export default CompletedDeliveries;
