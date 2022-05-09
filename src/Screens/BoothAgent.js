import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity, FlatList, SafeAreaView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import res from '../res';
import { UserInfoTittle } from '../../Component/Components';


//https://builderx.io/login
export default class BoothAgent extends React.Component {

  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    // SplashScreen.hide();

  }

  constructor(props) {
    super(props);

  }

  onClickLogin() {
    this.props.navigation.navigate('LOG IN');
  }

  render() {

    return (
      <SafeAreaView>
        <View style={{ alignItems: 'center', width: Dimensions.get('window').width, height: '100%', paddingLeft: 40, paddingRight: 40, }}>

        <TouchableOpacity style={{height:'18%', width:'95%', backgroundColor:res.color.orageBackgroundColor, alignSelf:'center', marginTop:'20%', borderRadius:20, flexDirection:'row', alignItems:'center'}}>
      {/* <View style={{height:'18%', width:'95%', backgroundColor:'orange', alignSelf:'center', marginTop:'20%', borderRadius:20, flexDirection:'row', alignItems:'center'}}> */}
        <View style={{height:'99%', width:'30%', backgroundColor:res.color.whiteBackroundColor, borderRadius:20, marginLeft:0.2 }}>
        {/* <Icon name='bell'  size={20} color='black' /> */}
        </View>
        <View style={{alignSelf:'center', width:'60%', }}>
        <Text style={{alignSelf:'center', fontSize:35, color:res.color.whiteBackroundColor,fontWeight:'600'}}>Booth</Text>
        </View>
      {/* </View> */}
      </TouchableOpacity>
<TouchableOpacity onPress={()=>{this.onClickLogin()}} style={{height:'18%', width:'95%', backgroundColor:res.color.orageBackgroundColor, alignSelf:'center', marginTop:'20%', borderRadius:20, flexDirection:'row', alignItems:'center'}}>
      {/* <View style={{height:'18%', width:'95%', backgroundColor:'orange', alignSelf:'center', marginTop:'20%', borderRadius:20, flexDirection:'row', alignItems:'center'}}> */}
        <View style={{height:'99%', width:'30%', backgroundColor:res.color.whiteBackroundColor, borderRadius:20, marginLeft:0.2 }}>

        </View>
        <View style={{alignSelf:'center', width:'60%', }}>
        <Text style={{alignSelf:'center', fontSize:35, color:res.color.whiteBackroundColor, fontWeight:'600'}}>Agent</Text>
        </View>

        
      {/* </View> */}
      </TouchableOpacity>

      <View style={{width:800, height:800, borderRadius:800, backgroundColor:res.color.orageBackgroundColor, marginTop:'70%'}}>

</View>






        </View>
          {/* <View style={{alignSelf:'center',justifyContent:'center',alignItems:'center',alignContent:'center',marginTop:'40%'}}> */}
          {/* <Image
            style={{ width: '100%', height: '50%', alignSelf: 'flex-end' }}
            source={res.ImageAssets.loginMain}
            resizeMode='center'
          />
          <Text style={styles.stTitle}>Welcome to USPMedicare</Text>
          <Text style={styles.stSubTitle}>Enter your Mobile Number and Verify OTP sent to your Mobile.</Text>
          <View style={{ borderRadius: 10, borderColor: res.color.midGrayColor, height: 50, borderWidth: 0.5, width: '100%', marginTop: 40, alignItems:'flex-start', justifyContent:'center' }}>
            <TextInput style={{marginStart:5}} placeholder='Enter Mobile Number'>
            </TextInput>
          </View>
          <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', padding:18 }}>
            <TouchableOpacity
              style={{height:16,width:16,backgroundColor:res.color.lighGrayColor, marginRight:11}}
              onPress={this.onPress}
            >
            </TouchableOpacity>

            <Text style={{}}>I agree to Term & Conditions.</Text>
          </View>


          {/* </View> */}
          {/* <Text style={styles.stCopyRight}>Copyright 2021 USP Medicare All Right Reserveds</Text> */}
          {/* <ButtonComponent title={'Send OTP'} onPressButton={() => { this.onClickLogin() }} />  */}
        {/* </View> */}

      </SafeAreaView>
    );
  }
}

