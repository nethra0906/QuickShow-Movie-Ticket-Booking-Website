import React from 'react'
import { useNavigate } from 'react-router-dom'
import { StarIcon } from 'lucide-react'
import timeFormat from '../lib/timeFormat'

const MovieCard = ({ movie }) => {
  const navigate = useNavigate()

  const imageUrl = movie.poster_path?.startsWith('http')
    ? movie.poster_path
    : `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  const handleNavigate = () => {
    navigate(`/movies/${movie.id}`)
    window.scrollTo(0, 0)
  }

  return (
    <div
      className="flex flex-col justify-between p-4 bg-gray-800 rounded-2xl
                 hover:-translate-y-1 transition duration-300 w-64"
    >
      <img
        onClick={handleNavigate}
        src={imageUrl}
        alt={movie.title}
        className="rounded-xl h-72 w-full object-cover cursor-pointer"
      />

      <div className="mt-3">
        <p className="font-semibold truncate">
          {movie.title}
        </p>

        <p className="text-sm text-gray-400 mt-2">
          {new Date(movie.release_date).getFullYear()} •
          {movie.genres?.slice(0, 2).map(g => g.name).join(' | ')} •
          {timeFormat(movie.runtime)}
        </p>
      </div>

      <div className="flex items-center justify-between mt-4">
        <button
          onClick={handleNavigate}
          className="px-4 py-2 text-xs bg-primary hover:bg-primary-dull
                     transition rounded-full font-medium"
        >
          Buy Tickets
        </button>

        <div className="flex items-center gap-1 text-sm text-gray-400">
          <StarIcon className="w-4 h-4 text-primary fill-primary" />
          {movie.vote_average?.toFixed(1)}
        </div>
      </div>
    </div>
  )
}

export default MovieCard

