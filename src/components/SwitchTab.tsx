import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default function SwitchTab({
  activeTab,
  setactiveTab,
  leftoption,
  rightoption,
}: any) {
  return (
    <View style={styles.container}>
      <HeaderButton
        text={leftoption}
        btnColor="white"
        textColor="black"
        activeTab={activeTab}
        setactiveTab={setactiveTab}
        left={true}
      />
      <HeaderButton
        text={rightoption}
        btnColor="#fa892e"
        textColor="white"
        activeTab={activeTab}
        setactiveTab={setactiveTab}
        left={false}
      />
    </View>
  );
}

const HeaderButton = (props: any) => (
  <View>
    <TouchableOpacity
      style={{
        backgroundColor: props.activeTab === props.text ? '#fa892e' : 'white',
        height: hp('5.5%'),
        flex:1,
        paddingHorizontal: wp('6%'),
        borderTopLeftRadius: props.left ? 10 : 0,
        borderBottomLeftRadius: props.left ? 10 : 0,
        borderTopRightRadius: props.left ? 0 : 10,
        borderBottomRightRadius: props.left ? 0 : 10,
        borderWidth: 1,
        borderColor: '#fa892e',
        justifyContent: 'center',
      }}
      onPress={() => props.setactiveTab(props.text)}
      disabled={props.activeTab === props.text ? true : false}>
      <Text
        style={{
          color: props.activeTab === props.text ? 'white' : '#fa892e',
          fontSize: wp('4.5%'),
          fontWeight: '600',
          alignSelf: 'center',
          fontFamily: 'Syne-Regular',
        }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: '2%',
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
