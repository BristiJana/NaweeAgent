import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ImageBackground,
} from 'react-native';
import DeliveryOption from '../components/DeliveryOption';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const YourDeliveries = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/upperWhiteWave.png')}
          style={styles.bgImageWhite}
          resizeMode="stretch">
          <Image
            source={require('../assets/Subtract.png')}
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
                source={require('../assets/pickup.png')}
              />
            }
          />
          <DeliveryOption
            deliveryStatus="On-Going Deliveries"
            noOfDeliveries="(15)"
            image={
              <Image
                style={styles.imgStyle}
                source={require('../assets/ongoing.png')}
              />
            }
          />
          <DeliveryOption
            deliveryStatus="Completed Deliveries"
            noOfDeliveries="(15)"
            image={
              <Image
                style={styles.imgStyle}
                source={require('../assets/completed.png')}
              />
            }
          />
        </View>
        <Image
          resizeMode="stretch"
          source={require('../assets/Wave.png')}
          style={styles.img}
        />
        <Image
          resizeMode="stretch"
          source={require('../assets/WhiteWave.png')}
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
