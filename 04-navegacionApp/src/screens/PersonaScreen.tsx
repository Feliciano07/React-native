import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { style } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigator/StackNavigator'



interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'>{};

const PersonaScreen = ({route, navigation}:Props) => {

    const params = route.params;

    useEffect(()=> {
        navigation.setOptions({
            title: params.nombre
        })
    },[])

    return(
        <View style={style.globalMargin}>
            <Text style={style.title}>
                {
                    JSON.stringify(route.params, null, 3)
                }
            </Text>
        </View>
    )
}

export default PersonaScreen