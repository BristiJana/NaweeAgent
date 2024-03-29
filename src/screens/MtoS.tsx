import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/Feather';
import ProcessBar from '../components/ProcessBar';
import SwitchTab from '../components/SwitchTab';
import CustomDropdown from '../components/CustomDropdown';
import CustomButton from '../components/CustomButton';
import Button from '../components/partials/Button';
import ButtonSecondary from '../components/partials/ButtonSecondary';
import CustomTextInput from '../components/CustomTextInput';
import MtoSDrop from './MtoSDrop';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const MtoS: React.FC<{navigation?: any}> = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('Drop at Home');
  const [isselected, setselected] = useState(false);
  const [selectedtime, setSelectedTime] = useState('8am-12pm');
  const [selectedparcel, addparcel] = useState(['asd']);
  const [surity, setSurity] = useState(false);
  const [address1, setaddress1] = useState(false);
  const [address2, setaddress2] = useState(false);

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:'#fffbf8'}}>
        <ProcessBar progress={0.6} />
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
            marginTop: hp('2.5%'),
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
          You can Add upto 5 Parcels to different receivers.
        </Text>
        <CustomDropdown
          title="Destination"
          buttonWidth={wp('80%')}
          itemlist={['bhandara', 'Current Location']}
          dropdownDefaultName="Destination"
          onPress={(a: string) => console.log(a)}
        />
        {activeTab == 'Drop at Home' ? (
          <>
            <Text style={styles.header}>Receivers Information</Text>
            <View style={styles.address}>
              <Text style={styles.label1}>8017258241</Text>
              <Text style={styles.label2}>John Doe</Text>
              <View style={styles.checkbox1}>
                <CheckBox
                  value={address1}
                  onValueChange={setaddress1}
                  tintColors={{true: '#fa892e', false: '#fa892e'}}
                />
                <Text
                  style={styles.checkboxText1}
                  onPress={() => navigation.navigate('Sera', {name: 'Sera'})}>
                  Lorem ipsum dummy address
                </Text>
              </View>
              <View style={styles.checkbox1}>
                <CheckBox
                  value={address2}
                  onValueChange={setaddress2}
                  tintColors={{true: '#fa892e', false: '#fa892e'}}
                />
                <Text
                  style={styles.checkboxText1}
                  onPress={() => navigation.navigate('Sera', {name: 'Sera'})}>
                  Lorem ipsum dummy address
                </Text>
              </View>
            </View>
            <CustomTextInput
              placeholder="Search Landmark"
              visible={true}
              onChange={(e: string) => console.log(e)}
            />
            <CustomTextInput
              placeholder="Name"
              visible={true}
              onChange={(e: string) => console.log(e)}
            />
            <CustomTextInput
              placeholder="Address"
              visible={true}
              onChange={(e: string) => console.log(e)}
            />
            <CustomTextInput
              placeholder="Add a Phone Number"
              visible={true}
              onChange={(e: string) => console.log(e)}
            />
            <View style={styles.preferedtime}>
              <CheckBox
                value={isselected}
                onValueChange={setselected}
                tintColors={{true: '#fa892e', false: '#fa892e'}}
              />
              <View style={styles.prefered_time_text_container}>
                <Text style={styles.preferedtime_text}>
                  Prefered Pickup Time
                </Text>
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
            <Text style={styles.divider}>
              _____________________________________________________
            </Text>
            <Text
              style={{
                flex: 1,
                marginHorizontal: wp('10%'),
                marginTop: hp('2%'),
                fontSize: wp('4.5%'),
                fontWeight: '500',
              }}>
              Parcel Description
            </Text>
            <Text
              style={{
                flex: 1,
                marginHorizontal: wp('10%'),
                fontSize: wp('3%'),
                color: '#fa8832',
              }}>
              You can Add upto 5 Parcels to 1 receiver.
            </Text>
            {selectedparcel.length != 0 ? (
              <>
                <TouchableOpacity
                  style={styles.parcels}
                  onPress={() => navigation.navigate('MtoSP', {name: 'MtoSP'})}>
                  <Text>Your Parcels({selectedparcel.length})</Text>
                  <Icon name="chevron-right" size={24} color="#fa8832" />
                </TouchableOpacity>
              </>
            ) : null}
            <CustomDropdown
              buttonWidth={wp('80%')}
              itemlist={[
                '0-5Kg (Light)',
                '5-20kg (Medium)',
                '20-50Kg(Heavy)',
                '50Kg>(Vey heavy)',
              ]}
              dropdownDefaultName="Select Weight"
              onPress={(a: string) => console.log(a)}
            />
            <TextInput
              style={styles.textinput}
              placeholder="Add a Description"
            />
            <View>
              <CustomDropdown
                buttonWidth={wp('80%')}
                itemlist={[
                  '0-(L)50cm / (B) 50cm (Small)',
                  '50cm – (L) 80cm / (B) 80cm (Medium)',
                  '80cm - (L) 122cm / (B) 122cm (Large)',
                  '122cm > (Very Large)',
                ]}
                onPress={(a: string) => console.log(a)}
                dropdownDefaultName="Select Parcel Size"
              />
              <CustomDropdown
                buttonWidth={wp('80%')}
                itemlist={[
                  'High Values',
                  'Fragile',
                  'Sensitive Documents',
                  'Electronics',
                  'Others',
                ]}
                dropdownDefaultName="Select Parcel Type"
                onPress={(a: string) => console.log(a)}
              />
            </View>
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
            <Button width={wp('50%')} btnStyle={styles.btn}>
              SAVE & ADD PARCEL
            </Button>
          </>
        ) : (
          <MtoSDrop nav={navigation} />
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
    </SafeAreaView>
  );
};

