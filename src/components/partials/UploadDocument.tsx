import {colors} from '../../../assets/color';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {
  docStyle?: {[key: string]: string | number};
  fileType?: string;
};
const UploadDocument: React.FC<Props> = ({docStyle, fileType}) => {
  return (
    <View style={{...styles.documentContainer, ...docStyle}}>
      <Text style={styles.docHeading}>Upload Identity Document</Text>
      <View style={styles.docInnerContainer}>
        <Text style={styles.cloudIcon}>Icon</Text>
        <Text style={styles.imgFormatText}>
          {fileType ? fileType : '.PNG , .PDF , .JPG , DOC'}
        </Text>
        <Text>You can also upload files by</Text>
        <Text style={styles.clickHereLink}>clicking here</Text>
      </View>
    </View>
  );
};

export default UploadDocument;

const styles = StyleSheet.create({
  documentContainer: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderWidth: 1.5,
    borderColor: colors.primary.main,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  docHeading: {
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  docInnerContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: colors.primary.transparent,
    borderRadius: 10,
  },
  cloudIcon: {
    // width: 37,
    height: 26,
    marginBottom: 12,
  },
  imgFormatText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  clickHereLink: {
    color: colors.primary.main,
    textDecorationLine: 'underline',
  },
});
