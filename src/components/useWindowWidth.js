import { useEffect, useState } from 'react'

export default function useWindowWidth(initialWindowWidth) {
  const [width, setWidth] = useState(initialWindowWidth);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  
  return width;
}