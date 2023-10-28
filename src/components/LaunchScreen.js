import Launch from './Launch';

function LaunchScreen({  scroll, maxScroll,toggleLang }) {
  return (
    <>
      <Launch scroll={scroll} maxScroll={maxScroll} toggleLang={toggleLang}></Launch>
    </>
  );
}

export default LaunchScreen;
