import React, { useContext } from 'react'
import { MenuItem } from '../models/MenuItem'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { CommonActions, useNavigation, useTheme } from '@react-navigation/native'
import { ThemeContext } from '../context/themeContext/ThemeContext'

interface Props {
    menuItem: MenuItem
}

export const FlatListMenuItem = ({ menuItem }: Props) => {

    const navigation = useNavigation();
    const { theme: { colors } } = useContext(ThemeContext)

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.dispatch(CommonActions.navigate(menuItem.component))}
        >
            <View style={styles.container}>
                <Icon
                    name={menuItem.icon}
                    color={colors.primary}
                    size={20}
                />
                <Text style={{
                    ...styles.itemText,
                    color: colors.text
                }}>
                    {menuItem.name}
                </Text>
                <View style={{ flex: 1 }} />
                <Icon
                    name='chevron-forward-outline'
                    color={colors.primary}
                    size={20}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    itemText: {
        marginLeft: 5,
        fontSize: 15
    }
})