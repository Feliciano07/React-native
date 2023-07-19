import React, { useContext, useMemo } from 'react'
import { Button, Text, View } from 'react-native'
import { style } from '../theme/appTheme'
import { AuthContext } from '../context/AuthContext'

export const ContactScreen = () => {

    const { signIn, authState } = useContext(AuthContext)

    const renderSignIn = useMemo(() => {
        if (!authState.isLoggedIn) {
            return (
                <Button
                    title='SignIn'
                    onPress={signIn}
                />
            )
        }
    }, [authState.isLoggedIn])

    return (
        <View style={style.globalMargin}>
            <Text style={style.title}>
                ContactScreen
            </Text>
            {renderSignIn}
        </View>
    )
}
