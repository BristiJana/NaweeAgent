import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SwitchTab from '../../Components/SwitchTab';

const ReParcelAgent = ({
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
  email,
  pickup,
  agentId,
}: any) => {
  const [activeTab, setActiveTab] = useState('Agent');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <SwitchTab
          activeTab={activeTab}
          setactiveTab={setActiveTab}
          leftoption="Agent"
          rightoption="Customer"
        />
        <View style={styles.content}>
          <Text style={styles.heading}>Parcel ID</Text>
          <Text style={styles.parcelStyle}>PAR576</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.para}>
            Estimated Time of Delivery: 3-4 days, should reach the destination
            by 2nd Mar 2022
          </Text>
          <Text style={styles.para}>
            {activeTab === 'Agent' ? (
              <Text>
                This parcel pickup request was accepted by Agent Vincent. Agent
                Id -{agentId}
              </Text>
            ) : (
              <Text>
                This parcel has reached its final destination, the receiver
                shall collect it soon.
              </Text>
            )}
          </Text>
        </View>

        <Text style={styles.header}>Parcel Description</Text>
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

        <Text style={styles.heading}>Sender Information</Text>
        <View style={styles.receiverDetails}>
          <View style={styles.detailsContainer}>
            <Text style={styles.ParcelText}>Name:</Text>
            <Text style={styles.ParcelText}>{receiverName}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.ParcelText}>Email:</Text>
            <Text style={styles.ParcelText}>{email}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.ParcelText}>Phone:</Text>
            <Text style={styles.ParcelText}>{phone}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.ParcelText}>Pick-up:</Text>
            <Text style={styles.ParcelTextDes}>{pickup}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.ParcelText}>Address:</Text>
            <Text style={styles.ParcelTextDes}>{address}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.ParcelText}>Preferred Delivery Time:</Text>
            <Text style={styles.ParcelTextDes}>{time}</Text>
          </View>
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
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>CONFIRM</Text>
        </TouchableOpacity>
        <Image
          resizeMode="stretch"
          source={require('../assests/Wave.png')}
          style={styles.img}
        />
        {/* <Image
          resizeMode="stretch"
          source={require('../assests/WhiteWave.png')}
        /> */}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles: any = StyleSheet.create({
  container: {
    marginTop: wp('5%'),
  },
  heading: {
    fontSize: 18,
    fontWeight: '500',
    marginHorizontal: wp('10%'),
    // marginBottom: wp('1%'),
    marginTop: wp('5%'),
  },
  parcelStyle: {
    width: wp('80%'),
    height: hp('6%'),
    marginHorizontal: wp('10%'),
    borderWidth: 1,
    borderColor: '#FA8832',
    borderRadius: 12,
    fontSize: 16,
    paddingHorizontal: wp('3%'),
    textAlignVertical: 'center',
  },
  textContainer: {
    width: wp('78%'),
    marginHorizontal: wp('11%'),
    marginTop: wp('2%'),
  },
  para: {
    marginTop: wp('1%'),
    fontSize: 11,
    color: '#FA8832',
  },
  btn: {
    width: wp('35%'),
    height: hp('5%'),
    backgroundColor: '#FA8832',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: wp('32.5%'),
    borderRadius: 10,
    position: 'relative',
    top: wp('5%'),
  },
  btnText: {
    fontSize: 16,
    color: '#fff',
  },
  img: {
    width: wp('100%'),
    marginTop: wp('5%'),
    // height: wp('20%'),
  },
  header: {
    marginTop: wp('5%'),
    marginHorizontal: wp('10%'),
    fontSize: 20,
    fontWeight: '600',
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
  content: {
    marginTop: wp('8%'),
  },
});
export default ReParcelAgent;
