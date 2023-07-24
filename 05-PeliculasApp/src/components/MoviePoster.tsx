import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Movie } from '../models/MovieData'

interface Props {
    movie: Movie;
    height?: number;
    width?:number;
}

export const MoviePoster = ({ movie, height=420, width=300 }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    return (
        <View style={{
            width,
            height,
            marginHorizontal: 8
        }}>
            <View style={styles.cardPelicula}>
                <Image
                    source={{ uri }}
                    style={styles.image}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    cardPelicula: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        flex:1,
        borderRadius:18
    },
    image: {
        flex: 1,
        borderRadius: 18
    }
})