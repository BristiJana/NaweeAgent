import {colors} from '../../assets/color';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Layout from '../components/partials/Layout';
const bellImg = require('../../assets/img/notification-bell.png');
const user1 = require('../../assets/img/user-1.png');

const NoNotificationFound = () => {
  return (
    <View style={styles.noNotificationContainer}>
      <Image source={bellImg} style={styles.bellImg} />
      <Text style={styles.notificationHeading}>Nothing Here..!!</Text>
      <Text style={styles.noNotificationFoundText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida id
        nisi fermentum, quis.
      </Text>
    </View>
  );
};

const NotificationCard = () => {
  return (
    <View style={styles.notificationCard}>
      {/* image */}
      <View style={styles.userImgContainer}>
        <Image source={user1} />
      </View>
      {/*text  */}
      <View>
        {/* user name and time */}
        <View style={styles.userNameContainer}>
          <Text style={styles.userName}>Mr. Vincent</Text>
          <Text style={styles.text}>11 am</Text>
        </View>
        <Text style={styles.text}>
          Parcel AWP224 request was accepted, an agent will arive soon at your
          booth
        </Text>
      </View>
    </View>
  );
};

export default function Notification() {
  return (
    <Layout
      navHeading="notifications"
      innerContainerStyle={styles.innerContainer}>
      {/* <NoNotificationFound /> */}
      <>
        <Text style={styles.notificationText}>
          You have{' '}
          <Text style={{color: colors.primary.main}}>3 notifications</Text>{' '}
          today
        </Text>
        <NotificationCard />
      </>
    </Layout>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    paddingVertical: 22,
  },
  notificationHeading: {
    marginBottom: 15,
    color: colors.primary.main,
    fontSize: 16,
    fontWeight: '400',
  },
  noNotificationFoundText: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
  noNotificationContainer: {
    paddingTop: 70,
    paddingHorizontal: 25,
    paddingVertical: 30,
    marginTop: 200,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.62,

    elevation: 3,
    position: 'relative',
    alignItems: 'center',
  },
  bellImg: {
    position: 'absolute',
    top: '-100%',
  },
  notificationCard: {
    flexDirection: 'row',
    width: '80%',
  },
  userImgContainer: {
    marginRight: 8,
  },
  notificationText: {
    fontSize: 12,
    fontWeight: '400',
    marginBottom: 15,
  },
  userNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  userName: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.primary.main,
  },
  text: {
    fontSize: 12,
    fontWeight: '400',
  },
});
