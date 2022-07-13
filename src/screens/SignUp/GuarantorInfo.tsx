import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Button from '../../components/partials/Button';
import ButtonSecondary from '../../components/partials/ButtonSecondary';
import Input from '../../components/partials/Input';
import UploadDocument from '../../components/partials/UploadDocument';
import {guarantorInfo} from '../../constant/constant';
import useAuthState from '../../hooks/AuthState';
import SignUpLayout from './SignUpLayout';

const inputFieldData: {key: keyof typeof guarantorInfo; name: string}[] = [
  {key: 'name', name: 'name'},
  {key: 'businessName', name: 'business name'},
  {key: 'phoneNumber', name: 'phone'},
  {key: 'address', name: 'address'},
];

const GuarantorInfo: React.FC<{navigation: any}> = ({navigation}) => {
  const {guarantorForm, handleGuarantorForm, postGuarantorForm} =
    useAuthState();

  const formSubmitHandler = () => {
    try {
      postGuarantorForm();
      navigation.navigate('emergencyContact');
    } catch (err) {}
  };

  return (
    <ScrollView>
      <SignUpLayout
        navigation={navigation}
        page={'2'}
        pageHeading="Guarantors Information">
        {/* input fields container */}
        <View style={styles.fieldsContainer}>
          {inputFieldData.map(item => {
            return (
              <Input
                key={item.key}
                label={item.name}
                placeholder="Type here.."
                error={guarantorForm[item.key].error}
                handleForm={value => handleGuarantorForm(item.key, value)}
                value={guarantorForm[item.key].text}
              />
            );
          })}
          {/* document */}
          <UploadDocument docStyle={styles.documentContainer} />

          <View style={styles.btnContainer}>
            <ButtonSecondary
              width={'auto'}
              btnStyle={{...styles.btn, ...styles.backBtn}}>
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

export default GuarantorInfo;

const styles = StyleSheet.create({
  fieldsContainer: {
    // marginTop: 15,
    marginBottom: 20,
  },
  inputField: {
    marginBottom: 15,
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
