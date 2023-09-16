import React from 'react';
import {
  MdOutlineWork,
  MdOutlineSupportAgent,
  MdOutlineManageAccounts,
  MdOutlineMail,
} from 'react-icons/md';
import { FcAbout } from 'react-icons/fc';
import {
  SiFuturelearn,
} from 'react-icons/si';
import {  AiOutlineCloudUpload } from 'react-icons/ai';

import {
  GiLifeSupport,
} from 'react-icons/gi';

export const Categories: { name: string }[] = [
  { name: 'Intenships' },
  { name: 'Resume' },
  { name: 'Study' },
  { name: 'Career Advice' },
];

export const themeColors: { name: string; color: string }[] = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const userProfileData: {
  icon: JSX.Element;
  title: string;
  url: string;
  desc: string;
  iconColor: string;
  iconBg: string;
}[] = [
  {
    icon: <MdOutlineManageAccounts />,
    title: 'My Profile',
    url: 'profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <MdOutlineMail />,
    title: 'My Inbox',
    url: 'profile',
    desc: 'Messages',
    iconColor: 'rgb(87, 125, 134)',
    iconBg: 'rgb(185, 237, 221)',
  },
  {
    icon: <AiOutlineCloudUpload />,
    title: 'Blog Post',
    url: 'blog-posting',
    desc: 'Make A Post',
    iconColor: '#A4BC92',
    iconBg: '#DDFFBB',
  },
];

export const links: {
  title: string;
  links: {
    name: string;
    to: string;
    icon: JSX.Element;
  }[];
}[] = [
  {
    title: 'Pages',
    links: [
      {
        name: 'Jobs',
        to: 'jobs',
        icon: <MdOutlineWork />,
      },
      {
        name: 'Internships',
        to: 'internship',
        icon: <SiFuturelearn />,
      },
      {
        name: 'Guidance',
        to: 'blogs',
        icon: <GiLifeSupport />,
      },
    ],
  },
  {
    title: 'Career Net ',
    links: [
      {
        name: 'About Us',
        to: 'aboutus',
        icon: <FcAbout />,
      },
      {
        name: 'FAQ',
        to: 'faq',
        icon: <MdOutlineSupportAgent />,
      },
    ],
  },
];
