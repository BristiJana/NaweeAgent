import Layout from '../../components/partials/Layout';
import React from 'react';
import NotificationBell from '../../components/icons/NotificationBell';
import ParcelCard from './ParcelCard';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Wave from '../../components/Wave';
import {colors} from '../../../assets/color';

const data = [
  {
    date: '02 March 2022',
    data: [
      {
        name: 'AB123456',
        time: '10:20AM',
        message: 'Sent on 10 Feb 2021, 10:20AM',
      },
      {
        name: 'AB123456',
        time: '10:20AM',
        message: 'Sent on 10 Feb 2021, 10:20AM',
      },
      {
        name: 'AB123456',
        time: '10:20AM',
        message: 'Sent on 10 Feb 2021, 10:20AM',
      },
    ],
  },
  {
    date: '03 March 2022',
    data: [
      {
        name: 'AB123456',
        time: '10:20AM',
        message: 'Sent on 10 Feb 2021, 10:20AM',
      },
      {
        name: 'AB123456',
        time: '10:20AM',
        message: 'Sent on 10 Feb 2021, 10:20AM',
      },
    ],
  },
  {
    date: '05 March 2022',
    data: [
      {
        name: 'AB123456',
        time: '10:20AM',
        message: 'Sent on 10 Feb 2021, 10:20AM',
      },
      {
        name: 'AB123456',
        time: '10:20AM',
        message: 'Sent on 10 Feb 2021, 10:20AM',
      },
    ],
  },
];

const ReceivedParcel = () => {
  return (
    <>
      <ScrollView>
        <Layout
          navHeading="Received Parcel"
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
                    key={a}
                    name={item.name}
                    message={item.message}
                    time={item.time}
                  />
                ))}
              </View>
            );
          })}
        </Layout>
      </ScrollView>
      <Wave waveStyle={styles.wave} />
    </>
  );
};
export default ReceivedParcel;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  marginBottom: {
    marginBottom: 20,
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
});
