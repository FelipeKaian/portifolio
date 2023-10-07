import Fumes from './Fumes';
import Rocket from './Rocket';
import Stars from './Stars';
import Text from './Text';

function Launch({goToProjects,scroll}) {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
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
        <Stars quantity={200}></Stars>
        <Text text="Hi, i'm Felipe Kaian"></Text>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Rocket goToProjects={goToProjects} scroll={scroll}></Rocket>
          <Fumes></Fumes>
        </div>
        
      </div>
    </div>
  );
}
export default Launch;
