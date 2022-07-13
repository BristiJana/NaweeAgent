import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function dropDown() {
  const countries = ['Inter-e', 'Within State'];
  return (
    <SafeAreaView>
      <SelectDropdown
        style={styles.dropDown}
        data={countries}
        onSelect={(selectedItem, index) => {
          //   console.log(selectedItem, index);
        }}
        defaultButtonText="Select"
        renderDropdownIcon={() => (
          <Icon
            name="angle-down"
            type="FontAwesome"
            size={20}
            color="black"
            style={{paddingLeft: 15, paddingRight: 15, fontWeight: '700'}}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  dropDown: {
    width: wp('80%'),
    marginHorizontal: wp('10%'),
  },
});
