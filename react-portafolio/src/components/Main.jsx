// import { TypeAnimation } from "react-type-animation";
// import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

// function Main() {
//   return (
//     <div >
//       <img
//         className="w-full h-screen object-cover object-left scale-x-[-1]"
//         src="https://i.pinimg.com/564x/c6/16/57/c6165742ee36800d48de58dd858c9480.jpg"
//         alt="/"
//       />

//       <div className="w-full h-screen absolute top-0 left-0 bg-white/40">
//         <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center" >
//           <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">Ivan Lopez</h1>
//           <h2 className="flex sm:text3xl text-2xl pt-4 text-gray-800 ">
//             I'm a
//             <TypeAnimation
//               sequence={[
//                 // Same substring at the start will only be typed out once, initially
//                 "Full Stack Developer",
//                 1000, // wait 1s before replacing "Mice" with "Hamsters"
//                 "Coder",
//                 1000,
//                 "Tech Enthusiast",
//                 1000,
//                 "Jedi",
//                 1000,
//               ]}
//               wrapper="span"
//               speed={50}
//               style={{
//                 fontSize: "1em",
//                 paddingLeft: "5px",
//                 display: "inline-block",
//               }}
//               repeat={Infinity}
//             />
//           </h2>
//           <div className="flex justify-between pt-6 max-w-[100px] w-full">
//           <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
//           <FaInstagram className="cursor-pointer" size={20} />
//         </a>
//         <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
//           <FaLinkedinIn className="cursor-pointer" size={20} />
//         </a>
//         <a href="https://github.com/lopezivan763" target="_blank" rel="noopener noreferrer">
//           <FaGithub className="cursor-pointer" size={20} />
//         </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Main;



import { TypeAnimation } from 'react-type-animation';
import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';
import { useState, useEffect } from 'react';

function Main() {
  const [scrollY, setScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // const img = new Image();
    // img.src =
    //   'https://i.pinimg.com/564x/c6/16/57/c6165742ee36800d48de58dd858c9480.jpg';
    // img.onload = () => {
    //   setLoaded(true);
    // };

    const video = document.createElement('video');
    video.src = 'https://cdn.dribbble.com/users/721278/screenshots/15932493/media/27d773be3f04bd9da5b435b7e196df21.mp4';
    video.onloadeddata = () => {
      setLoaded(true);
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.3}px)`,
  };
  
  return (          
    <div className="relative overflow-hidden">
      <div className="h-screen relative overflow-hidden">
        {/* <img
          className={`w-full h-full object-cover object-left scale-x-[-1] ${
            loaded ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-1000`}
          // src="https://i.pinimg.com/564x/c6/16/57/c6165742ee36800d48de58dd858c9480.jpg"
          src='https://cdn.dribbble.com/users/721278/screenshots/15932493/media/27d773be3f04bd9da5b435b7e196df21.mp4'
          alt="Background"
          onLoad={() => setLoaded(true)}
          style={parallaxStyle}
        /> */}

<video
          className={`w-full h-full object-cover scale-x-[-1] ${
            loaded ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-1000`}
          src="https://cdn.dribbble.com/users/721278/screenshots/15932493/media/27d773be3f04bd9da5b435b7e196df21.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={parallaxStyle}
        />

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#1F2833]/90 via-[#1F2833]/70 to-[#1F2833]/90 flex justify-center items-center">
          <div className="text-center text-white z-10">
            <h1 className="text-5xl font-bold md:text-7xl lg:text-8xl mb-4 text-[#66FCF1]">
              Ivan Lopez
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#C5C6C7]">
              I&apos;m a&nbsp;
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  1000,
                  'Coder',
                  1000,
                  'Tech Enthusiast',
                  1000,
                  'Jedi',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  fontSize: '1em',
                  paddingLeft: '5px',
                  display: 'inline-block',
                }}
                repeat={Infinity}
              />
            </h2>
            <div className="flex justify-center mt-6">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <FaInstagram className="text-[#66FCF1] cursor-pointer hover:text-[#C5C6C7] transition duration-300" size={20} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <FaLinkedinIn className="text-[#66FCF1] cursor-pointer hover:text-[#C5C6C7] transition duration-300" size={20} />
              </a>
              <a
                href="https://github.com/lopezivan763"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-[#66FCF1] cursor-pointer hover:text-[#C5C6C7] transition duration-300" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
