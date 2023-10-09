import { useEffect, useState } from 'react';
import ProjectsScreen from './ProjectsScreen';
import { screens } from '../Utils';
import LaunchScreen from './LaunchScreen';
import CometsScreen from './CometsScreen';
import Stars from './Stars';

function ScreenManager() {
  const [scroll, setScroll] = useState(0);
  const maxScroll = 1500;

  useEffect(() => {
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
      <Stars quantity={200} scroll={scroll}></Stars>
      <LaunchScreen scroll={scroll} maxScroll={maxScroll}></LaunchScreen>
      <ProjectsScreen scroll={scroll} maxScroll={maxScroll}></ProjectsScreen>
    </div>
  );
}

export default ScreenManager;
