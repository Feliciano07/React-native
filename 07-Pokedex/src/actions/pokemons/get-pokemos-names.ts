import { pokeApi } from "../../config/api/pokeApi"
import { PokeAPIPaginatedResponse } from "../../infrastructure/interfaces/pokeApi.interfaces"


export const getPokemonNameAndId = async () => {
    try {
        const url = '/pokemon?limit=1000'
        const { data } = await pokeApi.get<PokeAPIPaginatedResponse>(url);

        return data.results.map(info => ({
            id: Number(info.url.split('/')[6]),
            name: info.name
        }))
    } catch (error) {
        throw new Error(`Error getting getPokemonNameAndId: ${error}`);
    }

}