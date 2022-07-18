import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/Feather';
import ProcessBar from '../components/ProcessBar';
import SwitchTab from '../components/SwitchTab';
import CustomDropdown from '../components/CustomDropdown';
import CustomTextInput from '../components/CustomTextInput';
import Custombutton from '../components/CustomButton';
import ButtonSecondary from '../components/partials/ButtonSecondary';
import Button from '../components/partials/Button';
import MtoMD from './MtoMDrop';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const MtoM: React.FC<{navigation?: any}> = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('Drop at Home');
  const [isselected, setselected] = useState(false);
  const [selectedtime, setSelectedTime] = useState('8am-12pm');
  const [surity, setSurity] = useState(false);
  const [selectedparcel, addparcel] = useState(['sd']);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{height: 'auto',backgroundColor:'#fffbf8'}}>
      <ProcessBar progress={0.5} />
      <SwitchTab
        activeTab={activeTab}
        setactiveTab={setActiveTab}
        leftoption="Drop at Home"
        rightoption="Drop at Booth"
      />

      <Text
        style={{
          fontSize: wp('4.5%'),
          marginHorizontal: wp('10%'),
          marginTop: hp('2%'),
          fontWeight: '500',
        }}>
        Parcel & Receiver Information
      </Text>
      <Text
        style={{
          marginHorizontal: wp('10%'),
          marginTop: hp('.1%'),
          color: '#fa892e',
        }}>
        (Subject to conditional charges)
      </Text>
      {selectedparcel.length != 0 ? (
        <>
          <TouchableOpacity
            style={styles.parcels}
            onPress={() => navigation.navigate('MtoMP', {name: 'MtoMP'})}>
            <Text>Your Parcels({selectedparcel.length})</Text>
            <Icon name="chevron-right" size={24} color="#fa8832" />
          </TouchableOpacity>
        </>
      ) : null}
      <CustomDropdown
        title="Destination"
        buttonWidth="80%"
        itemlist={['bhandara', 'Current Location']}
        dropdownDefaultName="Destination"
        onPress={(a: string) => console.log(a)}
      />
      {activeTab == 'Drop at Home' ? (
        <>
          <Text style={styles.header}>Receivers Information</Text>
          <CustomTextInput
            placeholder="Search Landmark"
            visible={true}
            onChange={e => console.log(e)}
          />
          <CustomTextInput
            placeholder="Name"
            visible={true}
            onChange={e => console.log(e)}
          />
          <CustomTextInput
            placeholder="Address"
            visible={true}
            onChange={e => console.log(e)}
          />
          <CustomTextInput
            placeholder="Add a Phone Number"
            visible={true}
            onChange={e => console.log(e)}
          />
          <View style={styles.preferedtime}>
            <CheckBox
              value={isselected}
              onValueChange={setselected}
              tintColors={{true: '#fa892e', false: '#fa892e'}}
            />
            <View style={styles.prefered_time_text_container}>
              <Text style={styles.preferedtime_text}>Prefered Pickup Time</Text>
              <Text style={styles.preferedtime_text2}>
                (subject to additional charges)
              </Text>
            </View>
          </View>
          {isselected ? (
            <View style={styles.timeselection}>
              <View style={styles.row}>
                <TouchableOpacity onPress={() => setSelectedTime('8am-12pm')}>
                  <Text
                    style={
                      selectedtime == '8am-12pm'
                        ? styles.itemselected
                        : styles.preferedtime1
                    }>
                    8am-12pm
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedTime('1pm-6pm')}>
                  <Text
                    style={
                      selectedtime == '1pm-6pm'
                        ? styles.itemselected
                        : styles.preferedtime1
                    }>
                    1pm-6pm
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.row}>
                <TouchableOpacity onPress={() => setSelectedTime('7pm-10pm')}>
                  <Text
                    style={
                      selectedtime == '7pm-10pm'
                        ? styles.itemselected
                        : styles.preferedtime1
                    }>
                    7pm-10pm
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedTime('Anytime')}>
                  <Text
                    style={
                      selectedtime == 'Anytime'
                        ? styles.itemselected
                        : styles.preferedtime1
                    }>
                    Anytime
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : null}

          <Text
            style={{
              fontSize: wp('4.5%'),
              marginHorizontal: '10%',
              marginTop: hp('4%'),
              fontWeight: '500',
            }}>
            Parcel & Receivers Information
          </Text>
          <CustomDropdown
            title="Parcel Description"
            buttonWidth="80%"
            itemlist={[
              '0-5Kg (Light)',
              '5-20kg (Medium)',
              '20-50Kg(Heavy)',
              '50Kg>(Vey heavy)',
            ]}
            dropdownDefaultName="Select Weight"
            onPress={(a: string) => console.log(a)}
          />
          <CustomDropdown
            buttonWidth="80%"
            itemlist={[
              '0-(L)50cm / (B) 50cm (Small)',
              '50cm – (L) 80cm / (B) 80cm (Medium)',
              '80cm - (L) 122cm / (B) 122cm (Large)',
              '122cm > (Very Large)',
            ]}
            onPress={(a: string) => console.log(a)}
            dropdownDefaultName="Select Size"
          />
          <View style={styles.TextInput}>
            <TextInput
              multiline={true}
              placeholder="Description (Name/ condition of parcel)"
              textAlignVertical="top"
            />
          </View>
          <CustomDropdown
            buttonWidth="80%"
            itemlist={[
              'High Values',
              'Fragile',
              'Sensitive Documents',
              'Electronics',
              'Others',
            ]}
            dropdownDefaultName="Parcel Type"
            onPress={(a: string) => console.log(a)}
          />
          <View style={styles.smallinput}>
            <TextInput
              multiline={true}
              placeholder="Any special instructions"
              textAlignVertical="top"
            />
          </View>
          <View style={styles.checkbox}>
            <CheckBox
              value={surity}
              onValueChange={() => setSurity(!surity)}
              tintColors={{true: '#fa892e', false: '#fa892e'}}
            />
            <View>
              <Text style={styles.checkboxText}>Insure Your Parcel</Text>
              <Text style={styles.smalltext}>
                (Subject to conditional charges)
              </Text>
            </View>
          </View>
          <View style={{alignItems: 'center', marginVertical: hp('2%')}}>
            <Button
              width={wp('50%')}
              btnStyle={styles.btn}
              onPress={() => console.log('fsd')}>
              SAVE & ADD PARCEL
            </Button>
          </View>
        </>
      ) : (
        <MtoMD nav={navigation} />
      )}
      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <ButtonSecondary
          btnStyle={styles.btn}
          onPress={() => console.log('clicked')}
          width={wp('40%')}>
          BACK
        </ButtonSecondary>
        <Button
          width={wp('40%')}
          btnStyle={styles.btn}
          onPress={() => console.log('fsd')}>
          NEXT
        </Button>
      </View>
    </ScrollView>
  );
};

