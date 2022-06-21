import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default function Button() {
 return (
   <View style={styles.container}>
    <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.title}>Comprar</Text>
    </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        justifyContent: 'center'
    },

buttonContainer: {
    width: '90%',
    height: 50,
    backgroundColor: '#17181a',
    borderRadius: 5,
    marginVertical: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20
},
title: {
    fontSize: 17,
    color: '#fff',
    fontWeight: 'bold'
}
})