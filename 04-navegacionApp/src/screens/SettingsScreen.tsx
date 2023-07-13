import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { style } from '../theme/appTheme';

const SettingsScreen = () => {

    const insets = useSafeAreaInsets();

    return(
        <View style={{
            ...style.globalMargin,
            marginTop: insets.top
            }}
        >
            <Text style={style.title}>Settings Screen</Text>
        </View>
    )
}

export default SettingsScreen