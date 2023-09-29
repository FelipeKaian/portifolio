// import Orbit from './components/Orbit';
// import clock from './assets/clock-planet.png';
import notify from './assets/notifylogo.png';
import neuralnetwork from './assets/neuralnetworklogo.png';
import clock from './assets/clocklogo.png';
import dino from './assets/dinologo.png';
import amazing from './assets/amazinglogo.png';

import Orbit from './components/Orbit';
import Meteor from './components/Meteor';
import Launch from './components/Launch';

function App() {
  return (
    <>
      <Launch></Launch>
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          overflow: 'hidden',
          scrollBehavior: 'unset',
        }}
      >
        <Orbit
          planets={[
            {
              color: 'rgb(55,137,235)',
              text: 'react pickers',
              img: clock,
              link: 'https://www.linkedin.com/posts/felipekaian_ap%C3%B3s-enfrentar-diversos-problemas-com-pickers-activity-7075496469033598976-ASjx?utm_source=share&utm_medium=member_desktop',
            },
            {
              color: 'white',
              text: 'Neural network',
              img: neuralnetwork,
              link: 'https://www.linkedin.com/posts/felipekaian_ol%C3%A1-galera-tudo-bem-hoje-apresento-para-activity-7071836248125976576-Ge6G?utm_source=share&utm_medium=member_desktop',
            },
            // {
            //   color: 'white',
            //   text: 'fluid tail',
            // },
            {
              color: 'black',
              text: 'Amazing game',
              img: amazing,
              link: 'https://www.linkedin.com/posts/felipekaian_eae-galera-tudo-bem-com-voc%C3%AAs-hoje-venho-activity-7093546186497826816-e75D?utm_source=share&utm_medium=member_desktop',
            },
            {
              color: 'rgb(43,128,255)',
              text: 'Notify',
              img: notify,
              link: 'https://play.google.com/store/apps/details?id=com.notify.client.app',
            },
            {
              color: 'rgb(115,174,72)',
              text: 'Dino smash',
              img: dino,
              link: 'https://play.google.com/store/apps/details?id=com.mantarabox.dinosmashgame&hl=pt_BR&gl=US&pli=1',
            },
            // {
            //   color: '#333333',
            //   text: 'Motor 2.5D',
            // },
          ]}
        />
      </div>
    </>
  );
}

export default App;
