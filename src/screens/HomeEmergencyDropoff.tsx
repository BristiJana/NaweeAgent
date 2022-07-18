import Layout from '../components/partials/Layout';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../assets/color';

const userImg = require('../../assets/img/user-1.png');

const todayDate = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`;

const dummyData = [
  {
    date: todayDate,
    name: 'Mr. Vincent',
    text: 'Mr. Vincent is on his way to drop-off a parcel. Share PIN with your Agent- 2205',
    time: '11 AM',
    image: userImg,
    status: 'not accepted',
  },
  {
    date: '05/02/2022',
    name: 'Mr. Vincent',
    text: 'You accepted Emergency Drop off from Mr. Vincent',
    time: '11 AM',
    image: userImg,
    status: 'accepted',
  },
  {
    date: '06/07/2022',
    name: 'Mr. Vincent',
    text: 'You accepted Emergency Drop off request from Mr. Vincent',
    time: '11 AM',
    image: userImg,
    status: 'accepted',
  },
  {
    date: '01/5/2020',
    name: 'Mr. Vincent',
    text: 'Mr. Vincent is on his way to drop-off a parcel.',
    time: '11 AM',
    image: userImg,
    status: 'accepted',
  },
];
// React.FC<{img: ImageURISource}>
const ReqCard: React.FC<{
  style?: {[key: string]: string | number};
  data: {name: string; date: string; text: string; time: string; image: any};
}> = ({style, data}) => {
  return (
    <View style={{...styles.reqCard, ...style}}>
      {/* image */}
      <View style={styles.userImg}>
        <Image source={data.image} />
      </View>
      {/* text */}
      <View style={styles.cardTextContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.userName}>{data.name}</Text>
          <View style={styles.dateContainer}>
            <Text style={styles.timeText}>{data.time}</Text>
            {data.date !== todayDate && (
              <Text style={styles.dateText}>{data.date}</Text>
            )}
          </View>
        </View>

        <Text style={styles.text}>{data.text}</Text>
      </View>
    </View>
  );
};

const HomeEmergencyDropoff = () => {
  return (
    <ScrollView>
      <Layout
        navHeading="Emergency Drop-off"
        innerContainerStyle={styles.container}>
        <Text style={styles.heading}>Today</Text>

        {dummyData.map((item, i) => {
          return (
            item.date === todayDate && (
              <View key={i} style={styles.reqContaier}>
                <ReqCard data={item} />
              </View>
            )
          );
        })}

        <Text style={styles.heading}>Earlier</Text>

        {dummyData.map((item, i) => {
          return (
            item.date !== todayDate && (
              <ReqCard data={item} style={styles.acceptedReq} key={i} />
            )
          );
        })}
      </Layout>
    </ScrollView>
  );
};

export default HomeEmergencyDropoff;

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
  },
  heading: {
    fontSize: 20,
    fontWeight: '400',
    color: '#333',
    marginBottom: 30,
    alignSelf: 'flex-start',
  },
  reqContaier: {
    alignItems: 'center',
    marginBottom: 30,
  },
  reqCard: {
    marginBottom: 18,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  acceptedReq: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: '#ffefe4',
    alignItems: 'center',
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  userImg: {
    marginRight: 8,
    width: 50,
    height: 50,
  },
  cardTextContainer: {
    // backgroundColor: 'red',
    width: '85%',
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
    paddingRight: 10,
  },
  userName: {
    color: colors.primary.main,
    fontWeight: '600',
  },
  timeText: {
    fontSize: 12,
    fontWeight: '400',
  },
  dateText: {
    fontSize: 12,
    marginLeft: 7,
    fontWeight: '400',
  },
  dateContainer: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 12,
    fontWeight: '500',
    paddingRight: 5,
  },
});
