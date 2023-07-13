import React from 'react';
import { Button, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { style } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any> { };

const Pagina1Screen = ({ navigation }: Props) => {

    return (
        <View style={style.globalMargin}>
            <Text style={style.title}>
                Pagina 1
            </Text>
            <Button
                title='Ir a pagina 2'
                onPress={() => navigation.navigate('Pagina2Screen')}
            />

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 1,
                        nombre: 'Pedro'
                    })}
                    style={{...style.botonGrande, backgroundColor: 'green'}}
                >
                    <Text style={style.botonGrandeTexto}>
                        Ir a Pedro
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 2,
                        nombre: 'Maria'
                    })}
                    style={{...style.botonGrande, backgroundColor: 'blue'}}
                >
                    <Text style={style.botonGrandeTexto}>
                        Ir a Maria
                    </Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}

export default Pagina1Screen;