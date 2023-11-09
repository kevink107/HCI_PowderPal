import React, { useState } from "react";
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';

export default function Signuppage3({navigation}) {

    // Beginner
    const [isPressed7, buttonIsPressed7] = useState(false);

    const handlePress7 = () => {
    if(isPressed7){
    buttonIsPressed7(false);
    } else {
        buttonIsPressed7(true)
        }
    }

    // Intermediate
    const [isPressed8, buttonIsPressed8] = useState(false);

    const handlePress8 = () => {
    if(isPressed8){
    buttonIsPressed8(false);
    } else {
        buttonIsPressed8(true)
        }
    }

    // Advanced
    const [isPressed9, buttonIsPressed9] = useState(false);

    const handlePress9 = () => {
    if(isPressed9){
    buttonIsPressed9(false);
    } else {
        buttonIsPressed9(true)
        }
    }

    // Expert
    const [isPressed10, buttonIsPressed10] = useState(false);

    const handlePress10 = () => {
    if(isPressed10){
    buttonIsPressed10(false);
    } else {
        buttonIsPressed10(true)
        }
    }

    // Parks
    const [isPressed11, buttonIsPressed11] = useState(false);

    const handlePress11 = () => {
    if(isPressed11){
    buttonIsPressed11(false);
    } else {
        buttonIsPressed11(true)
        }
    }

    // Trees
    const [isPressed12, buttonIsPressed12] = useState(false);

    const handlePress12 = () => {
    if(isPressed12){
    buttonIsPressed12(false);
    } else {
        buttonIsPressed12(true)
        }
    }

    // Steeps
    const [isPressed13, buttonIsPressed13] = useState(false);

    const handlePress13 = () => {
    if(isPressed13){
    buttonIsPressed13(false);
    } else {
        buttonIsPressed13(true)
        }
    }

    // Moguls
    const [isPressed14, buttonIsPressed14] = useState(false);

    const handlePress14 = () => {
    if(isPressed14){
    buttonIsPressed14(false);
    } else {
        buttonIsPressed14(true)
        }
    }

    // Bowls
    const [isPressed15, buttonIsPressed15] = useState(false);

    const handlePress15 = () => {
    if(isPressed15){
    buttonIsPressed15(false);
    } else {
        buttonIsPressed15(true)
        }
    }

    return(

        <View>

        {/* from figma */}
        <ImageBackground source={require('../assets/profileset-up3-brian.png')} style={{width:'100%', height:'100%', order:2}} resizeMode='cover'>
        </ImageBackground>

        <View style = {{paddingHorizontal: 45, position: 'absolute'}}>

            {/* ability level */}
            <Text style = {{fontSize:20, fontWeight:'500', marginTop:225, color:'white'}}>My ability level is...</Text>

            {/* beginner and intermediate */}
            <View style = {{flexDirection: 'row'}}>
            <TouchableOpacity onPress={handlePress7} style = {{backgroundColor: isPressed7 ? 'green' : 'black', padding: 20, borderRadius: 10, marginTop: 5, width: 150}}>
            <Text style={{textAlign:'center', fontWeight:'800', fontSize: 15, color: '#fff'}}>Beginner</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handlePress8} style = {{backgroundColor: isPressed8 ? 'green' : 'black', padding: 20, borderRadius: 10, marginTop: 5, width: 150, left:5}}>
            <Text style={{textAlign:'center', fontWeight:'800', fontSize: 15, color: '#fff'}}>Intermediate</Text>
            </TouchableOpacity>

            </View>

            {/* advanced and expert */}
            <View style = {{flexDirection: 'row'}}>
            <TouchableOpacity onPress={handlePress9} style = {{backgroundColor: isPressed9 ? 'green' : 'black', padding: 20, borderRadius: 10, marginTop: 5, width: 150}}>
            <Text style={{textAlign:'center', fontWeight:'800', fontSize: 15, color: '#fff'}}>Advanced</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handlePress10} style = {{backgroundColor: isPressed10 ? 'green' : 'black', padding: 20, borderRadius: 10, marginTop: 5, width: 150, left:5}}>
            <Text style={{textAlign:'center', fontWeight:'800', fontSize: 15, color: '#fff'}}>Expert</Text>
            </TouchableOpacity>

            </View>

            {/* ski through options */}
            <Text style = {{fontSize:20, fontWeight:'500', marginTop: 10, color:'white'}}>I like to ski through...</Text>

            {/* parks trees and steeps */}
            <View style = {{flexDirection: 'row'}}>
            <TouchableOpacity onPress={handlePress11} style = {{backgroundColor: isPressed11 ? 'green' : 'black', padding: 20, borderRadius: 10, marginTop: 5, width: 90, left:10}}>
            <Text style={{textAlign:'center', fontWeight:'800', fontSize: 15, color: '#fff'}}>Parks</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handlePress12} style = {{backgroundColor: isPressed12 ? 'green' : 'black', padding: 20, borderRadius: 10, marginTop: 5, width: 90, left:15}}>
            <Text style={{textAlign:'center', fontWeight:'800', fontSize: 15, color: '#fff'}}>Trees</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handlePress13} style = {{backgroundColor: isPressed13 ? 'green' : 'black', padding: 20, borderRadius: 10, marginTop: 5, width: 90, left:20}}>
            <Text style={{textAlign:'center', fontWeight:'800', fontSize: 15, color: '#fff'}}>Steeps</Text>
            </TouchableOpacity>

            </View>

            {/* moguls and bowls */}
            <View style = {{flexDirection: 'row'}}>
            <TouchableOpacity onPress={handlePress14} style = {{backgroundColor: isPressed14 ? 'green' : 'black', padding: 20, borderRadius: 10, marginTop: 5, width: 100, left:50}}>
            <Text style={{textAlign:'center', fontWeight:'800', fontSize: 15, color: '#fff'}}>Moguls</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handlePress15} style = {{backgroundColor: isPressed15 ? 'green' : 'black', padding: 20, borderRadius: 10, marginTop: 5, width: 90, left:55}}>
            <Text style={{textAlign:'center', fontWeight:'800', fontSize: 15, color: '#fff'}}>Bowls</Text>
            </TouchableOpacity>

            </View>

            {/* Back and Next Buttons */}
            <View style = {{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => navigation.navigate("Signuppage2")} style = {{backgroundColor: 'cadetblue', padding: 20, borderRadius: 10, marginTop: 20, width: 100}}>
                <Text style={{textAlign:'center', fontWeight:'800', fontSize: 20, color: '#fff'}}>Back</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigation.navigate("Signuppage4")} style = {{backgroundColor: 'aquamarine', padding: 20, borderRadius: 10, marginTop: 20, width: 100, left: 100}}>
                <Text style={{textAlign:'center', fontWeight:'800', fontSize: 20, color: '#fff'}}>Next</Text>
            </TouchableOpacity>
            
            </View>

        </View>

        </View>

    )
}