import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
type Props = {
  btnText: string;
};
const HomeButton: React.FC<Props> = ({btnText}) => {
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>{btnText}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default HomeButton;

const styles = StyleSheet.create({
  btn: {
    width: wp('80%'),
    marginHorizontal: wp('10%'),
    backgroundColor: '#fff',
    elevation: 10,
    height: wp('12%'),
    marginTop: wp('8%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  btnText: {
    fontSize: 14,
    fontWeight: '600',
  },
});
