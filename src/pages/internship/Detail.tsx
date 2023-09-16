import React, { FC } from "react";
import DetailCard from './DetailCard'

const Detail: FC = () => {

  return (
    <div className="mt-4  container mx-auto">
      <div className="overflow-hidden">
        <div className="overflow-hidden bg-main-bg relative pt-16 pb-4 lg:pt-24 dark:bg-gray-900">
          <div className="mx-8 relative xl:container m-auto px-6 md:px-12 lg:px-6">
            <h1 className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-3xl text-center sm:text-4xl md:text-5xl lg:w-auto lg:text-left xl:text-6xl dark:text-white">
              <span className="lg:block hidden"></span>

              <span className="relative text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
                Service Provider Detail Description!
              </span>
            </h1>
            <DetailCard />
          </div>
        </div>
      </div>
      <div className="px-2 max-w-lg mx-auto my-8"></div>
    </div>
  );
};
export default Detail;
