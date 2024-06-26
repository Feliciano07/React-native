import React from 'react'
import { View, StyleSheet } from 'react-native'

export const TareaScreen = () => {
  return (
    <View style = {styles.container}>
        <View style = {styles.cajaMorada}></View>
        <View style = {styles.cajaNaranja}></View>
        <View style = {styles.cajaAzul}></View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425b',
        justifyContent:'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    cajaMorada:{
        width:100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856d6',
    },
    cajaNaranja:{
        width:100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        top: 50
    },
    cajaAzul:{
        width:100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
    }
});