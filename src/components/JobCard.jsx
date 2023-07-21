import React from 'react';

const JobCard = ({ job_title, company, location, est_salary, onClick }) => (
  <div
    className="flex flex-col justify-between px-6 my-6 rounded-[10px] box-border 
                w-[400px] h-[420px] overflow-hidden text-left text-13xl text-black bg-white 
                font-poppins border-[5px] border-solid border-thistle cursor-pointer transition-shadow duration-200 hover:shadow-2xl relative"
    onClick={onClick}
  >
    {/* Job Card Content */}
    <div className="flex flex-col w-full items-start justify-start mt-6 -mb-8 text-[40px]">
      <b className="inline-block w-[350px]">{job_title}</b>
    </div>

    <div className="flex flex-col text-lg h-[180px] justify-between w-full">
      <div className="font-medium mt-3 inline-block w-full">
        {company}
      </div>
      <div className="font-medium inline-block w-full">
        Location: {location}
      </div>
      <div className="font-medium">
        ${est_salary} per hour
      </div>
    </div>

    <div className='w-full text-center mb-3'>
      <p>Click to view details</p>
    </div>

    
    
  </div>
);

export default JobCard;
