import axios, { AxiosResponse } from "axios";
import { MultiResponsePage, ResponseMovieId, ResponsePageMoviesFeaturedType } from "./types/types";

const ApiKey = "3e310cd4e4a6a86d521600dd60888991"

let data = (param: any) => {
    return param.then((response:AxiosResponse<any> ) => {
        return response.data;
    });
}

export const instance = axios.create({
    baseURL: `https://api.themoviedb.org/3/`
}) 

 export const API = {
    featuredPage (page: number) {
        return data(instance.get<ResponsePageMoviesFeaturedType>(`discover/movie?api_key=${ApiKey}&page=${page}`))
    },
    getMovieId (id: number) {
        return data(instance.get<ResponseMovieId>(`https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}`))
    },
    getMovies(search: string, page = 1) {
        return data(instance.get<ResponsePageMoviesFeaturedType>(`https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&query=${search}&page=${page}`))
    }
}
