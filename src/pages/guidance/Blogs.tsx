import React, { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

import { FiSearch } from 'react-icons/fi';
import { GiGraduateCap } from 'react-icons/gi'
import { FaConnectdevelop } from 'react-icons/fa'
import { SiBookstack } from 'react-icons/si'

import { useBlogContext } from '../../context/blog/blogContext';

import BlogCard from './BlogCard';
import Header from './Header';

const Blogs: React.FC = () => {

  const { blogs, filtered, filterBlogs, getBlogs } = useBlogContext();
  const text = useRef<HTMLInputElement>(null);

  const [searchParams, setSearchParams] = useSearchParams()

  const typeFilter = searchParams.get("query") || ""

  function handleFilterChange(key: string, value: string | null) {
    const scrollY = window.scrollY;
    setSearchParams(prevParams => {
      if (value === null) {
        prevParams.delete(key)
        setTimeout(() => {
          window.scrollTo({
            top: scrollY,
            behavior: 'smooth', 
          });
        }, 1);
      } else {
        prevParams.set(key, value)
      }
      return prevParams
    })
  }



  useEffect(() => {
    filterBlogs(typeFilter);
    // eslint-disable-next-line
  }, [typeFilter]);

  useEffect(() => {
    getBlogs();

    // eslint-disable-next-line
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFilterChange("query", e.target.value);

  };


  return (
    <div>
      <Header />
      <div className="mt-8 text-gray-900  pr-0 pb-14 pl-0">
        <div className="mb-8 w-[90%]">
          <div className="pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto sm:flex sm:items-center sm:justify-around">
            <div>
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                Find Your Next Career
              </h2>
              <p className="text-gray-600 dark:text-gray-300 lg:mx-auto lg:w-8/12">
                Start your journey towards a fulfilling career today by browsing our listings
              </p>
            </div>
            <div className="mt-4 mr-0 mb-0 ml-0 sm:mt-0">
              <p className="sr-only">Search</p>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => handleFilterChange("query", "")}
                  className="flex items-center pt-0 pr-24 pb-0 pl-2 absolute inset-y-0 left-0 pointer-events-none"
                >
                  <FiSearch className="w-5 h-5 text-gray-400" />
                </button>
                <input
                  placeholder="Search... "
                  type="text"
                  ref={text}
                  onChange={onChange}
                  className="block  pt-3 pr-0 pb-3 pl-24 lg:mx-auto lg:w-full py-3 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                />
              </div>
            </div>
          </div>
          <div className="hidden ml-20 mr-20 mt-8 md:flex md:flex-wrap justify-start items-start gap-4">
            <button
              type="button"
              onClick={() => handleFilterChange("query", "internship")}
              className={`h-10 px-6  py-1 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 ${typeFilter === "internship" ? "border-cyan-400" : ""} hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30`}
            >
              <div
                className="flex justify-center space-x-4"
              >
                <SiBookstack className='w-6 h-6' style={{ color: '#03C9D7' }} />
                <span className="truncate font-sm dark:text-white">
                  Internship
                </span>
              </div>
            </button>
            <button
              type="button"
              onClick={() => handleFilterChange("query", "career advice")}
              className={`h-10 px-6 py-1 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 ${typeFilter === "career advice" ? "border-green-400" : ""} hover:border-green-400 hover:shadow-lg hover:shadow-lime-600/20 dark:hover:border-green-300/30`}
            >
              <div className="flex justify-center space-x-4">
                <FaConnectdevelop className='w-6 h-6' style={{ color: '#03C9D7' }} />
                <span className="truncate font-sm dark:text-white">Career Advice</span>
              </div>
            </button>
            <button
              type="button"
              onClick={() => handleFilterChange("query", "self-improvement")}
              className={`h-10 px-6 py-1 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 ${typeFilter === "self-improvement" ? "border-blue-400" : ""}  hover:border-blue-400 hover:shadow-lg hover:shadow-blue-600/20 dark:hover:border-blue-300/30`}>
              <div className="flex flex-no-wrap justify-center space-x-2">
                <GiGraduateCap className='w-6 h-6' style={{ color: '#03C9D7' }} />
                <span className="truncate font-sm dark:text-white">Self-improvement</span>
              </div>
            </button>
            <button
              type="button"
              onClick={() => handleFilterChange("query", "study")}
              className={`h-10 px-6 py-1 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 ${typeFilter === "study" ? "border-cyan-400" : ""} hover:border-cyan-400 hover:shadow-lg hover:shadow-blue-600/20 dark:hover:border-blue-300/30`}>
              <div className="flex justify-center space-x-4">
                <GiGraduateCap className='w-6 h-6' style={{ color: '#03C9D7' }} />
                <span className="truncate font-sm dark:text-white">Study</span>
              </div>
            </button>
            <button
              type="button"
              onClick={() => handleFilterChange("query", "experience")}
              className={`h-10 px-6 py-1 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 ${typeFilter === "experience" ? "border-blue-400" : ""} hover:border-blue-400 hover:shadow-lg hover:shadow-blue-600/20 dark:hover:border-blue-300/30`}
            >
              <div className="flex justify-center space-x-4">
                <GiGraduateCap className='w-6 h-6' style={{ color: '#03C9D7' }} />
                <span className="truncate font-sm dark:text-white">Experience</span>
              </div>
            </button>
            {typeFilter ? (
              <button
                className={`h-10 px-4 py-1 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30`}
                type="button"
                onClick={() => handleFilterChange("query", null)}
              >
                <div
                  className="flex justify-center space-x-4"
                >
                  <SiBookstack className='w-6 h-6' style={{ color: '#CCCCCC' }} />
                  <span className="truncate font-sm dark:text-white">
                    Clear Filter
                  </span>
                </div>
              </button>
            ) : null}

          </div>
        </div>
        <div className="w-full pt-2 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
          <div className="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16">
            {blogs ? (
              <>
                {filtered !== null ? (
                  filtered.map(blog => <BlogCard key={blog._id} blog={blog} />)
                ) : (
                  blogs.map(blog => <BlogCard key={blog._id} blog={blog} />)
                )}
              </>
            ) : (
              <div> Loading... </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
