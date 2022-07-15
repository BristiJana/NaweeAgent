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
import HomeButton from '../components/HomeButton';

const AgentHome = ({}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.btnContainer}>
        <HomeButton btnText="Select Route" />
        <HomeButton btnText="Your Deliveries" />
        <HomeButton btnText="Emergency Drop-Off Request" />
      </View>
      <Image
        resizeMode="stretch"
        source={require('../assets/Wave.png')}
        style={styles.img}
      />
      <Image resizeMode="stretch" source={require('../assets/WhiteWave.png')} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  img: {
    width: wp('100%'),
    marginTop: wp('55%'),
  },
  btnContainer: {
    marginTop: wp('40%'),
  },
});
export default AgentHome;
