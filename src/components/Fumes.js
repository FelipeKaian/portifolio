import Cloud from './Cloud';
import FadeCloud from './FadeCloud';

function Fumes() {
  return (
    <div>
      <div
        style={{
          position: 'relative',
          top: '-20px',
          width: '28px',
          background: 'linear-gradient(to bottom, transparent 10%, white 100%)',
          height: '200px',
        }}
      ></div>
      <Cloud
        top={85}
        scale={3}
        left={48}
        z={1}
      ></Cloud>
      <Cloud
        top={95}
        scale={3}
        left={31}
        z={1}
      ></Cloud>
      <Cloud
        top={95}
        scale={4}
        left={15}
        z={1}
      ></Cloud>
      <Cloud
        top={95}
        scale={8}
        left={-10}
        z={1}
      ></Cloud>
      <Cloud
        top={88}
        scale={4}
        left={5}
        z={1}
      ></Cloud>
      <Cloud
        top={100}
        scale={4}
        left={25}
        z={1}
      ></Cloud>
      <Cloud
        top={110}
        scale={6}
        left={40}
        z={1}
      ></Cloud>
      <Cloud
        top={115}
        scale={6}
        left={20}
        z={1}
      ></Cloud>
      <Cloud
        top={115}
        scale={7}
        left={-5}
        z={1}
      ></Cloud>
      <Cloud
        top={115}
        scale={7}
        left={55}
        z={1}
      ></Cloud>
      <Cloud
        top={90}
        scale={5}
        left={90}
        z={1}
      ></Cloud>
      <Cloud
        top={110}
        scale={6}
        left={65}
        z={1}
      ></Cloud>
      <Cloud
        top={115}
        scale={8}
        left={80}
        z={1}
      ></Cloud>
      <Cloud
        top={100}
        scale={10}
        left={110}
        z={1}
      ></Cloud>
    </div>
  );
}

export default Fumes;
