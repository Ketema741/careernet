import React, { useState, FC } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

type Props = {
  label: string,
  content: React.ReactNode,
}
const Dropdown: FC<Props> = ({ label, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="py-4">
      <button
        className="flex justify-between items-center w-full"
        onClick={handleClick}
      >
        <span className="py-2 pl-4 pr-3 text-left text-base font-semibold text-gray-900">{label}</span>
        {isOpen ?
          <div className="mr-3 rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
            <BsChevronUp />
          </div>
          :
          <div className="mr-3 rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
            <BsChevronDown />
          </div>}
      </button>
      {isOpen && <div className="mt-2">{content}</div>}
    </div>
  );
}

const FAQCard: FC = () => {
  return (
    <div className="mt-20 flex justify-center">
      <div className="w-full md:w-3/4  bg-gray-100 rounded shadow-lg overflow-hidden">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-5xl mt-5 tracking-tight">
            FAQ
          </h2>
          <p className="text-neutral-500 text-xl mt-3">
            Frequenty asked questions
          </p>
        </div>
        <section className="shadow row border-gray-200">
          <div className="border-b">
            <Dropdown
              label="Viverra orci sagittis eu volutpat odio facilisis mauris?"
              content={
                <ul className="pl-4">
                  <li className="text-neutral-600 mt-3 group-open:animate-fadeIn">Viverra orci sagittis eu volutpat odio facilisis mauris</li>

                  <li className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    Viverra orci sagittis eu volutpat odio facilisis mauris
                  </li>
                </ul>
              }
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default FAQCard
