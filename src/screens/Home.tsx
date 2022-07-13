import Layout from '../components/partials/Layout';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import NotificationBell from '../components/icons/NotificationBell';
const img1 = require('../../assets/img/home-img-1.png');
const img2 = require('../../assets/img/home-img-2.png');
const img3 = require('../../assets/img/home-img-3.png');
const img4 = require('../../assets/img/home-img-4.png');
const waveImg = require('../../assets/img/wave.png');
const whiteWaveImg = require('../../assets/img/white-wave.png');

const data = [
  {
    img: img1,
    text: 'Send Parcel',
    link: '',
  },
  {
    img: img2,
    text: 'Recieve Parcel',
    link: '',
  },
  {
    img: img3,
    text: 'Release Parcel',
    link: '',
  },
  {
    img: img4,
    text: 'Emergency Drop-off',
    link: '',
  },
];

const Home: React.FC<{navigation: any}> = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.wave}>
        <Image
          style={{...styles.waveTop, ...styles.waveItem}}
          source={waveImg}
        />
        <Image
          style={{...styles.whiteWave, ...styles.waveItem}}
          source={whiteWaveImg}
        />
      </View>

      {/* <View style={{...styles.wave, ...styles.bottomWaveContainer}}>
        <Image
          style={{...styles.waveTop, ...styles.waveItem}}
          source={waveImg}
        />
        <Image
          style={{...styles.whiteWave, ...styles.waveItem}}
          source={whiteWaveImg}
        />
      </View> */}

      <Layout
        navigation={navigation}
        innerContainerStyle={styles.innerContainer}
        navHeading="Home"
        navIcon={<NotificationBell />}>
        {/* image container */}
        <View style={styles.imgContainer}>
          {data.slice(0, 2).map((item, i) => {
            return (
              <View style={styles.imgInnerContainer} key={i}>
                <Image source={item.img} />
                <Text style={styles.text}>{item.text}</Text>
              </View>
            );
          })}
        </View>
        <View style={styles.imgContainer}>
          {data.slice(2, 4).map((item, i) => {
            return (
              <View style={styles.imgInnerContainer} key={i}>
                <Image source={item.img} />
                <Text style={styles.text}>{item.text}</Text>
              </View>
            );
          })}
        </View>
      </Layout>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  innerContainer: {
    marginTop: 170,
  },
  imgContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 13,
  },
  imgInnerContainer: {
    position: 'relative',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    position: 'absolute',
    bottom: 20,
    width: '90%',
  },
  wave: {
    position: 'absolute',
    // top: 0,
    right: 0,
    width: '100%',
    height: 220,
  },
  bottomWaveContainer: {
    position: 'absolute',
    left: 0,
    bottom: -100,
    transform: [{rotate: '180deg'}],
  },
  waveItem: {
    width: '100%',
    position: 'absolute',
  },
  waveTop: {
    zIndex: 5,
    height: '95%',
  },
  whiteWave: {
    top: -10,
  },
});
