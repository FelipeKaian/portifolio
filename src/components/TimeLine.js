import Text from "./Text";

function TimeLine({ items, scroll, maxScroll }) {
  console.log(scroll)
  return (
    <div
      style={{
        position: 'absolute',
        top: scroll - maxScroll +1500 + 'px',
      }}
    >
      {items.map((item, index) => {
        return (
          <div
            style={{
              position: 'relative',
              transition: '2s',
              left: scroll>=300+(1000*(items.length-index-1))?'0px':(index % 2 == 0 ? '-1000px' : '1000px'),
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
                
                transform: 'scale(' + item.scale + ')',
                width: '60vw',
                position: 'relative',
                left: item.margin * (index % 2 == 0 ? -1 : 1) + 'px',
              }}
              alt=''
            ></img>
            <Text
              style={{
                width: '40vw',
                textAlign: index % 2 == 0 ? 'end' : 'start',
                fontSize: '32px',
                padding: '100px'
              }}
              text={items.length-index+' '+item.text}
            />
          </div>
        );
      })}
    </div>
  );
}

export default TimeLine;
