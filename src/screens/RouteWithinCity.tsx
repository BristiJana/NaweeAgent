import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import CustomDropdown from '../components/CustomDropdown';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const RouteWithinCity = () => {
  return (
    <SafeAreaView>
      <CustomDropdown
        dropdownHeading="Route"
        itemlist={['Inter-State', 'Within State']}
        onPress={() => {}}
        dropdownDefaultName="Within State"
      />
      <CustomDropdown
        dropdownHeading="State"
        itemlist={['Inter-State', 'Within State']}
        onPress={() => {}}
        dropdownDefaultName="Select State"
      />

      <TouchableOpacity style={styles.bottomBtn}>
        <Text style={styles.bottomBtnText}>Search Delivery Request</Text>
      </TouchableOpacity>
      <Image
        resizeMode="stretch"
        source={require('../assets/Wave.png')}
        style={styles.img}
      />
      <Image
        resizeMode="stretch"
        source={require('../assets/WhiteWave.png')}
        style={styles.whiteImg}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  
  bottomBtn: {
    width: wp('48%'),
    // marginTop: wp('38%'),
    height: hp('5%'),
    marginHorizontal: wp('26%'),
    backgroundColor: '#FA8832',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: wp('112%'),
  },
  bottomBtnText: {
    fontSize: 16,
    color: 'white',
  },
  img: {
    width: wp('100%'),
    marginTop: wp('105%'),
  },
  whiteImg: {
    width: wp('100%'),
    marginTop: wp('32%'),
  },
});
export default RouteWithinCity;
