import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { globalStyle } from '../../../config/theme/globalStyle'
import { usePermissionStore } from '../../store/permissions/usePermissionStore'

export const PermissionsScreen = () => {

    const {locationStatus, requestLocationPermission} = usePermissionStore();

    return (
        <View style = {{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>Habilitar ubicación</Text>

            <Pressable
                style = {globalStyle.btnPrimary}
                onPress={requestLocationPermission}
            >
                <Text style = {{color: '#fff'}}>Habilitar Localización</Text>
            </Pressable>

            <Text>Estado actual: {locationStatus}</Text>
        </View>
    )
}