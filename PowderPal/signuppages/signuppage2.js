import React, { useState } from "react";
import { Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';

export default function Signuppage2({navigation}) {

    // FOR by myself
    const [isPressed3, buttonIsPressed3] = useState(false);

    const handlePress3 = () => {
    if(isPressed3){
    buttonIsPressed3(false);
    } else {
        buttonIsPressed3(true)
        }
    }

    // FOR in small groups
    const [isPressed4, buttonIsPressed4] = useState(false);

    const handlePress4 = () => {
    if(isPressed4){
    buttonIsPressed4(false);
    } else {
        buttonIsPressed4(true)
        }
    }

    // FOR in pairs
    const [isPressed5, buttonIsPressed5] = useState(false);

    const handlePress5 = () => {
    if(isPressed5){
    buttonIsPressed5(false);
    } else {
        buttonIsPressed5(true)
        }
    }

    // FOR in large groups
    const [isPressed6, buttonIsPressed6] = useState(false);

    const handlePress6 = () => {
    if(isPressed6){
    buttonIsPressed6(false);
    } else {
        buttonIsPressed6(true)
        }
    }

    return(

        <View>

        {/* from figma */}
        <ImageBackground source={require('../assets/profileset-up2-brian.png')} style={{width:'100%', height:'100%', order:2}} resizeMode='cover'>
        </ImageBackground>

        <View style = {{paddingHorizontal: 45, position: 'absolute'}} >

            {/* Bio Input */}
            <Text style = {{fontSize:20, fontWeight:'500', marginTop:225, color:'white'}}>I want future pals to know...</Text>
            <Text style = {{fontSize:15, fontWeight:'500', marginTop:5, color:'white'}}>Bio</Text>

            <View style={{borderBottomColor:'#ccc', borderBottomWidth:1, backgroundColor:'white', width: 300, height:100}}>
            <TextInput style={{fontSize: 15, flex:1, paddingVertical:0}}/>

            </View>

            {/* "I prefer to ski" options */}
            <Text style = {{fontSize:20, fontWeight:'500', marginTop:10, color:'white'}}>I prefer to ski...</Text>

            <View style = {{flexDirection: 'row'}}>
            <TouchableOpacity onPress={handlePress3} style = {{backgroundColor: isPressed3 ? 'green' : 'black', padding: 20, borderRadius: 10, marginTop: 5, width: 125}}>
                <Text style={{textAlign:'center', fontWeight:'800', fontSize: 15, color: '#fff'}}>By myself</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handlePress4} style = {{backgroundColor: isPressed4 ? 'green' : 'black', padding: 20, borderRadius: 10, marginTop: 5, width: 150, left: 25}}>
                <Text style={{textAlign:'center', fontWeight:'800', fontSize: 15, color: '#fff'}}>In small groups</Text>
            </TouchableOpacity>

            </View>

            <View style = {{flexDirection: 'row', marginTop: 5}}>
            <TouchableOpacity onPress={handlePress5} style = {{backgroundColor: isPressed5 ? 'green' : 'black', padding: 20, borderRadius: 10, marginTop: 5, width: 125}}>
                <Text style={{textAlign:'center', fontWeight:'800', fontSize: 15, color: '#fff'}}>In pairs</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handlePress6} style = {{backgroundColor: isPressed6 ? 'green' : 'black', padding: 20, borderRadius: 10, marginTop: 5, width: 150, left: 25}}>
                <Text style={{textAlign:'center', fontWeight:'800', fontSize: 15, color: '#fff'}}>In large groups</Text>
            </TouchableOpacity>

            </View>

            {/* Back and Next Buttons */}
            <View style = {{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => navigation.navigate("Signuppage1")} style = {{backgroundColor: 'cadetblue', padding: 20, borderRadius: 10, marginTop: 30, width: 100}}>
            <Text style={{textAlign:'center', fontWeight:'800', fontSize: 20, color: '#fff'}}>Back</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigation.navigate("Signuppage3")} style = {{backgroundColor: 'aquamarine', padding: 20, borderRadius: 10, marginTop: 30, width: 100, left: 100}}>
                <Text style={{textAlign:'center', fontWeight:'800', fontSize: 20, color: '#fff'}}>Next</Text>
            </TouchableOpacity>
            
            </View>

        </View>

        </View>

    ) 
}