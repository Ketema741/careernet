import React, { FC } from "react";
import { Link } from 'react-router-dom';
import Intern1 from '../../assets/svg/undraw_team_spirit_re_yl1v.svg';
import Intern2 from '../../assets/svg/undraw_job_hunt_re_q203.svg';
import Intern3 from '../../assets/svg/undraw_studying_re_deca.svg';

import { FaArrowRight } from 'react-icons/fa';

const InternshipCard: FC = () => {
  return (

    <div className="relative py-24">
      <div className="container relative m-auto px-6 text-gray-500 md:px-12">
        <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
          <div className="group space-y-6 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none hover:scale-105">
            <img
              src="https://res.cloudinary.com/dmegiw31y/image/upload/v1681974585/careerNet/ai_image_tvkbpv.png"
              alt="illustration"
              loading="lazy"
              width="900"
              height="600"
            />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Web development</h3>
            <p>
              We are seeking a talented web developer to join our team. As a
              web developer, you will be responsible for designing,
              developing, and maintaining our company website. Your
              responsibilities will include working with the marketing team
              to design and develop website pages that are visually
              appealing, responsive, and user-friendly.
            </p>
            <Link
              to="/internship/abacadaba"
              className="relative mx-auto flex h-10 w-10 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-100 dark:before:border-gray-600 before:transition before:duration-300 group-hover:before:scale-125"
            >
              <FaArrowRight className="text-primary" />
            </Link>
          </div>
          <div className="group space-y-6 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none hover:scale-105">
            <img
              src="https://res.cloudinary.com/dmegiw31y/image/upload/v1681974584/careerNet/moblie_dev_hc4sui.png"
              alt="illustration"
              loading="lazy"
              width="900"
              height="600"
            />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Moblie App development
            </h3>
            <p>
              We are looking for a skilled Mobile App Developer to join our
              team. As a Mobile App Developer, you will be responsible for
              designing, developing, and maintaining our mobile
              applications. You will work closely with the product and
              design teams to create user-friendly and visually appealing
              mobile apps that meet business objectives.
            </p>

            <Link
              to="/internship/abacadaba"
              className="relative mx-auto flex h-10 w-10 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-100 dark:before:border-gray-600 before:transition before:duration-300 group-hover:before:scale-125"
            >
              <FaArrowRight className="text-primary" />
            </Link>
          </div>
          <div className="group space-y-6 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none hover:scale-105">
            <img
              src="https://res.cloudinary.com/dmegiw31y/image/upload/v1681974584/careerNet/ui_image_je0err.jpg"
              alt="illustration"
              loading="lazy"
              width="900"
              height="600"
            />

            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white"> UI/UX Desinger</h3>
            <p>
              We are seeking a talented UI/UX designer to join our team.
              As a UI/UX designer, you will be responsible for designing
              and improving user interfaces and experiences across our
              products. Your responsibilities will include conducting user
              research, creating wireframes and prototypes, and
              collaborating with developers to ensure the final product is
              visually appealing and user-friendly.
            </p>
            <Link
              to="/internship/abacadaba"
              className="relative mx-auto flex h-10 w-10 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-100 dark:before:border-gray-600 before:transition before:duration-300 group-hover:before:scale-125"
            >
              <FaArrowRight className="text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </div>

  );
};

export default InternshipCard;
