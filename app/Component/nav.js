"use client"
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'; // Import icons from Font Awesome
import { useState,useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

 useGSAP(() => {
    gsap.from("#nav", {
      y: -40,
      opacity: 0,
      duration: 1,
      delay: 1,
    });
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header id="nav">
      <nav  className="flex flex-wrap h-12 border-b-2 shadow-md items-center justify-between  w-full py-4 md:py-0 bg-transparent backdrop-blur-md px-4 text-lg text-gray-700 bg-white">
        <div>
          <span className='text-emerald-500'>Web </span>Developer
        </div>

        {/* Menu Items */}
        <div className='flex justify-end'>
          <div className="flex items-center space-x-4 md:space-x-2">
         <Link href={"https://www.instagram.com/logan_ashim_08?utm_source=qr&igsh=dXExcHpzcjFwdzU="}>   <FaInstagram className="text-gray-500 text-2xl" /></Link>
         <Link href={"https://www.linkedin.com/in/ashim-lugun-5924a9289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}>   <FaLinkedin className="text-gray-500 text-2xl" /></Link>
         <Link href={"https://github.com/AshimLugun08/"}>    <FaGithub className="text-emerald-500 text-2xl" /></Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