export default MtoM;

const styles = StyleSheet.create({
  TextInput: {
    marginHorizontal: wp('9%'),
    elevation: 5,
    flex: 1,
    paddingHorizontal: wp('5%'),
    borderColor: 'white',
    borderRadius: wp('4%'),
    paddingBottom: hp('4%'),
    backgroundColor: 'white',
    marginTop: hp('2%'),
  },
  smallinput: {
    flex: 1,
    borderColor: 'white',
    borderWidth: 1,
    elevation: 5,
    backgroundColor: 'white',
    marginHorizontal: wp('9%'),
    borderRadius: wp('4%'),
    paddingBottom: hp('2%'),
    paddingHorizontal: wp('4%'),
    marginTop: hp('2%'),
  },
  checkbox: {
    marginVertical: hp('2%'),
    marginHorizontal: wp('10%'),
    flexDirection: 'row',
  },
  checkboxText: {
    fontSize: wp('3.8%'),
    fontWeight: '400',
    marginHorizontal: wp('4%'),
  },
  smalltext: {
    fontSize: wp('3%'),
    fontWeight: '500',
    marginHorizontal: wp('4%'),
  },
  header: {
    fontSize: wp('4.5%'),
    fontWeight: '500',
    marginTop: hp('1%'),
    marginHorizontal: wp('10%'),
  },
  preferedtime: {
    flex: 1,
    padding: wp('2%'),
    marginTop: hp('2%'),
    flexDirection: 'row',
    marginHorizontal: wp('7%'),
  },
  preferedtime_text: {
    fontSize: wp('4%'),
    fontWeight: '600',
    padding: wp('.5%'),
    fontFamily: 'Syne-Regular',
  },
  preferedtime_text2: {
    fontSize: 13,
    fontFamily: 'Syne-Regular',
    fontWeight: '500',
  },
  prefered_time_text_container: {
    marginHorizontal: wp('3%'),
  },
  preferedtime1: {
    fontSize: wp('3.5%'),
    fontWeight: '500',
    padding: wp('2%'),
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: wp('4%'),
    paddingHorizontal: wp('10%'),
    paddingVertical: hp('2%'),
    fontFamily: 'Syne-Regular',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: '1%',
  },
  timeselection: {
    borderColor: '#fa892e',
    borderWidth: 1,
    borderRadius: wp('5%'),
    padding: '2%',
    marginHorizontal: wp('5%'),
    marginVertical: hp('1%'),
  },
  itemselected: {
    backgroundColor: '#fa892e',
    borderRadius: wp('4%'),
    fontSize: wp('3.5%'),
    fontWeight: '500',
    padding: '2%',
    fontFamily: 'Syne-Regular',
    paddingHorizontal: wp('10%'),
    paddingVertical: hp('2%'),
    color: 'white',
  },
  parcels: {
    marginHorizontal: wp('10%'),
    borderRadius: wp('4%'),
    paddingVertical: hp('1.7%'),
    marginTop: hp('2%'),
    elevation: 4,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp('5%'),
    textAlignVertical: 'center',
  },
  btn: {
    marginHorizontal: 3,
    marginBottom: hp('2%'),
  },
});
