import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
  } from 'react-native';
  import React, {useState} from 'react';
  import Icon from 'react-native-vector-icons/Entypo';
  import CustomButton from '../../components/CustomButton';
  
  import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  
  export default function CancelledOrder4() {
    const [activeTab, setactiveTab] = useState('Pickup');
    const [isselected, setselected] = useState(false);
    const [selectedtime, setSelectedTime] = useState('8am-12pm');
    return (
      <ScrollView style={styles.Main} showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: wp('4%'), fontWeight: '600'}}>AWP7685</Text>
              <Text style={{color: '#f27b7b'}}> (Cancelled)</Text>
            </View>
            <Text style={{fontSize: wp('4%'), fontWeight: '600'}}>
              31/03/2022
            </Text>
          </View>
          <Text style={{fontSize: wp('3.5%'), fontWeight: '500'}}>
            Parcel-PAR576
          </Text>
        </View>
        <View style={styles.parcelbox}>
          <View style={styles.parcelheading}>
            <Text
              style={{fontSize: 17, fontWeight: '500', marginHorizontal: '3%'}}>
              PAR57
            </Text>
            <Icon
              name="chevron-thin-down"
              size={20}
              color="black"
              style={{marginHorizontal: '3%'}}
            />
          </View>
          <View style={styles.row1}>
            <Text style={styles.rowitem}>Weight:</Text>
            <Text style={styles.rowitem}>2kg</Text>
          </View>
          <View style={styles.row1}>
            <Text style={styles.rowitem}>Size:</Text>
            <Text style={styles.rowitem}>50cm*50cm</Text>
          </View>
          <View style={styles.row1}>
            <Text style={styles.rowitem}>Parcel Type::</Text>
            <Text style={styles.rowitem}>Document</Text>
          </View>
          <View style={styles.row1}>
            <Text style={styles.rowitem}>Description</Text>
          </View>
          <View style={styles.rawtext}>
            <Text>It contains some important documents.</Text>
            <Text style={{color: '#FA8832', marginVertical: '1%', fontSize: 14}}>
              Special Instructions: Please hand it over to Mr. parav Khurana only.
            </Text>
          </View>
        </View>
        <View style={styles.parcelbox}>
          <View style={{marginHorizontal: '3%', marginVertical: '1%'}}>
            <Text
              style={{
                fontSize: wp('4%'),
                fontWeight: '600',
                letterSpacing: 1,
                marginVertical: hp('1%'),
              }}>
              Receiver Address
            </Text>
            <Text style={{fontSize: 15, fontWeight: '400'}}>Home Delivery</Text>
          </View>
          <View style={styles.row2}>
            <Text style={styles.rowitem}>Name:</Text>
            <Text style={styles.rowitem}>Johny Heartz</Text>
          </View>
          <View style={styles.row2}>
            <Text style={styles.rowitem}>Address:</Text>
            <Text style={styles.rowitem}>123,New skylake road</Text>
          </View>
          <View style={styles.row2}>
            <Text style={styles.rowitem}>Landmark:</Text>
            <Text style={styles.rowitem}>Logos lagoon lake</Text>
          </View>
          <View style={styles.row2}>
            <Text style={styles.rowitem}>Phone:</Text>
            <Text style={styles.rowitem}>123456789</Text>
          </View>
          <View style={styles.row2}>
            <Text style={styles.rowitem}>Preferred Delivery Time:</Text>
            <Text style={styles.rowitem}>Anytime</Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              marginHorizontal: wp('7%'),
              fontSize: wp('5%'),
              fontWeight: 'bold',
            }}>
            Order Summary
          </Text>
          <View style={styles.summary}>
          <View style={styles.row3}>
              <Text style={styles.rowitem}>Extra Cost:</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: '#263238', fontSize: wp('3.6%')}}>₦ </Text>
                <Text style={styles.rowitem}> 1000</Text>
              </View>
            </View>
            <View style={styles.row3}>
              <Text style={styles.rowitem}>Parcel Delivery Cost:</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: '#263238', fontSize: wp('3.6%')}}>₦ </Text>
                <Text style={styles.rowitem}> 15200</Text>
              </View>
            </View>
            <View style={styles.row3}>
              <Text style={styles.rowitem}>Home Pickup & Delivery Cost:</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: '#263238', fontSize: wp('3.6%')}}>₦ </Text>
                <Text style={styles.rowitem}> 2000</Text>
              </View>
            </View>
            <View style={styles.row3}>
              <Text style={styles.rowitem}>
                Preffered Pickup & Delivery Cost:
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: '#263238', fontSize: wp('3.6%')}}>₦ </Text>
                <Text style={styles.rowitem}> 750</Text>
              </View>
            </View>
            <View style={styles.row3}>
              <Text style={styles.rowitem}>Special Shipment:</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: '#263238', fontSize: wp('3.6%')}}>₦ </Text>
                <Text style={styles.rowitem}>828</Text>
              </View>
            </View>
            <View style={styles.row3}>
              <Text style={styles.rowitem}>Insurance:</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: '#263238', fontSize: wp('3.6%')}}>₦ </Text>
                <Text style={styles.rowitem}>100</Text>
              </View>
            </View>
            <View style={styles.row3}>
              <Text style={styles.rowitem}>Taxes:</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: '#263238', fontSize: wp('3.6%')}}>₦ </Text>
                <Text style={styles.rowitem}>500</Text>
              </View>
            </View>
            <View style={styles.row3}>
              <Text style={styles.rowitem}>Discount:</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: '#263238', fontSize: wp('3.6%')}}>₦ </Text>
                <Text style={styles.rowitem}>(200)</Text>
              </View>
            </View>
            <View style={styles.total}>
              <Text style={styles.totalitem}>Total Cost:</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: '#FFF', fontSize: wp('3.6%')}}>₦ </Text>
                <Text style={styles.totalitem}>5298</Text>
              </View>
            </View>
          </View>
          <View>
          <Text
            style={{
              marginHorizontal: wp('7%'),
              fontSize: wp('5%'),
              fontWeight: 'bold',
            }}>
            New Order Summary
          </Text>
          <View style={styles.summary}>
          <View style={styles.row3}>
              <Text style={styles.rowitem}>Extra Cost:</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: '#FA8832', fontSize: wp('3.6%')}}>₦ </Text>
                <Text style={styles.rowitem}> 1000</Text>
              </View>
            </View>
            <View style={styles.row3}>
              <Text style={styles.rowitem}>Parcel Delivery Cost:</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: '#FA8832', fontSize: wp('3.6%')}}>₦ </Text>
                <Text style={styles.rowitem}> 15200</Text>
              </View>
            </View>
            <View style={styles.row3}>
              <Text style={styles.rowitem}>Home Pickup & Delivery Cost:</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: '#FA8832', fontSize: wp('3.6%')}}>₦ </Text>
                <Text style={styles.rowitem}> 2000</Text>
              </View>
            </View>
            <View style={styles.row3}>
              <Text style={styles.rowitem}>
                Preffered Pickup & Delivery Cost:
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: '#FA8832', fontSize: wp('3.6%')}}>₦ </Text>
                <Text style={styles.rowitem}> 750</Text>
              </View>
            </View>
            <View style={styles.row3}>
              <Text style={styles.rowitem}>Special Shipment:</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: '#FA8832', fontSize: wp('3.6%')}}>₦ </Text>
                <Text style={styles.rowitem}>828</Text>
              </View>
            </View>
            <View style={styles.row3}>
              <Text style={styles.rowitem}>Insurance:</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: '#FA8832', fontSize: wp('3.6%')}}>₦ </Text>
                <Text style={styles.rowitem}>100</Text>
              </View>
            </View>
            <View style={styles.row3}>
              <Text style={styles.rowitem}>Taxes:</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: '#FA8832', fontSize: wp('3.6%')}}>₦ </Text>
                <Text style={styles.rowitem}>500</Text>
              </View>
            </View>
            <View style={styles.row3}>
              <Text style={styles.rowitem}>Discount:</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: '#FA8832', fontSize: wp('3.6%')}}>₦ </Text>
                <Text style={styles.rowitem}>(200)</Text>
              </View>
            </View>
            <View style={styles.row3}>
              <Text style={styles.rowitem}>Demmurage charge for 4 days:</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: '#FA8832', fontSize: wp('3.6%')}}>₦ </Text>
                <Text style={styles.rowitem}>400</Text>
              </View>
            </View>
            <View style={styles.total2}>
              <Text style={styles.totalitem}>Total Cost:</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: '#FFF', fontSize: wp('3.6%')}}>₦ </Text>
                <Text style={styles.totalitem}>6198 </Text>
              </View>
            </View>
          </View>
          </View>
        </View>
          <CustomButton
            name="CONFIRM & PAY"
            fontcolor="white"
            bgcolor="#FA8832"
            width={wp('50%')}
            height={hp('6%')}
          />
          <CustomButton
            name="CANCEL"
            fontcolor="#FA8832"
            bgcolor="white"
            width={wp('40%')}
            height={hp('5%')}
          />
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    Main: {
      flex: 1,
      marginHorizontal: '2%',
      backgroundColor:'#fffbf8'
    },
    headerContainer: {
      flex: 1,
      marginTop: '5%',
      paddingVertical: '2%',
      marginBottom: '3%',
      marginHorizontal: '5%',
      borderBottomWidth: 1,
      borderBottomColor: '#FA8832',
    },
    header: {
      fontSize: 17,
      fontWeight: '500',
      marginHorizontal: 35,
      marginTop: '4%',
    },
    preferedtime: {
      flex: 1,
      padding: wp('2%'),
      marginTop: hp('2%'),
      flexDirection: 'row',
      marginHorizontal: wp('7%'),
    },
    preferedtime_text: {
      fontSize: wp('4%'),
      fontWeight: '600',
      padding: wp('.5%'),
      fontFamily: 'Syne-Regular',
    },
    row2: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: wp('3.5%'),
      paddingVertical: hp('1%'),
    },
    preferedtime_text2: {
      fontSize: wp('3%'),
      fontFamily: 'Syne-Regular',
      fontWeight: '500',
    },
    prefered_time_text_container: {
      marginHorizontal: wp('3%'),
    },
    preferedtime1: {
      fontSize: wp('3.5%'),
      fontWeight: '500',
      padding: wp('2%'),
      borderWidth: 1,
      borderColor: 'grey',
      borderRadius: wp('4%'),
      paddingHorizontal: wp('10%'),
      paddingVertical: hp('2%'),
      fontFamily: 'Syne-Regular',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginVertical: '1%',
    },
    timeselection: {
      borderColor: '#fa892e',
      borderWidth: 1,
      borderRadius: wp('5%'),
      padding: '2%',
      marginHorizontal: wp('5%'),
      marginVertical: hp('1%'),
    },
    itemselected: {
      backgroundColor: '#fa892e',
      borderRadius: wp('4%'),
      fontSize: wp('3.5%'),
      fontWeight: '500',
      padding: '2%',
      fontFamily: 'Syne-Regular',
      paddingHorizontal: wp('10%'),
      paddingVertical: hp('2%'),
      color: 'white',
    },
    parcelbox: {
      marginVertical: '3%',
      borderWidth: 1,
      marginHorizontal: '5%',
      borderColor: '#FA8832',
      borderRadius: 10,
    },
    parcelheading: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: '3%',
      borderBottomColor: '#FA8832',
      borderBottomWidth: 1,
      paddingVertical: '3%',
    },
    row1: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: '3%',
      paddingVertical: '2%',
    },
   
    rawtext: {
      marginHorizontal: '3%',
      marginVertical: '1%',
      paddingVertical: '2%',
    },
    summary: {
      marginHorizontal: '5%',
      backgroundColor: 'white',
      borderRadius: 15,
      elevation: 5,
      marginVertical: '3%',
      paddingTop: '2%',
    },
    total: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomStartRadius: 15,
      borderBottomEndRadius: 15,
      backgroundColor: '#263238',
      paddingVertical: '5%',
      paddingHorizontal: '3%',
    },
    total2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomStartRadius: 15,
        borderBottomEndRadius: 15,
        backgroundColor: '#FA8832',
        paddingVertical: '5%',
        paddingHorizontal: '3%',
      },
    location: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderColor: '#FA8832',
      borderWidth: 1,
      marginVertical: '3%',
      flex: 1,
      marginHorizontal: '3%',
      borderRadius: 10,
      padding: '4%',
    },
    totalitem: {
      paddingHorizontal: 10,
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    },
    rowitem: {
      fontSize: wp('3.6%'),
      fontWeight: '400',
      letterSpacing: 0.5,
    },
  
    row3: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: '3%',
      paddingVertical: '2%',
    },
  });
  