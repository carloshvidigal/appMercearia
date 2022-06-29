import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function Products(props) {

 function filterDesc(desc){
    if(desc.length < 27) {
        return desc;
    }

    return `${desc.substring(0, 23)}...`;
 }


 return (
   <View style={styles.container} onPress={props.onClick}>
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
        <View>
            <TextInput>quantidade</TextInput>
        </View>
            
   </View>
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