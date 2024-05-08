import React, { PropsWithChildren, useEffect } from 'react'
import { AppState } from 'react-native'
import { usePermissionStore } from '../store/permissions/usePermissionStore'
import { useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../navigation/StackNavigator';
import { StackNavigationProp } from '@react-navigation/stack';

export const PermissionsChecker = ({ children }: PropsWithChildren) => {

    const {locationStatus, checkLocationPermission} = usePermissionStore();
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

    useEffect(() => {
        const subscription = AppState.addEventListener('change', (nextAppState) => {
            if (nextAppState === 'active') {
                checkLocationPermission();
            }
        });
        return () => {
            subscription.remove();
        }
    }, [])

    useEffect(()=> {
        checkLocationPermission();
    },[])


    useEffect(()=> {
        if (locationStatus == 'granted') {
            navigation.reset({
                routes: [{name: 'MapScreen'}]
            })
        }else if(locationStatus != 'undetermined') {
            navigation.reset({
                routes: [{name: 'PermissionsScreen'}]
            })
        }
    }, [locationStatus])



    return (
        <>
            {children}
        </>
    )
}
