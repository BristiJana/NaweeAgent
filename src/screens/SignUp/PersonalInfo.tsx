import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import useAuthState from '../../hooks/AuthState';
import Button from '../../components/partials/Button';
import Input from '../../components/partials/Input';
import SignUpLayout from './SignUpLayout';
import {signUpInfo} from '../../constant/constant';
import {colors} from '../../../assets/color';
import Select from '../../components/partials/Select';

const inputFieldData: {
  key: keyof typeof signUpInfo;
  name: string;
  options?: string[];
}[] = [
  {key: 'firstName', name: 'first name'},
  {key: 'middleName', name: 'middle name'},
  {key: 'lastName', name: 'last name'},
  {key: 'email', name: 'email id'},
  {key: 'password', name: 'password'},
  {key: 'phoneNumber', name: 'phone'},
  {
    key: 'gender',
    name: 'sex',
    options: ['Male', 'Female', 'Other', 'Prefer not to say'],
  },
  {key: 'address', name: 'address'},
  {key: 'landmark', name: 'landmark'},
  {key: 'city', name: 'city', options: ['city1', 'city2', 'city3']},
  {
    key: 'state',
    name: 'state/province',
    options: ['state1', 'state2', 'state3'],
  },
  {key: 'zipcode', name: 'zip/postal code'},
  {
    key: 'hearAboutUs',
    name: 'How did you hear about us?',
    options: ['hearAboutUs1', 'hearAboutUs2', 'hearAboutUs3'],
  },
  {key: 'latitude', name: 'latitude'},
  {key: 'longitude', name: 'longitude'},
];

const PersonalInfo: React.FC<{navigation: any}> = ({navigation}) => {
  const {handleSignUpForm, signUpForm, postSignUpForm} = useAuthState();

  const submitSignInForm = async () => {
    try {
      postSignUpForm();
      navigation.navigate('guarantorInfo');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ScrollView>
      <SignUpLayout
        navigation={navigation}
        pageHeading={'Personal Information'}
        page="1">
        {/* input fields container */}
        <View style={styles.fieldsContainer}>
          {inputFieldData.map(item => {
            const dropDown = ['gender', 'city', 'state', 'hearAboutUs'];
            return !dropDown.includes(item.key) ? (
              <Input
                key={item.key}
                label={item.name}
                placeholder="Type here.."
                handleForm={value => handleSignUpForm(item.key, value)}
                value={signUpForm[item.key].text}
                error={signUpForm[item.key].error}
                type={item.name.includes('password') ? 'password' : ''}
              />
            ) : (
              <Select
                handleForm={value => handleSignUpForm(item.key, value)}
                key={item.key}
                label={item.name}
                options={item.options ? item.options : []}
              />
            );
          })}
        </View>
        <View style={styles.btnContainer}>
          <Button onPress={submitSignInForm}>SIGN UP</Button>

          <View style={styles.signUpLinkContainer}>
            <Text style={styles.signUpText}>Don’t have an account ?</Text>
            <Text
              style={{...styles.signUpText, ...styles.signUpLink}}
              onPress={() => navigation.navigate('signIn')}>
              {' Sign In'}
            </Text>
          </View>
        </View>
      </SignUpLayout>
    </ScrollView>
  );
};

export default PersonalInfo;

const styles = StyleSheet.create({
  fieldsContainer: {
    marginTop: 15,
    marginBottom: 20,
  },
  btnContainer: {
    width: '100%',
    alignItems: 'center',
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
