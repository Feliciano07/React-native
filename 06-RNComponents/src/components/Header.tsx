import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Pros {
    titulo: string;
}

export const Header = ( {titulo}: Pros) => {

    const {top} = useSafeAreaInsets();
    const { theme: { colors } } = useContext(ThemeContext)

    return (
        <View style={{ marginTop: top + 20 }}>
            <Text style={{...styles.title, color: colors.text}}>
                {titulo}
            </Text>
        </View>
    )
}
