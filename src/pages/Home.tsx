import React, { useEffect } from 'react';
import Header from './Header';
import Featured from './Featured';
import { useBlogContext } from '../context/blog/blogContext';

const Home = () => {
  const { getBlogs, blogs } = useBlogContext();

  useEffect(() => {
    getBlogs()
    
    // eslint-disable-next-line
  }, [])
  return (
    <div>
      <Header />
      {blogs ?
        <Featured blogs={blogs} />
        :
        <h1>loading...</h1>
      }
    </div>
  );
};

export default Home;