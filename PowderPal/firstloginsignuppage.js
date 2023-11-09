import React from "react";
import { Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Firstloginsignuppage({navigation}) {

    return (

        <View>
        {/* image background PNG */}
        <ImageBackground source={require('./assets/loginanimate.png')} style={{width: '100%', height: '100%', order:2}} resizeMode='cover'>
        </ImageBackground>

        {/* PROBLEM: WHEN PRESS TEXTINPUT THE WHOLE IMAGEBACKGROUND MOVES UP. THIS ONLY FOR ANDROID?*/}

        <View style={{paddingHorizontal: 25, position:'absolute'}}>

            {/* email username */}
            <Text style = {{fontSize:20, fontWeight:'500', marginTop:350, color: 'white'}}>Email</Text>
            <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1, backgroundColor:'powderblue', borderRadius:10, width: 345}}>
            <AntDesign name ='user' size={40} color="#666" style={{marginRight:5}}/>
            <TextInput style={{fontSize: 20, flex:1, paddingVertical:0}}/>

            </View>

            {/* password */}
            <Text style = {{fontSize:20, fontWeight:'500', marginTop: 20, color: 'white'}}>Password</Text>
            <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1, backgroundColor:'powderblue', borderRadius:10, width: 345}}>
            <Ionicons name ='ios-lock-closed-outline' size={40} color="#666" style={{marginRight:5}}/>
            <TextInput style={{fontSize: 20, flex:1, paddingVertical:0}}/>

            </View>
        
        {/* forgot password */}
        <TouchableOpacity onPress={() => {}} >
            <Text style={{fontWeight:'800', left: 225, color: 'white'}}>Forgot Password?</Text>
        </TouchableOpacity>
        
        {/* sign in */}
        <TouchableOpacity onPress={() => {}} style = {{backgroundColor: 'green', padding: 20, borderRadius: 10, marginTop: 50, width: 345}}>
            <Text style={{textAlign:'center', fontWeight:'800', fontSize: 20, color: '#fff'}}>Sign In</Text>
        </TouchableOpacity>

        {/* register */}
        <TouchableOpacity onPress={() => navigation.navigate("Signuppage1")} style = {{backgroundColor: 'powderblue', padding: 20, borderRadius: 10, marginTop: 25, width: 345}}>
            <Text style={{textAlign:'center', fontWeight:'800', fontSize: 20, color: '#fff'}}>Register</Text>
        </TouchableOpacity>

        </View>

        </View>
    )
}
