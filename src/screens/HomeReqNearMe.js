import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import DeliveryReqBtn from '../Components/DeliveryReqBtn';
import DeliveryInfo from '../Components/DeliveryInfo';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const HomeReqNearMe = ({}) => {
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <DeliveryReqBtn
            para="Delivery Request from Booth Near you"
            number="(15)"
            image={
              <Image
                source={require('../assests/HomeImgTwo.png')}
                style={styles.img}
              />
            }
          />
          <DeliveryInfo
            senderArea="Area"
            senderState="State"
            ReceiverArea="Area"
            ReceiverState="State"
            description="1 Laptop Pack with 1 hp laptop bag (2kg)"
          />
          <DeliveryInfo
            senderArea="Area"
            senderState="State"
            ReceiverArea="Area"
            ReceiverState="State"
            description="1 Laptop Pack"
          />
          <DeliveryInfo
            senderArea="Area"
            senderState="State"
            ReceiverArea="Area"
            ReceiverState="State"
            description="1 Laptop Pack"
          />
          <DeliveryInfo
            senderArea="Area"
            senderState="State"
            ReceiverArea="Area"
            ReceiverState="State"
            description="1 Laptop Pack"
          />
          <DeliveryInfo
            senderArea="Area"
            senderState="State"
            ReceiverArea="Area"
            ReceiverState="State"
            description="1 Laptop Pack"
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  img: {
    width: wp('4%'),
    height: hp('3.5%'),
  },
});
export default HomeReqNearMe;
