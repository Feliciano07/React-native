import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainDrawer } from './src/navigator/MenuLateral';

const App = () => {

    return (
        <NavigationContainer>
            <MainDrawer />
        </NavigationContainer>
    )
}

export default App;