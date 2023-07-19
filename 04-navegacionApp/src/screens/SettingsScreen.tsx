import React, { useContext, useMemo } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { colors, style } from '../theme/appTheme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { AuthContext } from '../context/AuthContext';

const SettingsScreen = () => {

    const insets = useSafeAreaInsets();
    const {authState} = useContext(AuthContext)

    const renderIcon = useMemo(() => {
        if(authState.favoriteIcon){
            return(
                <MaterialCommunityIcons
                    name={authState.favoriteIcon}
                    size={80}
                    color={colors.primary }
                />
            )
        }
        return null
    }, [authState.favoriteIcon])

    return(
        <View style={{
            ...style.globalMargin,
            marginTop: insets.top
            }}
        >
            <Text style={style.title}>Settings Screen</Text>
            <Text>
                {JSON.stringify( authState, null, 4)}
            </Text>
            {renderIcon}
        </View>
    )
}

export default SettingsScreen