import { useEffect, useState } from 'react';

function Star({ top, left, delay }) {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setTimeout(() => setAnimate(true), delay * 1000);
  }, []);

  return (
    <>
      <style>
        {`@keyframes tinkle {
          0% {transform: scale(0);}
          10% {transform: scale(1.5);}
          50% {transform: scale(0);}
          100% {transform: scale(0);}
        }`}
      </style>
      <div
        style={{
          animation: animate ? 'tinkle ' + 5 + 's infinite' : '',
          display: animate ? 'block' : 'none',
          position: 'absolute',
          top: top + 'px',
          left: left + 'px',
          zIndex: -999,
        }}
      >
        <div
          style={{
            width: 8,
            height: 2,
            position: 'relative',
            backgroundColor: 'white',
            borderRadius: '15px',
            boxShadow: 'rgba(255, 255, 255, 1) 0px 0px 5px 0px',
          }}
        ></div>
        <div
          style={{
            width: 2,
            height: 8,
            backgroundColor: 'white',
            position: 'relative',
            left: 3,
            bottom: 5,
            borderRadius: '15px',
            boxShadow: 'rgba(255, 255, 255, 1) 0px 0px 5px 0px',
          }}
        ></div>
      </div>
    </>
  );
}

export default Star;
