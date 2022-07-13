import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
// import Button from '../../components/partials/Button';
// import Input from '../../components/partials/Input';
// import Button from '@/components/partials/Button';
// import Input from '@/components/partials/Input';
import Button from '../../components/partials/Button';
import Input from '../../components/partials/Input';
import SignUpLayout from './SignUpLayout';

const img = require('../../../assets/img/bank-info-screen.png');

// import ButtonSecondary from '@/components/partials/ButtonSecondary';
import ButtonSecondary from '../../components/partials/ButtonSecondary';
import {bankFormInfo} from '../../constant/constant';
import useAuthState from '../../hooks/AuthState';
import {useDispatch, useSelector} from 'react-redux';
import {Auth} from '../../../requests/apiService';
import {signInDetailActions} from '../../store/reducers/signInDataSlice';

const inputFieldData: {key: keyof typeof bankFormInfo; name: string}[] = [
  {key: 'accountName', name: 'account name'},
  {key: 'accountNumber', name: 'account number'},
  {key: 'bankName', name: 'bank name'},
];

const BankInfoForm: React.FC<{navigation: any}> = ({navigation}) => {
  const dispatch = useDispatch();
  const {bankInfoForm, postBankInfoForm, handleBankInfoForm} = useAuthState();
  const boothInfo: any = useSelector(state => state);

  const formSubmitHandler = async () => {
    console.log('boothInfoState', boothInfo);
    try {
      const data = postBankInfoForm();
      console.log('data', data);
      // dispatch(signInDetailActions.updateBankInfo({bankInfo: data}));

      // const res = await Auth.sendBoothData({...boothInfo, boothBankInfo: data});
      // if (res.status !== 200) {
      //   throw new Error(res);
      // }
      // console.log('all data response', res);

      // navigation.navigate('accountCreated');
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <ScrollView>
      <SignUpLayout
        navigation={navigation}
        pageHeading={'Bank Information'}
        page={5}>
        {/* input fields container */}
        <View style={styles.fieldsContainer}>
          {inputFieldData.map(item => {
            return (
              <Input
                key={item.key}
                label={item.name}
                placeholder="Type here.."
                error={bankInfoForm[item.key].error}
                handleForm={value => handleBankInfoForm(item.key, value)}
                value={bankInfoForm[item.key].text}
              />
            );
          })}
        </View>

        {/* btn container */}
        <View style={styles.btnContainer}>
          <ButtonSecondary
            onPress={() => {
              navigation.goBack();
            }}
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

        {/* img container */}
        <View style={styles.imgContainer}>
          <Image source={img} />
        </View>
      </SignUpLayout>
    </ScrollView>
  );
};

export default BankInfoForm;

const styles = StyleSheet.create({
  fieldsContainer: {
    // marginTop: 15,
    marginBottom: 20,
  },
  inputField: {
    marginBottom: 15,
  },

  btnContainer: {
    marginTop: 110,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btn: {
    paddingHorizontal: 45,
  },
  backBtn: {
    marginRight: 5,
  },
  imgContainer: {
    position: 'absolute',
    top: 320,
    zIndex: -1,
  },
});
