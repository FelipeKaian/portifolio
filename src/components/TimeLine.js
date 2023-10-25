import Text from './Text';

function TimeLine({ items, scroll, maxScroll }) {
  console.log(scroll);
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
              left:
                scroll >= 300 + 1000 * (items.length - index - 1)
                  ? '0px'
                  : index % 2 == 0
                  ? '-1000px'
                  : '1000px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: index % 2 == 0 ? 'row' : 'row-reverse',
              width: '100vw',
              height: '1000px',
            }}
          >
            <img
              src={item.img}
              style={{
                width: item.size + 'vw',
                position: 'absolute',
              }}
              alt=''
            ></img>
            <Text
              style={{
                width: '40vw',
                fontSize: '32px',
                padding: '100px',
                textAlign: 'justify',
              }}
              text={item.text}
            />
          </div>
        );
      })}
    </div>
  );
}

export default TimeLine;
