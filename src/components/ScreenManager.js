import { useEffect, useState } from 'react';
import ProjectsScreen from './ProjectsScreen';
import { screens } from '../Utils';
import LaunchScreen from './LaunchScreen';
import CometsScreen from './CometsScreen';

function ScreenManager() {
  const [maskOpacity, setMaskOpacity] = useState(0);
  const [hiddenMask, setHiddenMask] = useState(true);
  const [scroll, setScroll] = useState(0);
  const transitionDuration = 2000;
  const goToProjects = () => {
    setMaskOpacity(1);
    setHiddenMask(false);
    setTimeout(() => {
      setCurrentScreen(<ProjectsScreen></ProjectsScreen>);
      setMaskOpacity(0);
      setTimeout(() => {
        setHiddenMask(true);
      }, transitionDuration);
    }, transitionDuration);
  };

  const [currentScreen, setCurrentScreen] = useState(
    <LaunchScreen goToProjects={goToProjects} scroll={scroll}></LaunchScreen>
  );

  useEffect(() => {
    window.addEventListener('scroll', (event) => {
      console.log(window.scrollY);
      setScroll(window.scrollY);
    });
  }, []);

  return (
    <div>
      <div
        onClick={goToProjects}
        style={{
          transition: transitionDuration + 'ms opacity',
          backgroundColor: 'white',
          opacity: maskOpacity,
          zIndex: hiddenMask ? -999 : 999,
        }}
      ></div>
      {currentScreen}
    </div>
  );
}

export default ScreenManager;
