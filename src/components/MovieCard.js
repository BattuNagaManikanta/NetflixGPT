import React from 'react'

const MovieCard = ({poster_path}) => {
  return (
    <div className='w-36 m-2'>
        <img src={"https://image.tmdb.org/t/p/original/"+poster_path}/>
    </div>
  )
}

export default MovieCard