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
    <TimeLine
      maxScroll={maxScroll}
      scroll={scroll}
      items={[
        {
          size: 0,
          margin: 300,
          img: tentacle,
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        },
        {
          size: 0,
          margin: 150,
          img: ufo,
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        },
        {
          size: 0,
          margin: 800,
          img: meteor,
          text: isBR
          ?"Iniciei minha jornada no mundo da programação com JavaScript e desde então trilhei um caminho diversificado e empolgante. Fiz diversos projetos, desde o desenvolvimento de jogos com mecânicas complexas, algoritmos de geração procedural e simuladores físicos, até o universo da inteligência artificial, incluindo redes neurais. Também me dediquei à criação de motores gráficos. Essas experiências aprimoraram minhas habilidades e alimentaram minha paixão por superar os limites do que pode ser alcançado no mundo da tecnologia. E, como um brinde adicional, adquiri sólidos conhecimentos em HTML, CSS e TypeScript.":"I began my journey in the world of programming with JavaScript and have since followed a diverse and exciting path. I've undertaken a variety of projects, from developing games with complex mechanics, procedural generation algorithms, and physics simulators, to delving into the realm of artificial intelligence, including neural networks. I've also dedicated myself to creating graphic engines. These experiences have honed my skills and fueled my passion for pushing the boundaries of what can be achieved in the world of technology. As an additional bonus, I've gained strong expertise in HTML, CSS, and TypeScript.",
        },
        {
          size: 0,
          margin: 0,
          img: satelite,
          text: isBR
            ? "Tenho experiência em projetos React.js e React Native, participando ativamente tanto na construção inicial quanto na manutenção contínua de aplicativos. Sou capaz de criar interfaces de usuário criativas e altamente envolventes (como está). Além disso, integro sistemas de pagamento, lido com questões relacionadas ao fuso horário e faço suporte de tradução de conteúdo em vários idiomas. Também aplico metodologias ágeis, como o Scrum, gerenciando tarefas e projetos com eficiência através do uso do Jira e garantindo controle de versões com o Git."
            : "I have experience in React.js and React Native projects, actively participating in both the initial development and ongoing maintenance of applications. I am capable of creating creative and highly engaging user interfaces (as it is). Additionally, I integrate payment systems, handle issues related to time zones, and provide translation support for content in multiple languages. I also apply agile methodologies like Scrum, efficiently managing tasks and projects using Jira while ensuring version control with Git.",
        },
      ]}
    ></TimeLine>
  );
}

export default TimeLineScreen;
