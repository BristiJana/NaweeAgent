import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Button = ({btnText}) => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.button}>
            <Text style={styles.text}>{btnText}</Text>
          </View>
          <TouchableOpacity style={styles.btn}>
            <View style={styles.arrowImg}>
              <Image
                source={require('../assests/arrow.png')}
                style={styles.arrow}
              />
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp('12%'),
    // marginTop: hp('2%'),
  },
  button: {
    width: wp('76%'),
    height: hp('7%'),
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: wp('5%'),
    borderRadius: 10,
    elevation: 10,
  },
  btn: {
    height: hp('4%'),
    width: wp('6%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 55,
    elevation: 10,
    backgroundColor: '#fff',
    position: 'relative',
    bottom: hp('5.5%'),
    left: wp('73%'),
  },
});
export default Button;
