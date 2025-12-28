import React from 'react'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import BlueCircle from './BlueCircle'
import MovieCard from './MovieCard'
import { dummyShowsData } from '../data/dummyShowsData'

const FeaturedSection = () => {
  const navigate = useNavigate()

  return (
    <section className="relative px-6 md:px-16 lg:px-24 xl:px-32 py-20">
      
      {/* Decorative element */}
      <BlueCircle top="0" left="-80px" />

      {/* Header */}
      <div className="flex items-center justify-between mb-12">
        <p className="text-gray-300 font-medium text-lg">
          Now Showing
        </p>

        <button
          onClick={() => navigate('/movies')}
          className="group flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
        >
          View All
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
        </button>
      </div>

      {/* Centered Movie Cards */}
      <div className="mx-auto max-w-[1100px]">
        <div className="flex flex-wrap justify-center gap-8">
          {dummyShowsData.slice(0, 4).map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>

      {/* Show More */}
      <div className="flex justify-center mt-20">
        <button
          onClick={() => {
            navigate('/movies')
            window.scrollTo(0, 0)
          }}
          className="px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium"
        >
          Show More
        </button>
      </div>

    </section>
  )
}

export default FeaturedSection

