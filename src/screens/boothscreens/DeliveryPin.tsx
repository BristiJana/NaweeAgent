import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Key from '../../components/icons/Key';
import OtpInput from '../../components/OtpInput';
import CustomButton from '../../components/CustomButton';

export default function DeliveryPin() {
  return (
    <SafeAreaView>
      <View style={styles.card}>
        <Key width={'100%'} height={'70%'} style={styles.animation} />
        <Text style={styles.subtext}> Enter your delivery pin</Text>
        <View style={styles.animation}>
        <OtpInput />
        <View style={{marginTop:hp('5%')}}>
          <CustomButton
            name="OK"
            bgcolor="#fa8832"
            fontcolor="white"
            height={hp('6%')}
            width={wp('30%')}
          />
        </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    height: hp('60%'),
    width: wp('90%'),
    elevation: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    flexDirection: 'column',
    marginTop: hp('5%'),
    alignSelf: 'center'
  },
  animation: {
    width: '80%',
    alignSelf: 'center',
    paddingTop: 20,
  },
  subtext: {
    fontSize: wp('4%'),
    fontWeight: '400',
    marginVertical: hp('1%'),
    textAlign: 'center',
    color: '#fa8832',
  },
});
