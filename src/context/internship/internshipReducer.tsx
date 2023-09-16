// InternshipReducer.tsx
import { Reducer } from 'react';
import {
  GET_INTERNSHIPS,
  GET_INTERNSHIP,
  UPDATE_INTERNSHIP,
  CLEAR_CURRENT,
  FILTER_INTERNSHIPS,
  CLEAR_INTERNSHIPS,
  CLEAR_FILTER,
  INTERNSHIP_ERROR,
  SET_CURRENT,
} from '../Types';

import { Internship } from './internshipContext';

export interface State {
  internships: Internship[] | null;
  internship: Internship | null;
  current: Internship | null;
  filtered: Internship[] | null;
  error: string | null;
}

interface Action {
  type:
  | typeof GET_INTERNSHIPS
  | typeof GET_INTERNSHIP
  | typeof UPDATE_INTERNSHIP
  | typeof CLEAR_INTERNSHIPS
  | typeof CLEAR_CURRENT
  | typeof SET_CURRENT
  | typeof FILTER_INTERNSHIPS
  | typeof CLEAR_FILTER
  | typeof INTERNSHIP_ERROR;
  payload?: any; // Adjust payload type according to your data
}

const internshipReducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case GET_INTERNSHIPS:
      return {
        ...state,
        internships: state.internships
          ? state.internships.filter(({ title, category }) => {
              const testString = `${title}${category}`.toLowerCase();
              return testString.includes(action.payload.toLowerCase());
            })
          : null,
      };

    case GET_INTERNSHIP:
      return {
        ...state,
        internship: action.payload,
      };

    case CLEAR_INTERNSHIPS:
      return {
        ...state,
        internships: null,
        filtered: null,
        error: null,
        current: null,
      };
    case SET_CURRENT:
      return {
        ...state,
        internship: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case FILTER_INTERNSHIPS:
      return {
        ...state,
        filtered: state.internships
          ? state.internships.filter(({ title, category }) => {
              const testString = `${title}${category}`.toLowerCase();
              return testString.includes(action.payload.toLowerCase());
            })
          : null,
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case INTERNSHIP_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      throw new Error(`Unsupported type of: ${action.type}`);
  }
};

export default internshipReducer;

