import Layout from './../../components/partials/Layout';
import React from 'react';
import {StyleSheet, Text} from 'react-native';

import PageHeading from '../../components/partials/PageHeading';

type Props = {
  children: any;
  pageHeading: string;
  page: string | number;
  navigation: any;
};
const SignUpLayout: React.FC<Props> = ({
  children,
  pageHeading,
  page,
  navigation,
}) => {
  return (
    <Layout navHeading="SIGN UP" navigation={navigation}>
      <Text style={styles.pageNo}>{page} of 6</Text>
      <PageHeading headingStyles={styles.heading}>{pageHeading}</PageHeading>
      {children}
    </Layout>
  );
};
export default SignUpLayout;

const styles = StyleSheet.create({
  pageNo: {
    color: '#BDBDBD',
    textAlign: 'right',
    marginTop: 7,
    marginBottom: 7,
  },
  heading: {
    marginBottom: 15,
    textTransform: 'capitalize',
  },
});
