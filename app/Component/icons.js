import React from 'react';
import { SlHome } from 'react-icons/sl';
import { RiContactsBook3Line } from 'react-icons/ri';

export const Icons = () => {
  return (
    <div className="fixed bottom-2 left-1/2 transform -translate-x-1/2 bg-white  border-4 border-gray-300 rounded-3xl p-3 md:p-4 shadow-lg flex justify-between items-center space-x-6 z-10">
      <a href="#main" className=":md:text-2xl cursor-pointer hover:text-gray-900">
        <SlHome />
      </a>
      <div className="text-gray-300">|</div>
      <a href="#contact" className="md:text-2xl cursor-pointer hover:text-gray-900">
        <RiContactsBook3Line />
      </a>
    </div>
  );
};
