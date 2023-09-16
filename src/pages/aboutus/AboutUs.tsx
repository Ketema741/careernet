import React, { FC } from 'react';
import Ketema from '../../assets/me.png';
import Dawit from '../../assets/dev.png';
import AboutUsCard from './AboutUsCard';

const AboutUs: FC = () => {

  return (
    <div>
      <AboutUsCard />
      <div className="py-20">
        <div className="xl:container mx-auto px-6 md:px-12">
          <div className="mb-16 md:w-2/3 lg:w-1/2">
            <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
              CareerNet Africa Developers
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Our web app was built by a team of passionate developers with a mission to empower African students by providing them with career guidance and collaboration opportunities. We believe that with the right resources and support, every student can achieve their full potential and make a positive impact in their community.
            </p>
          </div>
          <div className="grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
              <img
                className="mx-auto h-[26rem] w-full grayscale object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src={Ketema}
                alt="Ketema"
                loading="lazy"
                width="640"
                height="805"
              />
              <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                <div>
                  <h4 className="text-xl font-semibold dark:text-gray-700 text-white">Ketema Girma</h4>
                  <span className="block text-sm text-gray-500">CEO-Founder</span>
                </div>
                <p className="mt-8 text-gray-300 dark:text-gray-600">
                  Computer Science Graduate | MERN Stack Developer | Algorithmic Problem Solver | Seeking Opportunities to Drive Technological Innovation
                </p>
              </div>
            </div>
            <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
              <img
                className="mx-auto h-[26rem] w-full grayscale object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src={Dawit}
                alt="dawit"
                loading="lazy"
                width="640"
                height="805"
              />
              <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                <div>
                  <h4 className="text-xl font-semibold dark:text-gray-700 text-white">Dawit Andargache</h4>
                  <span className="block text-sm text-gray-500">CEO-Founder</span>
                </div>
                <p className="mt-8 text-gray-300 dark:text-gray-600">
                  I am a computer science student with a passion for using technology to make a positive impact in society
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
