import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

export default function CustomButton({name,bgcolor,fontcolor,bordercolor,width}) {
  return (
    <TouchableOpacity style={{backgroundColor:bgcolor,height:42,alignSelf:'center',borderColor:bordercolor,borderWidth:2,borderRadius:20,marginTop:50,width:width,flexDirection:'row',justifyContent:'center'}}   >
        
        <Text style={{color:fontcolor,fontSize:18,alignSelf:'center',paddingVertical:5}}>{name}</Text>
    </TouchableOpacity>
  )
}