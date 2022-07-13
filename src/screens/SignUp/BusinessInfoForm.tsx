import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Button from '../../components/partials/Button';
import ButtonSecondary from '../../components/partials/ButtonSecondary';
import Input from '../../components/partials/Input';
import UploadDocument from '../../components/partials/UploadDocument';
import {businessFormInfo} from '../../constant/constant';
import useAuthState from '../../hooks/AuthState';
import SignUpLayout from './SignUpLayout';

const inputFieldData: {key: keyof typeof businessFormInfo; name: string}[] = [
  {key: 'businessName', name: 'business name'},
  {key: 'businessAddress', name: 'business address'},
  {key: 'natureOfBusiness', name: 'nature of business'},
  {key: 'nearestLandmark', name: 'nearest landmark'},
];

const BusinessInfoForm: React.FC<{navigation: any}> = ({navigation}) => {
  const {businessForm, postBusinessInfoForm, handleBusinessInfoForm} =
    useAuthState();

  const formSubmitHandler = () => {
    try {
      postBusinessInfoForm();
      navigation.navigate('bankInfo');
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <ScrollView>
      <SignUpLayout
        navigation={navigation}
        pageHeading={'Business Information'}
        page={4}>
        {/* input fields container */}
        <View style={styles.fieldsContainer}>
          {inputFieldData.map(item => {
            return (
              <Input
                key={item.key}
                label={item.name}
                placeholder="Type here.."
                error={businessForm[item.key].error}
                handleForm={value => handleBusinessInfoForm(item.key, value)}
                value={businessForm[item.key].text}
              />
            );
          })}
          {/* document */}
          <UploadDocument
            fileType={'.DOC'}
            docStyle={styles.documentContainer}
          />

          <View style={styles.btnContainer}>
            <ButtonSecondary
              width={'auto'}
              btnStyle={{...styles.btn, ...styles.backBtn}}
              onPress={() => {
                navigation.goBack();
              }}>
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

export default BusinessInfoForm;

const styles = StyleSheet.create({
  fieldsContainer: {
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
