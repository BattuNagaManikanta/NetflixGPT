import React, { useEffect } from 'react'
import { API_OPTIONS } from '../Utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../Utils/moviesSlice';

const VideoBackground = ({movie_id}) => {

    const dispatch = useDispatch();
    const trailerVideo=useSelector(store => store.movies.trailerVideo);
    const getMovieVideos= async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movie_id+"/videos?language=en-US",API_OPTIONS);
        const json= await data.json();
        const fileredTrailers=json.results.filter((result)=> result.type == "Trailer");
        const finalTrailer=fileredTrailers.length >0  ? fileredTrailers[0] :json.results[0];
        const YT_key=finalTrailer.key;
        dispatch(addTrailerVideo(finalTrailer));
        
    }

    useEffect(()=>{
        getMovieVideos();
    },[]);

    return (
        <div>
            <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" fullScreen></iframe>
        </div>
    )
}

export default VideoBackground