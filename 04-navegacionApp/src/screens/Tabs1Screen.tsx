import React from 'react'
import { Text, View } from 'react-native'
import { style } from '../theme/appTheme'
import { TouchableIcon } from '../components/TouchableIcon'

export const Tabs1Screen = () => {
    return(
        <View style={style.globalMargin}>
            <Text style={style.title}>
                Iconos
            </Text> 
            <Text>
                <TouchableIcon iconName='calendar' />
                <TouchableIcon iconName='timer' />
                <TouchableIcon iconName='run' />
                <TouchableIcon iconName='whatsapp' />
            </Text>
        </View>
    )
}
