import ProjectItem from "./ProjectItem";
import mainImg from "../assets/main.png";
import whatsInMeal from "../assets/meal.png";
import wheaterApp from "../assets/weather.png";
import zillowImg from "../assets/zillow.webp";

const  Projects = () => {
  return (
    <div className="max-w[1040px] m-auto md:pl-20 p-4 py-16 bg-gradient-to-r from-[#1F2833] via-[#0B0C10] to-[#1F2833]">
      <h1 className="text-4xl font-bold text-center text-[#66FCF1] pb-4">
        Projects
      </h1>
      <div className="grid sm:grid-cols-2 gap-12 m-4">
        <ProjectItem img={mainImg} title='Get Sh*t Done' />
        <ProjectItem img={whatsInMeal} title="What's in this Meal?" />
        <ProjectItem img={wheaterApp} title='Live Weather' />
        <ProjectItem img={zillowImg} title='Zillow App' />
      </div>
    </div>
  );
  }
export default Projects;
