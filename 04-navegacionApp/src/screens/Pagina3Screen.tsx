import React from 'react';
import { Button, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { style } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{};

const Pagina3Screen = ({navigation}:Props) => {

    return(
        <View style={style.globalMargin}>
            <Text style={style.title}>
                Pagina 3
            </Text>
            <Button
                title='Regresar'
                onPress={()=>  navigation.pop()}
            />
            <Button
                title='Ir a pagina 1'
                onPress={()=>  navigation.popToTop()}
            />
        </View>
    )
}

export default Pagina3Screen;