import React from 'react';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import { StackNavigator } from './StackNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import { Image, Text, View } from 'react-native';
import { style } from '../theme/appTheme';
import { Tabs } from './Tabs';

const CustomDrawer = (props: DrawerContentComponentProps) => {
    return(
        <DrawerContentScrollView>
            {/* Container avatar */}
            <View style={style.avatarContainer}>
                <Image
                    source={{
                        uri:'https://alumni.engineering.utoronto.ca/files/2022/05/Avatar-Placeholder-400x400-1.jpg'
                    }}
                    style={style.avatar}
                />
            </View>
            {/* Drawer Items */}
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}

const renderTitleItem = (title: string, focused: boolean) => {
    return (
        <Text style={{ color: focused ? 'green' : 'black' }}>
            {title}
        </Text>
    );
};

const Drawer = createDrawerNavigator();
export const MainDrawer = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props}/>}
        >
            <Drawer.Screen name="Tabs" component={Tabs} options={{
                drawerActiveTintColor: 'green',
                drawerLabel: ({ color, focused }) => renderTitleItem('Tabs', focused),
            }}/>
            <Drawer.Screen name="SettingsScreen"  component={SettingsScreen} options={{
                drawerActiveTintColor: 'green',
                drawerLabel: ({ color, focused }) => renderTitleItem('Ajustes', focused),
            }} />
        </Drawer.Navigator>
    );
}