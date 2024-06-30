"use client"
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  useGSAP(() => {
    gsap.from("#about", {
      y: 40,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#about",
        scroller: "body",
        start: "top 80%",
      },
    });

    // Floating animation
    gsap.to("#floating-img", {
      y: 20,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 2,
    });
  }, []);

  return (
    <div id="about" className="min-h-80">
      <div className='font-bold text-gray-700 font-sans mb-2 justify-center flex text-4xl'>About</div>
      <div className='flex flex-col md:flex-row items-center justify-center'>
        <div className="relative z-9 w-full md:w-1/2 h-96 flex hidden md:block justify-center mb-4 md:mb-0">
          <div id="floating-img" className="relative w-3/4 h-3/4 md:w-full md:h-full">
            <Image
              src="/header-img.svg"
              alt="Profile Image"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className='w-full md:w-1/2 text-center mx-0 md:mx-16 px-4 py-2 border rounded-xl border-gray-300 shadow-md my-6 md:my-0 text-gray-800'>
          "Hello, I'm Ashim Lugun, a passionate full-stack web developer on the verge of graduating in Computer Science and Engineering. With a strong foundation in Next.js, React, MongoDB, and Node.js, I thrive on creating robust and innovative web solutions. My journey through engineering has fueled my fascination with the evolving landscape of Web3, where I'm eager to explore and contribute. Let's build the future of the web together!"
        </div>
      </div>
    </div>
  );
}
