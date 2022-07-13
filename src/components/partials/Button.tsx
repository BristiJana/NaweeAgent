import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors} from '../../../assets/color';

type Props = {
  children: string;
  btnStyle?: {[key: string]: string | number};
  onPress?: () => void;
  width?: number | string;
};
const Button: React.FC<Props> = ({children, btnStyle, onPress, width}) => {
  return (
    <TouchableOpacity activeOpacity={0.3} onPress={onPress}>
      <View
        style={{
          ...styles.btn,
          width: width ? width : styles.btnWidth.width,
          ...btnStyle,
        }}>
        <Text style={styles.btnText}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 10,
    backgroundColor: colors.primary.main,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  btnWidth: {
    width: 180,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
  },
});
