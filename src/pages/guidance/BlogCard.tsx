import React from "react";
import { useStateContext } from "../../context/ContextProvider";
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

import { BlogPost } from '../../context/blog/blogContext';
import placeHolder from '../../assets/svg/undraw_feeling_proud_qne1.svg';

type Props = {
  blog: BlogPost,
}

const BlogCard = ({ blog }: Props) => {
  const navigate = useNavigate()

  const handleView = () => {
    navigate(`/blog/${blog._id}`)
  }

  const { currentColor } = useStateContext();
  const blogImage = blog.blogImages[0] || placeHolder;

  return (
    <div className=" flex flex-col items-start rounded-xl shadow-xl bg-white overflow-hidden col-span-12 space-y-3 sm:col-span-6 xl:col-span-4 ">
      <div className="relative w-full">

        <img src={blogImage} alt="blog avator" className="object-cover w-full mb-4 overflow-hidden max-h-56 transition duration-500 hover:scale-105" />

        <div className="p-2 absolute bottom-0 left-1/2 transform -translate-x-1/2 mx-auto w-1/2  text-white bg-opacity-83 rounded-sm">
          <p className="p-1 text-center mx-auto" style={{ backgroundColor: "#101d2c" }}>{blog.category}</p>
        </div>
      </div>
      <div className="pl-3 pb-1">
        <p className="text-lg font-bold sm:text-xl md:text-2xl">{blog.title}</p>
        <p className="mt-2 text-sm text-black">{blog.excerpt}</p>
        <div className="pt-2 pr-0 pb-0 pl-0">
          <div className="pt-2 pr-0 pb-0 pl-0">
            <div className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">
              <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">{blog.user.firstName}</p>
              <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">· {format(new Date(blog.date), 'MMMM dd, yyyy')} ·</p>
            </div>
            <p className="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1">1hr 20min.
            </p>
          </div>

          <div className="flex items-center flex-wrap p-3">
            <button onClick={() => handleView()} type='button' className=" text-white hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg" style={{ backgroundColor: currentColor }}>
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard