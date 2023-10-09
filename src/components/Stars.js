import { useEffect } from 'react';
import Star from './Star';
import { useState } from 'react';

function Stars({ quantity, scroll }) {
  const [starsCoords, setStarsCoords] = useState([]);

  useEffect(() => {
    let starGenerator = setInterval(() => {
      setStarsCoords((s) => {
        if (s.length >= quantity) {
          clearInterval(starGenerator);
          return s;
        }
        console.log(s)
        return [
          ...s,
          {
            y: Math.random() * 1000,
            x: Math.random() * 2000,
            d: 2000+(Math.random()*3000)
          },
        ];
      });
    }, 25);
  }, []);

  return starsCoords.map((coords) => <Star top={coords.y} left={coords.x} delay={coords.d} scroll={scroll}></Star>);
}

export default Stars;
