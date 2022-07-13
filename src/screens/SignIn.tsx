import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

import Input from '../components/partials/Input';

const loginImg = require('../../assets/img/login-delivery-img.jpg');
import Button from '../components/partials/Button';
import useAuthState from '../hooks/AuthState';
import Layout from '../components/partials/Layout';
import {colors} from '../../assets/color';

const SignIn: React.FC<{navigation: any}> = ({navigation}) => {
  const {handleSignInForm, postSignInForm, signInForm} = useAuthState();

  const submitSignInForm = async () => {
    try {
      const res = await postSignInForm();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ScrollView>
      <Layout navHeading="LOGIN">
        {/* image */}
        <View style={styles.imageContainer}>
          <Image source={loginImg} style={styles.image} />
        </View>

        {/* form */}
        <View style={styles.loginForm}>
          {/* email container */}

          <Input
            label="Email Id"
            placeholder={'Email Id'}
            error={signInForm.email.error}
            value={signInForm.email.text}
            handleForm={value => handleSignInForm('email', value)}
            marginBottom={30}
          />

          <Input
            label="Password"
            placeholder={'Password'}
            error={signInForm.password.error}
            value={signInForm.password.text}
            handleForm={value => handleSignInForm('password', value)}
            type="password"
          />

          <Text
            style={styles.forgotpass}
            onPress={() => navigation.navigate('forgotPassword')}>
            Forgot Password?
          </Text>

          <Button btnStyle={styles.loginBtn} onPress={submitSignInForm}>
            Log in
          </Button>

          <View style={styles.signUpLinkContainer}>
            <Text style={styles.signUpText}>Don’t have an account ?</Text>
            <Text
              style={{...styles.signUpText, ...styles.signUpLink}}
              onPress={() => navigation.navigate('personalInfo')}>
              {' Sign Up'}
            </Text>
          </View>
        </View>
      </Layout>
      {/* </View> */}
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 80,
  },
  image: {
    height: 228,
    width: 260,
  },
  loginForm: {
    alignItems: 'center',
  },

  loginBtn: {
    marginTop: 30,
  },
  forgotpass: {
    color: colors.primary.main,
    marginTop: 12,
    marginLeft: 'auto',
  },
  signUpLinkContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  signUpText: {fontSize: 12, fontWeight: '400'},
  signUpLink: {
    color: colors.primary.main,
  },
});
