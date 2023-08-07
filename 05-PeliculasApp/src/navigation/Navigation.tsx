import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { Movie } from '../models/MovieData';

export type RootStackParams = {
    HomeScreen: undefined;
    DetailScreen: Movie;
}


const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="HomeScreen" options={{cardStyle:{backgroundColor: 'white'}}}  component={HomeScreen} />
            <Stack.Screen name="DetailScreen" component={DetailScreen} />
        </Stack.Navigator>
    );
}