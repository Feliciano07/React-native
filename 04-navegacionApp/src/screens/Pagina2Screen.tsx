import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { style } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any>{};


const Pagina2Screen = ({navigation}:Props) => {


    useEffect(()=> {
        navigation.setOptions({
            title: 'Hola Mundo',
            headerBackTitle: 'Atras'
        })
    },[])


    return(
        <View style={style.globalMargin}>
            <Text style={style.title}>
                Pagina 2
            </Text>
            <Button 
                title='Ir a pagina 3'
                onPress={()=> navigation.navigate('Pagina3Screen')}
            />
        </View>
    )
}

export default Pagina2Screen;