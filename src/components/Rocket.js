import { useEffect, useState } from "react";

function Rocket({goToProjects,scroll}) {

  const [rocketY,setRocketY] = useState(200)

  useEffect(()=>{
    alert(scroll)
  },[scroll])

  return (
    <>
      <style>
        {`@keyframes bounce {
          0% {transform: translate3d(0px, 2px, 0);}
          50% {transform: translate3d(0px, 6px, 0);}
          100% {transform: translate3d(0px, 2px, 0);}
          }`}
      </style>
      <div
        onClick={()=>{
          setRocketY(2000);
          goToProjects();
        }}
        style={{
          zIndex: 1,
          width: '180px',
          animation: 'bounce 0.5s infinite',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          cursor:'pointer',
          position: 'absolute',
          top: scroll+'px'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'end',
            height: '50px',
          }}
        >
          <div
            style={{
              position: 'relative',
              zIndex: '-100',
              height: '55px',
              width: '50px',
              backgroundColor: 'red',
              left: '20px',
              top: 'calc(100% - 55px)',
              borderTopLeftRadius: '80%',
              borderBottomLeftRadius: '20%',
              boxShadow:
        'rgba(255,255,255, 0.2) 0px 23px 25px 0px inset, rgba(255,255,255, 0.1) 0px 79px 40px 0px inset, rgba(0, 0, 0, 0.2) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.2) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset',
            }}
          ></div>
          <div
            style={{
              backgroundColor: '#eeeeee',
              height: '180px',
              width: '80px',
              left: 'calc(50% - 50px)',
              borderTopRightRadius: '100%',
              borderTopLeftRadius: '100%',
              borderBottomLeftRadius: '50%',
              borderBottomRightRadius: '50%',
              borderTop: '5px solid white',
              boxShadow:
        'rgba(255,255,255, 0.2) 0px 23px 25px 0px inset, rgba(255,255,255, 0.1) 0px 79px 40px 0px inset, rgba(0, 0, 0, 0.2) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.2) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '40px',
                height: '40px',
                borderRadius: '100%',
                backgroundColor: 'lightblue',
                left: 'calc(50% - 25px)',
                top: '40px',
                border: '5px solid grey',
                boxShadow:
        'rgba(255,255,255, 0.2) 0px 23px 25px 0px inset, rgba(255,255,255, 0.1) 0px 79px 40px 0px inset, rgba(0, 0, 0, 0.2) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.2) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset',
              }}
            ></div>
          </div>
          <div
            style={{
              position: 'relative',
              zIndex: '-100',
              height: '55px',
              width: '50px',
              backgroundColor: 'red',
              right: '20px',
              top: 'calc(100% - 55px)',
              borderTopRightRadius: '80%',
              borderBottomRightRadius: '20%',
              boxShadow:
        'rgba(255,255,255, 0.2) 0px 23px 25px 0px inset, rgba(255,255,255, 0.1) 0px 79px 40px 0px inset, rgba(0, 0, 0, 0.2) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.2) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset',
            }}
          ></div>
        </div>
        <div
          style={{
            alignSelf: 'center',
            width: '48px',
            height: '13px',
            backgroundColor: '#333333',
            bottom: '-13px',
            borderBottomRightRadius: '60%',
            borderBottomLeftRadius: '60%',
            boxShadow:
        'rgba(255,255,255, 0.2) 0px 23px 25px 0px inset, rgba(255,255,255, 0.1) 0px 79px 40px 0px inset, rgba(0, 0, 0, 0.2) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.2) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset',
          }}
        ></div>
        <div
        style={{
          alignSelf:'center',
          position: 'relative',
          top: '-20px',
          width: '28px',
          background: 'linear-gradient(to bottom, transparent 10%, white 100%)',
          height: scroll+'px',
          transition: '2s',
        }}
      ></div>
      </div>
    </>
  );
}

export default Rocket;
