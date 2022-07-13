import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SwitchTab from '../../Components/SwitchTab';

const ReleaseParcelAgent = ({}) => {
  const [activeTab, setActiveTab] = useState('Agent');
  return (
    <SafeAreaView style={styles.container}>
      <SwitchTab
        activeTab={activeTab}
        setactiveTab={setActiveTab}
        leftoption="Agent"
        rightoption="Customer"
      />
      <View style={styles.content}>
        <Text style={styles.heading}>Parcel ID</Text>
        <TextInput style={styles.inputStyle} />
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>CONFIRM</Text>
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
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: wp('5%'),
  },
  content: {
    marginTop: wp('5%'),
  },
  heading: {
    fontSize: 18,
    fontWeight: '500',
    marginHorizontal: wp('10%'),
    marginBottom: wp('3%'),
    marginTop: wp('3%'),
  },
  inputStyle: {
    width: wp('80%'),
    marginHorizontal: wp('10%'),
    borderWidth: 1,
    borderColor: '#FA8832',
    borderRadius: 12,
    fontSize: 16,
    paddingHorizontal: wp('3%'),
  },
  btn: {
    width: wp('38%'),
    height: hp('5%'),
    backgroundColor: '#FA8832',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: wp('31%'),
    borderRadius: 10,
    position: 'relative',
    top: wp('110%'),
  },
  btnText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '400',
  },
  img: {
    width: wp('100%'),
    marginTop: wp('105%'),
  },
});
export default ReleaseParcelAgent;
