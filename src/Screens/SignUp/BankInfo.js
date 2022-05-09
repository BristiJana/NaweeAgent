import React from "react";
import res from "../../res";
import { UserInfoTittle, TopLogo, TextInputLogin, TextInputPassword, UserInfoButton, TextInputTittle,UploadFileVw, BackNextBtn  } from "../../../Component/Components";
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity, FlatList, SafeAreaView, Dimensions, ScrollView } from 'react-native';

export default class BankInfo extends React.Component {

    componentDidMount() {
      // do stuff while splash screen is shown
      // After having done stuff (such as async tasks) hide the splash screen
      // SplashScreen.hide();
  
    }
  
    constructor(props) {
      super(props);
  
    }
  
    onClickLogin() {
      this.props.navigation.navigate('FrequentRoute');
    }
  
    render() {
  
      return (
        <View style={{ alignItems: 'center', width:'100%', height: '100%', backgroundColor:'#f67525'}}>
        <SafeAreaView>
        <ScrollView>
          
        <TopLogo/>
                  
                
          <View style={{width:'90%', alignSelf:'center'}}>
            <UserInfoTittle
            text={'BANK INFORMATION'}/>
                <View style={{marginTop:0 , alignSelf:'flex-start', width:'100%'}}>
                   <TextInputTittle text={'ACCOUNT NAME'} />
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
                                           <TextInputTittle text={'ACCOUNT NUMBER'} />
                    <TextInputLogin 
                    // placeholder={'Enter Mobile No. / Email Id'}
                                          type="text"
                                          // value={this.state.mobileNumber}
                                          iconName="prescription"
                                          iconSize={20}
                                          // onChange={(text) => {
                                          //     this.setState({
                                          //         mobileNumber: text.text,
                                          //     });
                                          // }}
                                           />
                                           
                                            <TextInputTittle text={'BANK NAME'} />
                    <TextInputLogin 
                    // placeholder={'Enter Mobile No. / Email Id'}
                                          type="text"
                                          // value={this.state.mobileNumber}
                                          iconName="shopping-store"
                                          iconSize={20}
                                          // onChange={(text) => {
                                          //     this.setState({
                                          //         mobileNumber: text.text,
                                          //     });
                                          // }}
                                           />
                                            
                                                   
                                          
                                            <BackNextBtn 
            onButtonPress={()=>{this.onClickLogin()}}
          //  onButtonPressNext={()=>{this.onClickLogin}}
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