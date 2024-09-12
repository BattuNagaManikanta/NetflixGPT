import React from 'react'
import { useSelector } from 'react-redux'

const VideoTitle = ({title,overview}) => {
  

    return (
        <div className='pt-[20%] pl-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
            <h1 className='text-6xl font-bold'>{title}</h1>
            <p className='pt-6 w-1/4'>{overview}</p>
            <div className='pt-6'>
                <button className='bg-gray-500 text-white p-4 px-10 text-xl bg-opacity-50 rounded-lg'>▶️Play</button>
                <button className='bg-gray-500 text-white ml-2 p-4 px-10 text-xl bg-opacity-50 rounded-lg'>More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;