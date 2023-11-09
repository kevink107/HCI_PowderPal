import React from "react";
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';

export default function Signuppage4({navigation}) {

    return(

        <View>

        {/* from figma */}
        <ImageBackground source={require('../assets/profileset-up4-brian.png')} style={{width:'100%', height:'100%', order:2}} resizeMode='cover'>
        </ImageBackground>

        <View style = {{paddingHorizontal: 45, position: 'absolute'}}>
        {/* "upload a profile picture" text */}
        <Text style = {{fontSize:20, fontWeight:'500', marginTop:225, color:'white'}}>Upload a profile picture!</Text>

        {/* Back and Next Buttons */}
        <View style = {{flexDirection: 'row', marginTop: 50}}>
            <TouchableOpacity onPress={() => navigation.navigate("Signuppage3")} style = {{backgroundColor: 'cadetblue', padding: 20, borderRadius: 10, marginTop: 280, width: 100}}>
            <Text style={{textAlign:'center', fontWeight:'800', fontSize: 20, color: '#fff'}}>Back</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {navigation.navigate("MyTabs")}} style = {{backgroundColor: 'aquamarine', padding: 20, borderRadius: 10, marginTop: 280, width: 100, left: 100}}>
            <Text style={{textAlign:'center', fontWeight:'800', fontSize: 20, color: '#fff'}}>Next</Text>
            </TouchableOpacity>
        
        </View>

        </View>

    </View>

    )
}