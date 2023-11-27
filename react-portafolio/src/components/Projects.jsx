import React from "react";
import ProjectItem from "./ProjectItem";
import mainImg from "../assets/main.png";
import whatsInMeal from "../assets/meal.png";
import wheaterApp from "../assets/weather.png";
import zillowImg from "../assets/zillow.webp";

const  Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
        quos adipisci repellendus incidunt velit, expedita maxime quis nostrum
        enim minima perspiciatis? Atque, dicta? Libero in cupiditate labore
        dolore saepe debitis.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={mainImg} title='Get Sh*t Done' />
        <ProjectItem img={whatsInMeal} title="What's in this Meal?" />
        <ProjectItem img={wheaterApp} title='Live Weather' />
        <ProjectItem img={zillowImg} title='Zillow App' />
      </div>
    </div>
  );
  }
export default Projects;
