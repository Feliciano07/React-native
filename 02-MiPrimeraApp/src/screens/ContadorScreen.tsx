import React, { useState } from 'react'
import {Text,  View, StyleSheet } from 'react-native';
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {

    const [contador, setcontador] = useState(10)

  return (
    <View style = { styles.container}>
        <Text style = {styles.titulo}>
            Contador: {contador}
        </Text>
        
        <Fab
            title='+1'
            onPress = { ()=> setcontador(contador + 1)}
        />

        <Fab
            title='-1'
            onPress = { ()=> setcontador(contador - 1)}
            position = {'bl'}
        />

        {/*<TouchableOpacity
            onPress={ ()=> setcontador(contador + -1)}
            style = {styles.fabLocationBL}
        >
            <View style={styles.fab}>
                <Text style = {styles.fabText}>
                    -1
                </Text>
            </View>
        </TouchableOpacity>*/
        }

    </View>
  )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    titulo: {
        textAlign: 'center',
        fontSize: 30,
        top: -15
    }
})