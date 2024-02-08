import React, { useState } from 'react'
import { View, ScrollView, RefreshControl } from 'react-native'
import { Header } from '../components/Header'
import { styles } from '../theme/appTheme'

export const PullToRefreshScreen = () => {

    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState<string>();

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            console.log('Terminas');
            setRefreshing(false);
            setData('Bienvenido');
        }, 3000);
    }

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    progressViewOffset={10}
                    colors={['white', 'red', 'orange']}
                />
            }
        >
            <View style={styles.globalMargin}>
                <Header titulo='Pull To Refresh' />
                {
                    data && <Header titulo={data} />
                }

            </View>
        </ScrollView>
    )
}
