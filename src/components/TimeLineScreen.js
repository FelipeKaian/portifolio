import tentacle from '../assets/tentacle.svg';
import satelite from '../assets/satelite.svg';
import ufo from '../assets/ufo.svg';
import meteor from '../assets/meteor.svg';
import TimeLine from './TimeLine';

function TimeLineScreen({ maxScroll, scroll }) {
  return (
    <TimeLine
      maxScroll={maxScroll}
      scroll={scroll}
      items={[
        {
          scale: 1.3,
          margin: 150,
          img: tentacle,
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        },
        {
          scale: 0.9,
          margin: 150,
          img: ufo,
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        },
        {
          scale: 2,
          margin: 800,
          img: meteor,
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          scale: 0.9,
          margin: 150,
          img: satelite,
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        },
      ]}
    ></TimeLine>
  );
}

export default TimeLineScreen;
