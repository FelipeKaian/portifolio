import tentacle from '../assets/tentacle.svg';
import satelite from '../assets/satelite.svg';
import ufo from '../assets/ufo.svg';
import meteor from '../assets/meteor.svg';
import TimeLine from './TimeLine';
import { langContext } from './ScreenManager';
import { useContext } from 'react';

function TimeLineScreen({ maxScroll, scroll }) {
  const isBR = useContext(langContext);
  return (
    <div>
      <img
        src={tentacle}
        style={{
          top: scroll - maxScroll + 1500 + 'px',
          left: '-200px',
          width: '55vw',
          position: 'absolute',
          transformOrigin: 'left center',
          transform:
            'rotateZ(' +
            (scroll > 3000 ? 150 - ((scroll - 3000) / 1000) * 150 : 150) +
            'deg)',
        }}
        alt=''
      ></img>
      <img
        src={ufo}
        style={{
          top: scroll - maxScroll + 2550 + 'px',
          right: '0px',
          width: '40vw',
          position: 'absolute',
          transformOrigin: 'right center',
          transform:
            'scale(' +
            (scroll > 2500 ? ( (scroll - 2500) / 600) : 0) +
            ') translateY('+(scroll > 3200 ? (scroll - 3200) : 0)+'px)',
        }}
        alt=''
      ></img>
      <img
        src={meteor}
        style={{
          top: scroll - maxScroll + 3500 + 'px',
          left: scroll > 1200 ? scroll - 1200 - 1500 + 'px' : '-1500px',
          width: '80vw',
          position: 'absolute',
          transition: 'transform 1s',
          transformOrigin: 'right center',
        }}
        alt=''
      ></img>
      <img
        src={satelite}
        style={{
          top: scroll - maxScroll + 4600 + 'px',
          right: scroll > 200 ? scroll - 200 - 1000 + 'px' : '-1500px',
          width: '40vw',
          position: 'absolute',
          transition: 'transform 1s',
          transformOrigin: 'right center',
          transform: scroll > 1200 ? '' : '',
        }}
        alt=''
      ></img>
      <TimeLine
        maxScroll={maxScroll}
        scroll={scroll}
        items={[
          {
            title: 'Flutter | Node.js',
            text: isBR
              ? 'Atuo como desenvolvedor de aplicativos híbridos com Flutter, onde crio widgets personalizados, publico pacotes que apoiam a comunidade, lido com a persistência de dados e gerenciadores de estado. Já percorri todo o processo de criação de um aplicativo do zero, incluindo a integração com o Firebase, a implementação de recursos de mapas, gráficos avançados, bússolas e visualizações gráficas complexas, até chegar à publicação oficial nas lojas de aplicativos. Além de meu trabalho com Flutter, atuo ativamente com Node.js, onde desenvolvo REST APIs robustas e servidores WebSocket. Estes sistemas gerenciam tanto geolocalização quanto mensageria, cruzando dados em tempo real para todos os usuários, e com persistência em bancos de dados não relacionais MongoDB, além de garantir a integridade dos dados entre microserviços independentes com RabbitMQ. Também lido com o processamento de grandes volumes de dados, implementando algoritmos de recomendação e análise orientados a grafos. Tenho, assim, uma grande e sólida experiência full stack, além de uma grande vivência com diferentes funcionalidades e implementações que podem ser comuns a diversos projetos.'
              : "I work as a hybrid app developer with Flutter, where I create custom widgets, publish packages that support the community, handle data persistence, and manage state. I've gone through the entire process of creating an app from scratch, including integration with Firebase, implementing features like maps, advanced graphics, compasses, and complex graphical visualizations, all the way to official publication on app stores. In addition to my work with Flutter, I actively work with Node.js, where I develop robust REST APIs and WebSocket servers. These systems manage both geolocation and messaging, cross-referencing real-time data for all users, with data persistence in non-relational MongoDB databases, while ensuring data integrity between independent microservices using RabbitMQ. I also deal with processing large volumes of data, implementing recommendation and graph-oriented analysis algorithms. As a result, I have a significant and solid full-stack experience, along with extensive exposure to various features and implementations that are common in multiple projects.",
          },
          {
            title: 'Java | Android | C# | C++ | C',
            text: isBR
              ? 'Trabalhei com sistemas embarcados, desenvolvendo soluções inovadoras que incluíram o planejamento e criação de protocolos de comunicação do absoluto zero. Além disso, integrei com dispositivos móveis Android via Bluetooth, implementei processamento paralelo para otimizar o desempenho, tratei múltiplas conexões e realizei a ponte de dados. Realizei também o controle e gerenciamento de máquinas de estados de embarcados e a persistência e carregamento de dados complexos através de XML. Executei essas tarefas em linguagens como C ANSI, C++, Java e C#. E, por fim, desenvolvi aplicações desktop com .NET e WinForms, focando no gerenciamento de testes físicos automatizados por meio de conexões com portas seriais. Essas experiências diversificadas me proporcionaram um conjunto sólido de habilidades técnicas e a capacidade de enfrentar desafios complexos em diversas plataformas.'
              : 'I worked with embedded systems, developing innovative solutions that included planning and creating communication protocols from scratch. In addition, I integrated with Android mobile devices via Bluetooth, implemented parallel processing to optimize performance, handled multiple connections, and bridged data. I also managed and controlled embedded state machines and the persistence and loading of complex data through XML. I performed these tasks in languages such as C ANSI, C++, Java, and C#. Finally, I developed desktop applications with .NET and WinForms, focusing on the management of automated physical tests through serial port connections. These diverse experiences have provided me with a strong set of technical skills and the ability to tackle complex challenges across various platforms.',
          },
          {
            title: 'Javascript | Typescript | HTML | CSS',
            text: isBR
              ? 'Iniciei minha jornada no mundo da programação com JavaScript e desde então trilhei um caminho diversificado e empolgante. Fiz diversos projetos, desde o desenvolvimento de jogos com mecânicas complexas, algoritmos de geração procedural e simuladores físicos, até o universo da inteligência artificial, incluindo redes neurais. Também me dediquei à criação de motores gráficos. Essas experiências aprimoraram minhas habilidades e alimentaram minha paixão por superar os limites do que pode ser alcançado no mundo da tecnologia. E, como um brinde adicional, adquiri sólidos conhecimentos em HTML, CSS e TypeScript.'
              : "I began my journey in the world of programming with JavaScript and have since followed a diverse and exciting path. I've undertaken a variety of projects, from developing games with complex mechanics, procedural generation algorithms, and physics simulators, to delving into the realm of artificial intelligence, including neural networks. I've also dedicated myself to creating graphic engines. These experiences have honed my skills and fueled my passion for pushing the boundaries of what can be achieved in the world of technology. As an additional bonus, I've gained strong expertise in HTML, CSS, and TypeScript.",
          },
          {
            title: 'React.js | React-Native',
            text: isBR
              ? 'Tenho experiência em projetos React.js e React Native, participando ativamente tanto na construção inicial quanto na manutenção contínua de aplicativos. Sou capaz de criar interfaces de usuário criativas e altamente envolventes. Além disso, integro sistemas de pagamento, lido com questões relacionadas ao fuso horário e faço suporte de tradução de conteúdo em vários idiomas. Também aplico metodologias ágeis, como o Scrum, gerenciando tarefas e projetos com eficiência através do uso do Jira e garantindo controle de versões com o Git.'
              : 'I have experience in React.js and React Native projects, actively participating in both the initial development and ongoing maintenance of applications. I am capable of creating creative and highly engaging user interfaces. Additionally, I integrate payment systems, handle issues related to time zones, and provide translation support for content in multiple languages. I also apply agile methodologies like Scrum, efficiently managing tasks and projects using Jira while ensuring version control with Git.',
          },
        ]}
      ></TimeLine>
    </div>
  );
}

export default TimeLineScreen;
