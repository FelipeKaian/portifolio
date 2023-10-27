import { useContext } from 'react';
import brazil from '../assets/brazil.svg';
import unitedstates from '../assets/unitedstates.svg';
import { langContext } from './ScreenManager';

function Flag({ scroll, toggleLang }) {
  const isBR = useContext(langContext);

  return (
    <>
      <div
        onClick={() => {
          toggleLang();
        }}
        style={{
          width:'85px',
          height: '130px',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'start',
          transform: 'translateX(300px) rotateZ(180deg)',
          cursor: 'pointer',
          zIndex: 9999,
        }}
      >
        <div
          style={{
            height: '140px',
            width: '5px',
            backgroundColor: '#333333',
            borderRadius: '30px',
          }}
        ></div>
        <div style={{ width: '80px', height: '50px' }}>
          <img
            src={isBR ? brazil : unitedstates}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </>
  );
}

export default Flag;
