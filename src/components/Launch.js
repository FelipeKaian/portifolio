import Fumes from './Fumes';
import Rocket from './Rocket';
import Text from './Text';
import earth from '../assets/earth.svg';
import Moon from './Moon';
import { langContext } from './ScreenManager';
import { useContext } from 'react';
import Curriculum from './Curriculum';
import TypeWriter from './TypeWriter';

function Launch({ goToProjects, scroll, maxScroll, toggleLang }) {
  const isBR = useContext(langContext);
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <Moon scroll={scroll} toggleLang={toggleLang}></Moon>
      <Curriculum scroll={scroll}></Curriculum>
      <Rocket
        goToProjects={goToProjects}
        scroll={scroll}
        maxScroll={maxScroll}
      ></Rocket>
      <div
        style={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: scroll * 2 + 'px',
        }}
      >
        <div>
          
        </div>
        <TypeWriter isBR={isBR}></TypeWriter>
        <h1
          style={{
            marginTop:'-50px',
            fontSize: '26px',
            textAlign: 'justify',
            fontFamily: 'Quicksand , sans-serif',
            color: 'white',
            fontWeight: 'lighter',
  
          }}
        >
          {isBR?'Deslize para baixo':'Scroll down to travel'}
        </h1>
        <Fumes></Fumes>
        <img
          src={earth}
          style={{ transform: 'scale(10)', position: 'relative', top: '155vh' }}
        ></img>
      </div>
    </div>
  );
}
export default Launch;
