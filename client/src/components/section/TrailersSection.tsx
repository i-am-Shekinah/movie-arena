import React, { useState } from 'react';

import { PlayCircleIcon } from 'lucide-react';

import {
  dummyTrailers,
  type TrailerType,
} from '../../assets/assets';
import AutoPlayOnScroll from '../shared/AutoPlayOnScroll';
import BlurCircle from '../ui/BlurCircle';

const Trailers = () => {
  const [currentTrailer, setCurrentTrailer] = useState<TrailerType>(
    dummyTrailers[0]
  );

  return (
    <section className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-x-hidden">
      <h2 className="text-gray-300 font-medium text-lg max-w-[960px] mx-auto">
        Trailers
      </h2>

      <div data-aos="fade-up" data-aos-delay="150" className="relative">
        <BlurCircle top="-100px" right="-100px" />
        <AutoPlayOnScroll
          url={currentTrailer.videoUrl}
          className="mx-auto max-w-full"
          playerProps={{
            width: "100%",
            height: "540px",
          }}
        />
      </div>

      <div className="group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto">
        {dummyTrailers.map((trailer) => (
          <div
            key={trailer.image}
            onClick={() => {
              setCurrentTrailer(trailer);
            }}
            className="relative group-hover:not-hover:opacity-50 hover:-translate-y-1 duration-300 transition max-md:h-60 cursor-pointer"
          >
            <img
              data-aos="fade-up"
              data-aos-delay="150"
              src={trailer.image}
              alt="trailer"
              className="rounded-lg w-full max-w-96 mx-auto h-full object-cover brightness-75"
            />
            <PlayCircleIcon
              strokeWidth={1.6}
              className="absolute top-1/2 left-1/2 size-5 md:size-8 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trailers;
