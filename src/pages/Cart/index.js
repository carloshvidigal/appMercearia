import React from 'react'
import { View, FlatList, Text, TouchableOpacity } from 'react-native'
import Products from '../../component/Products'
import { useCart } from '../../context/cart'
import Home from '../Home'

export default () => {
    
    const { add, cart } = useCart()
    
    
    return (
        <FlatList
            data={cart}
            contentContainerStyle={{ flex:1, width: '100%', padding: 10 }}
            renderItem={(props) => {
                return (
                    <TouchableOpacity onPress={() => add(props)} style={{ width: '100%', height: 50, padding: 10, borderWidth: 1, marginVertical: 10}}>
                        <Text>Produto: {props.name}</Text>
                        <Text>Preço: {props.cost}</Text>

                    </TouchableOpacity>
                )
            }}
            keyExtractor={(props) => props.id}
        >

        </FlatList>
    )
}