import React, {
  useEffect,
  useState,
} from 'react';

import ReactPlayer from 'react-player';

import useInView from '../../hooks/useInView';

interface AutoPlayOnScrollProps {
  url: string;
  threshold?: number;
  [key: string]: any;
}

const AutoPlayOnScroll: React.FC<AutoPlayOnScrollProps> = ({
  url,
  threshold = 0.5,
  ...playerProps
}) => {
  const { ref, inView } = useInView<HTMLDivElement>(threshold);
  const [playing, setPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (inView) setPlaying(true);
    else setPlaying(false);
  }, [inView]);

  return (
    <div ref={ref}>
      <ReactPlayer
        data-aos="fade-up"
        url={url}
        muted
        controls
        playing={playing}
        className="mx-auto max-w-full"
        {...playerProps}
        width="960px"
        height="540px"
      />
    </div>
  );
};

export default AutoPlayOnScroll;
