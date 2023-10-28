import { createContext, useEffect, useState } from 'react';
import ProjectsScreen from './ProjectsScreen';
import LaunchScreen from './LaunchScreen';
import Stars from './Stars';

import TimeLineScreen from './TimeLineScreen';

export const langContext = createContext();

function ScreenManager() {
  const [scroll, setScroll] = useState(0);
  const maxScroll = 5500;
  const queryParams = new URLSearchParams(window.location.search);
  const [isBR, setIsBR] = useState(queryParams.get('ptBR'));

  function toggleLang() {
    setIsBR(!isBR);
  }

  useEffect(() => {
    if (window.innerWidth < window.innerHeight) {
      window.location =
        'https://drive.google.com/file/d/1oTnkxDhQfJCpHAazYkZTKZHRNuyqLzE5/view?usp=sharing';
    }
    window.addEventListener('wheel', (event) => {
      setScroll((s) => {
        let newScroll = s + event.deltaY * 0.1;
        return newScroll >= 0
          ? newScroll < maxScroll
            ? newScroll
            : maxScroll
          : 0;
      });
    });
  }, []);

  return (
    <div
      style={{
        height: '10000px',
        overflowY: 'hidden',
        overflowX: 'hidden',
        scrollbarWidth: '0px',
        scrollbarColor: 'transparent',
        scrollbarBaseColor: 'transparent',
        scrollbarFaceColor: 'transparent',
      }}
    >
      {window.innerWidth > window.innerHeight && (
        <langContext.Provider value={isBR}>
          <Stars quantity={200} scroll={scroll}></Stars>
          <LaunchScreen
            scroll={scroll}
            maxScroll={maxScroll}
            toggleLang={toggleLang}
          ></LaunchScreen>
          <TimeLineScreen
            scroll={scroll}
            maxScroll={maxScroll}
          ></TimeLineScreen>
          <ProjectsScreen
            scroll={scroll}
            maxScroll={maxScroll}
          ></ProjectsScreen>
        </langContext.Provider>
      )}
    </div>
  );
}

export default ScreenManager;
