import React from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const HomeCard = ({para, requestNo, picture}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.card}>
          {picture}
          <View style={styles.textContainer}>
            <Text style={styles.text}>{para}</Text>
            <Text style={styles.request}>{requestNo}</Text>
          </View>
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
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: hp('5%'),
    marginHorizontal: wp('10%'),
    // borderRadius: 10,
  },
  card: {
    width: wp('33%'),
    height: hp('23%'),
    elevation: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {},
  btn: {
    height: hp('4%'),
    width: wp('6%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    elevation: 10,
    backgroundColor: '#fff',
    position: 'relative',
    bottom: hp('14%'),
    left: wp('30%'),
  },
  textContainer: {
    alignItems: 'center',
    position: 'relative',
    top: hp('2%'),
  },
  text: {
    textAlign: 'center',
    paddingHorizontal: wp('2%')
  },
  request: {
    color: '#FA8832',
  },
  image: {
    position: 'relative',
    bottom: hp('1.5%'),
  },
  requestNo: {},
});
export default HomeCard;
