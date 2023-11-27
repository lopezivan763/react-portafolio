import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

function Main() {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://i.pinimg.com/564x/c6/16/57/c6165742ee36800d48de58dd858c9480.jpg"
        alt="/"
      />

      <div className="w-full h-screen absolute top-0 left-0 bg-white/40">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center" >
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">Ivan Lopez</h1>
          <h2 className="flex sm:text3xl text-2xl pt-4 text-gray-800 ">
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Full Stack Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Coder",
                1000,
                "Tech Enthusiat",
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
          <div className="flex justify-between pt-6 max-w-[100px] w-full">
            <FaInstagram className="cursor-pointer" size={20} />
            <FaLinkedinIn className="cursor-pointer" size={20} />
            <FaGithub className="cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
