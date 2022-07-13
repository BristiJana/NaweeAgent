import {colors} from '../../../assets/color';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ParcelCard: React.FC<{
  name: string;
  time?: string;
  message: string;
  style?: {[key: string]: string | number};
  errorStyle?: {[key: string]: string | number};
  danger?: boolean;
  error?: string;
}> = ({name, time, style, danger, message, error, errorStyle}) => {
  return (
    <>
      <LinearGradient
        colors={
          danger
            ? ['#ffc9c7', '#fff', '#fff']
            : ['#fee4d1', '#FFFFFF', '#FFFBF8']
        }
        style={{
          ...style,
          marginBottom: error
            ? styles.noMargin.margin
            : styles.marginBottom.marginBottom,
        }}
        start={{x: 0.0, y: 1.25}}
        end={{x: 2.5, y: 2.0}}>
        <View
          style={{
            ...styles.container,
            borderColor: danger
              ? styles.borderDanger.borderColor
              : styles.border.borderColor,
          }}>
          <View style={styles.titleContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.message}>{time}</Text>
          </View>
          <Text style={styles.message}>{message}</Text>
        </View>
      </LinearGradient>
      {error && <Text style={{...styles.error, ...errorStyle}}>{error}</Text>}
    </>
  );
};

export default ParcelCard;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  container: {
    paddingVertical: 12,
    paddingHorizontal: 17,
    width: '100%',
    borderRadius: 5,
    borderWidth: 1.1,
  },
  marginBottom: {marginBottom: 20},
  noMargin: {margin: 0},
  border: {borderColor: colors.primary.main},
  borderDanger: {borderColor: colors.danger},
  name: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.dark,
  },
  message: {
    fontSize: 10,
    fontWeight: '400',
    color: colors.dark,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  error: {
    fontSize: 10,
    fontWeight: '400',
    color: colors.danger,
    marginBottom: 15,
    marginTop: 5,
  },
});
