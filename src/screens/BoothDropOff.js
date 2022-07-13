import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  ImageBackground,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const BoothDropOff = ({agentName, address, locationImage, phoneImg}) => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Agent:</Text>
            <Text style={styles.btnText}>{agentName}</Text>
          </TouchableOpacity>
          <View style={styles.middleParaContainer}>
            <Text style={styles.middlePara}>
              {agentName} has accepted your request for emergency drop-off.
              Click on location to reach there.
            </Text>
          </View>
          <TouchableOpacity style={styles.locationBtn}>
            <Text style={styles.locationBtnText}>{address}</Text>
            <View>{locationImage}</View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactBtn}>
            <View>{phoneImg}</View>
            <Text style={styles.contactBtnText}>Call Your Agent</Text>
          </TouchableOpacity>
          <View style={styles.bottomBtn}></View>
          <TouchableOpacity style={styles.bottomButton}>
            <Text style={styles.bottomButtonText}>COMPLETE DELIVERY</Text>
          </TouchableOpacity>
          <Image
            resizeMode="stretch"
            source={require('../assests/Wave.png')}
            style={styles.img}
          />
          <Image
            resizeMode="stretch"
            source={require('../assests/WhiteWave.png')}
          />
        </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {marginTop: wp('6%')},
  btn: {
    width: wp('80%'),
    height: hp('5.5%'),
    backgroundColor: '#FA8832',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    paddingHorizontal: '5%',
    marginHorizontal: '10%',
  },
  btnText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '400',
  },
  middleParaContainer: {
    marginTop: wp('4%'),
    width: wp('75%'),
    marginHorizontal: wp('12%'),
  },
  middlePara: {
    fontSize: 10,
    fontWeight: '400',
    color: '#FA8832',
  },
  locationBtn: {
    width: wp('80%'),
    height: hp('6%'),
    marginTop: wp('6%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    alignItems: 'center',
    borderRadius: 12,
    paddingHorizontal: wp('4%'),
    borderColor: '#FA8832',
    marginHorizontal: wp('10%'),
    backgroundColor: '#fff',
  },
  locationBtnText: {
    fontSize: 12,
    fontWeight: '500',
  },
  contactBtn: {
    width: wp('80%'),
    height: hp('6%'),
    marginTop: wp('8%'),
    marginHorizontal: wp('10%'),
    backgroundColor: '#FA8832',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: wp('20%'),
  },
  contactBtnText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '400',
  },
  bottomBtn: {
    marginTop: wp('80%'),
  },
  img: {
    width: wp('100%'),
    marginTop: wp('2%'),
  },
  bottomButton: {
    // borderWidth: 1,
    width: wp('50%'),
    borderRadius: 10,
    height: wp('10%'),
    backgroundColor: '#FA8832',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: wp('25%'),
    position: 'relative',
    top: wp('10%'),
  },
  bottomButtonText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#fff',
  },
});
export default BoothDropOff;
