import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const SelectRoute = () => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <TouchableOpacity style={styles.btn}>
            <View style={styles.card}>
              <FontAwesome5 name="map-marker-alt" color="#FA8832" />
              <Text style={styles.cardHeader}>Select Route</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    // elevation: 10,
    marginHorizontal: wp('10%'),
    marginTop: hp('5%'),
  },
  btn: {
    elevation: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  card: {
    height: hp('5%'),
    width: wp('80%'),
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardHeader: {
    paddingLeft: wp('5%'),
  },
});
export default SelectRoute;
