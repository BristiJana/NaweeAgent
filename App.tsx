import React from 'react';
import Navigation from './src/route/Navigation/Navigation';
import {Provider} from 'react-redux';
import store from './src/store/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import PaymentFailed from './src/screens/boothscreens/DemurrageOrder';

export default function App() {
  return (
    <Provider store={store}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaProvider>
          {/* <Navigation /> */}
          <PaymentFailed />
        </SafeAreaProvider>
      </ApplicationProvider>
    </Provider>
  );
}
