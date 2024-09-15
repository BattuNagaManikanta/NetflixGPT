import React from 'react'
import { LOGO } from '../Utils/constant'
import lang from '../Utils/langConstant'
import { useSelector } from 'react-redux'

const GptSearchPage = () => {

  const language = useSelector(store => store.preferLang.language);

  return (
    <div className='relative flex justify-center'>
        <div className="absolute bg-black opacity-35 top-0 bottom-0 left-0 right-0 "></div>
        <form className='absolute z-50 bg-black w-1/2 top-24 text-white p-4 grid grid-cols-12 bg-opacity-60'>
            <input className='p-4 m-4 col-span-9 text-black' type='text' placeholder={lang[language].gptSearchPlaceholder}/>
            <button className='col-span-3 m-4 py-2 px-4 bg-red-700'>{lang[language].search}</button>
        </form>
        <img className='w-screen h-screen object-cover bg-gradient-to-b from-black' src={LOGO}/>
    </div>
  )
}

export default GptSearchPage