import { Theme } from "@react-navigation/native"

type themeAction =
    | { type: 'set_light_theme' }
    | { type: 'set_dark_theme' }

export interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark',
    dividerColor: string;
}

export const lightTheme: ThemeState = {
    currentTheme: 'light',
    dark: false,
    dividerColor: 'rgba(0,0,0,0.7)',
    colors: {
        primary: '#084F6A',
        background: '#fff',
        card: 'green',
        text: '#000',
        border: 'orange',
        notification: 'teal',
    }
}

export const darkTheme: ThemeState = {
    currentTheme: 'dark',
    dark: true,
    dividerColor: 'rgba(255,255,255,0.7)',
    colors: {
        primary: '#75CEBD',
        background: '#000',
        card: 'green',
        text: '#fff',
        border: 'orange',
        notification: 'teal',
    }
}

export const themeReducer = (state: ThemeState, action: themeAction): ThemeState => {

    switch (action.type) {
        case 'set_light_theme':
            return lightTheme
        case 'set_dark_theme':
            return darkTheme
        default:
            return state;
    }

}