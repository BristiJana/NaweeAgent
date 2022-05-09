import React from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity} from "react-native";
import Icons from "../src/res/Font/Icons";
import Icon from 'react-native-vector-icons/Fontisto';

import res from '../src/res/index';
// import { Icon } from "react-native-vector-icons/Icon";
Icon.loadFont();
export const TextInputTittle = ({value,text, placeholder, type, onChange, iconName,iconSize, iconColor='black',fontType='FontAwesome5', isSecure=false}) => (
  <Text style={{color:'white', fontWeight:'600', marginTop:20}}>{text}</Text>
);

        export const TextInputLogin = ({value, placeholder, type, onChange, iconName,iconSize, iconColor='black',fontType='FontAwesome5', isSecure=false}) => (
            <View style={{ height:40, width:'100%', marginTop:10,flexDirection:'row',alignItems:'center',backgroundColor:res.color.userInputBackgroundColor,borderRadius:5}}>
            <Icon name={iconName} type="FontAwesome" size={iconSize} color={'white'} style={{paddingLeft:15}}/>
            
            <TextInput
                style={styles.textinputStyleLogin}
                // value={value}
                placeholder={placeholder}
                // secureTextEntry={isSecure}
                onChangeText={(text) => onChange({text})}
              />
            </View>
          );

          
           export const TopLogo = ({value, placeholder, type, onChange, iconName,iconSize, iconColor='black',fontType='FontAwesome5', isSecure=false}) => (
            <View style={{width:800, height:800, borderRadius:800, backgroundColor:'#ffffff', marginTop:'-170%', alignSelf:'center', flexDirection:'column-reverse'}}>
            <View style={{height:100, width:160, backgroundColor:'transparent', alignSelf:'center', }}><Image style={{}} source={res.ImageAssets.logoLoginPage} /></View>
          </View>
          );
          export const UserInfoButton = ({value, onButtonPress,placeholder, type, text, onChange, iconName,iconSize, iconColor='black',fontType='FontAwesome5', isSecure=false}) => (
            <TouchableOpacity style={{height:50, width:'100%', borderRadius:25, backgroundColor:'white', alignItems:'center', justifyContent:'center',alignSelf:'center', marginTop:30}} onPress={() => {onButtonPress()}} >
    <Text style={{ color:'black', fontWeight:'600', fontSize:20 }}>{text}</Text>
    </TouchableOpacity>
          );
          export const TextInputPassword = ({value, placeholder, type, onChange, iconName,iconSize, iconColor='black',onSecureText,isSecureTextEntry}) => (
            <View style={{ height:40, width:'100%', marginTop:10,flexDirection:'row',alignItems:'center',backgroundColor:res.color.userInputBackgroundColor,borderRadius:5}}>
            <Icon name={iconName} size={iconSize} color={'white'} style={{paddingLeft:15}}/>
            <TextInput
                style={styles.textinputStyleLogin}
                value={value}
                placeholder={placeholder}
                secureTextEntry={isSecureTextEntry}
                onChangeText={(text) => onChange({text})}
              />
              <TouchableOpacity onPress={()=>{onSecureText()}}>
              {/* <Icon name={isSecureTextEntry===true ? 'eye' : 'eye-slash'} type="FontAwesome5" size={25} color={res.color.logIntxtClr} /> */}
              </TouchableOpacity>
              
            </View>
          );
          export const UserInfoTittle = ({value,text, placeholder, type, onChange, iconName,iconSize, iconColor='black',fontType='FontAwesome5', isSecure=false}) => (
            <Text style={{marginTop:30, fontSize:24, fontWeight:'600', color:res.color.genralTextColor, alignSelf:'center'}} numberOfLines= {1} >{text}</Text>
          );
          export const UploadFileVw = ({value, placeholder, type,text,header, onChange, iconName,iconSize, iconColor='black',fontType='FontAwesome5', isSecure=false}) => (
           <View style={{marginTop:30, alignItems:'center',}}>
            <Text style={{color:'white', fontWeight:'800', fontSize:17}}>{header}</Text>
           <TouchableOpacity style={{height:50, width:'100%', borderRadius:25, backgroundColor:'transparent', borderColor:res.color.whiteBackroundColor, borderWidth:2, alignItems:'center', justifyContent:'center',alignSelf:'center', marginTop:10, flexDirection:'row'}}>
           <Icon name={iconName} size={iconSize} color={'white'} style={{alignSelf:'center'}}/>
    <Text style={{marginLeft:15, color:res.color.genralTextColor, fontWeight:'600', fontSize:18 }}>{text}</Text>
    </TouchableOpacity>
    </View>
          );
          export const BackNextBtn = ({onButtonPressBack, onButtonPressNext,onButtonPress, value, placeholder, type,text,header, onChange, iconName,iconSize, iconColor='black',fontType='FontAwesome5', isSecure=false}) => (
            <View style={{marginTop:30, alignItems:'center', flexDirection:'row', justifyContent:'space-between'}}>
           <TouchableOpacity onPress={() => {onButtonPressBack()}} style={{height:50, width:'45%', borderRadius:25, backgroundColor:'transparent', borderColor:res.color.whiteBackroundColor, borderWidth:2, alignItems:'center', justifyContent:'center',alignSelf:'center', marginTop:10, flexDirection:'row'}}>
           
    <Text style={{marginLeft:15, color:res.color.genralTextColor, fontWeight:'600', fontSize:18 }}>BACK</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {onButtonPress()}} style={{height:50, width:'45%', borderRadius:25, backgroundColor: res.color.whiteBackroundColor, borderColor:res.color.whiteBackroundColor, borderWidth:2, alignItems:'center', justifyContent:'center',alignSelf:'center', marginTop:10, flexDirection:'row'}}>
           
           <Text style={{marginLeft:15, color:'black', fontWeight:'600', fontSize:18 }}>NEXT</Text>
           </TouchableOpacity>
    </View>
           );
           export const AccDecBtn = ({onButtonPressBack, onButtonPressNext,onButtonPress, value, placeholder, type,text,header, onChange, iconName,iconSize, iconColor='black',fontType='FontAwesome5', isSecure=false}) => (
            <View style={{marginTop:30, alignItems:'center', flexDirection:'row', justifyContent:'space-between'}}>
           <TouchableOpacity onPress={() => {onButtonPressBack()}} style={{height:60, width:'45%', borderRadius:30, backgroundColor:'transparent', borderColor:'black', borderWidth:2, alignItems:'center', justifyContent:'center',alignSelf:'center', marginTop:10, flexDirection:'row'}}>
           
    <Text style={{marginLeft:15, color:'black', fontWeight:'600', fontSize:18 }}>DECLINE</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {onButtonPress()}} style={{height:60, width:'45%', borderRadius:30, backgroundColor: res.color.orageBackgroundColor,  alignItems:'center', justifyContent:'center',alignSelf:'center', marginTop:10, flexDirection:'row' , marginLeft:10}}>
           
           <Text style={{marginLeft:15, color:'white', fontWeight:'600', fontSize:18 }}>ACCEPT</Text>
           </TouchableOpacity>
    </View>
           );


         

 const styles = StyleSheet.create({
    textinputStyleLogin: {
      paddingLeft: 20,
      color: 'red',
      paddingRight:20,
      alignSelf:'stretch',
      alignContent:'stretch',
      width:'80%',
      height: Platform.OS==='ios'? '100%' : 30,
      // fontFamily: res.font.ragularFont,
      paddingTop:0,
      paddingBottom:0,
      paddingRight:20,
      // textAlign: globalVariables.keyAppLanguageGlobal==='ar' ? 'right' :'left'
    },
    })