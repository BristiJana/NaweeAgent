import {View, Text, Button, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import DropHeader from '../Components/DropHeader';

export default function ExpandableText({HeaderText, BodyText}) {
  const [expanded, setexpanded] = useState(false);

  return (
    <SafeAreaView>
      <View style={{}}>
        <Collapse
          isExpanded={expanded}
          onToggle={isExpanded => setexpanded(isExpanded)}>
          <CollapseHeader>
            <View
            //   style={{
            //     paddingHorizontal: 30,
            //     flexDirection: 'row',
            //     justifyContent: 'space-between',
            >
              <DropHeader header="Sizing" />
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
              
            </View>
          </CollapseBody>
        </Collapse>
      </View>
    </SafeAreaView>
  );
}
