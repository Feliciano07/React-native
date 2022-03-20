import React from 'react'
import { View, StyleSheet, useWindowDimensions } from 'react-native';

export const PositionScreen = () => {

   const {height, width} = useWindowDimensions();

  return (
    <View style = {styles.container}>
        <View style = {{...styles.cajaMorada, left: width - 100}}>
        </View>
        <View style =  {styles.cajaNaranja}></View>
        <View style = {styles.cajaRoja}></View>
    </View>
  )
}



const styles = StyleSheet.create({
    container:{
        backgroundColor: '#28C4D9',
        flex:1,
    },
    cajaMorada:{
        width:100,
        height:100,
        backgroundColor:'#5856D6',
        borderWidth:10,
        borderColor: 'white',
        position: 'absolute',
        top: 0,
        right: 0
    },
    cajaNaranja:{
        width:100,
        height:100,
        backgroundColor:'#F0A23B',
        borderWidth:10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        right:0
    },
    cajaRoja:{
        width:100,
        height:100,
        backgroundColor:'red',
        borderWidth:10,
        borderColor: 'white'
    }
});