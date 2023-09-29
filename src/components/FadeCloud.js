function FadeCloud ({scale,z,top,left}){
    return <>
    {/* <style>
        {`@keyframes fade {
          0% {transform: translate3d(0px, 0px, 0); width: 0px; height: 0px;}
          25% {transform: translate3d(0, 50px, 0); width: 50px; height: 50px;}
          50% {transform: translate3d(-200px, 100px, 0)}
          }`}
      </style> */}
    <div
    style={{
      transform: 'scale('+scale+')',
      animation: 'fade 5s infinite',
      position: 'absolute',
      left: left + '%',
      top: +top+'%',
      zIndex: z,
      width: '100px',
      height: '100px',
      backgroundColor: 'white',
      boxShadow:
        'rgba(255,255,255, 0.2) 0px 23px 25px 0px inset, rgba(255,255,255, 0.1) 0px 79px 40px 0px inset, rgba(0, 0, 0, 0.2) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.2) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset',
      borderRadius: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
  </div>
    </>
}

export default FadeCloud;