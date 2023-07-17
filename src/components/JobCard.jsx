import React from 'react'

const JobCard = () => 
 (
  <div className="flex flex-col justify-between px-6 rounded-[10px] box-border w-[400px] h-[400px] overflow-hidden text-left text-13xl text-black font-poppins border-[3px] border-solid border-black">
    
    <div className="flex flex-col w-full items-start justify-start mt-6 -mb-8 text-[40px]">
      <b className="inline-block w-[628px]">Job Title</b>
    </div>
    
    <div className="flex flex-col justify-between h-[150px] w-full">
      <div className="font-medium inline-block w-[628px]">
        Company
      </div>
      <div className="font-medium inline-block w-[628px]">
        Location
      </div>
      <div className="font-medium">
        Estimated Salary
      </div>
    </div>
    
    <div className="w-full mb-3 flex flex-row justify-center">
      <div className="rounded-[50px] bg-thistle w-[170px] h-15 flex flex-row p-2.5 box-border items-center justify-center text-[18px] text-white">
        <b>Apply Now</b>
      </div>
    </div>
</div>
  )


export default JobCard