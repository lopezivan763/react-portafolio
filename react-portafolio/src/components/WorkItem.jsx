import React from 'react'

const WorkItem = ({year, title, description}) => {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-[#66FCF1]'>
        <li className='mb-10 ml-4 '>
            <div className='absolute w-3 h-3 bg-[#45A29E] rounded-full mt-1.5 -left-1.5 border-white'/>
            <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
                <span className='inline-block px-2 py-1 font-semibold text-[#C5C6C7] bg-[#0B0C10] rounded-md'>{year}</span>
                <span className='text-lg font-semibold text-[#66FCF1]'>{title}</span>
            </p>
            <p className='my-2 text-base font-normal text-[#C5C6C7]'>{description}</p>
        </li>
    </ol>
  );
};

export default WorkItem
