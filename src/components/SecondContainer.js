import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'


const SecondContainer = () => {

    const movies=useSelector(store => store.movies) 

    return (
        <div className='bg-black'>
            <div className='-mt-64 relative'> 
                <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
                <MoviesList title={"Popular"} movies={movies.popularMovies}/>
                <MoviesList title={"TOP Rated"} movies={movies.topRatedMovies}/>
                <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
            </div>
        </div>
    )
}

export default SecondContainer