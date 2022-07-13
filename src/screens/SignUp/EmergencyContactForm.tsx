import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Button from '../../components/partials/Button';
import ButtonSecondary from '../../components/partials/ButtonSecondary';
import Input from '../../components/partials/Input';
import UploadDocument from '../../components/partials/UploadDocument';
import {emergencyContactFormInfo} from '../../constant/constant';
import useAuthState from '../../hooks/AuthState';
import SignUpLayout from './SignUpLayout';

const inputFieldData: {
  key: keyof typeof emergencyContactFormInfo;
  name: string;
}[] = [
  {key: 'name', name: 'name'},
  // {key: 'businessName', name: 'business name'},
  {key: 'relationship', name: 'relationship'},
  {key: 'phoneNumber', name: 'phone'},
  {key: 'address', name: 'address'},
];

const EmergencyContactForm: React.FC<{navigation: any}> = ({navigation}) => {
  const {emergencyForm, handleEmergencyForm, postEmergencyForm} =
    useAuthState();

  const formSubmitHandler = () => {
    try {
      postEmergencyForm();
      navigation.navigate('businessInfo');
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <ScrollView>
      <SignUpLayout
        navigation={navigation}
        pageHeading={'Emergency Contact'}
        page={3}>
        {/* input fields container */}
        <View style={styles.fieldsContainer}>
          {inputFieldData.map(item => {
            return (
              <Input
                key={item.key}
                label={item.name}
                placeholder="Type here.."
                error={emergencyForm[item.key].error}
                handleForm={value => handleEmergencyForm(item.key, value)}
                value={emergencyForm[item.key].text}
              />
            );
          })}
          {/* document */}
          <UploadDocument docStyle={styles.documentContainer} />

          <View style={styles.btnContainer}>
            <ButtonSecondary
              width={'auto'}
              btnStyle={{...styles.btn, ...styles.backBtn}}
              onPress={() => navigation.goBack()}>
              BACK
            </ButtonSecondary>
            <Button
              width={'auto'}
              btnStyle={styles.btn}
              onPress={formSubmitHandler}>
              NEXT
            </Button>
          </View>
        </View>
      </SignUpLayout>
    </ScrollView>
  );
};

export default EmergencyContactForm;

const styles = StyleSheet.create({
  fieldsContainer: {
    // marginTop: 15,
    marginBottom: 20,
  },

  documentContainer: {
    marginBottom: 90,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btn: {
    paddingHorizontal: 43,
  },
  backBtn: {
    marginRight: 5,
  },
});
