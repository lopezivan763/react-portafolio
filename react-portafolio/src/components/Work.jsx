// import WorkItem from './WorkItem'

// const data = [
//   {
//     year: 2030,
//     title: "Jedi Training",
//     description: "An immersive training program for aspiring Jedi knights focusing on lightsaber combat techniques and mastering the Force.",
//   },
//   {
//     year: 2031,
//     title: "Clone Wars",
//     description: "An architectural visualization of the battles and conflicts during the Clone Wars era, illustrating various structures and battle scenarios.",
//   },
//   {
//     year: 2032,
//     title: "Jedi Graduation",
//     description: "A culmination of conservation efforts and initiatives worldwide aimed at preserving the balance in the Force and protecting endangered ecosystems.",
//   },
//   {
//     year: 2033,
//     title: "Dark Side Training",
//     description: "Exploration of the darker aspects of photography, capturing the essence of Sith philosophies through an unconventional map-based visual storytelling approach.",
//   },
// ];


// const Work = () => {
//   return (
//     <div className='max-w[1040px] m-auto md:pl-20 p-4 py-16 bg-[#0B0C10]'>
//       <h1 className='text-4xl font-bold text-center text-[#001b5e]' >Work</h1>
//       {data.map((item, idx) => (
//         <WorkItem 
//         key={idx} 
//         year={item.year} 
//         title={item.title}
//         description={item.description}  
//         />
//       ))}
//     </div>
//   );
// };

// export default Work



import WorkItem from './WorkItem';

const data = [
  {
    year: 2030,
    title: 'Jedi Training',
    description:
      'An immersive training program for aspiring Jedi knights focusing on lightsaber combat techniques and mastering the Force.',
  },
  {
    year: 2031,
    title: 'Clone Wars',
    description:
      'An architectural visualization of the battles and conflicts during the Clone Wars era, illustrating various structures and battle scenarios.',
  },
  {
    year: 2032,
    title: 'Jedi Graduation',
    description:
      'A culmination of conservation efforts and initiatives worldwide aimed at preserving the balance in the Force and protecting endangered ecosystems.',
  },
  {
    year: 2033,
    title: 'Dark Side Training',
    description:
      'Exploration of the darker aspects of photography, capturing the essence of Sith philosophies through an unconventional map-based visual storytelling approach.',
  },
];

const Work = () => {
  return (
    <div className="max-w[1040px] m-auto md:pl-20 p-4 py-16 bg-gradient-to-r from-[#1F2833] via-[#0B0C10] to-[#1F2833]" >
      <h1 className="text-4xl font-bold text-center text-[#66fcf1] mb-8">
        Work
      </h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          description={item.description}
          style={{
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
            borderRadius: '8px',
            padding: '16px',
            marginBottom: '24px',
            background: idx % 2 === 0 ? '#1f1f1f' : '#292929',
            transform: 'translateZ(0)',
            transition: 'transform 0.3s ease-in-out',
          }}
          hoverStyle={{
            transform: 'translateZ(10px)',
            boxShadow: '0 12px 20px rgba(0, 0, 0, 0.4)',
          }}
        />
      ))}
    </div>
  );
};

export default Work;
