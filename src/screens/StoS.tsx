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
  import ProcessBar from '../components/ProcessBar';
  import SwitchTab from '../components/SwitchTab';
  import CustomDropdown from '../components/CustomDropdown';
  import CustomTextInput from '../components/CustomTextInput';
  import Button from '../components/partials/Button'
  import ButtonSecondary from '../components/partials/ButtonSecondary';
  import StoSD from './StoSDropOff';
  import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen';
  
    const StoS: React.FC<{navigation?: any}> = ({navigation}) => {
    const [activeTab, setActiveTab] = useState('Drop at Home');
    const [isselected, setselected] = useState(false);
    const [selectedtime, setSelectedTime] = useState('8am-12pm');
    const [surity, setSurity] = useState(false);
    const [address1, setaddress1] = useState(false);
    const [address2, setaddress2] = useState(false);
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
        <Text style={styles.header}>Parcel & Receivers Information</Text>
        <CustomDropdown
          dropdownHeading="Destination"
          buttonWidth="80%"
          itemlist={['bhandara', 'Current Location']}
          dropdownDefaultName="Select"
          onPress={(e: string) => console.log(e)}
        />
        {activeTab == 'Drop at Home' ? (
          <>
            <Text style={styles.header2}>Receivers Information</Text>
            <View style={styles.address}>
              <Text style={styles.label1}>8017258241</Text>
              <Text style={styles.label2}>John Doe</Text>
              <View style={styles.checkbox}>
                <CheckBox
                  value={address1}
                  onValueChange={setaddress1}
                  tintColors={{true: '#fa892e', false: '#fa892e'}}
                />
                <Text
                  style={styles.checkboxText}
                  onPress={() => navigation.navigate('Sera', {name: 'Sera'})}>
                  Dummy Address
                </Text>
              </View>
              <View style={styles.checkbox}>
                <CheckBox
                  value={address2}
                  onValueChange={setaddress2}
                  tintColors={{true: '#fa892e', false: '#fa892e'}}
                />
                <Text
                  style={styles.checkboxText}
                  onPress={() => navigation.navigate('Sera', {name: 'Sera'})}>
                  Dummy Address
                </Text>
              </View>
            </View>
            <CustomTextInput placeholder="Search Landmark" visible={true} onChange={(e) => console.log(e)} />
            <CustomTextInput placeholder="Name" visible={true} onChange={(e) => console.log(e)} />
            <CustomTextInput placeholder="Address" visible={true} onChange={(e) => console.log(e)} />
            <CustomTextInput placeholder="Add a Phone Number" visible={true} onChange={(e) => console.log(e)} />
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
                flex: 1,
                marginHorizontal: wp('11%'),
                fontSize: wp('4.5%'),
                fontWeight: '500',
                marginVertical: hp('1.3%'),
              }}>
              Parcel Description
            </Text>
            <CustomDropdown
              buttonWidth="80%"
              itemlist={[
                '0-5Kg (Light)',
                '5-20kg (Medium)',
                '20-50Kg(Heavy)',
                '50Kg>(Vey heavy)',
              ]}
              placeholder="Select Parcel Description"
              onPress={(e: string) => console.log(e)}
            />
            <CustomDropdown
              buttonWidth="80%"
              itemlist={[
                '0-(L)50cm / (B) 50cm (Small)',
                '50cm – (L) 80cm / (B) 80cm (Medium)',
                '80cm - (L) 122cm / (B) 122cm (Large)',
                '122cm > (Very Large)',
              ]}
              onPress={(e: string) => console.log(e)}
              placeholder="Select Parcel Size"
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
              placeholder="Select Parcel Type"
              onPress={(e: string) => console.log(e)}
            />
            <View>
              <TextInput
                style={styles.smallinput}
                multiline={true}
                placeholder="Any special instructions"
                textAlignVertical="top"
              />
            </View>
            <View style={styles.checkbox2}>
              <CheckBox
                value={surity}
                onValueChange={() => setSurity(!surity)}
                tintColors={{true: '#fa892e', false: '#fa892e'}}
              />
              <View>
                <Text style={styles.checkboxText2}>Insure Your Parcel</Text>
                <Text style={styles.smalltext}>
                  (Subject to conditional charges)
                </Text>
              </View>
            </View>
          </>
        ) : (
          <StoSD nav={navigation} />
        )}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignSelf: 'center',
            marginHorizontal: '5%',
            marginVertical: '2%',
          }}>
          <ButtonSecondary
              width={wp('40%')}
              btnStyle={styles.btn}
              onPress={()=>console.log("fsd")}>
              NEXT
            </ButtonSecondary>
            <Button
              width={wp('40%')}
              btnStyle={styles.btn}
              onPress={()=>console.log("fsd")}>
              NEXT
            </Button>
        </View>
      </ScrollView>
    );
  }
  
  export default StoS;

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
      marginTop:hp('2%')
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
      marginTop:hp('2%')
    },
    checkbox: {
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
    checkboxText: {
      fontSize: wp('3.4%'),
      fontWeight: '500',
      padding: wp('1%'),
    },
    smalltext: {
      fontSize: wp('3%'),
      fontWeight: '500',
      marginHorizontal:wp('4%')
    },
    header: {
      fontSize: wp('4.5%'),
      fontWeight: '500',
      marginTop:hp('3%'),
      marginHorizontal: wp('10%'),
    },
    header2:{
      fontSize: wp('4.5%'),
      fontWeight: '500',
      marginTop:hp('3%'),
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
      fontSize: wp('3%'),
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
    checkboxText2: {
      fontSize: wp('3.8%'),
      fontWeight: '400',
      marginHorizontal:wp('4%')
    },
    checkbox2: {
      marginVertical: hp('2%'),
      marginHorizontal: wp('10%'),
      flexDirection: 'row',
    },
    btn:{
        marginHorizontal:3
    }
  });
  