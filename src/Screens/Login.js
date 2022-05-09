import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity, FlatList, SafeAreaView, Dimensions, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TextInputLogin, TopLogo, UserInfoButton, TextInputPassword} from '../../Component/Components';
import res from '../res/index';
Icon.loadFont();

//https://builderx.io/login
export default class Login extends React.Component {

  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    // SplashScreen.hide();

  }

  constructor(props) {
    super(props);

  }

  onClickLogin() {
    this.props.navigation.navigate('Personal Info');
  }

  render() {

    return (
      <View style={{ alignItems: 'center', width:'100%', height: '100%', backgroundColor:'#f67525'}}>
      <SafeAreaView>
        <ScrollView>
        
<TopLogo/>
        
      
<View style={{width:'90%', alignSelf:'center'}}>
      <View style={{marginTop:40 , alignSelf:'flex-start', width:'100%'}}>
          <Text style={{color:'white', fontWeight:'600'}}>EMAIL</Text>
          <TextInputLogin placeholder={'Enter Mobile No. / Email Id'}
                                type="text"
                                // value={this.state.mobileNumber}
                                iconName="email"
                                iconSize={20}
                                // onChange={(text) => {
                                //     this.setState({
                                //         mobileNumber: text.text,
                                //     });
                                // }}
                                 />
    <Text style={{marginTop:20, color:'white', fontWeight:'600'}}>PASSWORD</Text>
    <TextInputPassword placeholder={'Password'}
                                type="text"
                                // value={this.state.password}
                                iconName='locked'
                                iconSize={20}
                                
                                // onSecureText={()=>{this.setState({isSecureText:!this.state.isSecureText})}}
                                // isSecureTextEntry={this.state.isSecureText}
                                // onChange={(text) => {
                                //     this.setState({
                                //         password: text.text,
                                //     });
                                // }} 
                                />
    <TouchableOpacity>
    <Text style={{marginTop:10, color:'white', fontWeight:'600', alignSelf:'flex-end', }}>Forgot Password ?</Text>
    </TouchableOpacity>
    <UserInfoButton text={'LOG IN'} onButtonPress={()=>{this.onClickLogin()}}/>


   
      </View>
      </View>


        
     <TouchableOpacity style={{height:'5%',backgroundColor:'#f67525', flexDirection:'row', alignItems:'flex-end', }}>
    <Text style={{color:'white', fontWeight:'600',marginLeft:40, marginBottom:5}}>Don't have an Account?</Text>
    <Text style={{color:'white', fontWeight:'600',marginLeft:5,marginBottom:5, fontSize:16}}>Sign Up</Text>
    </TouchableOpacity>
        
    
         
        </ScrollView>
      </SafeAreaView>
      </View>
    );
  }
}

