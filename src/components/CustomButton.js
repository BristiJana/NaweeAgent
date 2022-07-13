import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function CustomButton({
  name,
  bgcolor,
  height,
  fontcolor,
  width,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={{
        marginHorizontal: '2%',
        backgroundColor: bgcolor,
        height: height,
        alignSelf: 'center',
        borderRadius: 10,
        // marginBottom: '3%',
        marginTop: '2%',
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: fontcolor,
            alignSelf: 'center',
            // paddingVertical: '2%',
            fontWeight: '500',
            fontFamily: "'Syne', sans-serif",
          }}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
