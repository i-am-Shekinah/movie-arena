import React, {
  useEffect,
  useState,
} from 'react';

import ReactPlayer from 'react-player';

import useInView from '../../hooks/useInView';

interface AutoPlayOnScrollProps {
  url: string;
  threshold?: number;
  className?: string;
  playerProps: React.ComponentProps<typeof ReactPlayer>;
}

const AutoPlayOnScroll: React.FC<AutoPlayOnScrollProps> = ({
  url,
  threshold = 0.5,
  className,
  playerProps = {},
}) => {
  const { ref, inView } = useInView<HTMLDivElement>(threshold);
  const [playing, setPlaying] = useState<boolean>(false);

  useEffect(() => setPlaying(inView), [inView]);

  return (
    <div ref={ref} className={className}>
      <ReactPlayer
        url={url}
        muted
        controls
        playing={playing}
        {...playerProps}
      />
    </div>
  );
};

export default AutoPlayOnScroll;
