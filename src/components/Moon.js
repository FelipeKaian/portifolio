import Flag from './Flag';
import moon from '../assets/moon.svg';

function Moon({ scroll, toggleLang }) {
  return (
    <div
      style={{
        width: '40vw',
        height: '40vw',
        transform: 'rotateZ(' + (scroll > 0 ? -45 - scroll / 6 : -45) + 'deg)',
        transformOrigin: 'center',
        top: -500 + scroll * 2 + 'px',
        position: 'absolute',
        left: '-500px',
        zIndex: 999,
      }}
    >
      <img
        onClick={toggleLang}
        src={moon}
        style={{
          width: '40vw',
          height: '40vw',
          cursor: 'pointer',
        }}
      ></img>
      <Flag scroll={scroll} toggleLang={toggleLang}></Flag>
    </div>
  );
}

export default Moon;
