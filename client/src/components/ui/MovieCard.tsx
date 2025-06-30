import React from 'react';

import { StarIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { type ShowType } from '../../assets/assets';
import timeFormat from '../../lib/timeFormat';

interface MovieCardProps {
  movie: ShowType;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="0"
      className="flex flex-col justify-between p-3 bg-gray-800 rounded-2xl hover:-translate-y-1 transition duration-300 w-full max-w-96"
    >
      {/* movie thumbnail */}
      <img
        data-aos="fade-up"
        data-aos-delay="150"
        onClick={() => {
          navigate(`/movies/${movie._id}`);
          scrollTo(0, 0);
        }}
        src={movie.backdropPath}
        className="rounded-lg h-52 w-full object-cover object-right-bottom cursor-pointer"
      />

      <p
        data-aos="fade-up"
        data-aos-delay="150"
        className="font-semibold mt-2 truncate"
      >
        {movie.title}
      </p>

      <p
        data-aos="fade-up"
        data-aos-delay="350"
        className="text-sm text-gray-400 mt-2"
      >
        {new Date(movie.releaseDate).getFullYear()} •{" "}
        {movie.genres
          .slice(0, 2)
          .map((genre) => genre.name)
          .join(" | ")}{" "}
        • {timeFormat(movie.runtime)}
      </p>

      {/* button + star ratings */}
      <div className="flex items-center justify-between mt-4 pb-3">
        <button
          data-aos="fade-right"
          data-aos-delay="350"
          onClick={() => {
            navigate(`/movies/${movie._id}`);
            scrollTo(0, 0);
          }}
          className="px-4 py-2 text-xs bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer"
        >
          Buy Tickets
        </button>

        <p
          data-aos="fade-left"
          data-aos-delay="350"
          className="flex items-center gap-1 text-sm text-gray-400 mt-1 pr-1"
        >
          <StarIcon className="size-4 text-primary fill-primary" />
          {movie.averageVote.toFixed(1)}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
