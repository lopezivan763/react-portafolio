import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year:2030,
        title: "Interactive Design Studio",
        description: "A portfolio showcasing interactive designs and user experiences.",
      },
      {
        year:2031,
        title: "Architectural Visualization Portfolio",
        description: "Showcasing architectural designs and visualizations on an interactive map.",
      },
      {
        year:2032,
        title: "Environmental Conservation Projects",
        description: "Highlighting environmental projects worldwide with an interactive map.",
      },
      {
        year:2033,
        title: "Freelance Photography Portfolio",
        description: "A photography portfolio exhibited through a map-based interface.",
      },
];

const Work = () => {
  return (
    <div id='work' className='max-w[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]' >Work</h1>
      {data.map((item, idx) => (
        <WorkItem 
        key={idx} 
        year={item.year} 
        title={item.title}
        description={item.description}  
        />
      ))}
    </div>
  );
};

export default Work
