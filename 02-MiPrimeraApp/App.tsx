import React from 'react'
import { SafeAreaView } from 'react-native';
//import { FlexScreen } from './src/screens/FlexScreen';
import { TareaScreen } from './src/screens/TareaScreen';
//import { DimensionesScreen } from './src/screens/DimensionesScreen';
//import { PositionScreen } from './src/screens/PositionScreen';
//import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
//import {HolaMundoScreen} from './src/screens/HolaMundoScreen'
//import { ContadorScreen } from './src/screens/ContadorScreen';

export const App = () => {
  return (
    //<ContadorScreen/>
    <SafeAreaView style = {{flex:1}}>
      <TareaScreen/>
    </SafeAreaView>
    
  )
}


export default App;