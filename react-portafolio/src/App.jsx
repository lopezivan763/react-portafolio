// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Sidenav from './components/Sidenav';
// import Main from './components/Main';
// import Work from './components/Work';
// import Projects from './components/Projects';
// import Contact from './components/Contact';

// function App() {
//   return (
//     <Router>
//       <div>
//         <Sidenav />
//         <Routes>
//           <Route path="/" element={<Main />} />
//           <Route path="/work" element={<Work />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;



import { useEffect, useRef } from 'react';
import Sidenav from './components/Sidenav';
import Main from './components/Main';
import Work from './components/Work';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  const mainRef = useRef(null);
  const workRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };
 
  
  return (
    <div>
      <Sidenav
        scrollToMain={() => scrollToRef(mainRef)}
        scrollToWork={() => scrollToRef(workRef)}
        scrollToProjects={() => scrollToRef(projectsRef)}
        scrollToContact={() => scrollToRef(contactRef)}
      />
      <main>
        <section ref={mainRef}>
          <Main />
        </section>
        <section ref={workRef}>
          <Work />
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
