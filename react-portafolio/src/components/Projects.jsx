import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel'; 
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProjectItem from './ProjectItem';
import mainImg from '../assets/main.png';
import whatsInMeal from '../assets/meal.png';
import potfolioImg from '../assets/portfolio.png';
import xperience from '../assets/xperience.png';
import tornado from '../assets/tornado.png';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0); 

  
  const projectItems = [
    { img: tornado, title: 'Tornado Tire Shop'},
    { img: xperience, title: 'Xperience' },
    { img: mainImg, title: 'Get Sh*t Done' },
    { img: whatsInMeal, title: "What's in this Meal?" },
    { img: potfolioImg, title: 'Portfolio' },
  ];
  

  return (
    <div className="flex justify-center items-center">
    <div className="max-w[1040px] m-auto md:pl-20 p-10 py-10 bg-gradient-to-r from-[#1F2833] via-[#0B0C10] to-[#1F2833]">
      <h1 className="text-4xl font-bold text-center text-[#66FCF1] pb-4">Projects</h1>
      <Carousel
        showArrows={true}
        showStatus={false}
        swipeable={true}
        showThumbs={false} 
        onChange={(index) => setActiveProject(index)} 
        selectedItem={activeProject} 
      >
        {projectItems.map((item, index) => (
          <ProjectItem key={index} img={item.img} title={item.title} />
        ))}
      </Carousel>
    </div>
    </div>
  );
};

export default Projects;
