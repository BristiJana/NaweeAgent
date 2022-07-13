import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Input as KittenInput} from '@ui-kitten/components';
import {colors} from '../../../assets/color';

type Props = {
  inputStyles?: {[key: string]: string | number};
  placeholder: string;
  label?: string;
  error: string;
  value: string;
  marginBottom?: number;
  handleForm: (value: string) => void;
  type?: string;
  multiline?: boolean;
  noOfLines?: number;
};
const Input: React.FC<Props> = ({
  inputStyles,
  placeholder,
  label,
  error,
  value,
  handleForm,
  marginBottom,
  type,
  multiline,
  noOfLines,
}) => {
  return (
    <KittenInput
      onChangeText={handleForm}
      value={value}
      placeholder={placeholder}
      multiline={multiline}
      label={() => (
        <Text
          style={{
            ...styles.label,
            display: label ? styles.show.display : styles.hide.display,
          }}>
          {label}
        </Text>
      )}
      caption={error}
      secureTextEntry={type === 'password'}
      status="danger"
      numberOfLines={noOfLines}
      style={{
        ...styles.inputContainer,
        ...inputStyles,
        borderColor: error
          ? styles.errorBorder.borderColor
          : styles.inputBorder.borderColor,
        marginBottom:
          marginBottom !== undefined
            ? marginBottom
            : styles.margin.marginBottom,
      }}
    />
  );
};
export default Input;

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    textTransform: 'capitalize',
    fontWeight: '400',
    marginBottom: 15,
    color: '#1b1b1d',
  },
  show: {
    display: 'flex',
  },
  hide: {
    display: 'none',
  },
  inputContainer: {
    borderRadius: 10,
    borderWidth: 1.5,
    zIndex: 20,
    backgroundColor: '#FFFBF8',
  },
  margin: {
    marginBottom: 20,
  },
  inputBorder: {
    borderColor: colors.primary.main,
  },
  errorBorder: {
    borderColor: 'red',
  },
  input: {
    fontSize: 13,
  },
  error: {
    marginBottom: 20,
    marginLeft: 5,
  },
});
