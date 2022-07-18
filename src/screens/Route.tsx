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
// import CustomDropdownSmall from '../Components/CustomDropdownSmall';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Wave from '../components/Wave';

const Route = () => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <CustomDropdown
            dropdownHeading="Route"
            itemlist={['Inter-State', 'Within State']}
            onPress={() => {}}
            dropdownDefaultName="Inter-State"
          />
          <View style={styles.btn}>
            <Text style={styles.btnText}>From</Text>
          </View>
          <CustomDropdown
            dropdownHeading="State"
            itemlist={['Inter-State', 'Within State']}
            onPress={() => {}}
            dropdownDefaultName="Inter-State"
          />
          <View style={styles.dropGroup}></View>
          <View style={styles.btn}>
            <Text style={styles.btnText}>To</Text>
          </View>
          <CustomDropdown
            dropdownHeading="State"
            itemlist={['Inter-State', 'Within State']}
            onPress={() => {}}
            dropdownDefaultName="Inter-State"
          />
          <View style={styles.dropGroup}></View>

          <TouchableOpacity style={styles.bottomBtn}>
            <Text style={styles.bottomBtnText}>Search Delivery Request</Text>
          </TouchableOpacity>
        </View>
        {/* <Wave waveStyle={styles.wave} /> */}
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
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: wp('5%'),
    backgroundColor: '#FFFBF8',
  },
  dropGroup: {
    flexDirection: 'row',
    marginHorizontal: wp('10%'),
    justifyContent: 'space-between',
  },
  btn: {
    width: wp('80%'),
    height: hp('5%'),
    marginTop: wp('3%'),
    marginHorizontal: wp('10%'),
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 10,
    justifyContent: 'center',
  },
  btnText: {
    paddingLeft: wp('2%'),
    fontSize: 16,
    color: '#FA8832',
  },
  bottomBtn: {
    width: wp('45%'),
    // marginTop: wp('55%'),
    height: hp('5%'),
    marginHorizontal: wp('27.5%'),
    backgroundColor: '#FA8832',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: wp('62%'),
  },
  bottomBtnText: {
    fontSize: 16,
    color: 'white',
  },
  img: {
    width: wp('100%'),
    marginTop: wp('54%'),
  },
  whiteImg: {
    width: wp('100%'),
    marginTop: wp('52%'),
  },
  // wave: {
  //   bottom: '-90%',
  //   transform: [{rotate: '180deg'}],
  //   // zIndex: -1,
  // },
});
export default Route;
