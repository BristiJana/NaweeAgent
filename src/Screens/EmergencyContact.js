import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity, FlatList, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import res from '../res/index';
import { UserInfoTittle, TopLogo, TextInputLogin, TextInputPassword, UserInfoButton, TextInputTittle, UploadFileVw, BackNextBtn} from '../../Component/Components';


//https://builderx.io/login
export default class EmergencyContact extends React.Component {

  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    // SplashScreen.hide();

  }

  constructor(props) {
    super(props);

  }

  onClickLogin() {
    this.props.navigation.navigate('VehicleInfo');
  }

  render() {

    return (
      <View style={{ alignItems: 'center', width:'100%', height: '100%', backgroundColor:'#f67525'}}>
      <SafeAreaView>
      <ScrollView>
        
      <TopLogo/>
                
              
        <View style={{width:'90%', alignSelf:'center'}}>
          <UserInfoTittle
          text={'Emergency Contact'}/>
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
                                         <TextInputTittle text={'AGE'} />
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
                                         <TextInputTittle text={'RELATIONSHIP'} />
                  <TextInputLogin 
                  // placeholder={'Enter Mobile No. / Email Id'}
                                        type="text"
                                        // value={this.state.mobileNumber}
                                        iconName="bandage"
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
            
        
        
           <BackNextBtn 
            onButtonPress={()=>{this.onClickLogin()}}
          //  onButtonPressNext={()=>{this.onClickLogin}}
           />
              </View>
             
        
        
                
             <TouchableOpacity style={{backgroundColor:'#f67525', flexDirection:'row', alignItems:'flex-end', paddingBottom:10 }}>
            <Text style={{color:'white', fontWeight:'600',marginLeft:40, marginBottom:5}}>Don't have an Account?</Text>
            <Text style={{color:'white', fontWeight:'600',marginLeft:5,marginBottom:5, fontSize:16}}>Sign Up</Text>
            </TouchableOpacity>
            </View>
        
                 
                </ScrollView>
      </SafeAreaView>
      </View>
      
    );
  }
}

