import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";
import mainCover from "../assets/mainCover.jpg";

function Main() {
  const [scrollY, setScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src =
      mainCover;
    img.onload = () => {
      setLoaded(true);
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.3}px)`,
  };

  return (
      <div className="w-full h-full relative overflow-hidden">
        <img
          className={`w-full h-full object-cover object-left scale-x-[-1] transition-opacity duration-1000 ${
            loaded ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000 md:object-center lg:object-right md:h-70vh lg:h-90vh`}
          src={mainCover}
          alt="Background"
          onLoad={() => setLoaded(true)}
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
                  "Full Stack Developer",
                  1000,
                  "Coder",
                  1000,
                  "Tech Enthusiast",
                  1000,
                  "Jedi",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  fontSize: "1em",
                  paddingLeft: "5px",
                  display: "inline-block",
                }}
                repeat={Infinity}
              />
            </h2>
            <div className="flex justify-center mt-6">
              <a
                href="https://www.instagram.com/iivan_lt/?utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <FaInstagram
                  className="text-[#66FCF1] cursor-pointer hover:text-[#C5C6C7] transition duration-300"
                  size={20}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/ivan-lopez-t123/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <FaLinkedinIn
                  className="text-[#66FCF1] cursor-pointer hover:text-[#C5C6C7] transition duration-300"
                  size={20}
                />
              </a>
              <a
                href="https://github.com/lopezivan763"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  className="text-[#66FCF1] cursor-pointer hover:text-[#C5C6C7] transition duration-300"
                  size={20}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Main;
