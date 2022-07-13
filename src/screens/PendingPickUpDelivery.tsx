import React from 'react';
import {TouchableOpacity} from 'react-native';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const PendingPickUpDelivery = ({
  weight,
  size,
  parcelType,
  description,
  cname,
  receiverName,
  address,
  landmark,
  phone,
  time,
  locationImage,
}: any) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <TouchableOpacity style={styles.locationBtn}>
          <Text style={styles.locationBtnText}>{address}</Text>
          <View>{locationImage}</View>
        </TouchableOpacity>

        <Text style={styles.heading}>Parcel Description</Text>
        <View style={styles.parcelDetails}>
          <View style={styles.parcelHeading}>
            <Text style={styles.parcelHeadingText}>Home Pickup</Text>
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

        <Text style={styles.heading}>Receiver Information</Text>
        <View style={styles.receiverDetails}>
          <View style={styles.parcelHeading}>
            <Text style={styles.parcelHeadingText}>Home Delivery</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.ParcelText}>Name:</Text>
            <Text style={styles.ParcelText}>{receiverName}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.ParcelText}>Address:</Text>
            <Text style={styles.ParcelText}>{address}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.ParcelText}>Landmark:</Text>
            <Text style={styles.ParcelText}>{landmark}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.ParcelText}>Phone:</Text>
            <Text style={styles.ParcelTextDes}>{phone}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.ParcelText}>Preferred Delivery Time:</Text>
            <Text style={styles.ParcelTextDes}>{time}</Text>
          </View>
        </View>

        <View style={styles.remark}>
          <Text style={styles.heading}>Remark</Text>
          <TextInput
            placeholder="Type here"
            style={styles.inputContainer}
            multiline={true}
            numberOfLines={8}
          />
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>CONFORM PICKUP</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  locationBtn: {
    width: wp('80%'),
    height: hp('6%'),
    marginTop: wp('6%'),
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
    fontSize: 14,
    fontWeight: '500',
  },
  parcelDetails: {
    marginTop: wp('3%'),
    width: wp('80%'),
    height: hp('30%'),
    paddingTop: wp('2%'),
    marginHorizontal: wp('10%'),
    borderWidth: 1,
    borderColor: '#FA8832',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  receiverDetails: {
    marginTop: wp('3%'),
    width: wp('80%'),
    height: hp('26%'),
    paddingTop: wp('2%'),
    marginHorizontal: wp('10%'),
    borderWidth: 1,
    borderColor: '#FA8832',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  heading: {
    marginTop: wp('5%'),
    marginHorizontal: wp('10%'),
    fontSize: 20,
    fontWeight: '600',
  },
  parcelHeading: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: wp('5%'),
    borderBottomWidth: 1,
    borderBottomColor: '#FA8832',
    padding: wp('1%'),
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: wp('2%'),
    paddingHorizontal: wp('5%'),
  },
  descriptionContainer: {
    // flexDirection: 'row',
    paddingTop: wp('2%'),
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
    marginTop: wp('1%'),
  },
  inputContainer: {
    width: wp('80%'),
    marginTop: wp('3%'),
    marginHorizontal: wp('10%'),
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    textAlignVertical: 'top',
  },
  btn: {
    width: wp('60%'),
    height: hp('5%'),
    marginHorizontal: wp('20%'),
    marginTop: wp('6%'),
    marginBottom: wp('8%'),
    backgroundColor: '#FA8832',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#fff',
  },
  parcelHeadingText: {
    fontSize: 17,
  },
});
export default PendingPickUpDelivery;
