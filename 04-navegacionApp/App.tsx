import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainDrawer } from './src/navigator/MenuLateral';
import { AuthProvider } from './src/context/AuthContext';


const AppState = ({children}: any) => {
    return(
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}


const App = () => {
    return (
        <NavigationContainer>
            <AppState>
                <MainDrawer />
            </AppState>
        </NavigationContainer>
    )
}

export default App;