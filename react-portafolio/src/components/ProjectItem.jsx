import React from 'react'

const ProjectItem = ({img, title}) => {

  const projectURLs = {
    'Get Sh*t Done': 'https://peaceful-beach-14774-2857744df451.herokuapp.com/',
    "What's in this Meal?": 'https://bdeutmeyer.github.io/nutrition-getter/',
    'Live Weather': 'https://lopezivan763.github.io/live-wheather-app/',
    'Zillow App': 'https://www.zillow.com/'
  };

  // Function to retrieve the URL based on the project title
  const getProjectURL = (projectTitle) => {
    return projectURLs[projectTitle] || '/';
  };

  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'>
     <img src={img} alt="/" className='rounded-xl group-hover:opacity-10' />
     <div className='hidden group-hover:block absolute top-[50%] left[50%] translate-x[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
            {title}
        </h3>
        {/* <p className='pb-4 text-white text-center'>React Js</p> */}
        <a href={getProjectURL(title)} target='_blank' rel='noopener noreferrer'>
            <p className='text-center p-3 mt-5 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg '>More Info</p>
        </a>
     </div>
    </div>
  )
}

export default ProjectItem






