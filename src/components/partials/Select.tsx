import React, {useState} from 'react';
import {
  IndexPath,
  Layout,
  Select as KittenSelect,
  SelectItem,
} from '@ui-kitten/components';
import {StyleSheet, Text} from 'react-native';
import {colors} from '../../../assets/color';

type Props = {
  options: string[];
  label?: string;
  marginBottom?: number;
  handleForm: (value: string) => void;
  placeholder?: string;
};
const Select: React.FC<Props> = ({
  options,
  label,
  marginBottom,
  handleForm,
  placeholder,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<IndexPath[] | IndexPath>(
    new IndexPath(0),
  );

  return (
    <>
      {label && <Text style={styles.label}>{label}</Text>}
      <Layout level="1" style={styles.selectContainer}>
        <KittenSelect
          selectedIndex={selectedIndex}
          placeholder={placeholder}
          value={options[selectedIndex.row]}
          style={{
            ...styles.inputContainer,
            marginBottom:
              marginBottom !== undefined
                ? marginBottom
                : styles.margin.marginBottom,
          }}
          onSelect={index => {
            handleForm(options[selectedIndex.row]);
            setSelectedIndex(index);
          }}>
          {options.map(option => (
            <SelectItem key={option} title={option} />
          ))}
        </KittenSelect>
      </Layout>
    </>
  );
};

export default Select;

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    textTransform: 'capitalize',
    fontWeight: '400',
    marginBottom: 15,
    color: '#1b1b1d',
  },
  selectContainer: {
    backgroundColor: 'transparent',
  },
  inputContainer: {
    overflow: 'hidden',
    borderRadius: 10,
    borderWidth: 1.3,
    borderColor: colors.primary.main,
    zIndex: 20,
    backgroundColor: 'red',
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
