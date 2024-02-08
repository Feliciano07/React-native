import React from 'react'
import { MenuItem } from '../models/MenuItem'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { CommonActions, useNavigation } from '@react-navigation/native'

interface Props {
    menuItem: MenuItem
}

export const FlatListMenuItem = ({ menuItem }: Props) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={()=> navigation.dispatch(CommonActions.navigate(menuItem.component))}
        >
            <View style={styles.container}>
                <Icon
                    name={menuItem.icon}
                    color={'#5856D6'}
                    size={20}
                />
                <Text style={styles.itemText}>{menuItem.name}</Text>
                <View style={{ flex: 1 }} />
                <Icon
                    name='chevron-forward-outline'
                    color={'#5856D6'}
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