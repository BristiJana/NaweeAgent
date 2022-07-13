import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const DeliveryReqBtn = ({para, number, image}) => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.card}>
            <View style={styles.imgContainer}>{image}</View>
            <Text style={styles.texts}>
              {para} {number}
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: wp('5%'),
    marginHorizontal: wp('10%'),
  },
  card: {
    width: wp('80%'),
    height: hp('6%'),
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    elevation: 2,
    borderRadius: 10,
    paddingRight: wp('10%'),
    borderColor: 'orange',
  },
  texts: {
    width: wp('50%'),
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
});
export default DeliveryReqBtn;
