import 'react-native-gesture-handler';
import React from 'react'
import { Navigator } from './src/navigator/Navigator';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';

// const customTheme: Theme = {
//     dark: true,
//     colors: {
//         ...DefaultTheme.colors,
//         // primary: '',
//         // background: 'grey',
//         // card: '',
//         // text: '',
//         // border: '',
//         // notification: '',
//     }
// }

const App = () => {
    return (
        <AppState>
            <Navigator />
        </AppState>
    )
}

const AppState = ({ children }: any) => {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}

export default App;