import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

import QuantityItens from '../../component/QuantityItens';
import Button from '../../component/Button';

export default function Detail({ navigation }) {

  navigation.setOptions({
    headerTitle: 'Detalhes'
  })
 return (
   <ScrollView style={styles.container}>
      <Image
        source={require('../../assets/avocados.jpeg')}
        style={styles.image}
        resizeMode="cover"
      />

      <View>
        <View>
          <Text style={styles.title}> Abacate • R$ 280,90</Text>
        </View>

        <View opacity={0.4}>
          <Text style={styles.title}>Abacate da terra </Text>
        </View>

        <View style={styles.container}>
      <TextInput 
      style = {styles.input}
      placeholder='quantidade'
      autoCorrect={false}
      keyboardType="numeric"
      //onChangeText={value => setEmail(value)}
      />

        </View>

        <Button/>


      </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff'
  },
  image:{
    width: '100%',
  },
  title:{
    fontWeight: 'bold',
    paddingHorizontal: '2%',
    fontSize: 30
    
  },
  input: {
    backgroundColor: "#BEEBC9",
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 22,
    borderRadius: 7,
    padding: 10
  }
})