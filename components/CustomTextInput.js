import {View, Text, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Fontisto';

export const CustomTextInput = ({placeholder, onChange, iconName, iconSize,bgcolor,iconcolor,visible}) => (
  <View style={styles.maincontainer}>
  <Text style={{fontSize:18,fontWeight:'600'}}>{placeholder}</Text>
  <View
    style={[styles.container, {backgroundColor: bgcolor}]}>
    <Icon
      name={iconName}
      type="FontAwesome"
      size={iconSize}
      color={iconcolor}
      style={{paddingLeft: 15,paddingRight: 15,fontWeight: '700'}}
    />

    <TextInput
      style={styles.textinputStyleLogin}
      placeholder={placeholder}
      secureTextEntry={!visible}
      onChangeText={text => onChange({text})}
    />
  </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    alignSelf:'center',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  maincontainer: {
    height: 60,
    width: '80%',
    alignSelf:'center',
    marginTop: 50,
    borderRadius: 5,
  },
  textinputStyleLogin:{
    color: 'white',
    width:'80%',
    fontWeight: '700',
  },
  text: {
    fontSize: 23,
    color: '#ffe0bc',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  input: {
    width: '100%',
    height: 40,
    fontSize: 23,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    backgroundColor: '#ffe0bc',
    borderRadius: 10,
    flex: 1,
    paddingLeft: 40,
    opacity: 0.4,
  },
});

export default CustomTextInput;
