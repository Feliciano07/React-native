import { useEffect, useState } from "react"
import movieDB from "../services/movieDB"
import { Movie, MovieData } from "../models/MovieData"


interface MovieState{
    peliculasCine:Movie[],
    populares: Movie[],
    topRated: Movie[],
    upcoming: Movie[]
}

 
export const useMovies = () => {

    const [loading, setLoading] = useState(true);
    const [movieState, setmovieState] = useState<MovieState>({
        peliculasCine: [],
        populares: [],
        topRated: [],
        upcoming: []
    })

    const getMovies = async() => {
        const nowPlaying = movieDB.get<MovieData>('/now_playing');
        const popular = movieDB.get<MovieData>('/popular');
        const top = movieDB.get<MovieData>('/top_rated');
        const upcoming = movieDB.get<MovieData>('/upcoming');


        const response = await Promise.all([
            nowPlaying, 
            popular, 
            top, 
            upcoming
        ])

        setmovieState({
            peliculasCine: response[0].data.results,
            populares: response[1].data.results,
            topRated: response[2].data.results,
            upcoming: response[3].data.results
        })

        setLoading(false);
    }

    useEffect(()=>{
        // now_playing
        getMovies()
    }, [])

    return{
        ...movieState,
        loading
    }
}
 