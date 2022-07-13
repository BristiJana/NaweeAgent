import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const OrderList = ({ListName, Status, date}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.Content}>
            <Text style={styles.ListName}>{ListName}</Text>
            <Text style={styles.status}>{Status}</Text>
            <Text style={styles.date}>{date}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
  Content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: '2.5%',
    paddingHorizontal: '3%',
    borderBottomWidth: 0.5,
    borderBottomColor: '#FA8832',
  },
  card: {
    width: 295,
    minHeight: 40,
    height: 'auto',
    backgroundColor: 'white',
    elevation: 5,
  },
  status: {
    fontWeight: '400',
    fontSize: 12,
    color: '#FA8832',
  },
});
export default OrderList;
