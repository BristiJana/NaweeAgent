import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const DropHeader = ({header}: any) => {
  return (
    <>
      <SafeAreaView>
        <TouchableOpacity>
          <View style={styles.container}>
            <View style={styles.card}>
              <View style={styles.Content}>
                <Text style={styles.header}>{header}</Text>
                <FontAwesome5 style={styles.icon} name="angle-down" size={20} />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '8%',
    alignSelf: 'center',
    width: '100%',
  },
  card: {
    maxWidth: '80%',
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    position: 'relative',
    left: '10%',
  },
  Content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '5%',
    paddingVertical: '3%',
  },
  header: {
    fontSize: 14,
    fontWeight: '600',
  },
  icon: {},
});
export default DropHeader;
