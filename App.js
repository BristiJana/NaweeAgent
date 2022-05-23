import {View} from 'react-native';
import React,{useState} from 'react';
import CustomButton from './components/CustomButton';
import CustomTextInput from './components/CustomTextInput';
import GradientButton from './components/GradientButton';
import SwitchTab from './components/SwitchTab';
import CustomDropdown from './components/CustomDropdown';
import ProcessBar from './components/ProcessBar';


const App = () => {
  const [ activeTab, setactiveTab ] = useState("Booth"); 
  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];
  return (<View style={{ height:'100%',backgroundColor:'#f4852d'}}>
      <CustomTextInput placeholder="Email" iconName="email" iconSize={23} bgcolor="#fca15a" iconcolor="#fff" onChange={(val) => console.log(val)} visible={true}/>
      <CustomTextInput placeholder="Password" iconName="key" iconSize={23} bgcolor="#fca15a" iconcolor="#fff" onChange={(val) => console.log(val)} visible={false}/>
    <CustomButton name="LOG IN" bgcolor="#fff" fontcolor="black" bordercolor="white" width={250}  />
    {/* <GradientButton name="SIGN UP"/> */}
    {/* <SwitchTab activeTab={activeTab} setactiveTab={setactiveTab} /> */}
    <CustomDropdown placeholder="Select Country" itemlist={countries} inputicon="location"/>
    <ProcessBar />
    </View>
)};


export default App;
