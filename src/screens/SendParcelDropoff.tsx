import Layout from '../components/partials/Layout';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HelpIcon from '../components/icons/HelpIcon';
import {colors} from '../../assets/color';
import Button from '../components/partials/Button';
import Input from '../components/partials/Input';
import Select from '../components/partials/Select';
import ButtonSecondary from '../components/partials/ButtonSecondary';

const SendParcelDropoff = () => {
  return (
    <Layout
      navHeading="DETAILS"
      navIcon={<HelpIcon />}
      innerContainerStyle={styles.container}>
      {/* progress bar */}
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBar} />
      </View>
      <View style={styles.innerContainer}>
        <Button width={'100%'} btnStyle={styles.btn}>
          Drop-Off
        </Button>
        <Text style={styles.heading}>Sender Information</Text>

        <Input
          placeholder="Name"
          error=""
          handleForm={value => console.log(value)}
          value=""
          marginBottom={0}
        />
        <Input
          placeholder="Add a Phone Number"
          error=""
          handleForm={value => console.log(value)}
          value=""
        />

        <Select
          handleForm={(value: string) => console.log(value)}
          label="Parcel Details"
          options={['select', 'option1', 'option2', 'option3']}
        />
      </View>
      <View style={styles.btnContainer}>
        <ButtonSecondary btnStyle={styles.bottomBtn}>BACK</ButtonSecondary>
        <Button btnStyle={styles.bottomBtn}>NEXT</Button>
      </View>
    </Layout>
  );
};

export default SendParcelDropoff;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 22,
    flex: 1,
    justifyContent: 'space-between',
  },
  innerContainer: {
    width: '100%',
    marginBottom: 'auto',
  },
  btn: {
    marginBottom: 30,
  },
  progressBarContainer: {
    height: 7,
    width: 100,
    backgroundColor: '#D9D9D9',
    overflow: 'hidden',
    borderRadius: 20,
    marginBottom: 25,
  },
  progressBar: {
    height: '100%',
    width: '40%',
    backgroundColor: colors.primary.main,
    borderRadius: 20,
  },
  heading: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 30,
  },
  btnContainer: {
    // marginTop: 80,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomBtn: {
    width: 140,
  },
});
