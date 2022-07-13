import Layout from '../../components/partials/Layout';
import React from 'react';
import NotificationBell from '../../components/icons/NotificationBell';
import ParcelCard from './ParcelCard';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Wave from '../../components/Wave';
import {colors} from '../../../assets/color';

const data = [
  {
    date: '05 March 2022',
    data: [
      {
        name: 'AB123456',
        time: '10:20AM',
        message: 'Cancelled',
      },
      {
        name: 'AB123456',
        time: '10:20AM',
        message: 'Cancelled',
      },
    ],
  },
];

const CancelledParcel = () => {
  return (
    <>
      <ScrollView>
        <Layout
          navHeading="Cancelled Parcel"
          navIcon={<NotificationBell />}
          innerContainerStyle={styles.container}>
          {data.map((parcel, i) => {
            return (
              <View key={i}>
                <Text key={i} style={styles.dateText}>
                  {parcel.date}
                </Text>
                {parcel.data.map((item, a) => (
                  <ParcelCard
                    danger
                    key={a}
                    name={item.name}
                    error={'01 Hrs 49 mins to demmurage'}
                    message={item.message}
                    time={item.time}
                  />
                ))}
              </View>
            );
          })}

          <Text style={styles.text}>
            Cancelled parcels will move to demmurage if not attended in 24 Hrs.
          </Text>
        </Layout>
      </ScrollView>
      <Wave waveStyle={styles.wave} />
    </>
  );
};
export default CancelledParcel;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  marginBottom: {
    marginBottom: 20,
  },
  noMargin: {
    margin: 0,
  },
  wave: {
    bottom: '-12%',
    transform: [{rotate: '180deg'}],
    zIndex: -1,
  },
  dateText: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.dark,
    marginBottom: 15,
  },
  text: {
    fontSize: 10,
    fontWeight: '400',
    color: colors.primary.main,
  },
});
