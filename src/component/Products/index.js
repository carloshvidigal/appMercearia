import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Products() {
 return (
   <TouchableOpacity style={styles.container}>
        <Image
            source={require('../../assets/avocados.jpeg')}
            style={styles.productsImg}
        />

        <Text style={styles.productText}>
            Abacate
        </Text>

        <Text style={styles.productText}>
            R$ 9,90/kg
        </Text>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    productsImg: {
        width: 175,
        height: 175,
    }
})