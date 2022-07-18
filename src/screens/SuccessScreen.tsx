import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

// import img from '../assets/img/account-created-img.png';
const img = require('../../assets/img/account-created-img.png');
import Button from '../components/partials/Button';
import {colors} from '../../assets/color';
import Layout from '../components/partials/Layout';

const SuccessScreen: React.FC<{navigation: any}> = ({navigation}) => {
  return (
    <Layout navHeading="SIGN UP" navigation={navigation} hideIcon>
      <View style={styles.card}>
        <Image source={img} style={styles.img} />
        <Text style={styles.successHeading}>Success..!!!</Text>
        <Text style={styles.text}>
          Your Account has been successfully created, we will notify you when
          verification is completed.
        </Text>
        <Button width={130}>OK</Button>
      </View>
    </Layout>
  );
};

export default SuccessScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    alignItems: 'center',
    marginTop: 110,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 75,
    paddingVertical: 10,
    paddingBottom: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.62,
    elevation: 2,
  },
  img: {
    marginBottom: 15,
  },
  successHeading: {
    fontSize: 16,
    color: colors.primary.main,
    fontWeight: '700',
    marginBottom: 15,
  },
  text: {
    fontSize: 12,
    fontWeight: '400',
    marginBottom: 30,
    textAlign: 'center',
  },
});
