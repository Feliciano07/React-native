import {StyleSheet} from 'react-native'


export const styles = StyleSheet.create({
    fondo:{
        flex: 1,
        backgroundColor:'black'
    },
    calculadorContainer:{
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: 'flex-end'
    },
    resultado:{
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
        marginBottom:5
    },
    resultadoPequeno:{
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: 'right'
    },
    boton:{
        height: 70,
        width: 70,
        backgroundColor:'#2D2D2D',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    botonTexto:{
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '300'
    },
    fila:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    }
});