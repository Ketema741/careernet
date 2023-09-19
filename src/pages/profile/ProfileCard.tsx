import React from 'react';
import avatar from '../../assets/teamMembers/me.png';

interface ProfileCardProps {
  name: string;
  currentColor: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, currentColor }) => {
  return (
    <div className={"bg-white p-3 border-t-4 b"} style={{ borderColor: currentColor }}>
      <div style={{ height: "25rem" }} className="image overflow-hidden">
        <img
          className="h-full w-full mx-auto"
          src={avatar}
          alt="user profile"
        />
      </div>

      <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
        {name}
      </h1>
      <h3 className="text-gray-600 font-lg text-semibold leading-6">
        CareerNet Africa
      </h3>
      
      <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
        <li className="flex items-center py-3">
          <span>Status</span>
          <span className="ml-auto">
            <span className={`bg-${currentColor} py-1 px-2 rounded text-white text-sm`} style={{ backgroundColor: currentColor }}>
              Active
            </span>
          </span>
        </li>
        <li className="flex items-center py-3">
          <span>Member since</span>
          <span className="ml-auto">April 18, 2023</span>
        </li>
      </ul>
    </div>
  );
};

export default ProfileCard;
