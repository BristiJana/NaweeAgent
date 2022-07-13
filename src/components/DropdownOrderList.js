import {View, Text, Button, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import OrderDropdown from '../Components/OrderDropdown';
import OrderList from './OrderList';
// import {styles} from 'react-native-element-dropdown/src/components/TextInput/styles';

export default function DropdownOdersList() {
  const [expanded, setexpanded] = useState(false);

  return (
    <View
      style={{
        // paddingVertical: 20,
        // borderBottomColor: 'orange',
        // borderWidth: 1,
        marginHorizontal: 20,
        borderRightColor: 'white',
        borderTopColor: 'white',
        borderLeftColor: 'white',
        // marginVertical: 10,
      }}>
      <Collapse
        isExpanded={expanded}
        onToggle={isExpanded => setexpanded(isExpanded)}>
        <CollapseHeader>
          <View
            style={{
              paddingHorizontal: 30,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <OrderDropdown ListName="Active Orders" />
            <OrderDropdown ListName="Active Orders" />
            <OrderDropdown ListName="Active Orders" />
          </View>
        </CollapseHeader>
        <CollapseBody>
          <View
            style={{
              paddingHorizontal: 30,
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 20,
            }}>
            <View
              style={
                {
                  // borderRadius: 50,
                  // elevation: 10,
                  // backgroundColor: 'white',
                }
              }>
              <OrderList ListName="AWP7643" Status="(Processing)" date="01/01/2022" />
              <OrderList ListName="AWP7643" Status="(Processing)" date="01/01/2022" />
              <OrderList ListName="AWP7643" Status="(Processing)" date="01/01/2022" />
              <OrderList ListName="AWP7643" Status="(Processing)" date="01/01/2022" />
            </View>
          </View>
        </CollapseBody>
      </Collapse>
    </View>
  );
}
