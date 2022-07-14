import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import OrderSvg from '../../components/icons/confirm';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';

export default function OrderConfirm() {
  return (
    <SafeAreaView
      style={{flex: 1, marginHorizontal: wp('3%'), marginVertical: hp('2%')}}>
      <View style={styles.container}>
        <View style={{marginBottom: hp('2%'), }}>
          <OrderSvg />
        </View>
        <Text style={styles.thanku}>Thank You for choosing NaWee</Text>
        <Text style={styles.subtext}>
          We have received your request, we will assign an agent soon. Please
          keep your parcel ready to be picked-up.
        </Text>

        <View style={styles.card}>
          <Text
            style={{
              fontFamily: 'Syne-Regular',
              fontWeight: '600',
              fontSize: wp('6.5%'),
              marginBottom: hp('1.2%'),
              color: 'black',
            }}>
            PAR576
          </Text>
          <Text>Parcel ID</Text>
        </View>
        <View style={{marginTop:hp('15%')}}>
          <CustomButton
            name="OK"
            width={wp('40%')}
            height={hp('6%')}
            fontcolor="white"
            bgcolor="#fa8832"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: hp('8%'),
    marginBottom: hp('1%'),
  },
  thanku: {
    fontFamily: 'Syne-Regular',
    fontSize: wp('7%'),
    fontWeight: '600',
    color: '#fa8832',
    textAlign: 'center',
  },
  subtext: {
    fontSize: wp('4%'),
    fontFamily: 'Syne-Medium',
    color: '#fa8832',
    textAlign: 'center',
    marginHorizontal: wp('5%'),
  },
  card: {
    marginHorizontal: wp('2%'),
    borderWidth: 1.5,
    marginTop: hp('2%'),
    borderRadius: wp('5%'),
    borderColor: '#fa8832',
    minWidth: wp('80%'),
    alignItems: 'center',
    paddingVertical: hp('1%'),
  },
});
