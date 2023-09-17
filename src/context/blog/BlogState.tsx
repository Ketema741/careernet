import React, { useReducer } from 'react';
import axios from 'axios';
import blogContext, { BlogPost } from './blogContext';
import blogReducer, {State} from './blogReducer';

import {
  GET_POSTS,
  GET_POST,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_POSTS,
  CLEAR_POSTS,
  CLEAR_FILTER,
  POST_ERROR,
  UPDATE_POST,
  GET_RELATEDPOSTS,
} from '../Types';

type Props = {
  children: React.ReactNode
}
const Blogstate = (props: Props) => {
  const api_url = "https://careernet-api.vercel.app"

  const initialState: State = {
    blogs: null,
    relatedBlogs: null,
    blog: null,
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(blogReducer, initialState);

  // Get blogs
  const getBlogs = async () => {
    try {
      const res = await axios.get(`${api_url}/api/blogs`);
      dispatch({
        type: GET_POSTS,
        payload: res.data,
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: POST_ERROR,
          payload: err.message,

        });
      }
      console.log({ 'erro': err })
    }
  };

  // update blogs
  const updatePost = async () => {
    try {
      const res = await axios.put(`${api_url}/api/blogs`);
      dispatch({
        type: UPDATE_POST,
        payload: res.data,
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: POST_ERROR,
          payload: err.message,

        });
      }
      console.log({ 'erro': err })
    }
  };

  // Get blog
  const getBlog = async (_id: string) => {
    try {
      const res = await axios.get(`${api_url}/api/blogs/${_id}`);
      getRelatedBlogs(res.data.category)
      dispatch({
        type: GET_POST,
        payload: res.data,
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: POST_ERROR,
          payload: err.message,
        });
      }
    }
  };

  // clear posts
  const clearPosts = () => {
    dispatch({ type: CLEAR_POSTS });
  };

  // set current
  const setCurrent = (blog: BlogPost) => {
    dispatch({ type: SET_CURRENT, payload: blog });
  };

  // set current
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // filter blogs
  const filterBlogs = (text: string) => {
    dispatch({ type: FILTER_POSTS, payload: text });
  };

  // clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };
  // filter blogs
  const getRelatedBlogs = (text:string) => {
    dispatch({ type: GET_RELATEDPOSTS, payload: text });
  };

  return (
    <blogContext.Provider
      value={{
        blogs: state.blogs,
        blog: state.blog,
        relatedBlogs: state.relatedBlogs,
        current: state.current,
        filtered: state.filtered,
        getBlogs,
        getBlog,
        updatePost,
        clearPosts,
        setCurrent,
        clearCurrent,
        filterBlogs,
        clearFilter,
        getRelatedBlogs,
      }}
    >
      {props.children}
    </blogContext.Provider>
  );
};

export default Blogstate;
