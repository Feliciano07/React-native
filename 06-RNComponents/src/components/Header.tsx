import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Pros {
    titulo: string;
}

export const Header = ( {titulo}: Pros) => {

    const {top} = useSafeAreaInsets();

    return (
        <View style={{ marginTop: top + 20 }}>
            <Text style={{...styles.title, color: '#3e3e3e'}}>
                {titulo}
            </Text>
        </View>
    )
}
