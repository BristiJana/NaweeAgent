import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2ba',
    title: 'AWP678 (Cancelled)',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'AWP678 (Cancelled)',
  },
];

const DummyOrderList = ({deliveryStatus}: any) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({item}) => {
            return (
              <ScrollView>
                <TouchableOpacity style={styles.list}>
                  <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.deliveryStatus}>{deliveryStatus}</Text>
                  </View>
                  <Image source={require('../assests/arrowright.png')} />
                </TouchableOpacity>
                <View style={styles.bottomBorder}></View>
              </ScrollView>
            );
          }}
          // keyExtractor={element.key}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {},
  bottomBorder: {
    width: wp('90%'),
    marginHorizontal: wp('5%'),
    borderBottomWidth: 1,
    borderColor: '#FA8832',
    marginTop: wp('3%'),
  },
  list: {
    width: wp('80%'),
    marginHorizontal: wp('10%'),
    marginTop: wp('5%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
  },
  deliveryStatus: {
    fontSize: 12,
    fontWeight: '400',
    color: '#FA8832',
  },
});
export default DummyOrderList;
