import { useEffect, useRef, useState } from 'react';
import Orbit from './components/Orbit';
import Panel from './components/Panel';
// import svgFile from './assets/spaceship-window.svg';
// import { ReactSVG } from 'react-svg';


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
      {/* <ReactSVG src={svgFile} /> */}
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
