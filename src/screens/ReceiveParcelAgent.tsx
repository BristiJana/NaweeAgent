import Layout from '../components/partials/Layout';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {colors} from '../../assets/color';
import Input from '../components/partials/Input';
import Button from '../components/partials/Button';
import Wave from '../components/Wave';
import ParcelDetailContainer from '../components/partials/ParcelDetailContainer';

const btnData = ['agent', 'customer'];
const senderInfoData = {
  name: 'ABC DEFGH',
  email: 'email@gmail.com',
  phone: '778455124',
  'Pick-up': 'Home Pick-Up',
  address: '2 parklane, park ht., Block A 23rd floor, Flat no. 23A',
  'Preferred Pick-Up Time': '9am-12pm',
};

const parcelDescription = {
  weight: '2kg',
  size: '50cm * 50cm',
  parcelType: 'document',
  description: 'It contain important documents',
};

const receiverInfo = {
  name: 'Jonny Smith',
  address: '123, New skylake road',
  landmark: 'Lagos lagoon lake',
  phone: '555-555-5555',
  'preferred delivery time': 'anytime',
};

const ReceiveParcelAgent = () => {
  const [activeBtn, setActiveBtn] = useState('agent');

  return (
    <ScrollView>
      <Layout navHeading="Details" innerContainerStyle={styles.container}>
        {/* btn container */}
        <View style={styles.btnContainer}>
          {btnData.map(item => {
            return (
              <TouchableOpacity
                style={styles.mainBtn}
                key={item}
                onPress={() => setActiveBtn(item)}>
                <View
                  style={{
                    ...styles.btn,
                    backgroundColor:
                      activeBtn === item ? colors.primary.main : colors.white,
                  }}>
                  <Text
                    style={{
                      ...styles.btnText,
                      color:
                        activeBtn === item ? colors.white : colors.primary.main,
                    }}>
                    {item}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={{...styles.parcelIdContainer, ...styles.negativeMargin}}>
          <Text style={styles.heading}>Parcel ID</Text>
          <Input placeholder="Parcel Id" />

          <Text style={styles.text}>
            Estimated Time of Delivery: 3-4 days, should reach the destination
            by 2nd Mar 2022.
          </Text>
          <Text style={styles.text}>
            Estimated Time of Delivery: 3-4 days, should reach the destination
            by 2nd Mar 2022.
          </Text>
        </View>

        <ParcelDetailContainer
          heading="Parcel Description"
          innerHeading="Home Pickup"
          data={parcelDescription}
          marginBottom={30}
          specialInstructions="Special Instructions: Please hand it over to Mr. Mayank Parakh only."
        />

        <ParcelDetailContainer
          heading="Sender Information"
          data={senderInfoData}
          marginBottom={30}
        />
        <ParcelDetailContainer
          heading="Receiver Information"
          data={receiverInfo}
          marginBottom={30}
        />

        <Button>CONFIRM</Button>
      </Layout>
      <Wave waveStyle={styles.wave} />
    </ScrollView>
  );
};

export default ReceiveParcelAgent;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    width: '100%',
    borderWidth: 1,
    marginTop: 30,
    borderColor: colors.primary.main,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 40,
  },
  mainBtn: {
    width: '50%',
    alignItems: 'center',
  },
  btn: {
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  btnText: {
    textTransform: 'capitalize',
  },
  heading: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.dark,
  },
  negativeMargin: {
    marginTop: -20,
  },
  text: {
    fontSize: 10,
    color: colors.primary.main,
    marginBottom: 8,
  },
  parcelIdContainer: {
    marginBottom: 30,
  },

  wave: {
    width: '100%',
    right: 0,
    bottom: '-8%',
    transform: [{rotate: '180deg'}],
    zIndex: -1,
  },
});
