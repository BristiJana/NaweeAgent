import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const DeliveryOption = ({image, deliveryStatus, noOfDeliveries}: any) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn}>
          <ImageBackground
            style={styles.btnBack}
            source={require('../assets/DeliveryBg.png')}>
            {image}
          </ImageBackground>
          <Text style={styles.deliveryStatus}>
            {deliveryStatus} {'\n'} {noOfDeliveries}
          </Text>
          {/* <Text style={styles.noOfDeliveries}>{}</Text> */}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    // marginTop: wp('20%'),
  },
  btn: {
    width: wp('80%'),
    marginHorizontal: wp('10%'),
    marginTop: wp('6%'),
    borderWidth: 1,
    height: hp('10%'),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 6,
    borderColor: '#FA8832',
  },
  btnBack: {
    width: wp('35%'),
    height: hp('10%'),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
  },
  deliveryStatus: {
    fontSize: 16,
    textAlign: 'center',
  },
  noOfDeliveries: {
    fontSize: 16,
  },
});
export default DeliveryOption;
