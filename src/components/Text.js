function Text({ text }) {
  return <h1
    style={{
      textAlign: 'center',
      width: '100vw',
      textTransform: 'uppercase',
      fontFamily: 'verdana',
      fontSize: '5vw',
      fontWeight: '700',
      color: '#f5f5f5',
      textShadow: `1px 1px 1px #919191,
             1px 2px 1px #919191,
             1px 3px 1px #919191,
             1px 4px 1px #919191,
             1px 5px 1px #919191,
             1px 6px 1px #919191,
             1px 7px 1px #919191,
             1px 8px 1px #919191`,
    }}
  >
    {text}
  </h1>;
}

export default Text;
