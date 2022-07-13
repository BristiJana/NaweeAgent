import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const DeliveryDetails = ({
  customerName,
  amount,
  date,
  Address,
  weight,
  size,
  parcelType,
  description,
  cname,
}: any) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.upperSection}>
          <View style={styles.textContainer}>
            <View>
              <Text style={styles.customerName}>{customerName}</Text>
              <Text style={styles.status}>PACKAGE DELIVERED</Text>
            </View>
            <Text style={styles.amount}>₦ {amount}</Text>
          </View>
        </View>
        <View style={styles.pickupDetails}>
          <Image
            source={require('../assests/location.png')}
            style={styles.locationImg}
          />
          <View>
            <View style={styles.timeDetails}>
              <Text style={styles.picked}>Picked</Text>
              <Text style={styles.dateText}> on {date}</Text>
            </View>
            <View style={styles.address}>
              <Text style={styles.addressText}>{Address}</Text>
            </View>
            <View style={styles.customerDetails}>
              <Text style={styles.customerText}>Name:</Text>
              <Text style={styles.customerText}>{customerName}</Text>
            </View>
          </View>
        </View>

        <View style={styles.pickupDetails}>
          <Image
            source={require('../assests/LocationImgone.png')}
            style={styles.locationImg}
          />
          <View>
            <View style={styles.timeDetails}>
              <Text style={styles.picked}>Delivered</Text>
              <Text style={styles.dateText}> on {date}</Text>
            </View>
            <View style={styles.address}>
              <Text style={styles.addressText}>{Address}</Text>
            </View>
            <View style={styles.customerDetails}>
              <Text style={styles.customerText}>Name:</Text>
              <Text style={styles.customerText}>{customerName}</Text>
            </View>
          </View>
        </View>

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
    </SafeAreaView>
  );
};
const styles: any = StyleSheet.create({
  upperSection: {
    backgroundColor: '#FA8832',
    height: hp('13%'),
  },
  textContainer: {
    width: wp('80%'),
    marginHorizontal: wp('10%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: wp('5%'),
  },
  customerName: {
    fontSize: 22,
    fontWeight: '500',
    color: '#fff',
  },
  amount: {
    fontSize: 16,
    fontWeight: '400',
    color: '#fff',
  },
  status: {
    fontSize: 12,
    fontWeight: '400',
    color: '#fff',
  },
  pickupDetails: {
    width: wp('80%'),
    height: hp('13.5%'),
    marginHorizontal: wp('10%'),
    backgroundColor: '#fff',
    elevation: 10,
    marginTop: wp('7%'),
    borderRadius: 10,
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    // alignItems: 'center',
    paddingHorizontal: wp('12%'),
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
    fontSize: 13,
    fontWeight: '700',
  },
  dateText: {
    fontSize: 13,
    fontWeight: '400',
    paddingHorizontal: wp('.5%'),
  },
  addressText: {
    fontSize: 15,
    fontWeight: '700',
  },
  customerText: {
    fontSize: 15,
    fontWeight: '400',
  },
  parcelDetails: {
    marginTop: wp('5%'),
    width: wp('80%'),
    height: hp('32%'),
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
  ParcelHeadingText: {
    fontSize: 15,
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
    fontSize: 15,
    fontWeight: '400',
  },
  ParcelTextDes: {
    marginTop: wp('2%'),
  },
});
export default DeliveryDetails;
