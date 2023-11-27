import React from 'react'
import WorkItem from './WorkItem'

const data = [
  {
    year: 2030,
    title: "Jedi Training",
    description: "An immersive training program for aspiring Jedi knights focusing on lightsaber combat techniques and mastering the Force.",
  },
  {
    year: 2031,
    title: "Clone Wars",
    description: "An architectural visualization of the battles and conflicts during the Clone Wars era, illustrating various structures and battle scenarios.",
  },
  {
    year: 2032,
    title: "Jedi Graduation",
    description: "A culmination of conservation efforts and initiatives worldwide aimed at preserving the balance in the Force and protecting endangered ecosystems.",
  },
  {
    year: 2033,
    title: "Dark Side Training",
    description: "Exploration of the darker aspects of photography, capturing the essence of Sith philosophies through an unconventional map-based visual storytelling approach.",
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
