import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { MovieFull } from '../models/MovieData'
import { Cast } from '../models/CreditsData'
import Icons from 'react-native-vector-icons/Ionicons'
import { CastItem } from './CastItem'

interface Props {
    movieFull: MovieFull,
    cast: Cast[]
}

export const MovieDetails = ({movieFull, cast}: Props) => {


    const currency = (amount:number) => {
        const currencyOptions: Intl.NumberFormatOptions = {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2, // Número mínimo de decimales
            maximumFractionDigits: 2, // Número máximo de decimales
        };
        return amount.toLocaleString(undefined, currencyOptions);
    }

    return(
        <View>
            {/* Detalles */}
            <View style = {{marginHorizontal:20}}>
                <View style={{flexDirection: 'row'}}>
                    <Icons name='star-outline' size={16} color={'grey'}/>
                    <Text style={{marginLeft: 5}} >{movieFull.vote_average}</Text>
                    <Text style ={{marginLeft: 5}}>
                        -{movieFull.genres.map(g => g.name).join(', ')}
                    </Text>
                </View>
                {/* Historial */}
                <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold', color: 'black'}}>
                    Historia
                </Text>
                <Text style={{fontSize: 15}}>
                    {movieFull.overview}
                </Text>
                {/* presupuesto */}
                <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold', color: 'black'}}>
                    Presupuesto
                </Text>
                <Text style={{fontSize: 15}}>
                    {currency(movieFull.budget)}
                </Text>
            </View>
            {/* Casting */}
            <View style={{marginTop: 10, marginHorizontal:20, marginBottom: 50}}>
                <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold', color: 'black'}}>
                    Actores
                </Text>
                <FlatList
                    data={cast}
                    keyExtractor={(item) => item.id.toString() }
                    renderItem={({item}) => <CastItem actor={item} />}
                    horizontal={true}
                    showsHorizontalScrollIndicator = {false}
                    style={{marginTop: 10, height: 70}}
                />
            </View>
        </View>
    )
}
