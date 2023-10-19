import { api_key } from "./Constants/constants"

export const originals=`/discover/tv?api_key=${api_key}&with_networks=213`

export const trending =`/trending/all/week?api_key=${api_key}&language=en-US`

export const action =`/discover/movie?api_key=${api_key}&with_genres=28`
 
export const ComedyMovies= `/discover/movie?api_key=${api_key}&with_genres=35`

export const HorrorMovies= `/discover/movie?api_key=${api_key}&with_genres=27`

export const RomanceMovies= `/discover/movie?api_key=${api_key}&with_genres=10749`
