import { Pokemon } from "../../domain/entities/pokemon";
import { GetPokemonById } from "./get-pokemon-by-id";



export const getPokemonByIds = async(ids: number[]): Promise<Pokemon[]> => {
    try {
        const pokemonsPromise: Promise<Pokemon>[] = ids.map( id => {
            return GetPokemonById(id)
        })

        return Promise.all(pokemonsPromise);

    } catch (error) {
        throw new Error(`Error getting pokemon by ids: ${ids}`)
    }
}