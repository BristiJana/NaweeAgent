import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const waveImg = require('../../assets/img/wave.png');
const whiteWaveImg = require('../../assets/img/white-wave.png');

const Wave: React.FC<{
  waveStyle: {[key: string]: string | number | object};
}> = ({waveStyle}) => {
  return (
    <View style={{...styles.wave, ...waveStyle}}>
      <Image style={{...styles.waveTop, ...styles.waveItem}} source={waveImg} />
      <Image
        style={{...styles.whiteWave, ...styles.waveItem}}
        source={whiteWaveImg}
      />
    </View>
  );
};
export default Wave;

const styles = StyleSheet.create({
  wave: {
    position: 'absolute',
    width: '100%',
    height: 220,
  },
  bottomWaveContainer: {
    position: 'absolute',
    left: 0,
    bottom: -100,
    transform: [{rotate: '180deg'}],
  },
  waveItem: {
    width: '100%',
    position: 'absolute',
  },
  waveTop: {
    zIndex: 5,
    height: '95%',
  },
  whiteWave: {
    top: -10,
  },
});
