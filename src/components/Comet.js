function Comet({ top, left }) {
  return (
    <>
      <style>
        {`@keyframes fall {
          0% {transform: scale(1);}
          50% {transform: scale(1.5);}
          100% {transform: scale(1);}
        }`}
      </style>
      <div
        style={{
          animation: 'fall 1s infinite',
          position: 'absolute',
          top: top + 'vh',
          left: left + 'vw',
        }}
      >
        <div
          style={{
            width: 80,
            height: 20,
            backgroundColor: 'white',
            borderRadius: '15px',
            boxShadow: 'rgba(255, 255, 255, 1) 0px 0px 5px 0px',
          }}
        ></div>
      </div>
    </>
  );
}

export default Comet;
