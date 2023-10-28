import { useEffect } from 'react';
import Text from './Text';
import { useState } from 'react';

function TypeWriter({ isBR }) {
  const [text, setText] = useState('');
  const intro = isBR ? 'Olá, eu sou' : "Hi, i'm";
  const texts = [
    'Felipe Kaian',
    isBR ? 'engenheiro de software' : 'Software Engenier',
    isBR ? 'desenvolvedor React.js' : 'React.js Developer',
    isBR ? 'super criativo' : 'super creative',
    isBR ? 'desenvolvedor Flutter' : 'Flutter Developer',
    isBR ? 'desenvolvedor Node.js' : 'Node.js Developer',
    isBR ? 'desenvolvedor Java' : 'Java Developer',
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [erasing, setErasing] = useState(false);
  const type = () => {
    if (erasing) {
      if (text.length == 0) {
        requestAnimationFrame(() => {
          setTimeout(() => {
            setErasing(false);
            setCurrentTextIndex((i) => (i + 1) % texts.length);
          }, 500);
        });
      } else {
        requestAnimationFrame(() => {
          setTimeout(() => {
            setText((t) => t.substring(0, t.length - 1));
          }, 50);
        });
      }
    } else {
      if (text.length == texts[currentTextIndex].length) {
        requestAnimationFrame(() => {
          setTimeout(() => {
            setErasing(true);
          }, 3000);
        });
      } else {
        requestAnimationFrame(() => {
          setTimeout(() => {
            setText((t) => t + texts[currentTextIndex].charAt(t.length));
          }, 100);
        });
      }
    }
  };

  useEffect(() => {
    type();
  }, [text, erasing]);

  return (
    <div style={{ display: 'flex', marginTop: '250px', alignItems: 'center' }}>
      <style>
        {`@keyframes blink{
                0%{background-color:transparent;}
                100%{background-color:white;}
            }`}
      </style>
      <h1
        style={{
          textAlign: 'center',
          textTransform: 'uppercase',
          fontFamily: 'verdana',
          fontSize: '4vw',
          fontWeight: '700',
          color: '#f5f5f5',
          textShadow: `1px 1px 1px #919191,
             1px 2px 1px #919191,
             1px 3px 1px #919191,
             1px 4px 1px #919191,
             1px 5px 1px #919191,
             1px 6px 1px #919191,
             1px 7px 1px #919191,
             1px 8px 1px #919191`,
        }}
      >
        {intro + ' ' + text}
      </h1>

      <div
        style={{
          animation: 'blink 1s steps(2) infinite',
          width: '5px',
          height: '100px',
          backgroundColor: 'white',
          marginTop: '15px',
        }}
      ></div>
    </div>
  );
}

export default TypeWriter;
