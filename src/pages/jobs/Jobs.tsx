import React, { FC } from 'react';
import JobCard from './JobCard';
import Header from './Header';

const Jobs: FC = () => {
  return (
    <div>
      <Header />
      <JobCard />
    </div>
  );
};
export default Jobs;
