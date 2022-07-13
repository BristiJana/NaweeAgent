import Layout from '../components/partials/Layout';
import React from 'react';
import NotificationBell from '../components/icons/NotificationBell';
import {Image, StyleSheet, Text, View} from 'react-native';
const img1 = require('../../assets/img/parcel-record-1.png');
const img2 = require('../../assets/img/parcel-record-2.png');
const img3 = require('../../assets/img/parcel-record-3.png');
const img4 = require('../../assets/img/parcel-record-4.png');
const img5 = require('../../assets/img/parcel-record-5.png');

const data = [
  {name: 'send parcel', img: img1},
  {name: 'recieved parcel', img: img2},
  {name: 'released parcel', img: img3},
  {name: 'canelled parcel', img: img4},
  {name: 'demmurage', img: img5},
];

const ParcelRecord = () => {
  return (
    <Layout navHeading="Home" navIcon={<NotificationBell />}>
      {/* parcel record container */}
      <View style={styles.parcelRecordContainer}>
        {data.map((item, i) => {
          return (
            <View
              key={i}
              style={{
                ...styles.imgContainer,
                marginBottom:
                  data.length === i + 1 ? 0 : styles.marginBottom.marginBottom,
              }}>
              <Image key={item.name} source={item.img} />
              <Text style={styles.text}>{item.name}</Text>
            </View>
          );
        })}
      </View>
    </Layout>
  );
};

export default ParcelRecord;

const styles = StyleSheet.create({
  parcelRecordContainer: {
    marginTop: 30,
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  marginBottom: {
    marginBottom: 30,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    position: 'absolute',
    left: '46%',
    textTransform: 'capitalize',
  },
});
