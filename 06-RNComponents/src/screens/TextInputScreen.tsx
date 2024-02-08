import React, { useState } from 'react'
import { TextInput, View, KeyboardAvoidingView, Platform, ScrollView, Text } from 'react-native'
import { Header } from '../components/Header'
import { styles } from '../theme/appTheme'
import { StyleSheet } from 'react-native'
import { useForm } from '../hooks/useForm'
import { CustomSwitch } from '../components/CustomSwitch'

export const TextInputScreen = () => {

    const { form, onChange, isSuscribed } = useForm({
        name: '',
        email: '',
        phone: '',
        isSuscribed: false
    });

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView>
                <View style={styles.globalMargin}>
                    <Header titulo='Text Input' />
                    <TextInput
                        style={stylesScreen.inputStyle}
                        placeholder='Ingrese su nombre'
                        autoCorrect={false}
                        autoCapitalize='words'
                        onChangeText={(value: string) => onChange(value, 'name')}
                    />
                    <TextInput
                        style={stylesScreen.inputStyle}
                        placeholder='Ingrese su email'
                        autoCorrect={false}
                        autoCapitalize='none'
                        onChangeText={(value: string) => onChange(value, 'email')}
                        keyboardType='email-address'
                    />
                    <TextInput
                        style={stylesScreen.inputStyle}
                        placeholder='Ingrese su teléfono'
                        onChangeText={(value: string) => onChange(value, 'phone')}
                        keyboardType='phone-pad'
                    />
                    <View style={stylesScreen.switchRow}>
                        <Text style={stylesScreen.switchText}>Suscribirme</Text>
                        <CustomSwitch isOn={isSuscribed} onChange={(value) => onChange(value, 'isSuscribed')} />
                    </View>
                    <Header titulo={JSON.stringify(form, null, 3)} />
                    <View style={{ height: 100 }} />
                </View>
            </ScrollView>

        </KeyboardAvoidingView>

    )
}

const stylesScreen = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        borderColor: '#000',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 5
    },
    switchText: {
        fontSize: 25
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5
    }
});