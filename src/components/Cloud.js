function Cloud ({scale,z,top,left}){
  return <>
  <style>
      {`@keyframes fade {
        0% {transform: translate3d(0px, 0px, 0) scale(1);}
        50% {transform: translate3d(0px, -4px, 0) scale(1);}
        100% {transform: translate3d(0px, 0px, 0) scale(1);}
        }`}
    </style>
  <div
  style={{
    animation: 'fade 2s infinite',
    position: 'absolute',
    left: left + '%',
    top: top+'%',
    zIndex: z,
    width: (scale*100)+'px',
    height: (scale*100)+'px',
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

export default Cloud;