import Fumes from './Fumes';
import Rocket from './Rocket';
import Stars from './Stars';
import Text from './Text';

function Launch({ goToProjects, scroll,maxScroll }) {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <Rocket goToProjects={goToProjects} scroll={scroll} maxScroll={maxScroll}></Rocket>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          position: 'absolute',
          top: scroll * 2 + 'px',
        }}
      >
        <Text text="Hi, i'm Felipe Kaian"></Text>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Fumes></Fumes>
        </div>
      </div>
    </div>
  );
}
export default Launch;
