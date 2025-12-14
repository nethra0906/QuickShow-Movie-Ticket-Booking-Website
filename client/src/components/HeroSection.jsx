import { ArrowRight, Calendar, CalendarIcon } from 'lucide-react'
import React from 'react'
import { ClockIcon } from 'lucide-react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'


const HeroSection = () => {

    const navigate = useNavigate();

  return (
  <div className="relative h-screen w-full bg-[url('/backgroundImage.png')] bg-cover bg-center">

      
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      <div className="relative z-10 h-full flex flex-col justify-center gap-6
                      px-6 md:px-16 lg:px-36 max-w-2xl">
        <img
          src={assets.marvelLogo}
          alt="Marvel"
          className="h-10 w-fit"
        />

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight">
          Guardians <br /> of the Galaxy
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-gray-300 text-sm">
          <span>Action | Adventure | Sci-Fi</span>

          <div className="flex items-center gap-1">
            <CalendarIcon className="w-4 h-4" />
            2018
          </div>

          <div className="flex items-center gap-1">
            <ClockIcon className="w-4 h-4" />
            2h 8m
          </div>
        </div>
        <p className='max-w-md text-gray-300'> In a post-apocalyptic world where cities ride on wheels and consume each other to survive, two people meet in London and try to stop a conspiracy.</p>
        <button onClick={() => navigate('/movies')} className="flex items-center gap-1 px-6 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer">
          Explore Movies 
          <ArrowRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  )
}


export default HeroSection