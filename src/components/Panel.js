import { useEffect, useState } from 'react';
import { OrbitationTypes } from '../Utils';
import Planet from './Planet';
import Sun from './Sun';

function Panel() {

  return (
    <div style={{position:"fixed",width:"100%",height:"100%",zIndex: 999}}>
      <div style={{backgroundColor:"#333",width:"100%",height:"10%"}}></div>
    </div>
  );
}

export default Panel;
