import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground, Image, Button, Alert } from 'react-native';

export default function Home() {

  return (
    <View style={styles.container}>
      <ImageBackground source={'./assets/home.png'}>
      </ImageBackground>
    </View>
  );
}

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