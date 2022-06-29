import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

import Products from '../../component/Products';
import { TextInput } from 'react-native-gesture-handler';

export default function Home() {

const navigation = useNavigation();

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
            <Products img={require('../../assets/avocados.jpeg')} cost="R$ 9,90/kg" >
              Abacate
            </Products>
            <Products img={require('../../assets/pineapple.jpeg')} cost="R$ 4,79/Unidade">
              Abacaxi
            </Products>     
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>  
            <Products img={require('../../assets/zucchini.jpeg')} cost="R$ 5,39/Kg">
              Abobrinha
            </Products>   
            <Products img={require('../../assets/yellow_squash.jpeg')} cost="R$ 9,79/kg">
              Abobrinha Amarela
            </Products>   
          </View>          
          
          <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>  
            <Products img={require('../../assets/garlic.jpeg')} cost="R$ 19,90/Kg">
              Alho
            </Products>   
            <Products img={require('../../assets/bananas.jpeg')} cost="R$ 3,90/kg">
              Banana
            </Products>         
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>  
            <Products img={require('../../assets/eggplant.jpeg')} cost="R$ 2,50/kg">
              Berinjela
            </Products>  
            <Products img={require('../../assets/broccoli.jpeg')} cost="R$ 5,90/kg">
              Brócolis
            </Products>         
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>  
            <Products img={require('../../assets/yellow_onion.jpeg')} cost="R$ 4,49/Kg">
              Cebola
            </Products>  
            <Products img={require('../../assets/red_onion.jpeg')} cost="R$ 5,77/kg">
              Cebola Roxa
            </Products>          
          </View>
          
          <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>  
            <Products img={require('../../assets/whole_carrot.jpeg')} cost="R$ 2,99/kg">
              Cenoura
            </Products>
            <Products img={require('../../assets/cauliflower.jpeg')} cost="R$ 4,90/kg">
              Couve-Flor
            </Products>         
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>  
            <Products img={require('../../assets/kiwis.jpeg')} cost="R$ 21,79/Kg">
              Kiwi
            </Products>   
            <Products img={require('../../assets/lemons.jpeg')} cost="R$ 11,40/kg">
              Limão Siciliano
            </Products>         
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>  
            <Products img={require('../../assets/fuji_apples.jpeg')} cost="R$ 5,65/kg">
              Maçã Fuji
            </Products>
            <Products img={require('../../assets/watermelon.jpeg')} cost="R$ 2,79/Kg">
              Melancia
            </Products>        
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>  
            <Products img={require('../../assets/fresh_corn_cub.jpeg')} cost="R$ 3,40/kg">
              Milho Verde
            </Products>
            <Products img={require('../../assets/fresh_strawberries.jpeg')} cost="R$ 10,90/Caixa">
              Morango
            </Products>          
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>  
            <Products img={require('../../assets/cucumber.jpeg')} cost="R$ 2,70/kg">
              Pepino
            </Products>
            <Products img={require('../../assets/green_bell_pepper.jpeg')} cost="R$ 3,20/kg">
              Pimentão Verde
            </Products>        
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>  
            <Products img={require('../../assets/green_cabbage.png')} cost="R$ 2,90/Kg">
              Repolho Verde
            </Products>  
            <Products img={require('../../assets/tomatoes.jpeg')} cost="R$ 3,99/kg">
              Tomate
            </Products>      
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingBottom: 40}}>  
            <Products img={require('../../assets/seedless_grapes.jpeg')} cost="R$ 3,60/Kg">
              Uva Roxa
            </Products>  
            <Products img={require('../../assets/green_seedless_grapes.jpeg')} cost="R$ 5,99/kg">
              Uva Verde
            </Products>
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

