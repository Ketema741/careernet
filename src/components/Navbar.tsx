import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { RxAvatar } from 'react-icons/rx';
import Notification from './Notification';
import Profile from './Profile';

import { useAuthContext } from "../context/Auth/authContext";
import { useStateContext } from '../context/ContextProvider';

const GuestLinks = (
  <div className="flex justify-center items-center gap-x-5">
    <Link className="pt-2 cursor-pointer hover:bg-light-gray rounded-lg" to="/register">
      Register
    </Link>

    <Link className=" pt-2 pr-5 cursor-pointer hover:bg-light-gray rounded-lg" to="/login">
      Login
    </Link>
  </div>
);

interface NavButtonProps {
  title: string;
  customFunc: () => void;
  icon: React.ReactNode;
  color: string;
  dotColor?: string;
}

const NavButton: React.FC<NavButtonProps> = ({ title, customFunc, icon, color, dotColor }) => (
  <button
    type="button"
    onClick={() => customFunc()}
    style={{ color }}
    className="relative text-xl rounded-full p-3 hover:bg-light-gray"
  >
    {dotColor && (
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
    )}
    {icon}
  </button>
);

const Navbar: React.FC = () => {
  const { isUserAuthenticated, logout } = useAuthContext();

  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    handleClick,
    isClicked,
    setScreenSize,
    screenSize,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
   
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }

    // eslint-disable-next-line
  }, [screenSize]);

  const onLogout = () => {
    logout();
  };

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="flex justify-between items-center bg-white dark:bg-gray-800 dark:border-gray-700 shadow-md relative h-20">
      <NavButton
        title="Menu"
        customFunc={handleActiveMenu}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />

      <div className="flex">
        {isUserAuthenticated ? (
          <Fragment>
            <div className="hidden sm:block">
              <NavButton
                title="Notification"
                dotColor="#FF5C8E"
                customFunc={() => handleClick("notification")}
                color={currentColor}
                icon={<RiNotification3Line />}
              />
            </div>
            <div
              className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
              onClick={() => handleClick("userProfile")}
            >
              <RxAvatar className="rounded-full w-7 h-7" />
              <MdKeyboardArrowDown className="text-gray-400 text-14" />
            </div>

            {isClicked.notification && <Notification />}
            {isClicked.userProfile && <Profile onLogout={onLogout} />}
          </Fragment>
        ) : (
          GuestLinks
        )}
      </div>
    </div>
  );
};

export default Navbar;
