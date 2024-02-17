import React, { useContext, useState } from 'react'
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { Header } from '../components/Header'
import { FadeInImage } from '../components/FadeInImage'
import { ThemeContext } from '../context/themeContext/ThemeContext'

export const InfiniteScrollScreen = () => {

    const { theme: { colors } } = useContext(ThemeContext)
    const [number, setNumber] = useState([0, 1, 2, 3, 4, 5])

    const loadMore = () => {
        const newArray: number[] = [];
        for (let i = 0; i < 5; i++) {
            newArray[i] = number.length + i;
        }
        setTimeout(() => {
            setNumber([...number, ...newArray])
        }, 1500);
    }

    const renderItem = (item: number) => {
        return (
            <FadeInImage
                uri={`https://picsum.photos/id/${item}/1024/1024`}
                style={{
                    width: '100%',
                    height: 400,
                }}
            />
        )
    }

    return (
        <View>

            <FlatList
                data={number}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item }) => renderItem(item)}
                ListHeaderComponent={() => <Header titulo='Infinite' />}
                onEndReached={loadMore}
                onEndReachedThreshold={0.5}
                ListFooterComponent={() => (
                    <View style={{ height: 100, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator
                            size={20}
                            color={colors.primary}
                        />
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textItem: {
        backgroundColor: 'green',
        height: 150
    }
})