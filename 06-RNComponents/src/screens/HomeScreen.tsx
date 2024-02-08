import React from 'react'
import { FlatList, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItem';
import { Header } from '../components/Header';
import { ItemSeparator } from '../components/ItemSeparator';


export const HomeScreen = () => {


    return (
        <View style={{flex:1, ...styles.globalMargin}}>
            <FlatList
                data={menuItems}
                renderItem={({index, item}) => <FlatListMenuItem menuItem={item}/>}
                keyExtractor={(item) => item.name}
                ListHeaderComponent={()=> <Header titulo='Opciones del Menu'/>}
                ItemSeparatorComponent={()=> <ItemSeparator/>}
            />
        </View> 
    )
}
