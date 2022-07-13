import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Nav from '../components/partials/Nav';
import ButtonSecondary from '../components/partials/ButtonSecondary';
import Button from '../components/partials/Button';
import {colors} from 'assets/color';

const termsData = [
  {
    heading: ['Welcome to NaWee app from NaWee Global Services Enterprise, .'],
    text: [
      '("NaWee,” NaWee Services," we," "us," or "our") is a platform (Hub) that connects you with Independent Carriers (each, an "freelancers") who will move your Parcels (items) from one point to the other.',
      'These Terms of Service ("Terms") apply to your access and use of the mobile application (the "App"), website ("Site") and other online and offline products and services (collectively, the "NaWee Platform") of NaWee Global Services Enterprise',
    ],
  },
  {
    heading: ['Your Choices', 'Account Information'],
    text: [
      'You may update, correct or delete information about you at any time by logging into your online account or emailing us at support@nawee.com. If you wish to delete or deactivate your account, please email us at support@nawee.com or delete our mobile application from your device, but note that we may retain certain information as required by law or for legitimate business purposes. We may also retain cached or archived copies of information about you for a certain period of time.',
    ],
  },
  {
    heading: ['Location Information'],
    text: [
      'When you first launch any of our mobile applications that collect location information, you will be asked to consent to the application`s collection of this information. We currently require this location information in order to use our Services, so if you do not consent to this collection, you cannot use our  Services. If you initially consent to our collection of location information, you can subsequently stop the collection of this information at any time by changing the preferences on your mobile device. If you do so, our mobile applications, or certain features thereof, will no longer function. You may also stop our collection of location information by following the standard uninstall process to remove all of our mobile applications from your device.',
    ],
  },
  {
    heading: ['Cookies'],
    text: [
      'Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove or reject browser cookies. Please note that if you choose to remove or reject cookies, this could affect the availability and functionality of our Services. Promotional Communications',
      'You may opt out of receiving promotional mails, push notifications or text messages from NaWee by following the instructions in those communications or by adjusting the settings on your mobile device. If you opt out, we may still send you non-promotional communications, such as those about your account, products or services you`ve requested or our ongoing business relations.',
    ],
  },
  {
    heading: ['Accepting these Terms'],
    text: [
      'BY DOWNLOADING THE APP OR OTHERWISE ACCESSING OR USING THE NAWEE PLATFORM, YOU AGREE TO BE BOUND BY ALL OF THE TERMS BELOW. Please read all of the terms before you use the NaWee Platform. If a term does not make sense to you, please let us know. If you don`t agree to all of the terms below, you may not use the NaWee. Terms and Conditions for NaWee',
      'By accepting the following terms and conditions for “NaWee Services”; you (The Customer) are agreeing to all the following terms and conditions without exception. The terms of use stated herein (collectively, the “Terms of Use” or this “Agreement”) constitute a legal agreement between you (the Customer), Any individual/company (the Agent) and NaWee ( the “Company”). In order to use the service defined below, you must agree to the Terms of Use that are set out in the following.',
    ],
  },
];

const TermsAndCondition = () => {
  return (
    <View style={styles.container}>
      <Nav heading={'Terms & Conditions'} />
      <View style={styles.innerContainer}>
        {/* text container */}
        <View style={styles.textContainer}>
          <ScrollView>
            {termsData.map((item, i) => (
              <View key={i} style={styles.textItem}>
                {item.heading.map(heading => (
                  <Text
                    key={heading}
                    style={{...styles.textItemHeading, ...styles.itemText}}>
                    {heading}
                  </Text>
                ))}
                {item.text.map(text => (
                  <Text key={text} style={styles.itemText}>
                    {text}
                  </Text>
                ))}
              </View>
            ))}
          </ScrollView>
        </View>

        {/* btn container */}
        <View style={styles.btnContainer}>
          <ButtonSecondary
            width={'auto'}
            btnStyle={{...styles.btn, ...styles.backBtn}}>
            DECLINE
          </ButtonSecondary>
          <Button width={'auto'} btnStyle={styles.btn}>
            ACCEPT
          </Button>
        </View>
      </View>
    </View>
  );
};

export default TermsAndCondition;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 30,
    alignItems: 'center',
  },
  innerContainer: {
    marginTop: 30,
  },
  textContainer: {
    paddingHorizontal: '10%',
    height: '83%',
    // overflow: 'hidden',
  },
  textItem: {
    marginBottom: 12,
    color: '#000',
  },
  textItemHeading: {
    color: colors.primary.main,
  },
  itemText: {
    fontSize: 12,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  btn: {
    paddingHorizontal: 43,
  },
  backBtn: {
    marginRight: 23,
  },
});
