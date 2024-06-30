"use client";
import React, { useEffect } from 'react';
import ProjectCard from './card';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    _id: '667f78ebde8a0198339e508e',
    title: 'Farmer App',
    imageUrl: 'Screenshot (121).png',
    technologiesUsed: ['Next.js', 'MongoDB', 'Tailwind CSS', 'Cloudinary', 'NextAuth.js'],
    link: 'https://github.com/AshimLugun08/farmland2'
  },
  {
    _id: '667f78ebde8a0198339e508f',
    title: 'Blockchain',
    imageUrl: 'Screenshot (120).png',
    technologiesUsed: ['JavaScript', 'Express.js', 'SHA-256'],
    link: 'https://github.com/AshimLugun08/first-blockchain'
  },
  {
    _id: '667f78ebde8a0198339e5090',
    title: 'Portfolio',
    imageUrl: 'Screenshot (119).png',
    technologiesUsed: ['React', 'Next.js', 'Tailwind CSS'],
    link: 'https://github.com/AshimLugun08/portfolio'
  }
];

const Home = () => {
  useGSAP(() => {
    gsap.from(".scrolleffects", {
      y: 40,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".scrolleffects",
        scroller: "body",
        start: "top 80%",
      },
    });

    gsap.from(".scrolleffects1", {
      y: 40,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".scrolleffects1",
        scroller: "body",
        start: "top 80%",
      },
    });

    gsap.from(".scrolleffects2", {
      y: 40,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".scrolleffects2",
        scroller: "body",
        start: "top 80%",
      },
    });

    gsap.from(".scrolleffects3", {
      y: 40,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".scrolleffects2",
        scroller: "body",
        start: "top 80%",
      },
    });

  }, []);

  return (
    <div className="p-6">
      <div className="font-bold scrolleffects text-gray-700 font-sans mb-8 justify-center flex text-4xl">
        My Projects
      </div>

      <div className="flex flex-wrap md:mx-4 justify-center">
        <div className="w-full">
          <h1 className="text-2xl justify-center scrolleffects1 flex font-bold whitespace-nowrap">
            Check out my latest work
          </h1>
          <p className="text-center scrolleffects2 mt-4">
            Here are some of my top projects, showcasing a range of skills and expertise in web development.
          </p>
        </div>
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Home;
