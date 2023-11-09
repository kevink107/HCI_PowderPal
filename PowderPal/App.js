
import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground, Image, Button, Alert, TextInput, TouchableOpacity } from 'react-native';
import Firstloginsignuppage from "./firstloginsignuppage";
import Signuppage1 from "./signuppages/signuppage1";
import Signuppage2 from "./signuppages/signuppage2";
import Signuppage3 from "./signuppages/signuppage3";
import Signuppage4 from "./signuppages/signuppage4";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from './MyTabs';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Firstloginsignuppage" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Firstloginsignuppage" component={Firstloginsignuppage}/>
        <Stack.Screen name="Signuppage1" component={Signuppage1} />
        <Stack.Screen name="Signuppage2" component={Signuppage2} />
        <Stack.Screen name="Signuppage3" component={Signuppage3} />
        <Stack.Screen name="Signuppage4" component={Signuppage4} />
        <Stack.Screen name="MyTabs" component={MyTabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// <MyTabs />
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  home: {
    width: '100%',
    height: '100%',
    order: 2,
  },
  navBut: {
    backgroundColor: 'white',
    position: 'absolute',
    justifyContent: 'center',
    width: 100,
    height: 50
  },
});

