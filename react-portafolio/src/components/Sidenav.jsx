// import { useState } from "react";
// import {
//   AiOutlineHome,
//   AiOutlineMail,
//   AiOutlineMenu,
//   AiOutlineProject,
// } from "react-icons/ai";
// import { GrProjects } from "react-icons/gr";
// import { BsPerson } from "react-icons/bs";

// const Sidenav = ({ scrollToMain, scrollToWork, scrollToProjects, scrollToContact }) => {
//   const [nav, setNav] = useState(false);
//   const handleNav = () => {
//     setNav(!nav);
//   };

//   return (
//     <div>
//       <AiOutlineMenu
//         onClick={handleNav}
//         className="absolute top-4 right-4 z-[99] md:hidden cursor-pointer"
//       />
//       {
//       nav ? (
//         <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
//           <a
//             onClick={scrollToMain}
//             href="/"
//             className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
//           >
//             <AiOutlineHome size={20} />
//             <span className="pl-4">Home</span>
//           </a>
//           <a
//             onClick={scrollToWork}
//             href="/work"
//             className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
//           >
//             <GrProjects size={20} />
//             <span className="pl-4">Work</span>
//           </a>
//           <a
//             onClick={scrollToProjects}
//             href="/projects"
//             className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
//           >
//             <AiOutlineProject size={20} />
//             <span className="pl-4">Projects</span>
//           </a>
//           <a
//             onClick={scrollToMain}
//             href="/"
//             className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
//           >
//             <BsPerson size={20} />
//             <span className="pl-4">Resume</span>
//           </a>
//           <a
//             onClick={scrollToContact}
//             href="/contact"
//             className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
//           >
//             <AiOutlineMail size={20} />
//             <span className="pl-4">Contact</span>
//           </a>
//         </div>
//       ) : (
//         ''
//       )}
//       <div className="md:block hidden fixed top-[25%] z-10">
//         <div className="flex flex-col">
//           <a
//             href="/"
//             className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 "
//           >
//             <AiOutlineHome size={20} />
//           </a>
//           <a
//             href="/work"
//             className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 "
//           >
//             <GrProjects size={20} />
//           </a>
//           <a
//             href="/projects"
//             className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 "
//           >
//             <AiOutlineProject size={20} />
//           </a>
//           <a
//             href="/"
//             className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 "
//           >
//             <BsPerson size={20} />
//           </a>
//           <a
//             href="/contact"
//             className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 "
//           >
//             <AiOutlineMail size={20} />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidenav;


import { useState } from 'react';
import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineProject,
} from 'react-icons/ai';
import { GrProjects } from 'react-icons/gr';
import { BsPerson } from 'react-icons/bs';
import { TfiClose } from "react-icons/tfi";


const Sidenav = ({
  scrollToMain,
  scrollToWork,
  scrollToProjects,
  scrollToContact,
}) => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  
  const closeMenu = () => {
    setNav(false);
  };

  return (
    <div>
      <div
        className={`absolute top-6 left-6 z-[99] cursor-pointer text-[#66FCF1] text-3xl transition-transform duration-700 ${
          nav ? 'rotate-180' : ''
        }`}
      >
        {nav ? (
          <TfiClose onClick={handleNav} />
        ) : (
          <AiOutlineMenu onClick={handleNav} />
        )}
      </div>

      {nav ? (
        <div className="fixed w-full h-screen bg-gradient-to-r from-[#1F2833] to-[#0B0C10] flex flex-col justify-center items-center z-20">
          <a
            onClick={() => {
              scrollToMain();
              closeMenu(); // Close menu after clicking on the link
            }}
            className="text-[#1F2833] w-[75%] flex justify-center items-center rounded-full shadow-md bg-[#66FCF1] shadow-[#C5C6C7] m-2 p-4 cursor-pointer hover:scale-110 hover:bg-[#45A29E] hover:text-[#66FCF1] hover:shadow-lg hover:shadow-[#66FCF1] ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            onClick={() => {
              scrollToWork();
              closeMenu(); // Close menu after clicking on the link
            }}
            className="text-[#1F2833] w-[75%] flex justify-center items-center rounded-full shadow-md bg-[#66FCF1] shadow-[#C5C6C7] m-2 p-4 cursor-pointer hover:scale-110 hover:bg-[#45A29E] hover:text-[#66FCF1] hover:shadow-lg hover:shadow-[#66FCF1] ease-in duration-200"
          >
            <GrProjects size={20} />
            <span className="pl-4">Work</span>
          </a>
          <a
            onClick={() => {
              scrollToProjects();
              closeMenu(); // Close menu after clicking on the link
            }}
            className="text-[#1F2833] w-[75%] flex justify-center items-center rounded-full shadow-md bg-[#66FCF1] shadow-[#C5C6C7] m-2 p-4 cursor-pointer hover:scale-110 hover:bg-[#45A29E] hover:text-[#66FCF1] hover:shadow-lg hover:shadow-[#66FCF1] ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </a>
          <a
            onClick={() => {
              scrollToMain();
              closeMenu(); // Close menu after clicking on the link
            }}
            className="text-[#1F2833] w-[75%] flex justify-center items-center rounded-full shadow-md bg-[#66FCF1] shadow-[#C5C6C7] m-2 p-4 cursor-pointer hover:scale-110 hover:bg-[#45A29E] hover:text-[#66FCF1] hover:shadow-lg hover:shadow-[#66FCF1] ease-in duration-200"
          >
            <BsPerson size={20} />
            <span className="pl-4">Resume</span>
          </a>
          <a
            onClick={() => {
              scrollToContact();
              closeMenu(); // Close menu after clicking on the link
            }}
            className="text-[#1F2833] w-[75%] flex justify-center items-center rounded-full shadow-md bg-[#66FCF1] shadow-[#C5C6C7] m-2 p-4 cursor-pointer hover:scale-110 hover:bg-[#45A29E] hover:text-[#66FCF1] hover:shadow-lg hover:shadow-[#66FCF1] ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        ''
      )}
      {/* <div className="md:block hidden fixed top-[25%] z-10 text-[#66FCF1]">
        <div className="flex flex-col">
          <button
            onClick={scrollToMain}
            className="rounded-full shadow-lg bg-[#45A29E] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 "
          >
            <AiOutlineHome size={20} />
          </button>
          <button
            onClick={scrollToWork}
            className="rounded-full shadow-lg bg-[#45A29E] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 "
          >
            <GrProjects size={20} />
          </button>
          <button
            onClick={scrollToProjects}
            className="rounded-full shadow-lg bg-[#45A29E] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 "
          >
            <AiOutlineProject size={20} />
          </button>
          <button
            onClick={scrollToMain}
            className="rounded-full shadow-lg bg-[#45A29E] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 "
          >
            <BsPerson size={20} />
          </button>
          <button
            onClick={scrollToContact}
            className="rounded-full shadow-lg bg-[#45A29E] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 "
          >
            <AiOutlineMail size={20} />
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Sidenav;
