import React, { Fragment } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { RxAvatar } from 'react-icons/rx';

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

  const handleActiveMenu = () => { };
  return (
    <div className="flex justify-between items-center bg-white dark:bg-gray-800 dark:border-gray-700 shadow-md relative h-20">
      <NavButton
        title="Menu"
        customFunc={handleActiveMenu}
        color={"#03C9D7"}
        icon={<AiOutlineMenu />}
      />

      <div className="flex">
        <Fragment>
          <div className="hidden sm:block">
            <NavButton
              title="Chat"
              customFunc={() => { }}
              color={"#03C9D7"}
              icon={<BsChatLeft />}
            />
          </div>

          <div className="hidden sm:block">
            <NavButton
              title="Notification"
              customFunc={() => { }}
              color={"#03C9D7"}
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
