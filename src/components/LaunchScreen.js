import Launch from './Launch';

function LaunchScreen({ goToProjects, scroll, maxScroll }) {
  return (
    <>
      <Launch goToProjects={goToProjects} scroll={scroll} maxScroll={maxScroll}></Launch>
    </>
  );
}

export default LaunchScreen;
