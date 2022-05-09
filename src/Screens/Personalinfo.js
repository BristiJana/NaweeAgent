import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity, FlatList, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import res from '../res/index';
import { UserInfoTittle, TopLogo, TextInputLogin, TextInputPassword, UserInfoButton, TextInputTittle} from '../../Component/Components';


//https://builderx.io/login
export default class Personalinfo extends React.Component {

  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    // SplashScreen.hide();

  }

  constructor(props) {
    super(props);

  }

  onClickLogin() {
    this.props.navigation.navigate('GaurantorsInfo');
  }

  render() {

    return (
      <View style={{ alignItems: 'center', width:'100%', height: '100%', backgroundColor:'#f67525'}}>
      <SafeAreaView>
      <ScrollView>
        
      <TopLogo/>
                
              
        <View style={{width:'90%', alignSelf:'center'}}>
          <UserInfoTittle
          text={'Personal Information'}/>
              <View style={{marginTop:0 , alignSelf:'flex-start', width:'100%'}}>
                 <TextInputTittle text={'FIRST NAME'} />
                  <TextInputLogin 
                  // placeholder={'Enter Mobile No. / Email Id'}
                                        type="text"
                                        // value={this.state.mobileNumber}
                                        iconName="user-secret"
                                        iconSize={20}
                                        // onChange={(text) => {
                                        //     this.setState({
                                        //         mobileNumber: text.text,
                                        //     });
                                        // }}
                                         />
                                         <TextInputTittle text={'MIDDLE NAME'} />
                  <TextInputLogin 
                  // placeholder={'Enter Mobile No. / Email Id'}
                                        type="text"
                                        // value={this.state.mobileNumber}
                                        iconName="user-secret"
                                        iconSize={20}
                                        // onChange={(text) => {
                                        //     this.setState({
                                        //         mobileNumber: text.text,
                                        //     });
                                        // }}
                                         />
                                         <TextInputTittle text={'LAST NAME'} />
                  <TextInputLogin 
                  // placeholder={'Enter Mobile No. / Email Id'}
                                        type="text"
                                        // value={this.state.mobileNumber}
                                        iconName="user-secret"
                                        iconSize={20}
                                        // onChange={(text) => {
                                        //     this.setState({
                                        //         mobileNumber: text.text,
                                        //     });
                                        // }}
                                         />
                                         <TextInputTittle text={'EMAIL'} />
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
            <TextInputPassword 
            // placeholder={'Password'}
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
                                          <TextInputTittle text={'PHONE'} />
                  <TextInputLogin 
                  // placeholder={'Enter Mobile No. / Email Id'}
                                        type="text"
                                        // value={this.state.mobileNumber}
                                        iconName="phone"
                                        iconSize={20}
                                        // onChange={(text) => {
                                        //     this.setState({
                                        //         mobileNumber: text.text,
                                        //     });
                                        // }}
                                         />
                                           <TextInputTittle text={'SEX'} />
                  <TextInputLogin 
                  // placeholder={'Enter Mobile No. / Email Id'}
                                        type="text"
                                        // value={this.state.mobileNumber}
                                        iconName="podcast"
                                        iconSize={20}
                                        // onChange={(text) => {
                                        //     this.setState({
                                        //         mobileNumber: text.text,
                                        //     });
                                        // }}
                                         />
                                                  <TextInputTittle text={'ADDRESS'} />
                  <TextInputLogin 
                  // placeholder={'Enter Mobile No. / Email Id'}
                                        type="text"
                                        // value={this.state.mobileNumber}
                                        iconName="podcast"
                                        iconSize={20}
                                        // onChange={(text) => {
                                        //     this.setState({
                                        //         mobileNumber: text.text,
                                        //     });
                                        // }}
                                         />
                                        
            <TouchableOpacity>
            <Text style={{marginTop:10, color:'white', fontWeight:'600', alignSelf:'flex-end', }}>Forgot Password ?</Text>
            </TouchableOpacity>
            <UserInfoButton text={'SIGN UP'}
            onButtonPress={()=>{this.onClickLogin()}}
            />
        
        
           
              </View>
             
        
        
                
             <TouchableOpacity style={{backgroundColor:'#f67525', flexDirection:'row', alignItems:'flex-end', paddingBottom:10 }}>
            <Text style={{color:'white', fontWeight:'600',marginLeft:40, marginBottom:5}}>Already have an Account?</Text>
            <Text style={{color:'white', fontWeight:'600',marginLeft:5,marginBottom:5, fontSize:16}}>LOG IN</Text>
            </TouchableOpacity>
            </View>
        
                 
                </ScrollView>
      </SafeAreaView>
      </View>
     
      
    );
  }
}

