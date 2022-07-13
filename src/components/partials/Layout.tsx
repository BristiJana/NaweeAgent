import React from 'react';
import {StyleSheet, View} from 'react-native';
import Nav from './Nav';

type Props = {
  navigation?: any;
  navHeading: string;
  children: any;
  innerContainerStyle?: {[key: string]: string | number};
  navIcon?: any;
};
const Layout: React.FC<Props> = ({
  navigation,
  navHeading,
  children,
  innerContainerStyle,
  navIcon,
}) => {
  return (
    <View style={styles.container}>
      <Nav icon={navIcon} heading={navHeading} navigation={navigation} />
      <View style={{...styles.innerContainer, ...innerContainerStyle}}>
        {children}
      </View>
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: 50,
    flex: 1,
  },
  innerContainer: {
    width: '80%',
  },
});
