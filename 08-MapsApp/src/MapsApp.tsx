import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StackNavigator } from './presentation/navigation/StackNavigator';
import { PermissionsChecker } from './presentation/providers/PermissionsCheker';

export const MapsApp = () => {
    return (
        <NavigationContainer>
            <PermissionsChecker>
                <StackNavigator />
            </PermissionsChecker>
        </NavigationContainer>
    )
}