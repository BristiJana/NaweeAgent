import {colors} from '../../assets/color';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from './partials/Button';
import ButtonSecondary from './partials/ButtonSecondary';

const OrderReviewPopup = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Important</Text>
      <Text style={styles.text}>
        Please cross-check your order thoroughly before confirming, as
        modifications and cancellations after placing an order may cost you
        extra..!!!
      </Text>
      <Button btnStyle={styles.confirmBtn}>CONFIRM & PAY</Button>
      <ButtonSecondary>Cancel</ButtonSecondary>
    </View>
  );
};

export default OrderReviewPopup;

const styles = StyleSheet.create({
  container: {
    maxWidth: 295,
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
  heading: {
    fontSize: 20,
    fontWeight: '500',
    color: colors.primary.main,
    marginBottom: 24,
  },
  text: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.dark,
    textAlign: 'center',
    marginBottom: 30,
  },
  confirmBtn: {
    marginBottom: 15,
  },
});
