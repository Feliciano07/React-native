import axios from 'axios';


const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'eafbf13a72678d3a25b404f4620c2882',
        language: 'es-ES'
    }
})

export default movieDB;