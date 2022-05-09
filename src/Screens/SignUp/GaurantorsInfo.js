import React from "react";
import res from "../../res";
import { UserInfoTittle, TopLogo, TextInputLogin, TextInputPassword, UserInfoButton, TextInputTittle,UploadFileVw  } from "../../../Component/Components";
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity, FlatList, SafeAreaView, Dimensions, ScrollView } from 'react-native';

export default class GaurantorsInfo extends React.Component {

    componentDidMount() {
      // do stuff while splash screen is shown
      // After having done stuff (such as async tasks) hide the splash screen
      // SplashScreen.hide();
  
    }
  
    constructor(props) {
      super(props);
  
    }
  
    onClickLogin() {
      this.props.navigation.navigate('EmergencyContact');
    }
  
    render() {
  
      return (
        <View style={{ alignItems: 'center', width:'100%', height: '100%', backgroundColor:'#f67525'}}>
        <SafeAreaView>
        <ScrollView>
          
        <TopLogo/>
                  
                
          <View style={{width:'90%', alignSelf:'center'}}>
            <UserInfoTittle
            text={'GAURANTORS INFORMATION'}/>
                <View style={{marginTop:0 , alignSelf:'flex-start', width:'100%'}}>
                   <TextInputTittle text={'NAME'} />
                    <TextInputLogin 
                    // placeholder={'Enter Mobile No. / Email Id'}
                                          type="text"
                                          // value={this.state.mobileNumber}
                                          iconName="male"
                                          iconSize={20}
                                          // onChange={(text) => {
                                          //     this.setState({
                                          //         mobileNumber: text.text,
                                          //     });
                                          // }}
                                           />
                                           <TextInputTittle text={'BUSINESS NAME'} />
                    <TextInputLogin 
                    // placeholder={'Enter Mobile No. / Email Id'}
                                          type="text"
                                          // value={this.state.mobileNumber}
                                          iconName="date"
                                          iconSize={20}
                                          // onChange={(text) => {
                                          //     this.setState({
                                          //         mobileNumber: text.text,
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
                                          
              <UploadFileVw header={'UPLOAD IDENTITY DOCUMENT'} text={'UPLOAD FILE'}
              iconName={'upload'} iconSize={30}
              />
              <UserInfoButton
              onButtonPress={()=>{this.onClickLogin()}}
              text={'NEXT'}/>
          
          
             
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