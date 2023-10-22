import Launch from './Launch';

function LaunchScreen({ goToProjects, scroll, maxScroll,toggleLang }) {
  return (
    <>
      <Launch goToProjects={goToProjects} scroll={scroll} maxScroll={maxScroll} toggleLang={toggleLang}></Launch>
    </>
  );
}

export default LaunchScreen;
