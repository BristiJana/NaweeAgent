import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

type Props = {
  children: any;
  btnStyle?: {[key: string]: string | number};
  onPress?: () => void;
  width?: number | string;
};
const ButtonSecondary: React.FC<Props> = ({
  children,
  btnStyle,
  onPress,
  width,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
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

export default ButtonSecondary;

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.62,

    elevation: 1,
  },
  btnWidth: {
    width: 180,
  },
  btnText: {
    color: '#000',
    fontSize: 16,
  },
});
