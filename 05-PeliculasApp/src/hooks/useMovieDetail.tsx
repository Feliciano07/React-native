import { useEffect, useState } from "react"
import movieDB from "../services/movieDB";
import { MovieFull } from "../models/MovieData";
import { Cast, CreditsResponse } from "../models/CreditsData";

interface MovieDetail {
    isLoading:boolean,
    movieFull?: MovieFull,
    cast:Cast[],
}

export const useMovieDetail = (movieId:number) => {

    const [detail, setDetail] = useState<MovieDetail>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    });

    const getMovieDetails = async () => {
        const movieDetails = await movieDB.get<MovieFull>(`/${movieId}`);
        const castPromise = await movieDB.get<CreditsResponse>(`/${movieId}/credits`);

        const [movieResponse, castResponse] = await Promise.all([movieDetails, castPromise ])
        
        setDetail({
            isLoading: false,
            movieFull: movieResponse.data ,
            cast: castResponse.data.cast
        })
    }


    useEffect(() =>{
        getMovieDetails();
    },[])


    return(
        detail
    )

}
