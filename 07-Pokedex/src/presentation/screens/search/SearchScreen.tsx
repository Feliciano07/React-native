import React, { useMemo, useState } from 'react'
import { View } from 'react-native'
import { globalTheme } from '../../../config/theme/global-theme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ActivityIndicator, TextInput, Text } from 'react-native-paper'
import { FlatList } from 'react-native-gesture-handler'
import { Pokemon } from '../../../domain/entities/pokemon'
import { PokemonCard } from '../../components/pokemons/PokemonCard'
import { useQuery } from '@tanstack/react-query'
import { getPokemonByIds, getPokemonNameAndId } from '../../../actions/pokemons'
import FullScreenLoader from '../../components/ui/FullScreenLoader'
import { useDebouncedValue } from '../../hooks/useDebouncedValue'

export const SearchScreen = () => {

    const { top } = useSafeAreaInsets();
    const [term, setTerm] = useState('');
    const debouncedValue = useDebouncedValue(term);

    const {isLoading, data: pokemonNameLIst = []} = useQuery({
        queryKey: ['pokemons', 'all'],
        queryFn: () => getPokemonNameAndId()
    })


    const pokemonNameIdList = useMemo(()=> {
        // si es un numero
        if (!isNaN(Number(debouncedValue))){
            const pokemon = pokemonNameLIst.find( pokemon => pokemon.id === Number(debouncedValue));
            return pokemon ? [pokemon] : []
        }
        if (debouncedValue.length === 0) return []

        if (debouncedValue.length < 3) return [];


        return pokemonNameLIst.filter (pokemon => 
            pokemon.name.includes(debouncedValue.toLocaleLowerCase())
        )

    },[debouncedValue])

    const {isLoading: isLoadingPokemon, data: pokemons = []} = useQuery({
        queryKey: ['pokemons', 'by', pokemonNameIdList],
        queryFn: () => getPokemonByIds(pokemonNameIdList.map(pokemon => pokemon.id)),
        staleTime: 1000 * 60 * 5
    })

    if (isLoading) {
        return <FullScreenLoader/>
    }

    return (
        <View style={[globalTheme.globalMargin, { paddingTop: top }]}>
            <TextInput
                placeholder='Buscar'
                mode='flat'
                autoFocus
                autoCorrect={false}
                onChangeText={setTerm}
                value= {term}
            />
            {
                isLoadingPokemon && <ActivityIndicator style={{ paddingTop: 20 }}/>
            }
            
            <FlatList
                data={pokemons}
                keyExtractor={(pokemon, index) => `${pokemon.id}-${index}`}
                numColumns={2}
                style={{ paddingTop: top + 20 }}
                renderItem={({ item }) => <PokemonCard pokemon={item} />}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={<View style={{height: 100}}/>}
            />

        </View>
    )
}
