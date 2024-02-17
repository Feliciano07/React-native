import React, { useContext, useState } from 'react'
import { Button, Modal, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { Header } from '../components/Header'
import { ThemeContext } from '../context/themeContext/ThemeContext'

export const ModalScreen = () => {

    const [show, setShow] = useState(false);
    const { theme: { colors, dividerColor } } = useContext(ThemeContext)

    return (
        <View style={styles.globalMargin}>
            <Header titulo='Modal' />
            <Button
                title='Abrir Modal'
                onPress={() => setShow(true)}
                color={colors.primary}
            />

            <Modal
                animationType='fade'
                visible={show}
                transparent
            >
                <View style={{
                    flex: 1,
                    backgroundColor: dividerColor,
                    justifyContent: 'center',
                    alignItems: 'center'

                }}>
                    <View style={{
                        backgroundColor: colors.background,
                        width: 200,
                        height: 200,
                        justifyContent: 'center',
                        alignItems: 'center',
                        shadowOffset: {
                            width: 0,
                            height: 10
                        },
                        shadowOpacity: 0.25,
                        elevation: 10,
                        borderRadius: 5
                    }}>
                        <Header titulo='Modal titulo' />
                        <Text style={{ color: colors.text }} >{'Cuerpo del modal'}</Text>
                        <Button
                            title='Cerrar'
                            onPress={() => setShow(false)}
                            color={colors.primary}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    )
}
