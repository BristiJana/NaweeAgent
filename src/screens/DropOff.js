import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import CustomButton from '../Components/CustomButton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const DropOff = ({agentName, address, locationImage, phoneImg}) => {
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
              You have accepted {agentName} your request for emergency drop-off.
            </Text>
            <Text style={styles.middlePara}>
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
        </View>
        <Image
          resizeMode="stretch"
          source={require('../assests/Wave.png')}
          style={styles.img}
        />
        <Image
          resizeMode="stretch"
          source={require('../assests/WhiteWave.png')}
        />
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
    fontSize: 12,
    fontWeight: '400',
    color: '#FA8832',
    width: wp('76%'),
  },
  locationBtn: {
    width: wp('80%'),
    height: hp('6%'),
    marginTop: wp('3%'),
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

  bottomButton: {
    // borderWidth: 1,
    width: wp('50%'),
    borderRadius: 10,
    height: wp('10%'),
    backgroundColor: '#FA8832',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: wp('25%'),
    marginTop: wp('80%'),
    position: 'relative',
    top: wp('10%'),
  },
  img: {
    width: wp('100%'),
    marginTop: wp('2%'),
  },
  bottomButtonText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#fff',
  },
});
export default DropOff;
