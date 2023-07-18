import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Tabs1Screen } from '../screens/Tabs1Screen';
import { Tabs2Screen } from '../screens/Tabs2Screen';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TopTabs } from './TopTabs';



const renderTabIcon = (icon: string, color: string, size: number) => {
    return (
        <MaterialCommunityIcons
            name={icon}
            size={size}
            color={color}
        />
    )
}

const TabIOS = createBottomTabNavigator();
export const TabsIOS = () => {
    return (
        <TabIOS.Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: colors.primary,
                tabBarLabelStyle: {
                    fontSize: 15
                }
            })}
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
        >
            <TabIOS.Screen name="Tabs1Screen" component={Tabs1Screen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Tab1',
                    tabBarIcon: ({ focused, color }) => renderTabIcon('home', color, 25)
                }}
            />
            <TabIOS.Screen name="TopTabs" component={TopTabs}
                options={{
                    headerShown: false,
                    tabBarLabel: 'TopTabs',
                    tabBarIcon: ({ focused, color }) => renderTabIcon('timer', color, 25)
                }}
            />
            <TabIOS.Screen name="StackNavigator" component={StackNavigator}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Stack',
                    tabBarIcon: ({ focused, color }) => renderTabIcon('arm-flex', color, 25)
                }}
            />
        </TabIOS.Navigator>
    );
}

const TabAndroid = createMaterialBottomTabNavigator();
export const TabsAndroid = () => {
    return (
        <TabAndroid.Navigator
            activeColor={colors.primary}
        >
            <TabAndroid.Screen name="Tabs1Screen" component={Tabs1Screen}
                options={{
                    tabBarLabel: 'Tab1',
                    tabBarIcon: ({ focused, color }) => renderTabIcon('home', color, 25)
                }}
            />
            <TabAndroid.Screen name="TopTabs" component={TopTabs}
                options={{
                    tabBarLabel: 'TopTabs',
                    tabBarIcon: ({ focused, color }) => renderTabIcon('timer', color, 25)
                }}
            />
            <TabAndroid.Screen name="StackNavigator" component={StackNavigator}
                options={{
                    tabBarLabel: 'Stack',
                    tabBarIcon: ({ focused, color }) => renderTabIcon('arm-flex', color, 25)
                }}
            />
        </TabAndroid.Navigator>
    );
}

export const Tabs = () => {
    return (
        Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />
    )
}