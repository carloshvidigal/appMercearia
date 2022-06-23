import React from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function Login() {
 return (
   <KeyboardAvoidingView style={styles.background}>
    <View style={styles.containerLogo}>
      <Image
        source={require('../../assets/merceariaDoZe.png')}
      />
    </View>

    <View style={styles.container}>
      <TextInput
      style = {styles.input}
      placeholder='Email'
      autoCorrect={false}
      onChangeText={()=> {}}
      />
      
      <TextInput
      style = {styles.input}
      placeholder='Senha'
      autoCorrect={false}
      onChangeText={()=> {}}
      />

      <TouchableOpacity style={styles.btnSubmit}>
        <Text style={styles.textSubmit}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style ={styles.textRegister}>Criar Conta Gratuita</Text>
      </TouchableOpacity>


    </View>

   </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create ({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },

  containerLogo: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex:1, 
    alignItems: 'center',
    width: '90%'
  },
  input: {
    backgroundColor: "#BEEBC9",
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 22,
    borderRadius: 7,
    padding: 10
  },
  btnSubmit: {
    backgroundColor: '#161B22',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },
  textSubmit:{
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold'    
  },
  textRegister: {
    fontSize: 15,
    paddingTop: 13,
    textDecorationLine: 'underline',
  }

})