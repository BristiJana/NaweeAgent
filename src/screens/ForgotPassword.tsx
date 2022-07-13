import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Input from '../components/partials/Input';
import Nav from '../components/partials/Nav';
// import forgotPassImg from '../../assets/img/forgot-password.png';
const forgotPassImg = require('../../assets/img/forgot-password.png');
import Button from '../components/partials/Button';
import {colors} from '../../assets/color';

const ForgotPassword: React.FC<{navigation: any}> = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Nav navigation={navigation} heading={'FORGOT PASSWORD'} />

      {/* form */}
      <View style={styles.forgotPasswordForm}>
        {/* image */}
        <Image source={forgotPassImg} style={styles.img} />

        <Text style={styles.registerEmailText}>
          Please enter your registered Email
        </Text>

        <Input placeholder="Email Id" inputStyles={styles.input} />

        <Button btnStyle={styles.resetBtn}>RESET</Button>

        <Text style={styles.msge}>
          We will email you a link to reset your password
        </Text>
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    marginBottom: 70,
  },
  forgotPasswordForm: {
    width: '80%',
    backgroundColor: 'white',
    padding: 15,
    alignItems: 'center',
    marginTop: 100,
    borderRadius: 10,
    paddingBottom: 53,
  },
  registerEmailText: {
    color: colors.primary.main,
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    marginBottom: 30,
  },
  img: {
    marginTop: 20,
    marginBottom: 50,
  },
  resetBtn: {
    marginBottom: 15,
  },
  msge: {
    fontSize: 12,
  },
});
