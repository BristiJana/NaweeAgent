import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const DeliveryComplete = ({}) => {
  return (
    <SafeAreaView>
      <View style={styles.card}>
        <Image source={require('../assests/deliverycomplete.png')} />
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Delivery Completed</Text>
          <Text style={styles.para}>
            You have successfully delivered a parcel to Johnny Heartz.{' '}
          </Text>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>OK</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  card: {
    // borderWidth: 1,
    width: wp('70%'),
    marginHorizontal: wp('15%'),
    marginTop: wp('5%'),
    alignItems: 'center',
    paddingTop: wp('6%'),
    elevation: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  textContainer: {
    alignItems: 'center',
    marginTop: wp('8%'),
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  para: {
    fontSize: 14,
    fontWeight: '400',
    width: wp('50%'),
    textAlign: 'center',
    marginTop: wp('3%'),
    color: '#FA8832',
  },
  btn: {
    width: wp('32%'),
    height: hp('5%'),
    backgroundColor: '#FA8832',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: wp('5%'),
    marginBottom: wp('8%'),
  },
  btnText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#fff',
  },
});
export default DeliveryComplete;
