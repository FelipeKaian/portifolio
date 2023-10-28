import Text from './Text';

function TimeLine({ items, scroll, maxScroll }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: scroll - maxScroll + 1500 + 'px',
      }}
    >
      {items.map((item, index) => {
        return (
          <div
            style={{
              position: 'relative',
              transition: '2s',

              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: index % 2 == 1 ? 'row' : 'row-reverse',
              width: '100vw',
              height: '1000px',
            }}
          >
            <div style={{width: '35vw', justifyContent: 'center',padding:'130px'}}>
              <h1
                style={{
                  
                  fontSize: '2vw',
                  textAlign: 'start',
                  fontFamily: 'Quicksand , sans-serif',
                  color: 'white',
                  fontWeight: 'lighter',
                }}
              >
                {item.title}
              </h1>
              <h1
                style={{
                  fontSize: '26px',
                  textAlign: 'justify',
                  fontFamily: 'Quicksand , sans-serif',
                  color: 'white',
                  fontWeight: 'lighter',
                }}
              >
                {item.text}
              </h1>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TimeLine;
