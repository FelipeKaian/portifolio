import Fumes from './Fumes';
import Rocket from './Rocket';
import Stars from './Stars';
import Text from './Text';

function Launch() {
  return (
    <div
      style={{
        width: '100vw',
        height: '150vh',
      }}
    >
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <Stars></Stars>
        <Text text="Hi, i'm Felipe Kaian"></Text>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Rocket></Rocket>
          <Fumes></Fumes>
        </div>
        
      </div>
    </div>
  );
}
export default Launch;
