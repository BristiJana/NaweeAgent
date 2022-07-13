import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DummyOrderList from '../../components/DummyOrderList';
const Demmurage = ({date}: any) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.date}>{date}</Text>
        <DummyOrderList />
        <Image
          resizeMode="stretch"
          source={require('../assests/Wave.png')}
          style={styles.img}
        />
        <Image
          resizeMode="stretch"
          source={require('../assests/WhiteWave.png')}
          style={styles.whiteImg}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  date: {
    marginHorizontal: wp('10%'),
    marginTop: wp('5%'),
    marginBottom: wp('3%'),
    fontSize: 14,
    fontWeight: '400',
  },
  img: {
    width: wp('100%'),
    marginTop: wp('124%'),
  },
  whiteImg: {
    width: wp('100%'),
    marginTop: wp('122%'),
  },
});
export default Demmurage;
