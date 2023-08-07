import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { ActivityIndicator, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParams } from '../navigation/Navigation';
import { useMovieDetail } from '../hooks/useMovieDetail';
import { MovieDetails } from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';

const screenHeight = Dimensions.get('screen').height

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { };

export const DetailScreen = ({ route, navigation }: Props) => {

    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const { isLoading, movieFull, cast } = useMovieDetail(movie.id);

    return (
        <ScrollView>
            <View
                style={styles.imageContainer}
            >
                <Image
                    source={{ uri }}
                    style={styles.image}
                />
            </View>
            <View style={styles.containerTitle}>
                <Text style={styles.subtitle}>
                    {movie.original_title}
                </Text>
                <Text style={styles.title}>
                    {movie.title}
                </Text>
            </View>
            {
                isLoading
                    ? <ActivityIndicator size={35} color={'grey'} style={{ marginTop: 10 }} />
                    : <MovieDetails movieFull={movieFull!} cast={cast} />
            }
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            >
                <Icon
                    name='arrow-back-outline'
                    size={30}
                    color={'white'}
                />
            </TouchableOpacity>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: screenHeight * 0.7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        overflow: 'hidden',
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20
    },
    image: {
        flex: 1,
    },
    containerTitle: {
        marginHorizontal: 20,
        marginTop: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000'
    },
    subtitle: {
        fontSize: 16,
        opacity: 0.6,
        color: '#000000'
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20
    }
})