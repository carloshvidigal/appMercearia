import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Products(props) {

 function filterDesc(desc){
    if(desc.length < 27) {
        return desc;
    }

    return `${desc.substring(0, 23)}...`;
 }


 return (
   <TouchableOpacity style={styles.container}>
        <Image
            source={props.img}
            style={styles.productsImg}
        />

        <Text style={styles.productText}>
            {filterDesc(props.children)}
        </Text>

        <View opacity={0.4}>
            <Text style={styles.productText}> {props.cost}</Text>
        </View>
            
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
        width: 170,
        height: 170,
    },

    productText: {
        fontSize: 16, 
        fontWeight: 'bold'
    }
})