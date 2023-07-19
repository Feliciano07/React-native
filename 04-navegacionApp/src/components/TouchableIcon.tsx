import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from '../theme/appTheme'
import { AuthContext } from '../context/AuthContext'

interface Props {
    iconName: string
}

export const TouchableIcon = ({ iconName }: Props) => {

    const {handleFavoriteIcon} = useContext(AuthContext)

    return (
        <TouchableOpacity
            onPress={() => handleFavoriteIcon(iconName)}
        >
            <MaterialCommunityIcons
                name={iconName}
                size={80}
                color={colors.primary}
            />
        </TouchableOpacity>
    )
}
