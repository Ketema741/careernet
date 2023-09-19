import React, { Fragment } from 'react';

import { useStateContext } from '../../context/ContextProvider';
import { useAuthContext } from "../../context/Auth/authContext";

import About from './About'
import Experience from './Experience'
import ProfileCard from './ProfileCard'

const Profile: React.FC = () => {
  const { user } = useAuthContext();
  const {
    currentColor,
  } = useStateContext();

  return (
    <div>
      {user != null ? (
        <Fragment>
          <div>
            <div className="mt-24 container mx-auto my-5 p-5">
              <div className="md:flex gap-2 no-wrap md:-mx-2 ">
                <div className="w-full md:w-3/12 md:mx-2">
                  <ProfileCard currentColor={currentColor} name={user.firstName} />
                  <div className="my-8"></div>
                </div>
                <div className="w-full md:w-9/12 mx-2 h-64">
                  <About currentColor={currentColor} user={user} />
                  <div className="my-6"></div>
                  <Experience currentColor={currentColor} />
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      ) : (
        <div> No user</div>
      )}
    </div>
  );
};

export default Profile;
