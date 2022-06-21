import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import QuantityItens from '../../component/QuantityItens';
import Button from '../../component/Button';

export default function Detail({ navigation }) {

  navigation.setOptions({
    headerTitle: 'videoYoutube'
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


        <View style={{flexDirection: 'row', width: '100%'  }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <QuantityItens bgcolor="#17181a" color="#fff">40</QuantityItens>
            <QuantityItens>37</QuantityItens>
            <QuantityItens>40</QuantityItens>
            <QuantityItens>44</QuantityItens>
          </ScrollView>
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
    
  }
})