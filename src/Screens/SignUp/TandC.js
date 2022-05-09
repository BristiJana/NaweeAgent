import React from "react";
import res from "../../res";
import { UserInfoTittle, TopLogo, TextInputLogin, TextInputPassword, UserInfoButton, TextInputTittle,UploadFileVw, BackNextBtn , AccDecBtn } from "../../../Component/Components";
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity, FlatList, SafeAreaView, Dimensions, ScrollView } from 'react-native';

export default class TandC extends React.Component {

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
       <View style={{ alignItems: 'center', width:'100%', height: '100%', backgroundColor:res.color.whiteBackroundColor,}}>
        <SafeAreaView>
        <View style={{ alignItems: 'center', width:'95%', height: '100%', backgroundColor:res.color.whiteBackroundColor, flexDirection:'column-reverse', justifyContent:'space-between'}}>
          <AccDecBtn/>

        <ScrollView>
          
       
                  </ScrollView>
                  </View>
        </SafeAreaView>
        </View>
        
      );
    }
  }