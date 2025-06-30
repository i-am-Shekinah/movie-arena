import {
  useEffect,
  useRef,
  useState,
} from 'react';

const useInView = <T extends HTMLElement>(threshold = 0.5) => {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState<boolean>(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting), { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}

export default useInView