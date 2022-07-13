import {colors} from '../../../assets/color';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {
  heading: string;
  navStyles?: {[key: string]: string | number};
  hideIcon?: boolean;
  navigation?: any;
  icon?: JSX.Element;
};
const Nav: React.FC<Props> = ({
  heading,
  navStyles,
  hideIcon,
  navigation,
  icon,
}) => {
  return (
    <View style={{...styles.nav, ...navStyles}}>
      {hideIcon ? (
        ''
      ) : (
        <Text
          style={styles.icon}
          onPress={() => {
            navigation.goBack();
          }}>
          {'<'}
        </Text>
      )}
      <Text style={styles.navHeading}>{heading}</Text>
      <View>{icon}</View>
    </View>
  );
};
export default Nav;

const styles = StyleSheet.create({
  nav: {
    height: 70,
    width: '100%',
    backgroundColor: colors.primary.main,
    color: 'white',
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    zIndex: 99,
  },
  icon: {
    color: '#fff',
    fontSize: 24,
    // position: 'absolute',
    // left: '15%',
  },
  navHeading: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 24,
    textTransform: 'capitalize',
  },
});
