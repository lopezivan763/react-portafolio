import { FaReact, FaNode, FaHtml5, FaBootstrap, FaCss3, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql, SiMongodb, SiTailwindcss, SiHeroku, SiExpress, SiApollographql, SiGraphql  } from "react-icons/si";

const Tech = () => {
  const data = [
    {
      tech: [
        <FaReact key="react" size={60} />,
        <IoLogoJavascript key="javascript" size={60} />,
        <FaNode key="node" size={60} />,
        <SiMysql key="mysql" size={60} />,
        <SiMongodb key="mongo" size={60} />,
        <SiExpress key="express" size={60} />,
        <FaHtml5 key="html" size={60} />,
        <FaBootstrap key="bootstrap" size={60} />,
        <SiTailwindcss key="tailwind" size={60} />,
        <FaCss3 key="css" size={60} />,
        <SiHeroku key="heroku" size={60} />,
        <FaGithub key="github" size={60} />,
        <SiApollographql key="github" size={60} />,
        <SiGraphql key="github" size={60}/>


      ],
    },
  ];
  const firstLine = data[0].tech.slice(0,6);
  const secondLine = data[0].tech.slice(6);

  return (
    <div className="max-w[1040px] mx-auto md:pl-20 p-10 py-16 bg-gradient-to-r from-[#1F2833] via-[#0B0C10] to-[#1F2833] text-[#C5C6C7]">
      <h1 className="py-4 text-4xl font-bold text-center text-[#66FCF1]">
        Tech
      </h1>
      <div className="max-w-[1040px] flex flex-wrap items-center justify-center gap-4">
        <div className="flex flex-wrap justify-center gap-4">
          {firstLine.map((techElement, index) => (
            <span key={index} className="text-[#C5C6C7]/90 bg-[#66FCF1]/20 p-2 rounded-full hover:bg-[#66FCF1]">
              {techElement}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap justify-center mt-4 gap-4">
          {secondLine.map((techElement, index) => (
            <span key={index} className="text-[#C5C6C7]/90 bg-[#66FCF1]/20 p-2 rounded-full hover:bg-[#66FCF1]">
              {techElement}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tech;
