import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignIn from '../../screens/SignIn';
import PersonalInfo from '../../screens/SignUp/PersonalInfo';
import {colors} from '../../../assets/color';
import GuarantorInfo from '../../screens/SignUp/GuarantorInfo';
import EmergencyContactForm from '../../screens/SignUp/EmergencyContactForm';
import BusinessInfoForm from '../../screens/SignUp/BusinessInfoForm';
import BankInfoForm from '../../screens/SignUp/BankInfoForm';
import SuccessScreen from '../../screens/SuccessScreen';
import ForgotPassword from '../../screens/ForgotPassword';
import Home from '../../screens/Home';
import Notification from '../../screens/Notification';
import SendParcelDropoff from '../../screens/SendParcelDropoff';
import HomeEmergencyDropoff from '../../screens/HomeEmergencyDropoff';
import ParcelRecord from '../../screens/ParcelRecord';
import ReceiveParcelAgent from '../../screens/ReceiveParcelAgent';
import SendParcel from '../../screens/Parcel/SendParcel';
import ReceivedParcel from '../../screens/Parcel/ReceivedParcel';
import CancelledParcel from '../../screens/Parcel/CancelledParcel';
import Demmurage from '../../screens/Parcel/Demmurage';

const stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="signIn">
        <stack.Screen
          name="signIn"
          component={SignIn}
          options={{
            headerShown: false,
            contentStyle: {backgroundColor: colors.primary.light},
          }}
        />
        <stack.Screen
          name="forgotPassword"
          component={ForgotPassword}
          options={{
            headerShown: false,
            contentStyle: {backgroundColor: colors.primary.light},
          }}
        />
        <stack.Screen
          name="personalInfo"
          component={PersonalInfo}
          options={{
            headerShown: false,
            contentStyle: {backgroundColor: colors.primary.light},
          }}
        />
        <stack.Screen
          name="guarantorInfo"
          component={GuarantorInfo}
          options={{
            headerShown: false,
            contentStyle: {backgroundColor: colors.primary.light},
          }}
        />
        <stack.Screen
          name="emergencyContact"
          component={EmergencyContactForm}
          options={{
            headerShown: false,
            contentStyle: {backgroundColor: colors.primary.light},
          }}
        />
        <stack.Screen
          name="businessInfo"
          component={BusinessInfoForm}
          options={{
            headerShown: false,
            contentStyle: {backgroundColor: colors.primary.light},
          }}
        />
        <stack.Screen
          name="bankInfo"
          component={BankInfoForm}
          options={{
            headerShown: false,
            contentStyle: {backgroundColor: colors.primary.light},
          }}
        />
        <stack.Screen
          name="accountCreated"
          component={SuccessScreen}
          options={{
            headerShown: false,
            contentStyle: {backgroundColor: colors.primary.light},
          }}
        />
        <stack.Screen
          name="home"
          component={Home}
          options={{
            headerShown: false,
            contentStyle: {backgroundColor: colors.primary.light},
          }}
        />
        <stack.Screen
          name="notifications"
          component={Notification}
          options={{
            headerShown: false,
            contentStyle: {backgroundColor: colors.primary.light},
          }}
        />
        <stack.Screen
          name="sendParcelDropoff"
          component={SendParcelDropoff}
          options={{
            headerShown: false,
            contentStyle: {backgroundColor: colors.primary.light},
          }}
        />
        <stack.Screen
          name="homeEmergencyDropoff"
          component={HomeEmergencyDropoff}
          options={{
            headerShown: false,
            contentStyle: {backgroundColor: colors.primary.light},
          }}
        />
        <stack.Screen
          name="parcelRecord"
          component={ParcelRecord}
          options={{
            headerShown: false,
            contentStyle: {backgroundColor: colors.primary.light},
          }}
        />
        <stack.Screen
          name="receiveParcelAgent"
          component={ReceiveParcelAgent}
          options={{
            headerShown: false,
            contentStyle: {backgroundColor: colors.primary.light},
          }}
        />
        <stack.Screen
          name="sendParcel"
          component={SendParcel}
          options={{
            headerShown: false,
            contentStyle: {backgroundColor: colors.primary.light},
          }}
        />
        <stack.Screen
          name="receivedParcel"
          component={ReceivedParcel}
          options={{
            headerShown: false,
            contentStyle: {backgroundColor: colors.primary.light},
          }}
        />
        <stack.Screen
          name="cancelledParcel"
          component={CancelledParcel}
          options={{
            headerShown: false,
            contentStyle: {backgroundColor: colors.primary.light},
          }}
        />
        <stack.Screen
          name="demmurage"
          component={Demmurage}
          options={{
            headerShown: false,
            contentStyle: {backgroundColor: colors.primary.light},
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
