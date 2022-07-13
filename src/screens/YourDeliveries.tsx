import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ImageBackground,
} from 'react-native';
import DeliveryOption from '../Components/DeliveryOption';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const YourDeliveries = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ImageBackground
          source={require('../assests/upperWhiteWave.png')}
          style={styles.bgImageWhite}
          resizeMode="stretch">
          <Image
            source={require('../assests/Subtract.png')}
            style={styles.bgImage}
            resizeMode="stretch"
          />
        </ImageBackground>
        <View style={styles.optionContainer}>
          <DeliveryOption
            deliveryStatus="Pending Pick-Up"
            noOfDeliveries="(15)"
            image={
              <Image
                style={styles.imgStyle}
                source={require('../assests/pickup.png')}
              />
            }
          />
          <DeliveryOption
            deliveryStatus="On-Going Deliveries"
            noOfDeliveries="(15)"
            image={
              <Image
                style={styles.imgStyle}
                source={require('../assests/ongoing.png')}
              />
            }
          />
          <DeliveryOption
            deliveryStatus="Completed Deliveries"
            noOfDeliveries="(15)"
            image={
              <Image
                style={styles.imgStyle}
                source={require('../assests/completed.png')}
              />
            }
          />
        </View>
        <Image
          resizeMode="stretch"
          source={require('../assests/Wave.png')}
          style={styles.img}
        />
        <Image
          resizeMode="stretch"
          source={require('../assests/WhiteWave.png')}
          style={styles.whiteImg}
        />
      </View>
    </SafeAreaView>
  );
};
const styles: any = StyleSheet.create({
  container: {},
  bgImage: {
    width: wp('100%'),
  },
  bgImageWhite: {
    width: wp('100%'),
  },
  img: {
    width: wp('100%'),
    marginTop: wp('42%'),
  },
  whiteImg: {
    width: wp('100%'),
    marginTop: wp('40%'),
  },
  optionContainer: {
    marginTop: wp('10%'),
  },
});
export default YourDeliveries;
