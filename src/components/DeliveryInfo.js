import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import CustomButton from './CustomButton';

const DeliveryInfo = ({
  senderArea,
  senderState,
  ReceiverArea,
  ReceiverState,
  description,
}) => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.card}>
            <View style={styles.sender}>
              <Text style={{fontSize: 16, fontWeight: '400'}}>Sender:</Text>
              <Text style={styles.senderDetails}>
                {senderArea}, {senderState}
              </Text>
            </View>
            <View style={styles.receiver}>
              <Text style={{fontSize: 16, fontWeight: '400'}}>Receiver:</Text>
              <Text style={styles.receiverDetails}>
                {ReceiverArea}, {ReceiverState}
              </Text>
            </View>
            <View style={styles.description}>
              <Text style={{fontSize: 16, fontWeight: '400'}}>
                Description:
              </Text>
              <Text style={styles.descriptionText}>{description}</Text>
            </View>
            <CustomButton
              name="ACCEPT"
              bgcolor="#FA8832"
              width={wp('30%')}
              height={hp('4.5%')}
              fontcolor="#fff"
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: wp('5%'),
    marginHorizontal: wp('10%'),
    marginBottom: wp('2%'),
  },
  card: {
    width: wp('80%'),
    height: hp('25%'),
    backgroundColor: '#fff',
    elevation: 10,
    borderRadius: 10,
  },
  sender: {
    height: hp('5%'),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: wp('6%'),
    backgroundColor: 'rgba(250, 136, 50, 0.1)',
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  senderDetails: {
    paddingHorizontal: wp('12%'),
    fontSize: 16,
    fontWeight: '400',
  },
  receiver: {
    height: hp('5%'),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: wp('6%'),
    // backgroundColor: 'skyblue'
  },
  receiverDetails: {
    paddingHorizontal: wp('9%'),
    fontSize: 16,
    fontWeight: '400',
  },
  description: {
    height: hp('6%'),
    flexDirection: 'row',
    marginHorizontal: wp('6%'),
    // backgroundColor: 'skyblue',
  },
  descriptionText: {
    width: wp('45%'),
    paddingHorizontal: wp('3.2%'),
    fontSize: 16,
    fontWeight: '400',
    display: 'flex',
    // justifyContent: 'flex-end',
    // alignItems: 'flex-end',
  },
});
export default DeliveryInfo;
