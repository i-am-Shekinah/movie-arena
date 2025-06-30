import React from 'react';

import { ArrowRightIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { dummyShowsData } from '../../assets/assets';
import BlurCircle from '../ui/BlurCircle';
import MovieCard from '../ui/MovieCard';

const FeaturedMoviesSection = () => {
  const navigate = useNavigate();
  return (
    <section className="mt-24 px-6 md:px-16 lg:px-36 overflow-x-hidden">
      {/* header of the section */}
      <div className="relative flex items-center justify-between">
        <BlurCircle top="-80px" right="-100px" />
        <h2
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-white font-semibold"
        >
          Now Showing{" "}
        </h2>
        <button
          data-aos="fade-up"
          data-aos-delay="150"
          onClick={() => navigate("/movies")}
          className="flex group items-center gap-1 text-gray-300 text-sm cursor-pointer"
        >
          View All{" "}
          <ArrowRightIcon className="size-4 group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
        </button>
      </div>

      {/* featured movies card section */}
      {/* <div className="flex flex-wrap max-sm:justify-center gap-8 mt-8"> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 w-fit mx-auto">
        {dummyShowsData.slice(0, 6).map((show) => (
          <MovieCard key={show._id} movie={show} />
        ))}
      </div>

      {/* show more btn */}
      <div
        data-aos="fade-up"
        data-aos-delay="350"
        className="flex justify-center mt-20"
      >
        <button
          onClick={() => {
            navigate("/movies");
            scrollTo(0, 0);
          }}
          className="btn-flat"
        >
          Show more
        </button>
      </div>
    </section>
  );
};

export default FeaturedMoviesSection;
