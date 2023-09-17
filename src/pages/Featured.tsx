import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../context/blog/blogContext';
import { formatDistanceToNow } from 'date-fns';

interface Props {
  blogs: BlogPost[];
}

const Featured: FC<Props> = ({ blogs }) => {

  const featuredBlogs = blogs.slice(0, 6);

  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
            <div className="max-w-md mx-auto text-center lg:text-left">
              <header>
                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                  Guidance
                </h2>
                <p className="mt-4 text-gray-500">
                  Seek advice like it's the compass, but remember, you're the captain of your ship.
                  Take in the wisdom, adjust your sails, and sail confidently toward your own horizon.
                </p>

                <div className="mt-4 dark:text-gray-300">
                  🔥
                  <span>Career success starts here. Explore our services today.</span>
                </div>
              </header>

              <Link
                to="/blogs"
                className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
              >
                See all
              </Link>

            </div>
          </div>

          <div className="lg:col-span-2 lg:py-8">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredBlogs.map((blog) => (
                <li key={blog._id}>
                  <Link to={`/blog/${blog._id}`} className="relative block group">
                    <img
                      src={blog.blogImages[0]}
                      alt={blog.title}
                      className="object-cover w-full rounded aspect-square"
                    />
                    <div className="absolute rounded aspect-square inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-medium text-xl lg:text-2xl group-hover:underline group-hover:underline-offset-4">
                        {blog.category}
                      </h3>

                      <p className="mt-1 text-sm text-gray-200">By {blog.user.firstName}</p>
                    </div>

                    <div className="mt-3">
                      <h3
                        className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                      >
                        {blog.title}
                      </h3>

                      <div className="pt-2 pr-0 pb-0 pl-0">
                        <div className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">
                          <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">{blog.user.firstName}</p>
                          <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">·{formatDistanceToNow(new Date(blog.date))} ago</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
