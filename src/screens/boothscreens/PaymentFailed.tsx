import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import PaymentIcon from '../../components/icons/PaymentFail';

export default function PaymentFailed() {
  return (
    <SafeAreaView
      style={{flex: 1, marginHorizontal: wp('3%'), marginBottom: hp('2%')}}>
      <View style={styles.container}>
        <View style={{marginBottom: hp('2%')}}>
          <PaymentIcon  />
        </View>
        <Text style={styles.thanku}>Oops Payment Failed..!!</Text>
        <Text style={styles.subtext}>
          Don’t worry your money is safe! If money was debited from your account
          , it will be refunded automatically in 5-7 working days.
        </Text>
        <Text style={styles.subtext}>Payment ID: MJHF76754RF</Text>
        <View style={{marginBottom:hp('5%')}}>
            <Text style={{textAlign:'center'}}>Why did it fail?</Text>
            <Text style={{textAlign:'center'}}>1)The CVV or Expiry Date might be wrong.</Text>
            <Text style={{textAlign:'center'}}>2) Your Bank Network might be down.</Text>
        </View>


        <CustomButton
          name="RETRY"
          width={wp('40%')}
          height={hp('6%')}
          fontcolor="white"
          bgcolor="#fa8832"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: hp('15%'),
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
    fontSize: wp('3.5%'),
    fontFamily: 'Syne-Medium',
    color: '#fa8832',
    textAlign: 'center',
    marginHorizontal: wp('5%'),
    marginBottom: hp('1%'),
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
