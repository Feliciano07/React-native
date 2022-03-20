import React from 'react'
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native'

interface Props{
    title:string;
    position?: 'br' | 'bl';
    onPress: ()=>void;
}

export const Fab = ({title, onPress, position = 'br'}: Props) => {
  return (
    <TouchableOpacity
            onPress={ onPress}
            style = {[styles.fabLocation,
                (position==='bl') ? styles.left: styles.right
            ]}
        >
            <View style={styles.fab}>
                <Text style = {styles.fabText}>
                    {title}
                </Text>
            </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    fabLocation:{
        position:'absolute',
        bottom:25
    },
    right :{
        right: 25
    },
    left:{
        left:25
    },
    fab:{
        backgroundColor:'#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 17,
    },
    fabText:{
        color:'white',
        fontSize:25,
        fontWeight:'bold',
        alignSelf:'center'
    }
})