import React, { Fragment, useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { RxAvatar } from 'react-icons/rx';
import { useStateContext } from '../context/ContextProvider';

interface NavButtonProps {
  title: string;
  customFunc: () => void;
  icon: React.ReactNode;
  color: string;
}

const NavButton: React.FC<NavButtonProps> = ({ title, customFunc, icon, color }) => (
  <button
    type="button"
    onClick={() => customFunc()}
    style={{ color }}
    className="relative text-xl rounded-full p-3 hover:bg-light-gray"
  >
    {icon}
  </button>
);

const Navbar: React.FC = () => {

  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    handleClick,
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
        <Fragment>
          <div className="hidden sm:block">
            <NavButton
              title="Chat"
              customFunc={() => handleClick("chat")}
              color={currentColor}
              icon={<BsChatLeft />}
            />
          </div>

          <div className="hidden sm:block">
            <NavButton
              title="Notification"
              customFunc={() => handleClick("notification")}
              color={currentColor}
              icon={<RiNotification3Line />}
            />
          </div>
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => { }}
          >
            <RxAvatar className="rounded-full w-7 h-7" />
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </Fragment>

      </div>
    </div>
  );
};

export default Navbar;
