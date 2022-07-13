import Layout from '../../components/partials/Layout';
import React from 'react';
import NotificationBell from '../../components/icons/NotificationBell';
import ParcelCard from './ParcelCard';
import {ScrollView, StyleSheet} from 'react-native';
import Wave from '../../components/Wave';

const data = [
  {name: 'AB123456', message: 'Sent on 10 Feb 2021, 10:20AM'},
  {name: 'AB123456', message: 'Sent on 10 Feb 2021, 10:20AM'},
  {name: 'AB123456', message: 'Sent on 10 Feb 2021, 10:20AM'},
  {name: 'AB123456', message: 'Sent on 10 Feb 2021, 10:20AM'},
  {name: 'AB123456', message: 'Sent on 10 Feb 2021, 10:20AM'},
  {name: 'AB123456', message: 'Sent on 10 Feb 2021, 10:20AM'},
];

const SendParcel = () => {
  return (
    <>
      <ScrollView>
        <Layout
          navHeading="Send Parcel"
          navIcon={<NotificationBell />}
          innerContainerStyle={styles.container}>
          {data.map((item, i) => {
            return (
              <ParcelCard key={i} name={item.name} message={item.message} />
            );
          })}
        </Layout>
      </ScrollView>
      <Wave waveStyle={styles.wave} />
    </>
  );
};
export default SendParcel;

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
});
