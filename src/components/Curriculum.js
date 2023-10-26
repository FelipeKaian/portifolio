import cvPDF from '../assets/cv.pdf';
import cv from '../assets/cv.png';
import Flag from './Flag';
import moon from '../assets/moon.svg';
import Text from './Text';

function Curriculum({ scroll, toggleLang }) {
  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = cvPDF;
    link.download = 'Currículo-Felipe-Kaian.pdf';
    link.click();
  };

  return (
    <div
      onClick={downloadPDF}
      style={{
        animation: 'float 2s infinite',
        width: '145px',
        height: '200px',
        position: 'absolute',
        right: '400px',
        top: -300 + scroll * 2 + 'px',
        cursor: 'pointer',
        zIndex: 999,
      }}
    >
      <style>
        {`@keyframes float {
          0% {transform: translate3d(0px, 2px, 0) rotateZ(-30deg);}
          50% {transform: translate3d(0px, 6px, 0) rotateZ(-30deg);}
          100% {transform: translate3d(0px, 2px, 0) rotateZ(-30deg);}
          }`}
      </style>
      <Text text={'Baixar currículo'} style={{fontSize:'12px'}}></Text>
      <img src={cv} style={{width:'100%',height:'100%',border: 'solid 2px white',}}></img>
    </div>
  );
}

export default Curriculum;
