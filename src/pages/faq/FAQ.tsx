import React, { FC } from 'react';
import FAQCard from './FAQCard';
import FAQAnswers from '../../assets/undraw_questions_re_1fy7.svg'

const FAQ: FC = () => {
  return (
    <div className="mt-16 ">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src={FAQAnswers}
              alt="faq answers"
              loading="lazy"
              width=""
              height=""
            />
          </div>
          <div className="md:7/12 lg:w-6/12">

            <div className="mt-6 ">
              <FAQCard />
            </div>
            <p className="mt-4 p-8 text-gray-600">
              Thank you for choosing CareerNet Africa
            </p>
          </div>
        </div>
      </div>
    </div>

  );
};
export default FAQ;
