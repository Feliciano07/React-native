import { View, ActivityIndicator } from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-paper'

const FullScreenLoader = () => {

    const {colors} = useTheme();

    return (
        <View style = {{
            flex:1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.background
        }}>
            <ActivityIndicator  size={50}/>
        </View>
    )
}

export default FullScreenLoader