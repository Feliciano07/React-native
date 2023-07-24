import React from 'react'
import { Movie } from '../models/MovieData'
import { View, Text, FlatList } from 'react-native'
import { MoviePoster } from './MoviePoster'

interface Props {
    title?: string,
    movies: Movie[],

}

export const HorizontalSlider = ({ title, movies }: Props) => {
    return (
        <View style={{ 
            height: title ? 260 : 220 
            }}
        >
            {
                title && 
                <Text style={{ fontSize: 25, fontWeight: 'bold', marginLeft:10 }}>
                    {title}
                </Text>
            }
            <FlatList
                data={movies}
                renderItem={({ item, index }: any) => (
                    <MoviePoster movie={item} key={index} height={200} width={140} />
                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}
