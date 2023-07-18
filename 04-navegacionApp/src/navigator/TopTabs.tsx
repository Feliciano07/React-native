import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ChatScreen } from '../screens/ChatScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { AlbumScreen } from '../screens/AlbumScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/appTheme';


const renderTabIcon = (icon: string, color: string, size: number) => {
    return (
        <MaterialCommunityIcons
            name={icon}
            size={size}
            color={color}
        />
    )
}

const Tab = createMaterialTopTabNavigator();

export const TopTabs = () => {

    const {top} = useSafeAreaInsets()

    return (
        <Tab.Navigator 
            style={{
                paddingTop: top
            }}
            sceneContainerStyle={{backgroundColor: 'white'}}
            screenOptions={() => ({
                tabBarPressColor: colors.primary,
                tabBarIndicatorStyle: {backgroundColor: colors.primary},
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: 'black'
            })}
        >
            <Tab.Screen name="ChatScreen" component={ChatScreen} 
                options={{
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({ focused, color }) => renderTabIcon('chat', color, 25)
                }} 
            />
            <Tab.Screen name="ContactScreen" component={ContactScreen} 
                options={{
                    tabBarLabel: 'Contact',
                    tabBarIcon: ({ focused, color }) => renderTabIcon('calendar', color, 25)
                }} 
            />
            <Tab.Screen name="AlbumScreen" component={AlbumScreen} 
                options={{
                    tabBarLabel: 'Album',
                    tabBarIcon: ({ focused, color }) => renderTabIcon('album', color, 25)
                }} 
            />
        </Tab.Navigator>
    );
}