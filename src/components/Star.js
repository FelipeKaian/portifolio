import { useEffect, useState } from 'react';

function Star({ top, left, delay, scroll }) {

  return (
    <>
      <style>
        {`@keyframes tinkle {
          0% {transform: scale(0.2);}
          10% {transform: scale(1);}
          100% {transform: scale(0.2);}
        }`}
      </style>
      <div
        style={{
          animation:  'tinkle '+delay+'ms infinite' ,
          position: 'absolute',
          top: ((scroll + top) % 1000) + 'px',
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
