import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

const Stack = createStackNavigator();

function Routes(){
    return(
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
                    name='Detail'
                    component={Detail}
                    options={{
                        headerRight: () => (
                            <TouchableOpacity style={{marginRight: 15}}>
                                <Feather
                                name="shopping-cart"
                                size={24}
                                color="black"
                                />
                            </TouchableOpacity>

                        )
              }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default Routes;