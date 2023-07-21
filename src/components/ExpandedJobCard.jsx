import React, { useState } from 'react';
import ContactPopup from './ContactPopup';

const ExpandedJobCard = ({ job_title, company, location, est_salary, details, requirements, benefits, contact }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleApplyClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="flex flex-col justify-between px-6 my-6 rounded-[10px] box-border w-[600px] overflow-hidden text-left text-13xl text-black font-poppins border-[3px] border-solid border-black">
      <div className="flex flex-col w-full items-start justify-start mt-6 mb-4 text-[40px]">
        <b className="inline-block w-full text-center">{job_title}</b>
      </div>

      <div className="flex flex-col text-[24px]">
        <div className="font-medium mt-3">Company: {company}</div>
        <div className="font-medium">Location: {location}</div>
        <div className="font-medium">${est_salary} per hour</div>
      </div>

      <div className="w-full mb-3 flex flex-row justify-center">
        <div
          className="rounded-[50px] bg-thistle w-[250px] h-18 flex flex-row p-2.5 box-border items-center justify-center text-[18px] text-white cursor-pointer"
          onClick={handleApplyClick}
        >
          <b>Apply Now</b>
        </div>
      </div>

      <div className="flex flex-col mt-4">
        <div>
          <p className="text-lg font-bold">Job Details:</p>
          <ul>
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-lg font-bold">Requirements:</p>
          <ul>
            {requirements.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-lg font-bold">Benefits:</p>
          <ul>
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex-grow"></div>

      

      {showPopup && <ContactPopup contact={contact} onClose={handleClosePopup} />}
    </div>
  );
};

export default ExpandedJobCard;
