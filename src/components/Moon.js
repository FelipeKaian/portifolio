import Flag from './Flag';
import moon from '../assets/moon.svg';

function Moon({ scroll,toggleLang }) {
  return (
    <>
      <img
        src={moon}
        style={{
          transform: 'scaleX(5) scaleY(5)',
          position: 'relative',
          left: '-100px',
          top: -200 + scroll * 2 + 'px',
        }}
      ></img>
      <Flag scroll={scroll} toggleLang={toggleLang}></Flag>
    </>
  );
}

export default Moon;
