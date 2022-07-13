import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SelectRoute from '../Components/SelectRoute';
import HomeCard from '../Components/HomeCard';
import Button from '../Components/Button';

const Home = () => {
  return (
    <>
      <SafeAreaView>
        <SelectRoute />
        <View style={styles.middleSection}>
          <HomeCard
            style={styles.cardOne}
            para="Delivery Request Near You"
            requestNo="(15)"
            picture={<Image source={require('../assests/HomeImgOne.png')} />}
          />
          <HomeCard
            style={styles.cardTwo}
            para="Delivery Request from Booth Near You"
            requestNo="(15)"
            picture={<Image source={require('../assests/HomeImgTwo.png')} />}
          />
        </View>
        <Button btnText="Your Deliveries" />
        <Button btnText="Emergency Drop-Off Request" />
        {/* <Image
          resizeMode="stretch"
          source={require('../assests/Wave.png')}
          style={styles.img}
        />
        <Image
          resizeMode="stretch"
          source={require('../assests/WhiteWave.png')}
          style={styles.whiteImg}
        /> */}
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  middleSection: {
    width: wp('85%'),
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: wp('8%'),
  },
  // img: {
  //   width: wp('100%'),
  //   marginTop: wp('44%'),
  // },
  // whiteImg: {
  //   width: wp('100%'),
  //   marginTop: wp('42%'),
  // },
});
export default Home;
