import { useState } from 'react';

export default function Intro() {
  const [intro, setIntro] = useState(true);

  //space-evenly space-around space-between
  const [rigth, setRigth] = useState("right");
  const [left, setLeft] = useState("left");

  const l = (w, c) => (
    <div
      style={{
        margin: '5px 5px',
        backgroundColor:
          c == 0
            ? '#ea5e5e'
            : c == 1
            ? '#f7ba3e'
            : c == 2
            ? '#56b3b4'
            : c == 3
            ? '#bf85bf'
            : '#334851',
        width: w + '%',
        borderRadius: 30,
        height: '1vh',
        transition: "1s",
      }}
    ></div>)

    const dr = () => (
        <div></div>
  );

  const dl = () => (
    <dr></dr>
);

  return (
    <div
          onMouseEnter={() => {
              setRigth("center");
              setLeft("center");
          } }
          onMouseLeave={() => {
              setRigth("right");
              setLeft("left");
          } }
          style={{
              width: '50vw',
              height: '50vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: "center",
              transition: "1s"
          }}
      >
          <dr><>{l(8)}{l(4)}{l(2)}{l(8)}{l(2)}{l(2)}{l(8)}</><>{l(6)}{l(6)}{l(2)}{l(10)}{l(1)}{l(2)}{l(2)}{l(9)}{l(3)}</>
          </dr>
          <dl><>{l(3)}{l(15)}{l(4)}{l(8)}{l(2)}</>
              {l(11, 1)}<>{l(6)}{l(6)}{l(10)}{l(1)}{l(9)}</>
          </dl>
          <dr><>{l(3)}{l(2)}{l(5)}{l(7)}{l(5)}{l(8)}{l(2)}</>
              {l(17, 1)}<>{l(1)}{l(7)}{l(12)}{l(4)}{l(2)}{l(6)}</>
          </dr><dl><>{l(5)}{l(5)}{l(1)}{l(9)}{l(10)}</>
              {l(21, 1)}<>{l(10)}{l(4)}{l(4)}{l(6)}{l(6)}</>
          </dl><dr><>{l(4)}{l(4)}{l(6)}{l(6)}{l(10)}</>
              {l(24, 1)}<>{l(11)}{l(9)}{l(1)}{l(1)}{l(8)}</>
          </dr><dl><>{l(7)}{l(1)}{l(2)}{l(1)}{l(9)}{l(2)}{l(5)}</>
              {l(9, 1)}{l(2)}{l(13, 1)}<>{l(13)}{l(2)}{l(1)}{l(3)}{l(4)}{l(2)}{l(2)}</>
          </dl><dr><>{l(6)}{l(7)}{l(7)}{l(2)}{l(8)}</>
              {l(9.5, 1)}{l(5)}{l(10.5, 1)}<>{l(4)}{l(5)}{l(1)}{l(1)}{l(19)}</>
          </dr><dl><>{l(2)}{l(8)}{l(8)}{l(4)}{l(8)}</>
              {l(10, 1)}{l(7)}{l(9, 1)}<>{l(10)}{l(9)}{l(1)}{l(9)}{l(1)}</>
          </dl><dr><>{l(3)}{l(3)}{l(3)}{l(1)}{l(20)}</>
              {l(10, 1)}{l(9)}{l(7, 1)}<>{l(1)}{l(1)}{l(6)}{l(20)}{l(2)}</>
          </dr><dl><>{l(10)}{l(9)}{l(1)}{l(9)}{l(1)}</>
              {l(10, 1)}{l(7)}{l(9, 1)}<>{l(10)}{l(9)}{l(1)}{l(9)}{l(1)}</>
          </dl><dr><>{l(7)}{l(2)}{l(1)}{l(1)}{l(2)}{l(9)}{l(5)}{l(2)}</>
              {l(9.5, 1)}{l(5)}{l(10.5, 1)}<>{l(7)}{l(1)}{l(2)}{l(2)}{l(2)}{l(1)}{l(9)}{l(5)}</>
          </dr><dl><>{l(4)}{l(4)}{l(6)}{l(6)}{l(10)}</>
              {l(9, 1)}{l(2)}{l(13, 1)}<>{l(4)}{l(4)}{l(6)}{l(6)}{l(10)}</>
          </dl><dr><>{l(2)}{l(7)}{l(2)}{l(1)}{l(2)}{l(1)}{l(9)}{l(5)}</>
              {l(24, 1)}<>{l(7)}{l(2)}{l(2)}{l(2)}{l(1)}{l(1)}{l(9)}{l(5)}</>
          </dr><dl><>{l(7)}{l(2)}{l(2)}{l(1)}{l(2)}{l(1)}{l(9)}{l(5)}</>
              {l(21, 1)}<>{l(2)}{l(7)}{l(1)}{l(1)}{l(9)}{l(2)}{l(2)}{l(5)}</>
          </dl><dr><>{l(6)}{l(2)}{l(7)}{l(7)}{l(2)}{l(8)}{l(2)}</>
              {l(17, 1)}<>{l(7)}{l(8)}{l(2)}{l(1)}{l(9)}{l(5)}{l(2)}</>
          </dr><dl><>{l(7)}{l(2)}{l(2)}{l(1)}{l(8)}{l(9)}{l(5)}</>
              {l(11, 1)}<>{l(6)}{l(7)}{l(2)}{l(7)}{l(2)}{l(8)}{l(2)}</>
          </dl><dr><>{l(3)}{l(2)}{l(15)}{l(2)}{l(4)}{l(2)}{l(8)}{l(2)}</><>{l(6)}{l(2)}{l(2)}{l(6)}{l(2)}{l(10)}{l(1)}{l(9)}</>
          </dr>
    </div>
  );
}
