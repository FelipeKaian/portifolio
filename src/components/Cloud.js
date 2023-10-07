function Cloud({ scale, z, top, left }) {
  return (
    <>
      {/* <style>
        {`@keyframes fade {
          0% {width: 100px; height: 100px;}
          50% { width: 105px; height: 105px;}
          100% {width: 100px; height: 100px;}
          }`}
      </style> */}
      <div
        style={{
          width: '100px',
          height: '100px',
          animation: 'fade 3s infinite',
          transform: 'scale(' + scale + ')',
          position: 'absolute',
          left: left + '%',
          top: top + '%',
          zIndex: z,
          backgroundColor: 'white',
          boxShadow:
            'rgba(255,255,255, 0.2) 0px 23px 25px 0px inset, rgba(255,255,255, 0.1) 0px 79px 40px 0px inset, rgba(0, 0, 0, 0.2) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.2) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset',
          borderRadius: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      ></div>
    </>
  );
}

export default Cloud;
