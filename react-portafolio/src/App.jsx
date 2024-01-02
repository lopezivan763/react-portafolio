import { useRef } from "react";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Tech from "./components/Tech";

function App() {
  const mainRef = useRef(null);
  const workRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const techRef = useRef(null);

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Sidenav
        scrollToMain={() => scrollToRef(mainRef)}
        scrollToWork={() => scrollToRef(workRef)}
        scrollToProjects={() => scrollToRef(projectsRef)}
        scrollToContact={() => scrollToRef(contactRef)}
        scrollToTech={() => scrollToRef(techRef)}
      />
      <main>
        <section ref={mainRef}>
          <Main />
        </section>
        <section ref={workRef}>
          <Work />
        </section>
        <section ref={techRef}>
          <Tech />
        </section>
        <section ref={projectsRef}>
          <Projects />
        </section>
        <section ref={contactRef}>
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
