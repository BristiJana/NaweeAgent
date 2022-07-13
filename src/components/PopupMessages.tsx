import {colors} from '../../assets/color';
import React from 'react';
import {Image, ImageURISource, StyleSheet, Text, View} from 'react-native';
import Button from './partials/Button';
// const img = require('../../assets/img/delivery-completed.png');

const PopupMessages: React.FC<{
  img: ImageURISource;
  heading: string;
  text: string;
}> = ({img, heading, text}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={img} />
      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.text}>{text}</Text>

      <Button width={'auto'} btnStyle={styles.btn}>
        Ok
      </Button>
    </View>
  );
};

export default PopupMessages;

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
  img: {
    marginBottom: 8,
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
    color: colors.dark,
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.primary.main,
    marginBottom: 40,
  },

  btn: {
    paddingHorizontal: 53,
    paddingVertical: 10,
  },
});
