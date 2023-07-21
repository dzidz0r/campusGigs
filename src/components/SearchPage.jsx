import React, { useState } from 'react';
import JobCard from './JobCard';
import Navbar from './Navbar';
import ExpandedJobCard from './ExpandedJobCard';
import { jobData } from '../constants';
import styles from '../style';

const SearchPage = () => {
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleCardClick = (jobId) => {
    setSelectedJobId(jobId);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setSearchPerformed(true);
  }

  const filteredJobData = jobData.filter((item) => {
    const normalizedSearchTerm = searchTerm.toLowerCase();
    const normalizedTitle = item.job_title.toLowerCase();
    const normalizedCompany = item.company.toLowerCase();

    return (
      normalizedTitle.includes(normalizedSearchTerm) ||
      normalizedCompany.includes(normalizedSearchTerm)
    );
  });

  return (
    <div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
            <Navbar />
        </div>
      </div>
      <form className="flex justify-center mt-8"
            onSubmit={handleSearchSubmit}>
        <div className="relative border border-primary rounded-lg bg-white shadow-md">
          <input
            type="text"
            placeholder="Enter a job role or a company name..."
            className="py-4 px-4 rounded-xl focus:outline-none focus:border-thistle w-[500px]"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button
            type="button"
            onClick={handleSearchSubmit}
            className="absolute right-0 top-0 h-full px-4 text-white bg-thistle rounded-r-lg">
            Search
          </button>
        </div>
      </form>

      <div className="flex flex-row mt-10">
        {searchPerformed ? (
          filteredJobData.length > 0 ? (
            <div className="px-10 mt-3 bg-gray-100 overflow-y-auto max-h-[700px]">
              {filteredJobData.map((item, index) => (
                <JobCard
                  key={item.id}
                  {...item}
                  index={index}
                  onClick={() => handleCardClick(item.id)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center mt-5 font-poppins font-medium">
              No matching jobs found for "{searchTerm}". Try searching for a different job title or company.
            </div>
          )
        ) : null}

        <div className="pl-5 ml-40 overflow-y-auto max-h-[700px]">
          {selectedJobId &&
            jobData.map((item) =>
              item.id === selectedJobId ? (
                <ExpandedJobCard key={item.id} {...item} />
              ) : null
            )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
