import React from 'react';
import {StyleSheet, Text} from 'react-native';

const PageHeading = ({headingStyles, children}) => {
  return <Text style={{...styles.heading, ...headingStyles}}>{children}</Text>;
};

export default PageHeading;

const styles = StyleSheet.create({
  heading: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
});
