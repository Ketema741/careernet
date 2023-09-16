import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GiCartwheel } from 'react-icons/gi';
import { MdOutlineCancel } from 'react-icons/md';

import { links } from '../data/dummy';

interface SidebarProps { }

const Sidebar: React.FC<SidebarProps> = () => {

  const currentColor = "#03C9D7"

  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(!open);
  };

  // const handleItemClick = () => {
  //   setOpen(false);
  // };

  // const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
  // const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      <>
        <div className="flex justify-between items-center">
          <Link to="/" onClick={() => { }} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
            <GiCartwheel style={{ color: currentColor }} /> <span>AutoHub</span>
          </Link>
          <button
            type="button"
            onClick={() => { }}
            style={{ color: currentColor }}
            className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="mt-10">
          {links.map((item) => (
            <div key={item.title}>
              <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                {item.title}
              </p>
              {item.links.map((link) => (
                <NavLink
                  to={`/${link.to}`}
                  key={link.name}
                  onClick={() => { }}
                // style={({ isActive }) => ({
                //   backgroundColor: isActive ? currentColor : '',
                // })}
                // className={({ isActive }) => (isActive ? activeLink : normalLink)}
                >
                  {link.icon}
                  <span className="capitalize ">{link.name}</span>
                </NavLink>
              ))}
            </div>
          ))}
          <div className="relative">
            <button onClick={handleClick} className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
              <span>Dropdown</span>
              <svg fill="currentColor" viewBox="0 0 20 20" className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform ${open ? 'rotate-180' : 'rotate-0'}`}><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>

          </div>
        </div>
      </>
    </div>
  );
};

export default Sidebar;
