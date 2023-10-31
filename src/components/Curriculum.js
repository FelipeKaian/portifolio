import cvPDF from '../assets/cv.pdf';
import cv from '../assets/cv.png';
import Flag from './Flag';
import moon from '../assets/moon.svg';
import Text from './Text';
import { useContext } from 'react';
import { langContext } from './ScreenManager';

function Curriculum({ scroll }) {
  const isBR = useContext(langContext);

  const downloadPDF = () => {
    window.open(
      'https://drive.google.com/file/d/1oTnkxDhQfJCpHAazYkZTKZHRNuyqLzE5/view?usp=sharing'
    );
  };

  return (
    <div
      onClick={downloadPDF}
      style={{
        animation: 'float 5s infinite',
        width: '145px',
        height: '200px',
        position: 'absolute',
        right: '300px',
        top: -200 + scroll * 2 + 'px',
        cursor: 'pointer',
        zIndex: 999,
      }}
    >
      <style>
        {`@keyframes float {
          0% {transform: translate3d(0px, 0px, 0) rotateZ(-30deg);}
          50% {transform: translate3d(0px, 20px, 0) rotateZ(-30deg);}
          100% {transform: translate3d(0px, 0px, 0) rotateZ(-30deg);}
          }`}
      </style>
      <Text
        text={isBR ? 'Currículo' : 'Resume'}
        style={{ fontSize: '20px' }}
      ></Text>
      <img
        src={cv}
        style={{ width: '100%', height: '100%', border: 'solid 2px white' }}
      ></img>
    </div>
  );
}

export default Curriculum;
