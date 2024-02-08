import React from 'react'
import { Alert, Button, View } from 'react-native'
import { Header } from '../components/Header'
import { styles } from '../theme/appTheme'

export const AlertScreen = () => {

    const showAlert = () => {
        Alert.alert('Titulo', 'Este es el mensaje de la alerta', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]
        );
    }

    return (
        <View style={styles.globalMargin}>
            <Header titulo='Alertas' />
            <Button
                title='Mostrar Alerta'
                onPress={showAlert}
            />
        </View>
    )
}
