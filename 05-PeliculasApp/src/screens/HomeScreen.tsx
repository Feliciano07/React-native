import React, { useMemo } from 'react'
import { ActivityIndicator, Dimensions, FlatList, ScrollView, Text, View } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { useMovies } from '../hooks/useMovies'
import { MoviePoster } from '../components/MoviePoster'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Movie } from '../models/MovieData';
import { HorizontalSlider } from '../components/HorizontalSlider';


const { width } = Dimensions.get('window');

export const HomeScreen = () => {

    const { peliculasCine, populares, topRated, upcoming, loading } = useMovies();
    const { top } = useSafeAreaInsets();

    const renderItem = (item: Movie, index: number) => {
        return (
            <MoviePoster movie={item} key={index} />
        )
    }


    const renderContent = useMemo(() => {
        if (loading) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator color={'blue'} size={50} />
                </View>
            );
        }

        return (
            <ScrollView>
                <View style={{ marginTop: top + 20 }}>
                    {/* Carrousel */}
                    <View style={{ height: 440 }}>
                        <Carousel
                            data={peliculasCine}
                            sliderWidth={width}
                            itemWidth={300}
                            renderItem={({ item, index }) => renderItem(item, index)}
                            inactiveSlideOpacity={0.9}
                        />
                    </View>
                    <HorizontalSlider title='Popular' movies={populares}/>
                    <HorizontalSlider title='Top Rated' movies={topRated}/>
                    <HorizontalSlider title='Upcoming' movies={upcoming}/>
                </View>
            </ScrollView>
        );
    }, [loading]);

    return renderContent;
}
