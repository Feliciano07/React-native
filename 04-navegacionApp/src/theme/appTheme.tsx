import { StyleSheet } from "react-native";

export const colors = {
    primary: 'green' 
}

export const style = StyleSheet.create({
    globalMargin:{
        marginHorizontal:20
    },
    title:{
        fontSize:30,
        marginBottom: 5
    },
    botonGrande:{
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight:10
    },
    botonGrandeTexto:{
        color: 'white',
        fontSize:18,
        fontWeight: 'bold'
    },
    avatar:{
        width: 150,
        height: 150,
        borderRadius: 100
    },
    avatarContainer:{
        alignItems: 'center',
        marginTop: 10
    },
    menuContainer:{
        marginVertical: 20,
        marginHorizontal: 20
    },
    menuBoton:{
        marginVertical: 10
    },
    menuTexto:{
        fontSize:20,

    }
})