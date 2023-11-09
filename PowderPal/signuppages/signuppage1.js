import React, { useState } from "react";
import { Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';

export default function Signuppage1({navigation}) {

    // FOR SKIER
    const [isPressed, buttonIsPressed] = useState(false);

    const handlePress = () => {
        if(isPressed){
        buttonIsPressed(false);
        } else {
        buttonIsPressed(true)
        }
    }

    // FOR SNOWBOARDER
    const [isPressed2, buttonIsPressed2] = useState(false);

    const handlePress2 = () => {
        if(isPressed2){
        buttonIsPressed2(false);
        } else {
        buttonIsPressed2(true)
        }
    }

    return (

        <View>

        {/* from figma */}
        <ImageBackground source={require('../assets/profileset-up1-brian.png')} style={{width:'100%', height:'100%', order:2}} resizeMode='cover'>
        </ImageBackground>

        <View style = {{paddingHorizontal: 45, position: 'absolute'}}>
            
            {/* Name Input */}
            <Text style = {{fontSize:20, fontWeight:'500', marginTop:225, color:'white'}}>My name is...</Text>
            <Text style = {{fontSize:15, fontWeight:'500', marginTop:10, color:'white'}}>Full Name</Text>

            <View style={{borderBottomColor:'#ccc', borderBottomWidth:1, backgroundColor:'powderblue', width: 300}}>
            <TextInput style={{fontSize: 15, flex:1, paddingVertical:0}}/>

            </View>

            {/* Skier or Snowboarder (or both!) */}
            <Text style = {{fontSize:20, fontWeight:'500', marginTop:15, color:'white'}}>I am a...</Text>

            <View style = {{flexDirection: 'row'}}>

            <TouchableOpacity onPress={handlePress} style = {{backgroundColor: isPressed ? 'green' : 'black', padding: 20, borderRadius: 10, marginTop: 5, width: 100}}>
                <Text style={{textAlign:'center', fontWeight:'800', fontSize: 20, color: '#fff'}}>Skier</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={handlePress2} style = {{backgroundColor: isPressed2 ? 'green' : 'black', padding: 20, borderRadius: 10, marginTop: 5, width: 175, left: 25}}>
                <Text style={{textAlign:'center', fontWeight:'800', fontSize: 20, color: '#fff'}}>Snowboarder</Text>
            </TouchableOpacity>

            </View>

            {/* Dartmouth Class Year */}
            <Text style = {{fontSize:20, fontWeight:'500', marginTop:15, color:'white'}}>My Dartmouth class year is...</Text>

            <View style={{borderBottomColor:'#ccc', borderBottomWidth:1, backgroundColor:'powderblue', width: 50}}>
            <TextInput style={{fontSize: 15, flex:1, paddingVertical:0}}/>

            </View>

            {/* Back and Next Buttons */}
            <View style = {{flexDirection: 'row'}}>

            <TouchableOpacity onPress={() => navigation.navigate("Firstloginsignuppage")} style = {{backgroundColor: 'cadetblue', padding: 20, borderRadius: 10, marginTop: 55, width: 100}}>
                <Text style={{textAlign:'center', fontWeight:'800', fontSize: 20, color: '#fff'}}>Back</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigation.navigate("Signuppage2")} style = {{backgroundColor: 'aquamarine', padding: 20, borderRadius: 10, marginTop: 55, width: 100, left: 100}}>
                <Text style={{textAlign:'center', fontWeight:'800', fontSize: 20, color: '#fff'}}>Next</Text>
            </TouchableOpacity>
            
            </View>

        </View>

        </View>

    )
}