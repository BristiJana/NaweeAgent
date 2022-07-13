import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const OrderDropdown = ({ListName}: any) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.Content}>
            <Text style={styles.ListName}>{ListName}</Text>
            <FontAwesome5 name="angle-down" size={20} />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    alignSelf: 'center',
  },
  Content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: '2.5%',
    paddingHorizontal: '3%',
  },
  card: {
    width: 295,
    minHeight: 40,
    height: 'auto',
    elevation: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  ListName: {
    textAlignVertical: 'center',
  },
});
export default OrderDropdown;
