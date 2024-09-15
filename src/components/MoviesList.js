import React from'react'
import MovieCard from './MovieCard';

const MoviesList = ({title,movies}) => {
    // console.log(movies);
    
  return (
    <div className='p-6  text-white'>
        <h1 className='text-3xl pb-5'>{title}</h1>
        <div className='flex overflow-auto'>
            <div className='flex'>
                {movies?.map((movie)=>{   
                    return <MovieCard key={movie.id} poster_path={movie.poster_path}/> 
                })}
            </div>
        </div>
    </div>
  )
}

export default MoviesList