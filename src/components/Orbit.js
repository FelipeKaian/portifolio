import { useEffect, useState } from 'react';
import { OrbitationTypes } from '../Utils';
import Planet from './Planet';
import Sun from './Sun';
import Stars from './Stars';

function Orbit({ planets,scroll,maxScroll }) {
  const [rotation, setRotation] = useState(0);
  const [rotationSpeed, setRotationSpeed] = useState(OrbitationTypes.normal);
  const [selectedPlanetIndex, setSelectedPlanetIndex] = useState(null);
  const [projectHovered, setProjectHovered] = useState(false);
  const [mouse, setMouse] = useState(null);

  const selectPlanet = (i) => {
    if (selectedPlanetIndex === null) {
      setSelectedPlanetIndex(i);
    } else {
      setSelectedPlanetIndex(null);
      setRotation(rotation + rotationSpeed);
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      setMouse(e);
    });
  }, []);

  useEffect(() => {
    if (selectedPlanetIndex === null) {
      setRotation((prevRotation) => prevRotation + rotationSpeed);
    }
  }, [rotation, rotationSpeed, selectedPlanetIndex]);

  return (
    <div onClick={() => {}}>
      {/* <Stars quantity={100}></Stars> */}
      <div
        style={{
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <Sun
        scroll={scroll}
        maxScroll={maxScroll}
          mouse={mouse}
          rotationSpeed={rotationSpeed}
          setRotationSpeed={setRotationSpeed}
          projectHovered={projectHovered}
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100vw',
          overflow: 'hidden',
        }}
      >
        {planets.map((p, i) => {
          let l = planets.length;
          let a = ((rotation + (360 / l) * i) * Math.PI) / 180;
          return (
            <Planet
              text={p.text}
              key={i}
              rotationSpeed={rotationSpeed}
              setRotationSpeed={setRotationSpeed}
              selectPlanet={selectPlanet}
              index={i}
              color={p.color}
              img={p.img}
              width={7 + Math.cos(a - 90) * 4}
              height={7 + Math.cos(a - 90) * 4}
              top={scroll-maxScroll+270+'px'}
              z={Math.floor(Math.sin(a) * 10)}
              left={45 + Math.cos(a) * 25}
              mouse={mouse}
              link={p.link}
              setProjectHovered={setProjectHovered}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Orbit;
