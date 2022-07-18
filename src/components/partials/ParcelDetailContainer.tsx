import {colors} from '../../../assets/color';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ParcelDetailContainer: React.FC<{
  heading: string;
  innerHeading?: string;
  data: {[key: string]: string};
  specialInstructions?: string;
  marginBottom: number;
}> = ({heading, innerHeading, data, specialInstructions, marginBottom}) => {
  return (
    <View style={{...styles.fullWidth, marginBottom: marginBottom}}>
      <Text style={styles.heading}>{heading}</Text>
      <View style={styles.homePickComponent}>
        {innerHeading && (
          <View style={styles.homePickHeadingContainer}>
            <Text style={styles.homePickupHeading}>{innerHeading}</Text>
          </View>
        )}

        {/* detail container */}
        <View style={styles.detailContainer}>
          {Object.keys(data).map(key => {
            return (
              <View key={key} style={styles.detailItemContainer}>
                <Text style={styles.detailItemText}>{key}:</Text>
                <Text
                  style={{
                    ...styles.detailItemText,
                    ...styles.detailItemValueText,
                  }}>
                  {data[key]}
                </Text>
              </View>
            );
          })}
        </View>

        {specialInstructions && (
          <Text style={styles.specialInstructionText}>
            {specialInstructions}
          </Text>
        )}
      </View>
    </View>
  );
};

export default ParcelDetailContainer;

const styles = StyleSheet.create({
  homePickComponent: {
    borderWidth: 1,
    borderColor: colors.primary.main,
    borderRadius: 10,
    paddingVertical: 8,
    marginTop: 10,
  },
  fullWidth: {
    width: '100%',
  },
  heading: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.dark,
  },
  homePickupHeading: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.dark,
    textAlign: 'center',
    marginBottom: 8,
  },
  homePickHeadingContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary.main,
  },
  detailContainer: {
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  detailItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  detailItemText: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.dark,
    textTransform: 'capitalize',
    maxWidth: '60%',
  },
  detailItemValueText: {
    textAlign: 'right',
  },
  specialInstructionText: {
    color: colors.primary.main,
    fontSize: 12,
    paddingHorizontal: 20,
  },
});
