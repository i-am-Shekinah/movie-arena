import React, {
  useEffect,
  useState,
} from 'react';

import { PlayCircleIcon } from 'lucide-react';
import ReactPlayer from 'react-player';

import {
  dummyTrailers,
  type TrailerType,
} from '../../assets/assets';
import useInView from '../../hooks/useInView';
import BlurCircle from '../ui/BlurCircle';

const Trailers = () => {
  const [currentTrailer, setCurrentTrailer] = useState<TrailerType>(
    dummyTrailers[0]
  );
  const [playing, setPlaying] = useState<boolean>(true);
  const { ref, inView } = useInView<HTMLDivElement>(0.5);

  useEffect(() => {
    if (inView) setPlaying(true);
    else setPlaying(false);
  }, [inView]);

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden">
      <h2 className="text-gray-300 font-medium text-lg max-w-[960px] mx-auto">
        Trailers
      </h2>

      <div ref={ref} className="relative mt-6">
        <BlurCircle top="-100px" right="-100px" />
        <ReactPlayer
          data-aos="fade-up"
          url={currentTrailer.videoUrl}
          muted
          controls
          playing={playing}
          className="mx-auto max-w-full"
          width="960px"
          height="540px"
        />
      </div>

      <div className="group grid grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto">
        {dummyTrailers.map((trailer) => (
          <div
            key={trailer.image}
            onClick={() => {
              setCurrentTrailer(trailer);
              setPlaying(true);
            }}
            className="relative group-hover:not-hover:opacity-50 hover:-translate-y-1 duration-300 transition max-md:h-60 cursor-pointer"
          >
            <img
              data-aos="fade-up"
              data-aos-delay="150"
              src={trailer.image}
              alt="trailer"
              className="rounded-lg w-full h-full object-cover brightness-75"
            />
            <PlayCircleIcon
              strokeWidth={1.6}
              className="absolute top-1/2 left-1/2 size-5 md:size-8 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trailers;
