import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { Header } from '../components/Header'
import { ThemeContext } from '../context/themeContext/ThemeContext'

export const ChangeThemeScreen = () => {

    const { setDarkTheme, setLightTheme, theme: { colors } } = useContext(ThemeContext);

    return (
        <View style={styles.globalMargin}>
            <Header titulo='Temas' />
            <View
                style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
                <TouchableOpacity
                    style={{ ...styleScreen.butonTheme, backgroundColor: colors.primary }}
                    activeOpacity={0.8}
                    onPress={setLightTheme}
                >
                    <Text style={styleScreen.textButon}>Light</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ ...styleScreen.butonTheme, backgroundColor: colors.primary }}
                    activeOpacity={0.8}
                    onPress={setDarkTheme}
                >
                    <Text style={styleScreen.textButon}>Dark</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styleScreen = StyleSheet.create({
    butonTheme: {
        justifyContent: 'center',
        width: 150,
        height: 50,
        borderRadius: 20,
    },
    textButon: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    }
})