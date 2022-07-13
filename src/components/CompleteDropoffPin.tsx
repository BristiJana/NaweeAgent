import {colors} from '../../assets/color';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Button from './partials/Button';
const img = require('../../assets/img/pin.png');

const CompleteDropoffPin = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={img} />
      <Text style={styles.heading}>PIN</Text>
      <Text style={styles.text}>
        Share this pin with the agent to complete Drop-off.
      </Text>

      <Text style={styles.otpText}>2205</Text>

      <Button width={'auto'} btnStyle={styles.btn}>
        Ok
      </Button>
    </View>
  );
};

export default CompleteDropoffPin;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 10,
    shadowColor: '#000000b0',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2.62,

    elevation: 3,
    alignItems: 'center',
  },
  img: {
    marginBottom: 8,
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 6,
    color: colors.dark,
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.primary.main,
    marginBottom: 30,
  },
  otpText: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 30,
    color: colors.dark,
  },
  btn: {
    paddingHorizontal: 53,
    paddingVertical: 10,
  },
});
