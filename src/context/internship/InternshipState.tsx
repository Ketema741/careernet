// InternshipState.tsx
import React, { useReducer } from 'react';
import axios from 'axios';
import InternshipContext, { Internship } from './internshipContext';
import internshipReducer, { State } from './internshipReducer';

import {
  GET_INTERNSHIP,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_INTERNSHIPS,
  CLEAR_INTERNSHIPS,
  CLEAR_FILTER,
  INTERNSHIP_ERROR,
  UPDATE_INTERNSHIP,
  GET_INTERNSHIPS,
} from '../Types';

type Props = {
  children: React.ReactNode
}
const InternshipState  = (props:Props) => {
  const initialState: State = {
    internships: [],
    internship: null,
    current: null,
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(internshipReducer, initialState);


  // Get internships
  const getInternships = async () => {
    try {
      const res = await axios.get('/api/internships');
      dispatch({
        type: GET_INTERNSHIPS,
        payload: res.data,
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: INTERNSHIP_ERROR,

          payload: err.message,

        });
        console.log({ 'erro': err })
      }
    }
  };
  // Get internship
  const getInternship = async () => {
    try {
      const res = await axios.get('/api/internship');
    console.log("list of internships")

      dispatch({
        type: GET_INTERNSHIP,
        payload: res.data,
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: INTERNSHIP_ERROR,
          payload: err.message,

        });
        console.log({ 'erro': err })
      }
    }
  };

  // update internship
  const updateInternship = async () => {
    try {
      const res = await axios.put('api/internship');
      dispatch({
        type: UPDATE_INTERNSHIP,
        payload: res.data,
      });
    } catch (err) {
      if (err instanceof Error){dispatch({
        type: INTERNSHIP_ERROR,
        payload: err.message,

      });}
      console.log({ 'erro': err })
    }
  };

  // clear internshipS
  const clearInternships = () => {
    dispatch({ type: CLEAR_INTERNSHIPS });
  };

  // set current
  const setCurrent = (internship:Internship) => {
    dispatch({ type: SET_CURRENT, payload: internship });
  };

  // set current
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // filter internships
  const filterInternships = (text:string) => {
    dispatch({ type: FILTER_INTERNSHIPS, payload: text });
  };

  // clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

    return (
      <InternshipContext.Provider
        value={{
          internships: state.internships,
          internship: state.internship,
          current: state.current,
          filtered: state.filtered,
          getInternships,
          getInternship,
          clearInternships,
          clearCurrent,
          updateInternship,
          setCurrent,
          filterInternships,
          clearFilter,
        }}
      >
        {props.children}
      </InternshipContext.Provider>
    );
  
};

export default InternshipState;
