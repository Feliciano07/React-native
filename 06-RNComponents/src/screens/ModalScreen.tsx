import React, { useState } from 'react'
import { Button, Modal, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { Header } from '../components/Header'

export const ModalScreen = () => {

    const [show, setShow] = useState(false);

    return (
        <View style={styles.globalMargin}>
            <Header titulo='Modal' />
            <Button
                title='Abrir Modal'
                onPress={() => setShow(true)}
            />

            <Modal
                animationType='fade'
                visible={show}
                transparent
            >
                <View style={{
                    flex:1,
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    justifyContent: 'center',
                    alignItems: 'center'

                }}>
                    <View style={{
                        backgroundColor: '#fff',
                        width: 200,
                        height: 200,
                        justifyContent: 'center',
                        alignItems: 'center',
                        shadowOffset:{
                            width: 0,
                            height: 10
                        },
                        shadowOpacity: 0.25,
                        elevation: 10,
                        borderRadius: 5
                    }}>
                        <Header titulo='Modal titulo' />
                        <Text>{'Cuerpo del modal'}</Text>
                        <Button
                            title='Cerrar'
                            onPress={()=> setShow(false)}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    )
}
