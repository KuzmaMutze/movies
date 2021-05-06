import axios, { AxiosResponse } from "axios";
import { ResponsePageMoviesFeaturedType } from "./types/types";

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
    featured () {
        return data(instance.get<ResponsePageMoviesFeaturedType>(`discover/movie?api_key=${ApiKey}`))
    } 
}
