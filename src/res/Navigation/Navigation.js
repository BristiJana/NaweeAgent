import * as React from 'react';
// import Login from '../../Screens/Login';
// import BoothAgent from '../../Screens/BoothAgent';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BoothAgent from '../../Screens/BoothAgent';
import Login from '../../Screens/Login';
import Personalinfo from '../../Screens/Personalinfo';
import EmergencyContact from '../../Screens/EmergencyContact';
import GaurantorsInfo from '../../Screens/SignUp/GaurantorsInfo';
import res from '../index';
import VehicleInfo from '../../Screens/SignUp/VehicleInfo';
import BankInfo from '../../Screens/SignUp/BankInfo';
import FrequentRoute from '../../Screens/SignUp/FrequentRoute';
import TandC from '../../Screens/SignUp/TandC';

const Stack = createNativeStackNavigator();

export default function NavClass() {
  // const navigation = useNavigation();
  console.log('Navigation is called ---------------');
  return(
    <Stack.Navigator initialRouteName="BoothAgent" >
     <Stack.Screen name="BoothAgent" component={BoothAgent} options={{ headerShown: false}} />
     <Stack.Screen name="LOG IN" component={Login} options={{ headerShown: true, headerBackTitleVisible: false, headerStyle: {
       backgroundColor: res.color.whiteBackroundColor, 
    },
    headerTintColor: 'black',
    headerBackImage: () => <BackImage isWhite = {true}  />
    
     }}
     
     
      />

<Stack.Screen name="Personal Info" component={Personalinfo}options={{ headerShown: true, title:'SIGN UP', headerBackTitleVisible: false, headerStyle: {
       backgroundColor: res.color.whiteBackroundColor, 
    },
    headerTintColor: 'black',
    headerBackImage: () => <BackImage isWhite = {true}  />
     }}
      />
      <Stack.Screen name="EmergencyContact" component={EmergencyContact} options={{ headerShown: true, title:'SIGN UP', headerBackTitleVisible: false, headerStyle: {
       backgroundColor: res.color.whiteBackroundColor, 
    },
    headerTintColor: 'black',
    headerBackImage: () => <BackImage isWhite = {true}  />
     }}
      />
      <Stack.Screen name="GaurantorsInfo" component={GaurantorsInfo} options={{ headerShown: true, title:'SIGN UP', headerBackTitleVisible: false, headerStyle: {
       backgroundColor: res.color.whiteBackroundColor, 
    },
    headerTintColor: 'black',
    headerBackImage: () => <BackImage isWhite = {true}  />
     }}
      />
      <Stack.Screen name="VehicleInfo" component={VehicleInfo} options={{ headerShown: true, title:'SIGN UP', headerBackTitleVisible: false, headerStyle: {
       backgroundColor: res.color.whiteBackroundColor, 
    },
    headerTintColor: 'black',
    headerBackImage: () => <BackImage isWhite = {true}  />
     }}
      />
       <Stack.Screen name="BankInfo" component={BankInfo} options={{ headerShown: true, title:'SIGN UP', headerBackTitleVisible: false, headerStyle: {
       backgroundColor: res.color.whiteBackroundColor, 
    },
    headerTintColor: 'black',
    headerBackImage: () => <BackImage isWhite = {true}  />
     }}
      />
      <Stack.Screen name="FrequentRoute" component={FrequentRoute} options={{ headerShown: true, title:'SIGN UP', headerBackTitleVisible: false, headerStyle: {
       backgroundColor: res.color.whiteBackroundColor, 
    },
    headerTintColor: 'black',
    headerBackImage: () => <BackImage isWhite = {true}  />
     }}
      />
      <Stack.Screen name="TandC" component={TandC} options={{ headerShown: true, title:'TERM & CONDITIONS', headerBackTitleVisible: false, headerStyle: {
       backgroundColor: res.color.orageBackgroundColor, 
    },
    headerTintColor: 'white',
    headerBackImage: () => <BackImage isWhite = {true}  />
     }}
      />
      {/* <Stack.Screen name="ForgotPassword" component={ForgetPassword} options={{ headerShown: true, headerStyle: {
       backgroundColor: '#1A3A81'
    },
    headerTintColor: 'white',
    headerBackImage: () => <BackImage isWhite = {true}/>
     }}
      /> */}
     {/* <Stack.Screen name="DrawerClass" component={DrawerClass} options={{ headerShown: false }}/> */}
 </Stack.Navigator>
  );
}