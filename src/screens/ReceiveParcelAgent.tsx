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

const InfoCardContainer: React.FC<{
  heading: string;
  innerHeading?: string;
  data: {[key: string]: string};
  specialInstructions?: string;
  marginBottom: number;
}> = ({heading, innerHeading, data, specialInstructions, marginBottom}) => {
  return (
    <View style={{...styles.fullWidth, marginBottom: marginBottom}}>
      <Text style={styles.heading}>{heading}</Text>
      <View style={styles.homePickComponent}>
        {innerHeading && (
          <View style={styles.homePickHeadingContainer}>
            <Text style={styles.homePickupHeading}>{innerHeading}</Text>
          </View>
        )}

        {/* detail container */}
        <View style={styles.detailContainer}>
          {Object.keys(data).map(key => {
            return (
              <View key={key} style={styles.detailItemContainer}>
                <Text style={styles.detailItemText}>{key}:</Text>
                <Text
                  style={{
                    ...styles.detailItemText,
                    ...styles.detailItemValueText,
                  }}>
                  {data[key]}
                </Text>
              </View>
            );
          })}
        </View>

        {specialInstructions && (
          <Text style={styles.specialInstructionText}>
            {specialInstructions}
          </Text>
        )}
      </View>
    </View>
  );
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

        <InfoCardContainer
          heading="Parcel Description"
          innerHeading="Home Pickup"
          data={parcelDescription}
          marginBottom={30}
          specialInstructions="Special Instructions: Please hand it over to Mr. Mayank Parakh only."
        />

        <InfoCardContainer
          heading="Sender Information"
          data={senderInfoData}
          marginBottom={30}
        />
        <InfoCardContainer
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
  homePickComponent: {
    borderWidth: 1,
    borderColor: colors.primary.main,
    borderRadius: 10,
    paddingVertical: 8,
    marginTop: 10,
  },
  fullWidth: {
    width: '100%',
  },
  homePickupHeading: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.dark,
    textAlign: 'center',
    marginBottom: 8,
  },
  homePickHeadingContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary.main,
  },
  detailContainer: {
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  detailItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  detailItemText: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.dark,
    textTransform: 'capitalize',
    maxWidth: '60%',
  },
  detailItemValueText: {
    textAlign: 'right',
  },
  specialInstructionText: {
    color: colors.primary.main,
    fontSize: 12,
    paddingHorizontal: 20,
  },
  wave: {
    width: '100%',
    right: 0,
    bottom: '-8%',
    transform: [{rotate: '180deg'}],
    zIndex: -1,
  },
});
