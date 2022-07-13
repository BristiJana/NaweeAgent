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

const IntransitDeliveries = ({
  weight,
  size,
  parcelType,
  description,
  cname,
  date,
  address,
  locationImage,
}) => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.mainHeading}>Parcel Description</Text>
        <View style={styles.parcelDetails}>
          <View style={styles.parcelHeading}>
            <Text style={styles.ParcelHeadingText}>Parcel</Text>
            <Text style={styles.ParcelHeadingText}>Home Pickup</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.ParcelText}>Weight:</Text>
            <Text style={styles.ParcelText}>{weight}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.ParcelText}>Size:</Text>
            <Text style={styles.ParcelText}>{size}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.ParcelText}>Parcel Type:</Text>
            <Text style={styles.ParcelText}>{parcelType}</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.ParcelText}>Description:</Text>
            <Text style={styles.ParcelTextDes}>{description}</Text>
          </View>
          <Text style={styles.instruction}>
            Special Instructions: Please hand it over to Mr. {cname}
            only.
          </Text>
        </View>
      </View>

      <View style={styles.pickupDetails}>
        <Image
          source={require('../assests/location.png')}
          style={styles.locationImg}
        />
        <View>
          <View style={styles.timeDetails}>
            <Text style={styles.picked}>Delivered</Text>
            <Text style={styles.dateText}>on {date}</Text>
          </View>
          <View style={styles.address}>
            <Text style={styles.addressText}>{address}</Text>
          </View>
        </View>
      </View>
      <Text style={styles.booth}>Booth:</Text>
      <TouchableOpacity style={styles.locationBtn}>
        <Text style={styles.locationBtnText}>{address}</Text>
        <View>{locationImage}</View>
      </TouchableOpacity>

      <Text style={styles.botoomText}>
        You should be able to reach your destination in 45mins.
      </Text>
      <Text style={styles.botoomText}>
        You should be able to reach your destination in 57mins, you may
        experience heavy traffic in this route.
      </Text>

      <TouchableOpacity style={styles.submitBtn}>
        <Text style={styles.submitBtnText}>START DELIVERY</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Unable to get to your destination ?
        </Text>
        <TouchableOpacity>
          <Text style={styles.footerBtnText}>Emergency Drop-Off</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainHeading: {
    marginHorizontal: wp('10%'),
    marginTop: wp('5%'),
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
  },
  parcelDetails: {
    marginTop: wp('2.5%'),
    width: wp('80%'),
    height: hp('30%'),
    paddingTop: wp('2%'),
    marginHorizontal: wp('10%'),
    borderWidth: 1,
    borderColor: '#FA8832',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  parcelHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp('5%'),
    borderBottomWidth: 1,
    borderBottomColor: '#FA8832',
    padding: wp('1%'),
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: wp('3%'),
    paddingHorizontal: wp('5%'),
  },
  descriptionContainer: {
    paddingTop: wp('4%'),
    paddingHorizontal: wp('5%'),
  },
  instruction: {
    paddingHorizontal: wp('5%'),
    fontSize: 12,
    fontWeight: '400',
    color: '#FA8832',
    marginTop: wp('3%'),
  },
  ParcelText: {
    fontSize: 14,
    fontWeight: '400',
  },
  ParcelTextDes: {
    marginTop: wp('1%'),
  },
  pickupDetails: {
    width: wp('80%'),
    height: hp('8.5%'),
    marginHorizontal: wp('10%'),
    backgroundColor: '#fff',
    elevation: 10,
    marginTop: wp('5%'),
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: wp('12%'),
    marginBottom: wp('5%'),
  },
  locationImg: {
    position: 'relative',
    right: wp('6%'),
    top: wp('5%'),
  },
  timeDetails: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: wp('3%'),
  },
  address: {
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: wp('2%'),
  },
  customerDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: wp('3%'),
  },
  picked: {
    fontSize: 12,
    fontWeight: '700',
  },
  dateText: {
    fontSize: 12,
    fontWeight: '400',
    paddingHorizontal: wp('.5%'),
  },
  addressText: {
    fontSize: 12,
    fontWeight: '700',
  },
  customerText: {
    fontSize: 14,
    fontWeight: '400',
  },
  booth: {
    marginHorizontal: wp('10%'),
    fontSize: 14,
    fontWeight: '400',
  },
  locationBtn: {
    width: wp('80%'),
    height: hp('6%'),
    marginTop: wp('2%'),
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
  botoomText: {
    marginHorizontal: wp('10.5%'),
    marginTop: wp('3%'),
    marginBottom: wp('2%'),
    fontSize: 12,
    color: '#FA8832',
  },
  submitBtn: {
    width: wp('60%'),
    height: hp('5%'),
    backgroundColor: '#FA8832',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: wp('20%'),
    marginTop: wp('7%'),
  },
  submitBtnText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#fff',
  },
  footer: {
    width: wp('50%'),
    marginHorizontal: wp('26%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: wp('5%'),
  },
  footerBtnText: {
    color: '#FA8832',
    borderBottomWidth: 1,
    borderColor: '#FA8832',
  },
});
export default IntransitDeliveries;
