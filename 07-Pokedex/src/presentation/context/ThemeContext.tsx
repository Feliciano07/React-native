import { PropsWithChildren, createContext } from "react";

import {
    NavigationContainer,
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import { PaperProvider, adaptNavigationTheme } from 'react-native-paper';
import { useColorScheme } from "react-native";

const { LightTheme, DarkTheme } = adaptNavigationTheme({
    reactNavigationLight: NavigationDefaultTheme,
    reactNavigationDark: NavigationDarkTheme,
});


export const ThemeContext = createContext({
    isDark: false,
    theme: LightTheme
})

export const ThemeContextProvider = ({ children }: PropsWithChildren) => {

    const colorSchema = useColorScheme();
    const isDark = colorSchema === 'dark';
    const theme = isDark ? DarkTheme : LightTheme;

    const value = {
        isDark,
        theme
    }

    return (
        <PaperProvider theme={theme}>
            <NavigationContainer theme={theme}>
                <ThemeContext.Provider value={value}>
                    {children}
                </ThemeContext.Provider>
            </NavigationContainer>
        </PaperProvider>
    )
}