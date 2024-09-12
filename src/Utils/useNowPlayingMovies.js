import { API_OPTIONS, NOW_PLAYING_URL } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies=()=>{

    const dispatch = useDispatch();
    const getNowPlayingMovies=async()=>{
        const data= await fetch(NOW_PLAYING_URL,API_OPTIONS);
        const json = await data.json();
        // console.log(json.results); 
        dispatch(addNowPlayingMovies(json.results))
    }

    useEffect(()=>{
        getNowPlayingMovies();
    },[])

}

export default useNowPlayingMovies;