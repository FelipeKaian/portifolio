import { useState } from 'react';

function Sun() {
  return (
    <div
      style={{
        // backgroundImage:
        //   'url(https://s3.amazonaws.com/gameartpartnersimagehost/wp-content/uploads/2019/10/T-03.gif)',
        //   backgroundSize:"30vw",
        zIndex: 0,
        position: 'absolute',
        marginTop: '20vh',
        width: '30vw',
        height: '30vw',
        backgroundColor: '#ffa716',
        boxShadow:
          'rgba(255,255,255, 0.2) 0px 23px 25px 0px inset, rgba(255,255,255, 0.1) 0px 79px 40px 0px inset, rgba(255,255,255, 0.1) 0px -2px 1px, rgba(255,255,255, 0.1) 0px -4px 2px, rgba(255,255,255, 0.1) 0px -8px 4px, rgba(255,255,255, 0.1) 0px -16px 8px, rgba(255,255,255, 0.1) 0px -32px 16px, rgba(0, 0, 0, 0.2) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.2) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.1) 0px 2px 1px, rgba(0, 0, 0, 0.1) 0px 4px 2px, rgba(0, 0, 0, 0.1) 0px 8px 4px, rgba(0, 0, 0, 0.1) 0px 16px 8px, rgba(0, 0, 0, 0.1) 0px 32px 16px, rgba(255, 255, 0, 0.5) 0px 0px 100px 10px, rgba(255, 100, 0, 1) 0px 0px 500px 10px',
        borderRadius: '100%',
      }}
    ></div>
  );
}

export default Sun;
