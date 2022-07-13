import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function CustomDropdownSmall({
  dropdownHeading,
  itemlist,
  onPress,
  dropdownName,
}: any) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.dropdownHeading}>{dropdownHeading}</Text>
        <View style={{flexDirection: 'row'}}>
          <SelectDropdown
            data={itemlist}
            onSelect={(selectedItem, index) => {
              onPress(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            defaultButtonText={dropdownName}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            renderDropdownIcon={() => (
              <Icon
                name="angle-down"
                type="FontAwesome"
                size={20}
                color="black"
                style={styles.iconStyle}
              />
            )}
            dropdownIconPosition="right"
            buttonTextStyle={styles.btnTextStyle}
            buttonStyle={styles.btnStyle}
            dropdownStyle={styles.dropDownStyle}
            rowTextStyle={styles.dropText}
            selectedRowStyle={styles.selectedRow}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: wp('5%'),
  },
  dropdownHeading: {
    marginHorizontal: wp('1%'),
    marginBottom: wp('3%'),
    fontSize: 14,
    fontWeight: '600',
  },
  btnStyle: {
    width: wp('35%'),
    height: hp('6%'),
    borderWidth: 1,
    borderColor: '#FA8832',
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
  btnTextStyle: {
    fontSize: 12,
    paddingRight: wp('5%'),
  },
  iconStyle: {
    // paddingLeft: 15,
    // paddingRight: 15,
    fontWeight: '700',
  },
  dropDownStyle: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FA8832',
  },
  dropText: {
    fontSize: 12,
    textAlign: 'left',
  },
  selectedRow: {
    backgroundColor: 'rgba(250, 136, 50, 0.17)',
  },
});
