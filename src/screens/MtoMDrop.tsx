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
import CustomDropdown from '../components/CustomDropdown';
import Button from '../components/partials/Button';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
const MtoMDrop: React.FC<{nav?: any}> = ({nav}) => {
  const [surity, setSurity] = useState(false);
  const [selectedparcel, addparcel] = useState(['sd']);
  return (
    <SafeAreaView style={{height: 'auto'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{height: 'auto',backgroundColor:'#fffbf8'}}>
        <Text style={styles.header}>Recieve at Booth near your receiver</Text>
        <Text
          style={{
            marginHorizontal: wp('10%'),
            marginVertical: hp('1%'),
            fontSize: wp('3%'),
            color: '#fa8832',
          }}>
          (You can pickup your parcel at any time)
        </Text>
        <View style={styles.location}>
          <TouchableOpacity
            onPress={() => nav.navigate('Sera', {name: 'Sera'})}>
            <Text style={{fontFamily: 'Syne-Regular', fontSize: wp('3.7%')}}>
              Search booth from locations
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderColor: '#fa8832',
            borderRadius: 12,
            borderWidth: 1.6,
            marginVertical: hp('2%'),
            flex: 1,
            marginHorizontal: wp('10%'),
          }}>
          <View style={styles.location_row}>
            <Text>Lagos City Centre road (Booth432) </Text>
          </View>
          <View style={styles.location_row}>
            <Text>Lagos City Centre road (Booth123) </Text>
          </View>
          <View style={styles.location_row}>
            <Text>Lagos City Centre By Lake (Booth278) </Text>
          </View>
          <View style={styles.location_row}>
            <Text>Lagos City Centre near bank branch (Booth987) </Text>
          </View>
        </View>

        <Text
          style={{
            fontSize: wp('4.5%'),
            marginHorizontal: wp('10%'),
            marginTop: hp('1.5%'),
            fontWeight: '500',
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
        <View>
          <TextInput
            style={styles.smallinput}
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
        
        <Button
          width={wp('50%')}
          onPress={() => console.log('Press')}
          btnStyle={styles.btn}
        >
          SAVE & ADD PARCEL
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MtoMDrop;

const styles = StyleSheet.create({
  TextInput: {
    height: hp('12%'),
    borderColor: 'white',
    borderWidth: 1,
    elevation: 5,
    backgroundColor: 'white',
    marginHorizontal: wp('9%'),
    borderRadius: 20,
    marginVertical: hp('1%'),
    paddingHorizontal: wp('5%'),
    marginTop: hp('2%'),
  },
  parcels: {
    marginHorizontal: wp('10%'),
    borderRadius: 15,
    paddingVertical: '3%',
    marginTop: hp('2%'),
    elevation: 4,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: wp('5%'),
    paddingHorizontal: wp('5%'),
    textAlignVertical: 'center',
  },
  smallinput: {
    borderColor: 'white',
    borderWidth: 1,
    elevation: 5,
    backgroundColor: 'white',
    marginHorizontal: wp('10%'),
    borderRadius: 20,
    marginVertical: hp('1%'),
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('5%'),
    marginTop: hp('2%'),
  },
  checkbox: {
    padding: wp('3%'),
    marginHorizontal: '8%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderColor: '#fa892e',
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
    marginHorizontal: wp('10%'),
    marginTop: hp('2%'),
  },

  autocomplete: {
    marginHorizontal: '7%',
  },
  location: {
    flex: 1,
    marginVertical: hp('.5%'),
    borderWidth: 1.6,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: wp('10%'),
    paddingVertical: hp('1.5%'),
    borderRadius: 10,
    borderColor: '#fa8832',
  },
  location_row: {
    flex: 1,
    paddingHorizontal: wp('3.5%'),
    paddingVertical: hp('1%'),
  },
  location_text: {
    fontSize: wp('3%'),
    fontWeight: '700',
  },
  btn:{
    alignSelf:'center',
    marginVertical:hp('2%')
  }
});
