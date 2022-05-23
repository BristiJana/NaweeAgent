import {View} from 'react-native';
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';

export default function CustomDropdown({placeholder,itemlist,inputicon}) {
  
  return (
    <View  style={{flexDirection:'row'}}>
      <Icon2
          name={inputicon}
          size={25}
          color="black"
          style={{paddingLeft: 15,paddingRight: 15,fontWeight: '700',position:'absolute',top:33,left:50,zIndex:2}}
        />
      <SelectDropdown
        data={itemlist}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem;
        }}
        defaultButtonText={placeholder}
        rowTextForSelection={(item, index) => {
          
          return item;
          
        }}
        renderDropdownIcon={() => (<Icon
          name="caret-down"
          type="FontAwesome"
          size={20}
          color="black"
          style={{paddingLeft: 15,paddingRight: 15,fontWeight: '700'}}
        />)}
        dropdownIconPosition="right"
        buttonTextStyle={{fontSize: 15,fontWeight: '700',borderRadius:30}}
        buttonStyle={{padding:10,marginHorizontal:45 ,marginVertical:20,width:'80%',backgroundColor:'#fca15a',borderRadius:10}}
      />
    </View>
  );
}
