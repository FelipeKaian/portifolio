import { useEffect } from 'react';
import Star from './Star';
import { useState } from 'react';

function Stars({ quantity }) {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    let starGenerator = setInterval(() => {
      setStars((s) => {
        if (s.length >= quantity) {
          clearInterval(starGenerator);
          return s;
        }
        return [
          ...s,
          <Star
            top={Math.random() * 1000}
            left={Math.random() * 2000}
            delay={Math.random() * 5}
          ></Star>,
        ];
      });
    }, 25);
  }, []);

  return stars.map((star) => star);
}

export default Stars;
