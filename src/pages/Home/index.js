import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import Products from '../../component/Products';

export default function Home() {
 return (
   <View style={styles.container}>
    <View style={styles.header}>
      <Image 
        source={require('../../assets/merceariaDoZe.png')}
        style={styles.image}
      />
      
      <View style={styles.textContainer}>
        <Text style={styles.text}>Produtos</Text>
        <TouchableOpacity style={{position:'absolute', right:0, alignSelf: 'center'}}>
          <MaterialIcons 
            name='filter-list'
            size={24}
            color='#595B59'
          />
        </TouchableOpacity>
      </View>
    </View>  
        <View style={styles.line} />

        <ScrollView>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
            <Products/>
            <Products/>

            


          </View>
          
        </ScrollView>
          
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width: '100%',
    backgroundColor: '#fff',
  },

  header: {
    marginTop: 30,
    marginLeft: 0,
  },

  image: {
    width: '100%'
  },
  textContainer: {
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%'
  },
  text: {
    marginTop: -9,
    fontSize: 26,
    marginHorizontal: '1%',
    fontWeight: 'bold',
    color: '#595B59'
  },
  line: {
    borderBottomColor: '#d8d8d8',
    borderBottomWidth: 2,

  }
});

