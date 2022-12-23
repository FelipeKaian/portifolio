import { useEffect, useRef, useState } from 'react';
import Orbit from './components/Orbit';
import Planet from './components/Planet';
import Sun from './components/Sun';

function App() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Orbit
        planets={[
          {
            color: "red",
            text: 'Projeto',
          },{
            color: "green",
            text: 'Projeto',
          },{
            color: "blue",
            text: 'Projeto',
          },{
            color: "purple",
            text: 'Projeto',
          },{
            color: "pink",
            text: 'Projeto',
          },
          
        ]}
      />
    </div>
  );
}

export default App;
