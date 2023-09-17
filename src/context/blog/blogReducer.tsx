import { Reducer } from 'react';
import {
  GET_POSTS,
  GET_POST,
  UPDATE_POST,
  CLEAR_CURRENT,
  FILTER_POSTS,
  CLEAR_POSTS,
  CLEAR_FILTER,
  POST_ERROR,
  SET_CURRENT,
  GET_JOBS,
  GET_RELATEDPOSTS
} from '../Types';
import { BlogPost } from './blogContext';

export interface State {
  blogs: BlogPost[] | null,
  blog: BlogPost | null,
  relatedBlogs: BlogPost[] | null,
  current: BlogPost | null,
  filtered: BlogPost[] | null,
}
interface Action {
  type:
  | typeof GET_POSTS
  | typeof GET_POST
  | typeof UPDATE_POST
  | typeof CLEAR_CURRENT
  | typeof FILTER_POSTS
  | typeof CLEAR_POSTS
  | typeof CLEAR_FILTER
  | typeof POST_ERROR
  | typeof SET_CURRENT
  | typeof GET_JOBS
  | typeof GET_RELATEDPOSTS;
  payload?: any;

}

const blogReducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        blogs: action.payload,

      };
    case GET_RELATEDPOSTS:
      return {
        ...state,
        relatedBlogs: state.blogs ?
          state.blogs.filter(({ title, category }) => {
            const testString = `${title}${category}`.toLowerCase();
            return testString.includes(action.payload.toLowerCase());
          }) : null,
      };
    case GET_JOBS:
      return {
        ...state,
        jobs: state.blogs ?
          state.blogs.filter(({ title, category }) => {
            const testString = `${title}${category}`.toLowerCase();
            return testString.includes(action.payload.toLowerCase());
          }) : null,
      };

    case GET_POST:
      return {
        ...state,
        blog: action.payload,
      };

    case CLEAR_POSTS:
      return {
        ...state,
        posts: null,
        filtered: null,
        error: null,
        current: null,
      };
    case SET_CURRENT:
      return {
        ...state,
        blog: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case FILTER_POSTS:
      return {
        ...state,
        filtered: state.blogs ?
          state.blogs.filter(({ title, category }) => {
            const testString = `${title}${category}`.toLowerCase();
            return testString.includes(action.payload.toLowerCase());
          }) : null,
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case POST_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      throw new Error(`Unsupported type of: ${action.type}`);
  }
};

export default blogReducer;