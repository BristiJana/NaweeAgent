import Layout from '../components/partials/Layout';
import React, {useEffect} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import NotificationBell from '../components/icons/NotificationBell';
import Wave from '../components/Wave';
import {colors} from '../../assets/color';
const img1 = require('../../assets/img/home-img-1.png');
const img2 = require('../../assets/img/home-img-2.png');
const img3 = require('../../assets/img/home-img-3.png');
const img4 = require('../../assets/img/home-img-4.png');
// const waveImg = require('../../assets/img/wave.png');
// const whiteWaveImg = require('../../assets/img/white-wave.png');

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

const NotificationCount = () => {
  return (
    <View style={styles.notificationContainer}>
      <Text style={styles.notificationCount}>3</Text>
    </View>
  );
};

const Home: React.FC<{navigation: any}> = ({navigation}) => {
  return (
    // <ScrollView>
    <Layout
      navigation={navigation}
      innerContainerStyle={styles.innerContainer}
      navHeading="Home"
      navIcon={<NotificationBell />}>
      {/* parcel container */}
      <Wave waveStyle={{...styles.wave, ...styles.waveTop}} />
      <Wave waveStyle={{...styles.wave, ...styles.waveBottom}} />
      <View>
        <View style={styles.imgContainer}>
          {data.slice(0, 2).map((item, i) => {
            return (
              <View
                style={{
                  ...styles.imgInnerContainer,
                  marginRight:
                    i === 0
                      ? styles.imgInnerContainerMargin.marginRight
                      : styles.noMargin.margin,
                }}
                key={i}>
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
                {item.text.includes('Emergency') && <NotificationCount />}
              </View>
            );
          })}
        </View>
      </View>
    </Layout>
    // </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  innerContainer: {
    height: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9,
    width: '100%',
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
  imgInnerContainerMargin: {
    marginRight: 13,
  },
  noMargin: {
    margin: 0,
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
    top: '-13%',
  },
  waveBottom: {
    transform: [{rotate: '180deg'}],
    bottom: '-13%',
  },

  notificationContainer: {
    width: 14,
    height: 14,
    backgroundColor: colors.danger,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 6,
    right: 6,
  },
  notificationCount: {
    fontSize: 10,
    fontWeight: '400',
    color: colors.white,
  },
});