export default MtoS;

const styles = StyleSheet.create({
  checkbox: {
    marginVertical: hp('2%'),
    marginHorizontal: wp('10%'),
    flexDirection: 'row',
  },
  autocomplete: {
    marginHorizontal: 30,
  },
  parcels: {
    flex: 1,
    marginHorizontal: wp('8%'),
    borderRadius: wp('4%'),
    paddingVertical: hp('2%'),
    marginTop: hp('2%'),
    elevation: 4,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp('5%'),
    textAlignVertical: 'center',
  },
  divider: {
    marginHorizontal: wp('2%'),
    marginVertical: hp('1%'),
    color: '#fa8832',
    textAlign: 'center',
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
    marginTop: hp('2.5%'),
  },
  textinput: {
    marginHorizontal: wp('9%'),
    elevation: 5,
    flex: 1,
    paddingHorizontal: wp('5%'),
    borderColor: 'white',
    borderRadius: wp('4%'),
    paddingBottom: hp('4%'),
    backgroundColor: 'white',
    marginTop: hp('2.5%'),
  },

  checkboxText: {
    fontSize: wp('3.7%'),
    fontWeight: '500',
    padding: 5,
  },
  smalltext: {
    fontSize: 11,
    fontWeight: '500',
  },
  header: {
    fontSize: wp('4.5%'),
    fontWeight: '500',
    marginTop: hp('2%'),
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
  checkbox1: {
    flex: 1,
    paddingVertical: hp('1%'),
    marginHorizontal: wp('2%'),
    borderColor: '#fa892e',
    flexDirection: 'row',
  },
  address: {
    borderColor: '#fa892e',
    borderWidth: 1,
    borderRadius: 20,
    marginTop: hp('2%'),
    marginHorizontal: wp('9%'),
    marginVertical: hp('1%'),
  },
  label1: {
    fontSize: wp('3.5%'),
    fontWeight: '400',
    padding: wp('2%'),
    color: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderColor: '#fa892e',
    backgroundColor: '#fa892e',
  },
  label2: {
    fontSize: wp('3.2%'),
    fontWeight: '700',
    padding: wp('2%'),
    color: '#fa892e',
  },
  checkboxText1: {
    fontSize: wp('3.4%'),
    fontWeight: '500',
    padding: wp('1%'),
  },
  btn: {
    alignSelf: 'center',
    marginVertical: hp('2%'),
    marginHorizontal: wp('1%'),
  },
});
