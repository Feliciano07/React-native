import React, { useContext, useMemo } from 'react'
import { Text, View, Button } from 'react-native'
import { style } from '../theme/appTheme'
import { AuthContext } from '../context/AuthContext'


export const AlbumScreen = () => {

    const {authState, logout} = useContext(AuthContext)

    const renderLogout = useMemo(() => {
        if(authState.isLoggedIn){
            return(
                <Button
                    title='Logout'
                    onPress={logout}
                />
            )
        }
    }, [authState.isLoggedIn])

    return(
        <View style={style.globalMargin}>
            <Text style={style.title}>
                AlbumScreen
            </Text>
            {renderLogout}
        </View> 
    )
}
