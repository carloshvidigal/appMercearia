import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Cart from "./pages/Cart";
import CartProvider from "./context/cart";

const Stack = createStackNavigator();

function Routes(){
    return(
        
        <CartProvider>
            <NavigationContainer>
            <Stack.Navigator>
           
               <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
               /> 
               
               <Stack.Screen
                    name='Home'
                    component={Home}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Cadastro"
                    component={Cadastro}
                    options={{ headerShown: true }}
                />

                <Stack.Screen
                    name='Cart'
                    component={Cart}
                    options={{ headerShown: true }}
                />

            </Stack.Navigator>
        </NavigationContainer>
        </CartProvider>
        
        
        

    )

}

export default Routes;