import React from 'react';
import {View, Text, Button} from 'react-native';

const Hello = ({navigation}: any) => {
  return (
    <>
      <Text
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        Hello
      </Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </>
  );
};
export default Hello;
